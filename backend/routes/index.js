const express = require("express");

const router = express.Router();
const userSignUpController = require("../controller/user/userSignUp");
const signinController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../middleware/authToken");

router.post("/signup", userSignUpController);
router.post("/signin", signinController);
router.get("/user-details", authToken, userDetailsController);

module.exports = router;
