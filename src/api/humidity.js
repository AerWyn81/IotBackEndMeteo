import Device from "../models/Device";

const humidity = async (req, res) => {
  const deviceName = req.params.deviceName;

  let devices = await Device.findAllByName(deviceName);

  if (!devices) {
    return res.status(404).json({ error: "Device not found" });
  }

  const humidityValues = devices.map((device) => device.humidity);
  const minHumidity = Math.min(...humidityValues);
  const maxHumidity = Math.max(...humidityValues);

  res.status(200).json({
    minHumidity,
    maxHumidity,
  });
};

export default humidity;
