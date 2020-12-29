const express = require("express");
const router = express.Router();

const {
  validRegister,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/valid");

const {
  registerController,
  activationController,
  loginController,
  forgotPasswordController,
  resetPasswordController,
  checkAuth
} = require('../controllers/auth.controller')

const { authMiddleware } = require('../middleware/authMiddleware')

router.post("/register", validRegister, registerController);
router.post("/login", validLogin, loginController);
router.post("/activation", activationController);

router.put(
  "/forgotPassword",
  forgotPasswordValidator,
  forgotPasswordController
);
router.put("/resetPassword", resetPasswordValidator, resetPasswordController);

router.get("/auth", authMiddleware, checkAuth)

module.exports = router;