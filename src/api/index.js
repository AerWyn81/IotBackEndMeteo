import express from "express";
import home from "./home";
import temperature from "./temperature";
import humidity from "./humidity";
import unknown from "./unknown";
import infoDevice from "./infoDevice"
import AverageDevice from "./AverageDevice"

const router = express.Router();

router.get("/", home);
router.get("/devices/:deviceName", infoDevice);
router.get("/devices/:deviceName/temperature", temperature);
router.get("/devices/:deviceName/average", AverageDevice);
router.get("/devices/:deviceName/humidity", humidity);

router.get("/*", unknown);

export default router