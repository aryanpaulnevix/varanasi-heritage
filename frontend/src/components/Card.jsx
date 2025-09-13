import React from "react";
import { getImage } from "../assets/image";

export default function Card({ title, description, imageFilename, onClick }) {
  const imageSrc = imageFilename
    ? getImage(imageFilename)
    : "/assets/placeholder.jpg"; // fallback image

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
      style={{ height: "400px" }} // uniform height
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover" // uniform aspect ratio
      />
      <div className="p-4">
        <h2 className="font-serif font-bold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
