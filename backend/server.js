require("dotenv").config();

const express = require("express");

// express app
const app = express();

// midleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Hello from server!" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server started on port 4000...");
});

process.env;
