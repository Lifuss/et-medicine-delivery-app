const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.resolve("..", "..", ".env") });

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use((req, res) => {
  const error = new Error("Not found");
  res.status(404).json({ message: error.message });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

module.exports = app;
