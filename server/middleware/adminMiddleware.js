const User = require("../models/auth.model");
const jwt = require("jsonwebtoken");

exports.adminMiddleware = (req, res, next) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];
  const email = req.query.email
  
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        return res.json({
          adminIsAuth: false,
          error: "Session expired, please log in again."
        });
      } else {
        const { userID } = jwt.decode(token);
        
        if (userID)
          User.findOne({
            _id: userID
          }).exec((err, user) => {
            if (err || !user) {
              return res.json({
                isAdmin: false,
                error: 'User not found.'
              });
            }

            if (!user.role) {
              return res.json({
                isAdmin: false,
                error: 'Admin resource. Access denied.'
              });
            }

            req.profile = user;
            req.email = email
            next();
        });
      }
    });
};