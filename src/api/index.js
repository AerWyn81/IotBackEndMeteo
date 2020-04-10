import express from "express"
import home from "./home"
import infoDevice from "./infoDevice"

const router = express.Router();

router.get("/", home);
router.get("/device/:deviceName", infoDevice);

export default router