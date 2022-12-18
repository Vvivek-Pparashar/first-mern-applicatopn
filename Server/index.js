import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Vivek Is Gr8</h1>");
});

const CONNECTION_URL =
  "mongodb+srv://vivek:vivek@cluster0.usko8rl.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(5000, "127.0.0.1", () => {
      console.log("vivek is gr8");
    })
  )
  .catch((error)=>{
        console.log(error)
  })
