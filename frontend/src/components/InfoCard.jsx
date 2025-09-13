import React from "react";
import { getImage } from "../assets/image";

export default function InfoCard({ item }) {
  if (!item) return null;

  return (
    <div className="bg-white shadow-xl rounded-lg w-full max-w-sm p-4">
      <img
        src={getImage(item.image_filename) || "/placeholder.jpg"}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-[#7B2D26] mb-2">{item.name}</h2>
      <p className="text-gray-700 text-sm">{item.short_description}</p>
    </div>
  );
}
