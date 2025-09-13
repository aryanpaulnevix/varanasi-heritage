// frontend/src/components/Stories/StoryCard.jsx
import React from "react";
import { getImage } from "../../assets/image";

export default function StoryCard({ title, text, imageFilename }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
      {/* Story Image */}
      <img
        src={getImage(imageFilename)}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Story Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
