import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Home() {
  const [devicesList, setDevicesList] = useState([]);

  const fetchDevicesList = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:9000/api/v1/devices/list`
    );
    setDevicesList(data);
  }, []);
  useEffect(() => {
    fetchDevicesList();
  }, []);

  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <a
          href="http://localhost:9000/api-docs"
          className="navbar-toggler"
          type="button"
        >
          Swagger
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h3>Devices list:</h3>
            <div className="list-group">
              {devicesList.map((deviceName) => (
                <a
                  href={`/device/${deviceName}`}
                  className="btn btn-outline-primary btn-block"
                >
                  {deviceName}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 card">
            <div className="card-body">
              <h4 className="card-title">Devices Map</h4>
              <p className="card-text">
                You can see where are all the devices in the map.
              </p>
              <a href="/map" className="btn btn-primary">
                See the devices Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
