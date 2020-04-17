const Device = require("../models/Device");

const temperature = async (req, res) => {
    const deviceName = req.params.deviceName;

    let devices = await Device.findAllByName(deviceName);

    if (!devices) {
        return res.status(404).json({ error: "Device not found" });
    }

    const temperatureValues = devices.map((device) => device.windSpeed);
    const mintemperature = Math.min(...temperatureValues);
    const maxtemperature = Math.max(...temperatureValues);

    res.status(200).json({
        mintemperature,
        maxtemperature,
    });
};

module.exports = temperature;
