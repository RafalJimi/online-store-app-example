const express = require("express");
const router = express.Router();

const { getProductsController, getProductDetailsController } = require("../controllers/products.controller")

router.get("/getProducts", getProductsController)
router.get("/getProductDetails", getProductDetailsController)

module.exports = router;