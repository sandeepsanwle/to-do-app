// const connectDB = require("./app/database/db")
// var bodyParser = require('body-parser')
// const tasksController = require("./app/Controllers/Taskcontroller");
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// const authController = require("./app/Controllers/Authcontroller");
// const test = require("./app/middleware/test")
// var cors = require('cors')
// app.use(cors())

const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./index.html"));
  res.send("hello world!");
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
