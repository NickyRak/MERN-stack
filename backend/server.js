require("dotenv").config();

const express = require("express");
const workoutRouters = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRouters);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server started on port 4000...");
});

process.env;
