const express = require("express");
const router = express.Router();

const { authMiddleware } = require('../middleware/authMiddleware')

const {
  getUserAddress,
  payment
} = require('../controllers/user.controller')

router.get("/order", authMiddleware, getUserAddress);
router.post("/payment", authMiddleware, payment);

module.exports = router;