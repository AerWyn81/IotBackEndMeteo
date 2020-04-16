const Device = require("../models/Device");
const { averageDataFromDevice } = require("../functions");

const averageDevice = async (req, res) => {
  const deviceName = req.params.deviceName;
  const devices = await Device.find();
  const {
    averageTemperature,
    averageHumidity,
    averageWindSpeed,
  } = averageDataFromDevice(devices, deviceName);

  res.status(200).json({
    averageTemperature,
    averageHumidity,
    averageWindSpeed,
  });
};

module.exports = averageDevice;
