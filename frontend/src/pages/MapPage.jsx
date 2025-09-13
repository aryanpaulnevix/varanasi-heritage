// src/pages/MapPage.jsx

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getImage } from "../assets/image";
import data from "../data/varanasi_culture.json";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon generator by color
const createIcon = (color) =>
  new L.Icon({
    iconUrl: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -35],
  });

const VaranasiMap = () => {
  return (
    <div className="pt-20 px-6">
      {" "}
      {/* pushes content below navbar */}
      <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[25.3176, 82.9739]} // Varanasi center
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />

          {/* Ghats */}
          {data.ghats.map(
            (ghat, index) =>
              ghat.latlng && (
                <Marker
                  key={`ghat-${index}`}
                  position={ghat.latlng}
                  icon={createIcon("FF5733")}
                >
                  <Popup>
                    <div className="w-48">
                      <img
                        src={getImage(ghat.image_filename)}
                        alt={ghat.name}
                        className="w-full h-32 object-cover mb-2 rounded"
                      />
                      <h2 className="font-bold">{ghat.name}</h2>
                      <p>{ghat.short_description}</p>
                    </div>
                  </Popup>
                </Marker>
              )
          )}

          {/* Monuments */}
          {data.monuments.map((monument, index) => (
            <Marker
              key={`monument-${index}`}
              position={[25.3176 + 0.002 * index, 82.9739 + 0.002 * index]}
              icon={createIcon("4287f5")}
            >
              <Popup>
                <div className="w-48">
                  <img
                    src={getImage(monument.image_filename)}
                    alt={monument.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h2 className="font-bold">{monument.name}</h2>
                  <p>{monument.short_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Festivals */}
          {data.festivals.map((festival, index) => (
            <Marker
              key={`festival-${index}`}
              position={[25.3176 + 0.003 * index, 82.9739 - 0.002 * index]}
              icon={createIcon("f5e642")}
            >
              <Popup>
                <div className="w-48">
                  <img
                    src={getImage(festival.image_filename)}
                    alt={festival.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h2 className="font-bold">{festival.name}</h2>
                  <p>{festival.short_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Food */}
          {data.food.map((food, index) => (
            <Marker
              key={`food-${index}`}
              position={[25.3176 - 0.002 * index, 82.9739 + 0.003 * index]}
              icon={createIcon("42f554")}
            >
              <Popup>
                <div className="w-48">
                  <img
                    src={getImage(food.image_filename)}
                    alt={food.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h2 className="font-bold">{food.name}</h2>
                  <p>{food.short_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Crafts */}
          {data.crafts.map((craft, index) => (
            <Marker
              key={`craft-${index}`}
              position={[25.3176 - 0.003 * index, 82.9739 - 0.002 * index]}
              icon={createIcon("f542dd")}
            >
              <Popup>
                <div className="w-48">
                  <img
                    src={getImage(craft.image_filename)}
                    alt={craft.name}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <h2 className="font-bold">{craft.name}</h2>
                  <p>{craft.short_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default VaranasiMap;
