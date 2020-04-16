import React, { Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {useParams} from "react-router-dom";
import axios from "axios";

const {useEffect} = require("react");

const PopupMarker = (device) => {
  return (
    <Marker position={[device.zoneLat, device.zoneLong]}>
      <Popup>{device.deviceName}</Popup>
    </Marker>
  );
};

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
      <Map
        center={[44.587981, -0.038672]}
        zoom={10}
        style={{ width: "1000px", height: "750px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkersList devicesCoordinates={devicesCoordinates} />
      </Map>
      <a href="/" className="btn btn-outline-dark btn-block" style={{width:"1000px"}}>
        Home
      </a>
    </div>
  );
}

export default MapGenerator;
