const express = require("express");

const router = express.Router();
const userSignUpController = require("../controller/user/userSignUp");
const signinController = require("../controller/user/userSignIn");

router.post("/signup", userSignUpController);
router.post("/signin", signinController);

module.exports = router;
