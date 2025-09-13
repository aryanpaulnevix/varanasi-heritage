// src/pages/Stories.jsx
import React from "react";
import data from "../data/varanasi_culture.json";
import { getImage } from "../assets/image";

export default function Stories() {
  return (
    <div className="pb-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#7B2D26]">
        Stories of Varanasi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.stories.map((story, idx) => (
          <div
            key={idx}
            className="h-80 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={getImage(story.image_filename) || "/placeholder.jpg"}
              alt={story.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-40">
              <h2 className="font-semibold text-xl text-[#7B2D26] mb-2 truncate">
                {story.name}
              </h2>
              <p className="text-gray-700 text-sm overflow-hidden">
                {story.short_description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
