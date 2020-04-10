import express from "express"
import home from "./home"
import temperature from "./temperature"

const router = express.Router();

router.get("/", home);
router.get("/devices/:deviceName/temperature", temperature);

export default router