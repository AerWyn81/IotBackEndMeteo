const express = require("express");
const home = require("./home");
const convertTemperature = require("./convertTemperature");
const humidity = require("./humidity");
const unknown = require("./unknown");
const infoDevice = require("./infoDevice");
const allInfoDevice = require("./allInfoDevice");
const averageDevice = require("./averageDevice");
const windSpeed = require("./windSpeed");
const temperature = require("./temperature");

const router = express.Router();

router.get("/", home);
router.get("/devices/:deviceName", allInfoDevice);
router.get("/devices/:deviceName/last", infoDevice);
router.get("/devices/:deviceName/convertTemperature", convertTemperature);
router.get("/devices/:deviceName/average", averageDevice);
router.get("/devices/:deviceName/humidity", humidity);
router.get("/devices/:deviceName/windSpeed", windSpeed);
router.get("/devices/:deviceName/temperature", temperature);

router.get("/*", unknown);

module.exports = router;
