import express from "express";
import home from "./home";
import temperature from "./temperature";
import humidity from "./humidity";
import unknown from "./unknown";
import infoDevice from "./infoDevice";
import averageDevice from "./averageDevice";
import windSpeed from "./windSpeed";

const router = express.Router();

router.get("/", home);
router.get("/devices/:deviceName", infoDevice);
router.get("/devices/:deviceName/temperature", temperature);
router.get("/devices/:deviceName/average", averageDevice);
router.get("/devices/:deviceName/humidity", humidity);
router.get("/devices/:deviceName/windspeed", windSpeed);

router.get("/*", unknown);

export default router