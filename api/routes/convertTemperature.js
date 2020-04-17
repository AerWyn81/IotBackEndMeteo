const Device = require("../models/Device");
const { getTemperatureCelsiusToFahrenheit } = require("../functions");

const convertTemperature = async (req, res) => {
  const deviceName = req.params.deviceName;
  const format = req.query.format || "C";

  let device = await Device.findByName(deviceName);

  if (!device) {
    return res.status(404).json({ error: "Device not found" });
  }

  let temperature = device.temperature;
  if (format === "F") {
    temperature = getTemperatureCelsiusToFahrenheit(device.temperature);
  }

  res.status(200).json({ temperature });
};

module.exports = convertTemperature;
