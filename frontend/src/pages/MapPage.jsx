import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import data from "../data/varanasi_culture.json";
import InfoCard from "../components/InfoCard";
import { getImage } from "../assets/image";

// Category colors for markers
const categoryColors = {
  ghats: "FF5733",
  monuments: "4287f5",
  festivals: "f5e642",
  food: "42f554",
  crafts: "f542dd",
};

// Create a simple colored icon
const createIcon = (color) =>
  new L.Icon({
    iconUrl: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -35],
  });

export default function MapPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "ghats",
    "monuments",
    "festivals",
    "food",
    "crafts",
  ];

  // Return markers filtered by category
  const renderMarkers = () => {
    return categories
      .filter((cat) => cat === "all" || cat === activeCategory)
      .flatMap((cat) => {
        const items =
          cat === "all"
            ? [].concat(
                data.ghats,
                data.monuments,
                data.festivals,
                data.food,
                data.crafts
              )
            : data[cat];
        return items.map((item, idx) => {
          const latlng = item.latlng || [
            25.3176 + 0.002 * idx,
            82.9739 + 0.002 * idx,
          ]; // fallback positions

          return (
            <Marker
              key={`${cat}-${idx}`}
              position={latlng}
              icon={createIcon(categoryColors[cat] || "000000")}
              eventHandlers={{
                click: () => setSelectedItem(item),
              }}
            >
              <Tooltip>{item.name}</Tooltip>
            </Marker>
          );
        });
      });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 pb-16 relative">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-4 z-10">
        <h1 className="text-2xl font-bold font-serif text-[#7B2D26] mb-4">
          Selected Item
        </h1>

        {/* Category filter buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded ${
                activeCategory === cat
                  ? "bg-[#F2A007] text-[#7B2D26]"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Info Card */}
        <InfoCard item={selectedItem} />
      </div>

      {/* Map */}
      <div className="lg:w-3/4 w-full h-[70vh] relative z-0">
        <MapContainer
          center={[25.3176, 82.9739]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full rounded-lg shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />

          {renderMarkers()}
        </MapContainer>
      </div>
    </div>
  );
}
