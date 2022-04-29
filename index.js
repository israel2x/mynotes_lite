const express = require("express");
const winston = require("winston");
const app = express();

//require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/prod")(app);
require("./startup/config")();

const port = 9000;
//app.listen(port, () => console.log(`Listening on port ${port}.... `));
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
