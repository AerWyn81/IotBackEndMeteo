import express from "express"
import home from "./home"
import temperature from "./temperature"
import infoDevice from "./infoDevice"
import AverageDevice from "./AverageDevice"

const router = express.Router();

router.get("/", home);
router.get("/device/:deviceName", infoDevice);
router.get("/devices/:deviceName/temperature", temperature);
router.get("/device/:deviceName/average", AverageDevice);

export default router