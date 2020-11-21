const express = require("express");
const router = express.Router();

const { getProductsController } = require("../controllers/products.controller")

router.get("/getProducts", getProductsController)

module.exports = router;