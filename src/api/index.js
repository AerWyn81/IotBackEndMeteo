import express from "express"
import home from "./home"
import temperature from "./temperature"
import infoDevice from "./infoDevice"

const router = express.Router();

router.get("/", home);
router.get("/device/:deviceName", infoDevice);
router.get("/devices/:deviceName/temperature", temperature);

export default router