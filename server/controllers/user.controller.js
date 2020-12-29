const User = require("../models/auth.model");
const Payment = require("../models/payment.model")
const Product = require('../models/product.model')
const _ = require("lodash");
const async = require("async");

const nodemailer = require("nodemailer");
const { errorHandler } = require('../helpers/dbErrorHandling')

exports.getUserAddress = (req, res) => {
  const user = req.profile
  
  const userData = {
    email: user.email,
    fullName: `${user.firstName} ${user.lastName}`,
    city: user.city,
    address: user.address,
    postCode: user.postCode,
  }
  
  return res.status(200).json({
          userData: userData
        });
}

exports.payment = (req, res) => {
  const { paymentData, products } = req.body
  const userID = req.profile._id

  let productsList = []
  
  products.forEach(product => productsList.push({
    quantity: product.quantity,
    size: product.size,
    product: {
      _id: product.product._id,
      name: product.product.productName,
      images: product.product.images,
      price: product.product.price
    }
  }))
  
  const transaction = {
    totalPrice: paymentData.totalPrice,
    products: productsList
  }
  
  User.findOneAndUpdate(
    { _id: userID },
    {
      city: paymentData.shippingData.city,
      address: paymentData.shippingData.address,
      postcode: paymentData.shippingData.postCode,
      $push: { history: transaction },
    },
    (err, user) => {
      if (err || !user) {
        return res.status(500).json({ error: "Internal server error - please try again" })
      } else {
        
        const userData = {
          _id: user._id,
          email: user.email,
          fullName: `${user.firstName} ${user.lastName}`,
          city: user.lastName,
          address: user.address,
          postCode: user.postCode,
        }
        
        const payment = new Payment({
          user: userData,
          shippingAddress: paymentData.shippingData,
          products: products,
          price: paymentData.totalPrice
        })
        
        payment.save((err, payment) => {
          if (err || !payment) {
            return res.status(409).json({
              error: errorHandler(err),
            });
          }
          else {
            
            async.eachSeries(
              productsList,
              (product, callback) => {
                Product.update(
                  { _id: product.product._id },
                  {
                    $inc: {
                      sold: product.quantity
                    }
                  },
                  { new: false },
                  callback
                );
              },
              (err) => {
                if (err) return res.status(500).json({
                  error: errorHandler(err),
                })
              }
            )
            
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASSWORD,
              },
            });
            
            const emailData = {
              from: process.env.EMAIL_FROM,
              to: user.email,
              subject: `Thank you for shopping`,
              html: `
                        <h1>Thank you for shipping in our store!</h1>
                        <br />
                        <br />
                        <p>In case of any questions - we are available by e-mail and phone.</p>
                        <br />
                        <br />
                        <p>${process.env.CLIENT_URL}</p>
                    `,
            };
            
            transporter.sendMail(emailData, function (err, data) {
                if (err) {
                  return res.status(500).json({
                    error: "Internal server error - please try again",
                  });
                } else {
                  return res.status(200).json({
                    message: `Payment went well`,
                  });
                }
            });
            
          }
        })
      }
    }
  );  
};

exports.getUserInformations = (req, res) => {
  const user = req.profile
  
  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    city: user.city,
    address: user.address,
    postCode: user.postCode,
  }
  
  return res.status(200).json({
          userData: userData
        });
}

exports.updateUserInformations = (req, res) => {
  const user = req.profile
  const newData = req.body
  
  User.findOneAndUpdate(
          { _id: user._id },
          { firstName: newData.firstName, lastName: newData.lastName, city: newData.city, address: newData.address, postCode: newData.postCode},
          (err, user) => {
              if (err || !user) {
                  return res.status(409).json({ error: "Update user informations error - please try again" })
              } else {
                  return res.status(200).json({
                      message: "User informations updated successfully"
                  });
              }
          }
      );  
}

exports.getTransactionHistory = (req, res) => {
  const userId = req.profile._id
  
  Payment.find({
            "user._id": userId
          }).exec((err, transactions) => {
            if (err | !transactions) {
              return res.status(401).json({
                error: 'Transactions not found'
              });
            } else
              return res.status(200).json({
                transactions: transactions
              });
        });
}

exports.getTransactionDetails = (req, res) => {
  const paymentId = req.query.id
  
  Payment.find({
            _id: paymentId
          }).exec((err, transaction) => {
            if (err || !transaction) {
              return res.status(401).json({
                error: 'Transaction not found'
              });
            } else
              return res.status(200).json({
                details: transaction
              });
        });
}