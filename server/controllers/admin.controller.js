const User = require("../models/auth.model");
const Product = require('../models/product.model')
const { uploadImage } = require('../utils/uploadImage')
const { sliderIMG, thumbnailIMG } = require('../utils/resizeImage')
const fs = require('fs')

exports.getUserDataController = (req, res) => {
  const { email } = req.query

    // check if user exist
    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.json({
          error: "User with that email does not exist. Please try again.",
          getUserData: false
        });
      }
      // authenticate
      // generate a token and send to client
  
      return res.json({
        getUserData: true,
          user,
      });
  });
};

exports.updateUserDataController = (req, res) => {
  const { user } = req.body
  
  User.findOneAndUpdate(
          { email: user.email },
          { firstName: user.firstName, lastName: user.lastName, city: user.city, address: user.address, postCode: user.postCode },
          (err, user) => {
              if (err) {
                  return res.json({ updateUserData: false, error: "Update user error. Please try again." })
              } else {
                  return res.json({
                      updateUserData: true,
                      message: "User data updated successfully."
                  });
              }
          }
      );  
};

exports.deleteUserController = (req, res) => {
  const { email } = req.query
  console.log('asdasd', req.query)
  
  User.findOneAndDelete(
    { email: email },
      (err, doc) => {
        if (err) {
          return res.json({ deleteUser: false, error: "Something went wrong. Please try again." })
        } else {
          return res.json({
            deleteUser: true,
            message: "User has been deleted successfully."
          });
        }
       }
  ); 
};

exports.uploadImageController = (req, res) => {
  console.log(req.file)
  uploadImage(req, res, (err) => {
    if (err) {
      console.log("uploadErr", err);
      return res.json({ uploadImage: false, error: err });
    }
    sliderIMG(req.file.path, req.file.originalname);
    thumbnailIMG(req.file.path, req.file.originalname);
    return res.json({
      uploadImage: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

exports.deleteImageController = (req, res) => {
  console.log(req.body)
  
  const path = req.body.link
  
  /* fs.unlink(path, (err) => {
  if (err) {
    return res.json({deleteImage: false, error: "Something went wront, please try again."})
  }
  return res.json({deleteImage: true})
}) */
};

exports.uploadProductController = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);

  product.save((err) => {
    console.log("error", err);
    if (err) return res.json({ uploadImage: false, error: err });
    return res.status(200).json({ uploadImage: true, message: "Product uploaded successfully." });
  });
};
