const Product = require("../models/product.model")

exports.getProductsController = (req, res) => {
  const gender = req.query.gender
  const category = req.query.category
  const subCategory = req.query.subCategory
  const skip = parseInt(req.query.skip)
  const limit = parseInt(req.query.limit)
  
  if (category !== "undefined" && subCategory !== "undefined")
    Product.find({ gender: gender })
    .find({category: category})
    .find({subCategory: subCategory})
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err || !products) return res.status(202).json({ error: "Products not found" });
      if(products.length === 2)
        res.status(200).json({ products: products, loadMore: true });
      else if(products.length < 2) res.status(200).json({ products, loadMore: false });
    });
  else if (category !== "undefined" && subCategory === "undefined")
  Product.find({ gender: gender })
    .find({category: category})
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err || !products) return res.status(202).json({ error: "Products not found" });
      if(products.length === 2)
        res.status(200).json({ products: products, loadMore: true });
      else if(products.length < 2) res.status(200).json({ products, loadMore: false });
    });
  else if (category === "undefined" && subCategory === "undefined")
    Product.find({ gender: gender })
    .sort([["_id", "descending"]])
    .skip(skip)
    .limit(limit)
    .exec((err, products) => {
      if (err || !products) return res.status(202).json({ error: "Products not found" });
      if(products.length === 2)
        res.status(200).json({ products: products, loadMore: true });
      else if(products.length < 2) res.status(200).json({ products, loadMore: false });
    });
  else res.status(409).json({ error: "Something went wrong - please try again" });
}

exports.getProductDetailsController = (req, res) => {
  const productId = req.query.productId
  
  if (productId)
    Product.findOneAndUpdate(
      { _id: productId },
      { $inc: { "views": 1 } },
      (err, product) => {
      if (err || !product) {
        return res.status(404).json({
          error: "Product with that ID does not exist",
        });
      }
      else return res.status(200).json({
        product: product
      })  
    })
  else return res.status(409).json({ error: "Something went wrong - please try again",})
}

exports.searchByTermController = (req, res) => {
  const term = req.query.term

  Product.find({ productName: { $regex: term, $options: "i" } })
      .skip(0)
      .limit(4)
      .exec((err, products) => {
        if (err || !products) return res.status(202).json({ error: "Products not found" });
        res.status(200).json({ products });
      });
}