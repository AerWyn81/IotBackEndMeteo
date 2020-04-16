const Device = require("../models/Device");
const infoDevice = async (req, res) => {
  const deviceName = req.params.deviceName;
  const device = await Device.findOne({ deviceName }).sort({ createdAt: -1 });
  if (!device) {
    return res.status(404).json({ error: "Device not found" });
  }

  const {
    temperature,
    zoneLat,
    zoneLong,
    humidity,
    windSpeed,
    status,
  } = device;

  res.status(200).json({
    deviceName,
    temperature,
    zoneLat,
    zoneLong,
    humidity,
    windSpeed,
    status,
  });
};

module.exports = infoDevice;
