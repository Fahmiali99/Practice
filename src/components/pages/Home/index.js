/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function index() {
  const position = [-7.952803059780921, 112.61429938583589];

  return (
    <div>
      <MapContainer
        className="w-screen h-screen z-0"
        center={[-7.96266506894284, 112.6293797409383]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default index;
