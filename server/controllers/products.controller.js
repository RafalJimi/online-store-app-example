const Product = require("../models/product.model")

exports.getProductsController = (req, res) => {
  const gender = req.query.gender
  const category = req.query.category
  const subCategory = req.query.subCategory
  const skip = parseInt(req.query.skip)
  const limit = parseInt(req.query.limit)
  
  console.log(gender, category, subCategory, skip, limit)
  
  if (category !== "undefined" && subCategory !== "undefined")
    Product.find({ gender: gender })
    .find({category: category})
    .find({subCategory: subCategory})
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.json({ getProducts: false, error: err });
      if(products.length === 2)
        res.json({ getProducts: true, products: products, loadMore: true });
      else if(products.length < 2) res.json({ getProducts: true, products, loadMore: false });
    });
  else if (category !== "undefined" && subCategory === "undefined")
  Product.find({ gender: gender })
    .find({category: category})
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.json({ getProducts: false, error: err });
      if(products.length === 2)
        res.json({ getProducts: true, products: products, loadMore: true });
      else if(products.length < 2) res.json({ getProducts: true, products, loadMore: false });
    });
  else if (category === "undefined" && subCategory === "undefined")
    Product.find({ gender: gender })
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err) return res.json({ getProducts: false, error: err });
      if(products.length === 2)
        res.json({ getProducts: true, products: products, loadMore: true });
      else if(products.length < 2) res.json({ getProducts: true, products, loadMore: false });
    });
  else res.json({ getProducts: false, error: "Something went wrong, please try again." });
}

exports.getProductDetailsController = (req, res) => {
  console.log(req.query)
  
  const productId = req.query.productId
  
  if (productId)
    Product.findOneAndUpdate(
      { _id: productId },
      { $inc: { "views": 1 } },
      (err, product) => {
      if (err || !product) {
        return res.json({
          getProductDetails: false,
          error: "Product with that ID does not exist.",
        });
      }
      else return res.json({
        getProductDetails: true,
        product: product
      })  
    })
  else return res.json({getProductDetails: false,
          error: "Something went wrong, please try again.",})
}