const Device = require("../models/Device");

const coordinatesDevices = async (req, res) => {
  const devices = await Device.find({});
  const devicesCoordinates = devices.reduce(
    (devicesList, { deviceName, zoneLat, zoneLong }) => {
      devicesList[deviceName] = {
        deviceName,
        zoneLat,
        zoneLong,
      };
      return devicesList;
    },
    {}
  );
  res.status(200).json(devicesCoordinates);
};

module.exports = coordinatesDevices;
