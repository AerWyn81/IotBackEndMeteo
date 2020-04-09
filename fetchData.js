const axiosInstance = require("./axiosInstance");

async function fetchDataFromServerEveryMinute() {
    let temperature = await fetchTemperatureFromServer();
    let humidity = await fetchHumidityFromServer();
    let wind = await  fetchWindFromServer();
}

async function fetchTemperatureFromServer() {
  return await axiosInstance.get("/temperature");
}

async function fetchHumidityFromServer() {
  return await axiosInstance.get("/humidity");
}

async function fetchWindFromServer() {
  return await axiosInstance.get("/wind");
}

async function fetchDataFromServer() {
  const { data } = await axiosInstance.get("/temperature");
}

module.exports = fetchDataFromServerEveryMinute;
