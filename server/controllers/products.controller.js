const Product = require("../models/product.model")

exports.getProductsController = (req, res) => {
  console.log(req.query)
  
  const gender = req.query.gender
  const category = req.query.category
  const subCategory = req.query.subCategory
  const skip = parseInt(req.query.skip)
  const limit = parseInt(req.query.limit)
  
  if(!category && !subCategory )
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
  else if(!subCategory )
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
  else Product.find({ gender: gender })
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
}