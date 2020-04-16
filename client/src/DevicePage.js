import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const {useEffect} = require("react");



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

  return (
    <div>
      <h1>{device}</h1>
      <a href="/" className="btn btn-outline-dark btn-block" style={{width:"100px"}}>
        Home
      </a>

      <table class="table">
        <tr>
          <th>temperature</th>
          <th>humidity</th>
          <th>status</th>
          <th>windSpeed</th>
        </tr>
        { deviceData.map(item =><tr>
          <td>{item.temperature}</td>
          <td>{item.humidity}</td>
          <td>{item.status ? "O" : "X"}</td>
          <td>{item.windSpeed}</td>
        </tr>)}
      </table>
    </div>
  );
}

export default DevicePage;
