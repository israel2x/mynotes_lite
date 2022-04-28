const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");

  console.log(db);

  mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));
};
