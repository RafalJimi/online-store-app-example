const User = require("../models/auth.model");
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];
  
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
        return res.json({
          IsAuth: false,
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
                isAuth: false,
                error: 'Something went wrong, please try again.'
              });
            }
            
            req.userData = {
              _id: user._id,
              email: user.email,
              fullName: `${user.firstName} ${user.lastName}`,
              city: user.city,
              address: user.address,
              postCode: user.postCode,
            };
            next();
        });
      }
    });
};