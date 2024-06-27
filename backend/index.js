const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectToDb = require("./config/db");
const router = require("./routes/index");

const app = express();
app.use(cors());
app.use("/api", router);

const PORT = 8080 || process.env.PORT;
connectToDb();
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
