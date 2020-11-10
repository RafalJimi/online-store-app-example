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
    console.log(message)
    return res.json({
      registerResult: false,
      error: errorMessage,
    });
  } else {
    User.findOne({ email }).exec((err, user) => {
      if (user) {
        return res.json({
          registerResult: false,
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
        res.json({ registerResult: false, error: "Email not send!" });
      } else {
        res.json({ registerResult: true, message: `Email has been sent to ${email}` });
      }
    });
  }
};

exports.activationController = (req, res) => {
  const { token } = req.body;
  
  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log("Activation error");
        return res.json({
          activationResult: false,
          error: "Expired link. Signup again",
        });
      } else {
        const {
        gender,
        firstName,
        lastName,
        email,
        password } = jwt.decode(token);

        console.log(email);
        const user = new User({
          gender,
          firstName,
          lastName,
          email,
          password,
        });

        user.save((err, user) => {
          if (err) {
            console.log("Save error", errorHandler(err));
            return res.json({
              activationResult: false,
              error: errorHandler(err),
            });
          } else {
            return res.json({
              activationResult: true,
              user: user,
              message: "Your account has been activated successfully. You can now login."
            });
          }
        });
      }
    });
  } else {
    return res.json({
      activationResult: false,
      error: "Error happening, please try again.",
    });
  }
};

exports.loginController = (req, res) => {
  const { email, password } = req.body;
  
  console.log(req.body)
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.json({
      errors: firstError,
      loginResult: false
    });
  } else {
    // check if user exist
    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.json({
          error: "User with that email does not exist. Please signup.",
          loginResult: false
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.json({
          error: "Incorrect password.",
          loginResult: false
        });
      }
      // generate a token and send to client
      
      const { _id, name, email, role } = user
      
      const userID = _id.toString();
      
      const token = user.generateToken(userID)
  
      return res.json({
        loginResult: true,
          token,
          user: {
          _id,
          name,
          email,
          role: role === 1 ? "admin" : "user",
        },
      });
    });
  }
};