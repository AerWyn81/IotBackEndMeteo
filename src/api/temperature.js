import Device from "../models/Device";

const temperature = async (req, res) => {
  const deviceName = req.params.deviceName;
  const format = req.query.format ?? "C";

  let device = await Device.findByName(deviceName);

  if (!device) {
    return res.status(404).json({ error: "Device not found" });
  }

  let temperature = device.temperature;
  if (format === "F") {
    temperature = (device.temperature * 9) / 5 + 32;
  }

  res.status(200).json({ temperature });
};

export default temperature;
