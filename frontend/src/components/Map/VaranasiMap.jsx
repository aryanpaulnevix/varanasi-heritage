import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import data from "../../data/varanasi_culture.json";
import { getImage } from "../../assets/image";

const VaranasiMap = () => {
  return (
    <MapContainer
      center={[25.3176, 82.9739]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {data.ghats.map((ghat, index) => {
        if (!ghat.latlng) return null;
        return (
          <Marker key={index} position={ghat.latlng}>
            <Popup>
              <strong>{ghat.name}</strong>
              <br />
              <img
                src={getImage(ghat.image_filename)}
                alt={ghat.name}
                style={{ width: "100px" }}
              />
              <p>{ghat.short_description}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default VaranasiMap;
