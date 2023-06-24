const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

// mongoose.connect("mongodb+srv://hammadbcss19:hammad.bcss19@cluster0.yo1nyml.mongodb.net/", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });


mongoose
  .connect("mongodb+srv://hammadbcss19:hammad.bcss19@cluster0.yo1nyml.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/getData", (req, res) => {
  res.send("Backend Connected");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
