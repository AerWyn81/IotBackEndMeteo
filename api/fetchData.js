const axiosInstance = require("./axiosInstance");
const Device = require("./models/Device");
const mongoInstance = require("./database/mongodb");

async function fetchDataFromServerEveryMinute() {
  const temperatureDevices = await fetchTemperatureFromServer();
  const humidityDevices = await fetchHumidityFromServer();
  const windDevices = await fetchWindFromServer();

  const devices = mergeDevices([
    temperatureDevices,
    humidityDevices,
    windDevices,
  ]);

  const devicesWithStatus = await checkDevicesStatus(Object.values(devices));

  await mongoInstance;
  const isDevicesSaved = await saveDevicesToDatabase(
    Object.values(devicesWithStatus)
  );
  console.log("isDevicesSaved", isDevicesSaved);
  setTimeout(fetchDataFromServerEveryMinute, 60000);
}

const saveDevicesToDatabase = async (devices) => {
  try {
    const savingDevicesPromises = devices.map((device) => {
      const deviceModel = new Device(device);
      return deviceModel.save();
    });
    await Promise.all(savingDevicesPromises);
    return true;
  } catch (e) {
    console.error("ERROR", e);
    return false;
  }
};

const checkDevicesStatus = async (devicesArray) => {
  const devicesIds = Object.keys(devicesArray);
  const devicesIdsPromise = devicesIds.map((deviceId) =>
    axiosInstance.get(`/ping?device=${deviceId}`)
  );
  const devicesStatusRequests = await Promise.all(devicesIdsPromise);
  const devicesStatus = devicesStatusRequests.map(
    (devicesStatusRequest) => devicesStatusRequest.data.device
  );
  return devicesArray.map((device, index) => ({
    ...device,
    status: devicesStatus[index] === "UP",
  }));
};

const mergeDevices = (devicesArray) =>
  devicesArray.reduce((devicesMerged, deviceList) => {
    Object.entries(deviceList).forEach(([deviceId, deviceValues]) => {
      const deviceInList = devicesMerged[deviceId];
      if (deviceInList) {
        devicesMerged[deviceId] = {
          deviceName: deviceId,
          ...deviceInList,
          ...deviceValues,
        };
      } else {
        devicesMerged[deviceId] = deviceValues;
      }
    });
    return devicesMerged;
  }, {});

async function fetchTemperatureFromServer() {
  const { data } = await axiosInstance.get("/temperature");
  if (data) {
    const { temperature } = data;
    return temperature.reduce((newTemperature, currentTemperature) => {
      const { id, zone } = currentTemperature;
      const degree = currentTemperature["°C"];
      const [zoneLat, zoneLong] = zone.split(",").map((s) => s.trim());

      newTemperature[id] = {
        temperature: degree,
        zoneLat,
        zoneLong,
      };
      return newTemperature;
    }, {});
  } else {
    return {};
  }
}

async function fetchHumidityFromServer() {
  const { data } = await axiosInstance.get("/humidity");
  if (data) {
    const { humidity } = data;
    return humidity.reduce((newHumidity, currentTemperature) => {
      const { id, zone } = currentTemperature;
      const humidity = currentTemperature["%"];
      const [zoneLat, zoneLong] = zone.split(",").map((s) => s.trim());

      newHumidity[id] = {
        humidity,
        zoneLat,
        zoneLong,
      };
      return newHumidity;
    }, {});
  } else {
    return {};
  }
}

async function fetchWindFromServer() {
  const { data } = await axiosInstance.get("/wind");
  if (data) {
    const { wind } = data;
    return wind.reduce((newWind, currentTemperature) => {
      const { id, zone } = currentTemperature;
      const wind = currentTemperature["km/h"];
      const [zoneLat, zoneLong] = zone.split(",").map((s) => s.trim());

      newWind[id] = {
        windSpeed: wind,
        zoneLat,
        zoneLong,
      };
      return newWind;
    }, {});
  } else {
    return {};
  }
}

module.exports = fetchDataFromServerEveryMinute;
