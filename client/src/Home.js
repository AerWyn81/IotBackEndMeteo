import React from "react";
import MapGenerator from "./MapGenerator";


function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-outline-primary btn-block">
            Device_1
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_2
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_3
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_4
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_5
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_6
          </button>
          <button className="btn btn-outline-primary btn-block">
            Device_7
          </button>
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
