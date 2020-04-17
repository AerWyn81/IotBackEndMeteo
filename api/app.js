const express = require("express");
const path = require("path");
const doc = require("./doc/swagger");
const cors = require("cors");
const fetchDataFromServerEveryMinute = require("./fetchData");
const api = require("./routes");
const unknown = require("./routes/unknown");
const server = express();

server
  .disable("x-powered-by")
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(express.static(path.join(__dirname, "public")))
  .use("/api/v1", api)
  .get("/swagger.json", doc)
  .get("/*", unknown);

fetchDataFromServerEveryMinute();

module.exports = server;
