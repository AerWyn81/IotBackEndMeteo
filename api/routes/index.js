const express = require("express");
const home = require("./home");
const temperature = require("./temperature");
const humidity = require("./humidity");
const unknown = require("./unknown");
const infoDevice = require("./InfoDevice");
const averageDevice = require("./averageDevice");
const windSpeed = require("./windSpeed");

const router = express.Router();

router.get("/", home);
router.get("/devices/:deviceName", infoDevice);
router.get("/devices/:deviceName/temperature", temperature);
router.get("/devices/:deviceName/average", averageDevice);
router.get("/devices/:deviceName/humidity", humidity);
router.get("/devices/:deviceName/windspeed", windSpeed);

router.get("/*", unknown);

module.exports = router;
