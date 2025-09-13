import React from "react";
import { getImage } from "../assets/image";

function Card({ title, description, imageFilename, onClick }) {
  return (
    <div
      className="w-64 h-80 bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <img
        src={getImage(imageFilename)}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-40">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Card;
