const express = require("express");
const router = express.Router();

const { adminMiddleware } = require('../middleware/adminMiddleware')

const {
  getUserDataController,
  updateUserDataController,
  deleteUserController,
  uploadImageController,
  uploadProductController,
  deleteImageController,
  getTransactionHistory,
  getTransactionDetails
} = require('../controllers/admin.controller')

router.get("/getUserData", adminMiddleware, getUserDataController);
router.post("/updateUserData", adminMiddleware, updateUserDataController)
router.delete("/deleteUser", adminMiddleware, deleteUserController)

router.post("/uploadImage", adminMiddleware, uploadImageController)
router.post("/deleteImage", adminMiddleware, deleteImageController)
router.post("/uploadProduct", adminMiddleware, uploadProductController)

router.get("/getTransactionHistory", adminMiddleware, getTransactionHistory)
router.get("/getTransactionDetails", adminMiddleware, getTransactionDetails)

module.exports = router;