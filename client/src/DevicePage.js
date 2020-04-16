import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Chart } from "react-charts";

const { useEffect } = require("react");

function DevicePage() {
  const { device } = useParams();
  const [deviceData, setDeviceData] = React.useState([]);

  const getDataFromApi = async (device) => {
    const { data } = await axios.get(
      `http://localhost:9000/api/v1/devices/${device}`
    );
    setDeviceData(data);
  };

  useEffect(() => {
    getDataFromApi(device);
  }, []);

  const temperatureData = deviceData.map((data, index) => [
    index,
    data.temperature,
  ]);

  const humidityData = deviceData.map((data, index) => [index, data.humidity]);

  const windSpeedData = deviceData.map((data, index) => [
    index,
    data.windSpeed,
  ]);

  const data = useMemo(
    () => [
      {
        label: "Temperature",
        data: temperatureData,
      },
      {
        label: "Humidity",
        data: humidityData,
      },
      {
        label: "Wind Speed",
        data: windSpeedData,
      },
    ],
    [deviceData]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <a href="/" className="navbar-toggler" type="button">
          Home
        </a>
        <h1 className="navbar-brand">{device}</h1>
      </div>

      <div className="d-flex justify-content-lg-center">
        <table className="table col-lg-8">
          <thead>
            <tr>
              <th>temperature</th>
              <th>humidity</th>
              <th>windSpeed</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {deviceData.map((item) => (
              <tr>
                <td>{item.temperature} °C</td>
                <td>{item.humidity} %</td>
                <td>{item.windSpeed} Km/h</td>
                <td>{item.status ? "Actif" : "Inactif"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-lg-center">
        <div className="col-lg-10" style={{ height: "500px" }}>
          <Chart data={data} axes={axes} tooltip />
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
