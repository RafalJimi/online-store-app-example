const express = require("express");
const router = express.Router();

const {
  validSign,
  validLogin,
} = require("../helpers/valid");

const {
    registerController,
    activationController,
    loginController,
} = require('../controllers/auth.controller')

router.post("/register", validSign, registerController);
router.post("/login", validLogin, loginController);
router.post("/activation", activationController);

module.exports = router;