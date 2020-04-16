import React, { Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const PopupMarker = (device) => {
  return (
    <Marker position={[device.zoneLat, device.zoneLong]}>
      <Popup>{device.deviceName}</Popup>
    </Marker>
  );
};

const MarkersList = ({ devices }) => {
  const items = [];
  devices.forEach((device) => {
    items.push(PopupMarker(device));
  });
  return <Fragment>{items}</Fragment>;
};

export default function MapGenerator() {
  const devices = [
    {
      deviceName: "device_1",
      zoneLat: 44.587981,
      zoneLong: -0.038672,
      temperature: 18,
      wind: 81,
      humidity: 81,
    },
    {
      deviceName: "device_2",
      zoneLat: 44.557663,
      zoneLong: -0.165424,
      temperature: 18,
      wind: 81,
      humidity: 81,
    },
  ];

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
        <MarkersList devices={devices} />
      </Map>
      <a href="/" className="btn btn-outline-dark btn-block" style={{width:"1000px"}}>
        Home
      </a>
    </div>
  );
}
