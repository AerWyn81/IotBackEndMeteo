const Device = require("../models/Device");

const windSpeed = async (req, res) => {
  const deviceName = req.params.deviceName;

  let devices = await Device.findAllByName(deviceName);

  if (!devices) {
    return res.status(404).json({ error: "Device not found" });
  }

  const windSpeedValues = devices.map((device) => device.windSpeed);
  const minWindSpeed = Math.min(...windSpeedValues);
  const maxWindSpeed = Math.max(...windSpeedValues);

  res.status(200).json({
    minWindSpeed,
    maxWindSpeed,
  });
};

module.exports = windSpeed;
