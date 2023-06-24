const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
/*
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
*/
app.get("/getData", (req, res) => {
  res.send("Backend Connected");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
