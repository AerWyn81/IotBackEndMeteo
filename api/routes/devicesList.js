const Device = require("../models/Device");

const devicesList = async (req, res) => {
  const devices = await Device.find();
  const devicesNames = devices.map((device) => device.deviceName);
  const uniqueDevicesNames = [...new Set(devicesNames)];
  res.status(200).json(uniqueDevicesNames);
};

module.exports = devicesList;
