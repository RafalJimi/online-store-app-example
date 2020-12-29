const express = require("express");
const router = express.Router();

const { authMiddleware } = require('../middleware/authMiddleware')

const {
  getUserAddress,
  payment,
  getUserInformations,
  updateUserInformations,
  getTransactionHistory,
  getTransactionDetails
} = require('../controllers/user.controller')

router.get("/order", authMiddleware, getUserAddress);
router.post("/payment", authMiddleware, payment);
router.get("/informations", authMiddleware, getUserInformations);
router.post("/updateInformations", authMiddleware, updateUserInformations);
router.get("/transactionHistory", authMiddleware, getTransactionHistory);
router.get("/transactionDetails", authMiddleware, getTransactionDetails);

module.exports = router;