// src/pages/Stories.jsx
import React, { useEffect } from "react";
import data from "../data/varanasi_culture.json";
import { getImage } from "../assets/image";

export default function Stories() {
  const stories = Array.isArray(data?.stories) ? data.stories : [];

  useEffect(() => {
    console.log("Loaded stories:", stories);
  }, [stories]);

  if (!stories.length) {
    return (
      <div className="pb-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#7B2D26]">
          Stories of Varanasi
        </h1>
        <p className="text-gray-600">No stories available.</p>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#7B2D26]">
        Stories of Varanasi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => {
          const title = story.title || story.name || "Untitled Story";
          const description =
            story.text ||
            story.short_description ||
            "No description available.";
          const imageSrc =
            getImage(story.image_filename) ||
            getImage(story.imageFilename) ||
            getImage(null);

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-100">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-semibold text-xl text-[#7B2D26] mb-2">
                  {title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
