const express = require("express");
const error = require("../middleware/error");
const notes = require("../routes/notes");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/notes", notes);
  app.use(error);
};
