const Device = require("../models/Device");
const infoDevice = async  (req, res) => {
    const deviceName = req.params.deviceName;
    let device = await Device.findByName(deviceName);
    if (!device) {
        return res.status(404).json({ error: "Device not found" });
    }
    let zoneLat = device.zoneLat;
    let zoneLong = device.zoneLong;
    let temperature = device.temperature;
    let wind = device.windSpeed;
    let humidity = device.humidity;
    res.status(200).json({zoneLat:zoneLat,zoneLong:zoneLong,temperature:temperature,wind: wind,humidity: humidity});
};

module.exports = infoDevice
