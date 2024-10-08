const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    // console.log("token", token);
    if (!token) {
      return res.status(200).json({
        message: "Please Login First...!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      //console.log(err);
      // console.log("decoded", decoded);

      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            message: "Session expired. Please log in again.",
            error: true,
            success: false,
          });
        }
      }

      req.userId = decoded?._id;

      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
