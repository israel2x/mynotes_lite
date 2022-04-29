const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const dbm = config.get("db");

  console.log(dbm);

  mongoose
    .connect(dbm)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));
};
