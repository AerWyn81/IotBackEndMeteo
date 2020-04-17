const express = require("express");
const convertTemperature = require("./convertTemperature");
const humidity = require("./humidity");
const unknown = require("./unknown");
const infoDevice = require("./infoDevice");
const allInfoDevice = require("./allInfoDevice");
const averageDevice = require("./averageDevice");
const windSpeed = require("./windSpeed");
const temperature = require("./temperature");
const coordinatesDevices = require("./coordinatesDevices");
const devicesList = require("./devicesList");
const averageDevices = require("./averageDevices");

const router = express.Router();

/**
 * @swagger
 * /devices/coordinates:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return all devices coordinates
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success, all devices coordinates
 */
router.get("/devices/coordinates", coordinatesDevices);

/**
 * @swagger
 * /devices/list:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return all devices names
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success, all devices names
 */
router.get("/devices/list", devicesList);

/**
 * @swagger
 * /devices/average:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return devices with average temperature, humidity and windspeed
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success, temperature/windspeed/humidity for all devices
 */
router.get("/devices/average", averageDevices);

/**
 * @swagger
 * /devices/{deviceName}:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return last 20 data for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, 20 last temperature/windspeed/humidity/latitude/longitude
 */
router.get("/devices/:deviceName", allInfoDevice);

/**
 * @swagger
 * /devices/{deviceName}:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return last data for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, temperature/windspeed/humidity/latitude/longitude
 */
router.get("/devices/:deviceName/last", infoDevice);

/**
 * @swagger
 * /devices/{deviceName}/convertTemperature:
 *   get:
 *     tags:
 *       - Devices
 *     description: Returns temperature conversion from a specific device in custom format if specified (C/F)
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *       - name: format
 *         in: query
 *         description: Format Celsius (C) or Fahrenheit (F)
 *         type: string
 *     responses:
 *       200:
 *         description: Success, temperature conversion
 */
router.get("/devices/:deviceName/convertTemperature", convertTemperature);

/**
 * @swagger
 * /devices/{deviceName}/average:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return temperature average for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, temperature average
 */
router.get("/devices/:deviceName/average", averageDevice);

/**
 * @swagger
 * /devices/{deviceName}/humidity:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return min/max humidity for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, min/max humidity
 */
router.get("/devices/:deviceName/humidity", humidity);

/**
 * @swagger
 * /devices/{deviceName}/windspeed:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return min/max humidity for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, min/max humidity
 */
router.get("/devices/:deviceName/windSpeed", windSpeed);

/**
 * @swagger
 * /devices/{deviceName}/temperature:
 *   get:
 *     tags:
 *       - Devices
 *     description: Return min/max temperature for a specific device
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: deviceName
 *         in: path
 *         description: Name of the device
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success, min/max temperature
 */
router.get("/devices/:deviceName/temperature", temperature);

router.get("/*", unknown);

module.exports = router;
