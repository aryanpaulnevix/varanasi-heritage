// src/pages/CityPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";
import MapPage from "./MapPage"; // import your MapPage component

const subcategories = [
  "food",
  "festivals",
  "monuments",
  "crafts",
  "stories",
  "ghats",
  "map",
];

export default function CityPage() {
  const { cityName } = useParams();
  const [activeCategory, setActiveCategory] = useState("food");

  const cityData = data; // for now, only varanasi

  return (
    <div className="pt-6 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">
        {cityName.charAt(0).toUpperCase() + cityName.slice(1)} - Explore
      </h1>

      {/* Subcategory buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-[#F2A007] text-[#7B2D26]"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Render content based on active category */}
      {activeCategory === "map" ? (
        <div className="h-[600px]">
          <MapPage />
        </div>
      ) : cityData[activeCategory] && cityData[activeCategory].length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cityData[activeCategory].map((item, idx) => (
            <Card
              key={idx}
              title={item.name || item.title}
              description={item.short_description || item.text}
              imageFilename={item.image_filename}
              link={item.source_urls ? item.source_urls[0] : null} // ✅ pass first URL
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-20">
          No items available in this category.
        </p>
      )}
    </div>
  );
}
