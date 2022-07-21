require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const router = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started, port: " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
