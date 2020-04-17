import React, { Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const { useEffect } = require("react");

const PopupMarker = ({ deviceName, zoneLat, zoneLong }) => (
  <Marker position={[zoneLat, zoneLong]}>
    <Popup>
      <a href={`/device/${deviceName}`}>{deviceName}</a>
    </Popup>
  </Marker>
);

const MarkersList = ({ devicesCoordinates }) => {
  const items = [];
  const listDevices = Object.values(devicesCoordinates);
  listDevices.forEach((device) => {
    items.push(PopupMarker(device));
  });
  return <Fragment>{items}</Fragment>;
};

function MapGenerator() {
  const [devicesCoordinates, setDevicesCoordinates] = React.useState([]);

  const getDevicesCoordinatesFromApi = async () => {
    const { data } = await axios.get(
      `http://localhost:9000/api/v1/devices/coordinates`
    );
    setDevicesCoordinates(data);
  };

  useEffect(() => {
    getDevicesCoordinatesFromApi();
  }, []);

  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <a
          href="http://localhost:3000/"
          className="navbar-toggler"
          type="button"
        >
          Home
        </a>
      </div>
      <div className="container-fluid">
        <Map
          center={[44.587981, -0.038672]}
          zoom={10}
          style={{ width: "98vw", height: "90vh" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkersList devicesCoordinates={devicesCoordinates} />
        </Map>
      </div>
    </div>
  );
}

export default MapGenerator;
