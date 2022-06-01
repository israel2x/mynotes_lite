const mongoose = require("mongoose");
//process.env.NODE_ENV = "production";
const config = require("../config");

module.exports = function () {
  //const dbm = config.get("db");
  const dbm = config.db;

  mongoose
    .connect(dbm)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));
};
