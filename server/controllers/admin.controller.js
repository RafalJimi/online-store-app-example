const User = require("../models/auth.model");
const Product = require('../models/product.model')
const { uploadImage } = require('../utils/uploadImage')
const { sliderIMG, thumbnailIMG } = require('../utils/resizeImage')
const fs = require('fs');
const { json } = require("body-parser");

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
  const { directoryName } = req.query
  console.log('directoryName', directoryName)
  
  const path = `server/images/${directoryName}`
  
  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
  
  uploadImage(req, res, (err) => {
    if (err) {
      console.log("uploadErr", err);
      return res.json({ uploadImage: false, error: err });
    }
    sliderIMG(req.file.path, directoryName, req.file.originalname);
    thumbnailIMG(req.file.path, directoryName, req.file.originalname);
    return res.json({
      uploadImage: true,
      path: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

exports.deleteImageController = (req, res) => {
  const { directoryName, fileName } = req.query
  const img = `server/images/${directoryName}/${fileName}`
  const slider = `server/images/${directoryName}/slider-${fileName}`
  const thumbnail = `server/images/${directoryName}/thumbnail-${fileName}`
  
  console.log(img, slider, thumbnail)
  
  fs.unlinkSync(img);
  fs.unlinkSync(slider);
  fs.unlinkSync(thumbnail);
  
  fs.readdir(`server/images/${directoryName}`, function(err, files) {
    if (err) {
       return res.json({deleteImage: false, error: "Something went wrong, please try again."})
    } else {
       if (!files.length) {
           fs.rmdir(`server/images/${directoryName}`, { recursive: true }, (err) => {
             if (err) return res.json({ deleteImage: false, error: "Something went wrong, please try again." })
             else {
               return res.json({ deleteImage: true })
             }
          });
       } else if(!fs.existsSync(img) && !fs.existsSync(slider) && !fs.existsSync(thumbnail)) {
        return res.json({deleteImage: true})
      } else if (fs.existsSync(img) && fs.existsSync(slider) && fs.existsSync(thumbnail)){
        return res.json({deleteImage: false, error: "Something went wrong, please try again."})
      }
    }
  });
};

exports.uploadProductController = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);

  product.save((err) => {
    if (err) return res.json({ uploadImage: false, error: err });
    return res.status(200).json({ uploadImage: true, message: "Product uploaded successfully." });
  });
};
