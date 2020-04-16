const filterDeviceByName = (devices, deviceName) =>
  devices.filter((device) => device.deviceName === deviceName);

const averageDataFromDevice = (devices, deviceName) =>
  filterDeviceByName(devices, deviceName).reduce(
    (averageData, device, index) => {
      const { temperature, humidity, windSpeed } = device;
      const {
        averageTemperature,
        averageHumidity,
        averageWindSpeed,
      } = averageData;
      averageData = {
        averageTemperature:
          (averageTemperature * index + temperature) / (index + 1),
        averageHumidity: (averageHumidity * index + humidity) / (index + 1),
        averageWindSpeed: (averageWindSpeed * index + windSpeed) / (index + 1),
      };
      return averageData;
    },
    { averageTemperature: 0, averageHumidity: 0, averageWindSpeed: 0 }
  );

const getTemperatureCelsiusToFahrenheit = (temperature) => {
    return (temperature * 9) / 5 + 32;
}


module.exports = { averageDataFromDevice, getTemperatureCelsiusToFahrenheit };
