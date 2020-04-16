const Device = require("../models/Device");
const allInfoDevice = async (req, res) => {
  const deviceName = req.params.deviceName;
  let devices = await Device.find({ deviceName })
    .limit(20)
    .sort({ createdAt: -1 });

  if (!devices) {
    return res.status(404).json({ error: "No device found." });
  }

  const devicesValues = Object.values(devices).map(
    ({ temperature, zoneLat, zoneLong, humidity, windSpeed, status }) => ({
      deviceName,
      temperature,
      zoneLat,
      zoneLong,
      humidity,
      windSpeed,
      status,
    })
  );

  res.status(200).json(devicesValues);
};

module.exports = allInfoDevice;
