const axiosInstance = require("./axiosInstance");

async function fetchDataFromServerEveryMinute() {
  await fetchDataFromServer();
  setInterval(fetchDataFromServer, 60000);
}

async function fetchDataFromServer() {
  const { data } = await axiosInstance.get("/temperature");
  console.log("data", data);
}

module.exports = fetchDataFromServerEveryMinute;
