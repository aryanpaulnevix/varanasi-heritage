// src/pages/Food.jsx
import React from "react";
import data from "../data/varanasi_culture.json";
import { getImage } from "../assets/image";

function Food() {
  return (
    <div className="pt-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Foods of Varanasi</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.food.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
            onClick={() => alert(`Clicked on ${item.name}`)} // placeholder for future detail page
          >
            <img
              src={getImage(item.image_filename)}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.short_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
