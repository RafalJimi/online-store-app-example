const express = require("express");
const router = express.Router();

const { getProductsController, getProductDetailsController, searchByTermController } = require("../controllers/products.controller")

router.get("/getProducts", getProductsController)
router.put("/getProductDetails", getProductDetailsController)
router.get("/searchByTerm", searchByTermController)

module.exports = router;