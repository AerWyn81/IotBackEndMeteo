import React from "react";
import MapGenerator from "./MapGenerator";


function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <a href="/device/device_1" className="btn btn-outline-primary btn-block">
            Device_1
          </a>
          <a href="/device/device_2" className="btn btn-outline-primary btn-block">
            Device_2
          </a>
          <a href="/device/device_3" className="btn btn-outline-primary btn-block">
            Device_3
          </a>
          <a href="/device/device_4" className="btn btn-outline-primary btn-block">
            Device_4
          </a>
          <a href="/device/device_5" className="btn btn-outline-primary btn-block">
            Device_5
          </a>
          <a href="/device/device_6" className="btn btn-outline-primary btn-block">
            Device_6
          </a>
          <a href="/device/device_7" className="btn btn-outline-primary btn-block">
            Device_7
          </a>
        </div>
        <div className="col-md-4">
          <button className="btn btn-outline-dark btn-block">
            All Temperature
          </button>
          <button className="btn btn-outline-dark btn-block">All Wind</button>
          <button className="btn btn-outline-dark btn-block">
            All Humidiy
          </button>
          <a href="/map" className="btn btn-outline-dark btn-block">
              Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
