const User = require("../models/auth.model");
const Product = require('../models/product.model')
const Payment = require('../models/payment.model')
const { uploadImage } = require('../utils/uploadImage')
const { thumbnailIMG } = require('../utils/resizeImage')
const fs = require('fs');

exports.getUserDataController = (req, res) => {
  const { email } = req.query

    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(202).json({
          error: "User with that email does not exist",
        });
      } else
      return res.status(200).json({
          user,
      });
  });
};

exports.updateUserDataController = (req, res) => {
  const { user } = req.body
  const role = user.role === "admin" ? 1 : 0;
  const gender = user.gender === "man" ? "man" : "woman";
  
  User.findOneAndUpdate(
          { email: user.email },
          { firstName: user.firstName, lastName: user.lastName, city: user.city, address: user.address, postCode: user.postCode, role: role, gender: gender},
          (err, user) => {
              if (err || !user) {
                  return res.status(409).json({ error: "Update user error - please try again" })
              } else {
                  return res.status(200).json({
                      message: "User data has been updated successfully"
                  });
              }
          }
      );  
};

exports.deleteUserController = (req, res) => {
  const { email } = req.query
  
  User.findOneAndDelete(
    { email: email },
      (err, user) => {
        if (err || !user) {
          return res.status(409).json({ deleteUser: false, error: "Something went wrong - please try again" })
        } else {
          return res.status(200).json({
            message: "User has been deleted successfully"
          });
        }
       }
  ); 
};

exports.uploadImageController = (req, res) => {
  const { directoryName } = req.query
  
  const path = `server/images/${directoryName}`
  
  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
  
  uploadImage(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error - please try again" });
    }
    thumbnailIMG(req.file.path, directoryName, req.file.originalname);
    return res.status(200).json({
      path: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

exports.deleteImageController = (req, res) => {
  const { directoryName, fileName } = req.query
  const img = `server/images/${directoryName}/${fileName}`
  const thumbnail = `server/images/${directoryName}/thumbnail-${fileName}`

  fs.unlinkSync(img);
  fs.unlinkSync(thumbnail);
  
  fs.readdir(`server/images/${directoryName}`, function(err, files) {
    if (err) {
       return res.status(500).json({ error: "Internal server error - please try again"})
    } else {
       if (!files.length) {
           fs.rmdir(`server/images/${directoryName}`, { recursive: true }, (err) => {
             if (err) return res.status(500).json({ error: "Internal server error - please try again" })
             else {
               return res.status(200).json({ message: "Image has been deleted successfully" })
             }
          });
       } else if(!fs.existsSync(img) && !fs.existsSync(thumbnail)) {
        return res.status(200).json({deleteImage: true})
      } else if (fs.existsSync(img) && fs.existsSync(thumbnail)){
        return res.status(500).json({ error: "Internal server error - please try again"})
      }
    }
  });
};

exports.uploadProductController = (req, res) => {
  let newProduct = req.body
  
  newProduct.category === "boots" ? newProduct = {...newProduct} : newProduct = { ...newProduct, subCategory: null}
  
  const product = new Product(newProduct);

  product.save((err) => {
    if (err) return res.status(409).json({ error: "Internal server error - please try again" });
    return res.status(200).json({ message: "Product has been uploaded successfully." });
  });
};

exports.getTransactionHistory = (req, res) => {

  Payment.find({})
    .sort([["_id", "descending"]])
    .exec((err, transactions) => {
      if (err || !transactions) return res.status(500).json({ error: err });
      else res.status(200).json({ transactions});
    });
};

exports.getTransactionDetails = (req, res) => {
  const transactionId = req.query.id
  
  Payment.findOne({ _id: transactionId }, (err, transactionDetails) => {
    if (err) {
      return res.status(404).json({
        error: "Transaction with that ID does not exist",
      });
    } else
      return res.status(200).json({
        details: transactionDetails,
      });
  })
};