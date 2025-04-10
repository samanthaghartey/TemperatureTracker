const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE_URL =
  "mongodb+srv://gharteysamanthas:mynameis123@temperature.yujjlll.mongodb.net/";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const tempRouter = require("./routes/temperature.js");
app.use("/temperature", tempRouter);

app.listen(4000, () => console.log("started"));
