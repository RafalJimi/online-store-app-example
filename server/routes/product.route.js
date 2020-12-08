const express = require("express");
const router = express.Router();

const { getProductsController, getProductDetailsController } = require("../controllers/products.controller")

router.get("/getProducts", getProductsController)
router.put("/getProductDetails", getProductDetailsController)

module.exports = router;