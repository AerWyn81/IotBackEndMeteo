const express = require("express");

const fetchDataFromServerEveryMinute = require("./fetchData");

const api = require("./routes");

const server = express();

server
  .disable("x-powered-by")
  .use(express.urlencoded({ extended: true }))
  .use("/api/v1", api);

fetchDataFromServerEveryMinute();

module.exports = server;
