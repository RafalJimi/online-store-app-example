const User = require("../models/auth.model");
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
        return res.status(203).json({
          error: "Session expired - please log in again"
        });
      } else {
        const { id } = jwt.decode(token);
        
        if (id)
          User.findOne({
            _id: id
          }).exec((err, user) => {
            if (err || !user) {
              return res.status(203).json({
                error: 'User not found'
              });
            }
            
            req.profile = user;
            next();
        });
      }
    });
};