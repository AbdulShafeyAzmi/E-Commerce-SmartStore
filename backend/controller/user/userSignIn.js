const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signinController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found! ");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    console.log("checkPassoword", checkPassword);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 2,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check the password! ");
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || err,
      error: true,
    });
  }
}

module.exports = signinController;
