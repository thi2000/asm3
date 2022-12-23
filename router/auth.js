const express = require("express");

const authController = require("../controller/auth");

const router = express.Router();

router.get("/", authController.getSession);

router.get("/signup", authController.getSignup);

router.post("/signin", authController.postSignin);

router.post("/signup", authController.postSignup);

router.post("/", authController.postLogout);

module.exports = router;
