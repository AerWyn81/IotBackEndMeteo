const Device = require("../models/Device");

const coordinatesDevices = async (req, res) => {
    let devices = await Device.find({})
        .limit(20)
        .sort({ createdAt: -1 });

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
