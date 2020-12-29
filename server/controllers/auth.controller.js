const User = require("../models/auth.model");
const _ = require("lodash");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Custom error handler to get useful error from database errors
const { errorHandler } = require("../helpers/dbErrorHandling");

exports.registerController = (req, res) => {
  const { gender, firstName, lastName, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    const errorMessage = firstError.toString();
    const message = errorMessage.slice
    return res.status(409).json({
      error: errorMessage,
    });
  } else {
    User.findOne({ email }).exec((err, user) => {
      if (user) {
        return res.status(202).json({
          error: "Email is taken",
        });
      }
    });
    
    const token = jwt.sign(
      {
        gender,
        firstName,
        lastName,
        email,
        password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "10m",
      }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Account activation link",
      html: `
                <h1>Please use the following to activate your account</h1>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <hr />
                <p>This email may containe sensitive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `,
    };

    transporter.sendMail(emailData, function (err, data) {
      if (err) {
        res.status(500).json({ error: "Internal server error - please try again" });
      } else {
        res.status(200).json({ message: `Email has been sent to ${email}` });
      }
    });
  }
};

exports.activationController = (req, res) => {
  const { token } = req.body;
  
  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        return res.status(202).json({
          error: "Token expired - sign up again",
        });
      } else {
        const {
        gender,
        firstName,
        lastName,
        email,
        password } = jwt.decode(token);

        const user = new User({
          gender,
          firstName,
          lastName,
          email,
          password,
        });

        user.save((err, user) => {
          if (err) {
            return res.status(409).json({
              error: errorHandler(err),
            });
          } else {
            return res.status(200).json({
              message: "Your account has been activated successfully - you can sign in now"
            });
          }
        });
      }
    });
  } else {
    return res.status(404).json({
      error: "Something went wrong - please try again",
    });
  }
};

exports.loginController = (req, res) => {
  const { email, password } = req.body;
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(202).json({
      error: firstError,
    });
  } else {
    // check if user exist
    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(202).json({
          error: "User with that email does not exist",
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.status(202).json({
          error: "Incorrect password",
        });
      }
      
      // generate a token and send to client
      
      const { _id, role } = user
 
      const token = user.generateToken(_id.toString(), role)

      res.status(200).json({
          loginResult: true,
          token,
      });
    });
  }
};

exports.forgotPasswordController = (req, res) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(403).json({
      error: `${firstError}.`,
    });
  } else {
    User.findOne(
      {
        email,
      },
      (err, user) => {
        if (err || !user) {
          return res.status(202).json({
            error: "User with that email does not exist",
          });
        }

        const token = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_RESET_PASSWORD,
          {
            expiresIn: "10m",
          }
        );

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const emailData = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: `Password Reset link`,
          html: `
                    <h1>Please use the following link to reset your password</h1>
                    <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
                    <hr />
                    <p>This email may contain sensitive information</p>
                    <p>${process.env.CLIENT_URL}</p>
                `,
        };

        return user.updateOne(
          {
            resetPasswordLink: token,
          },
          (err, success) => {
            if (err) {
              return res.status(500).json({
                error:
                  "Internal server error - please try again",
              });
            } else {
              transporter.sendMail(emailData, function (err, data) {
                if (err) {
                  return res.status(500).json({
                    error: "Internal server error - please try again",
                  });
                } else {
                  return res.status(200).json({
                    message: `Email has been sent to ${email} - follow the instruction to activate your account`,
                  });
                }
              });
            }
          }
        );
      }
    );
  }
};

exports.resetPasswordController = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(409).json({
      errors: firstError,
    });
  } else {
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function (
        err,
        decoded
      ) {
        if (err) {
          return res.status(202).json({
            error: "Token expired - please try again",
          });
        }

        User.findOne(
          {
            resetPasswordLink,
          },
          (err, user) => {
            if (err || !user) {
              return res.status(404).json({
                error: "Something went wrong - please try again",
              });
            }

            const updatedFields = {
              password: newPassword,
              resetPasswordLink: "",
            };

            user = _.extend(user, updatedFields);

            user.save((err, result) => {
              if (err || !result) {
                return res.status(409).json({
                  error: "Internal server error - please try again",
                });
              } else
              res.status(200).json({
                message: `Now you can login with your new password`,
              });
            });
          }
        );
      });
    }
  }
};

exports.checkAuth = (req, res) => {
  const role = req.profile.role ? "admin" : "user"
  
  res.status(200).json({
    role: role,
  });
};