const User = require("../models/auth.model");
const Payment = require("../models/payment.model")
const Product = require('../models/product.model')
const _ = require("lodash");
const async = require("async");

const nodemailer = require("nodemailer");
const { errorHandler } = require('../helpers/dbErrorHandling')

exports.getUserAddress = (req, res) => {
  const { userData } = req;
  
  return res.json({
          getUserAddress: true,
          data: userData
        });
}

exports.payment = (req, res) => {
  const { paymentData, products } = req.body
  const { userData } = req
  
  console.log(userData)
  console.log(paymentData)
  console.log(products)
  
  let productsList = []
  const userID = userData._id
  
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
      if (err) {
        return res.json({ paymentSuccess: false, error: err })
      } else {
        
        const payment = new Payment({
          user: userData,
          shippingAddress: paymentData.shippingData,
          products: products,
          price: paymentData.totalPrice
        })
        
        payment.save((err, payment) => {
          if (err) {
            return res.json({
              paymentSuccess: false,
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
                if (err) return res.json({
                  paymentSuccess: false,
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
                  return res.json({
                    paymentSuccess: false,
                    error: "Email not send, something went wrong. Please try again.",
                  });
                } else {
                  return res.json({
                    paymentSuccess: true,
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
