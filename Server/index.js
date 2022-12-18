const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./db/connect.js");

const app = express();

// ===========================     MIDDLE-WARES    ========================

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ============================    ROUTES          ==========================
app.get("/", (req, res) => {
  res.status(200).send("<h1>Vivek Is Gr8</h1>");
});

// ======================== LISTENING TO SERVER ===========================

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, "127.0.0.1", console.log("vivek is gr8"));
  } catch (error) {
    console.log(error.message);
  }
};

start();
