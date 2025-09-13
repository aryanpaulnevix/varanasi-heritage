import React from "react";
import { getImage } from "../assets/image";

const HomePage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${getImage("background_image")})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-40 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Varanasi Heritage
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Explore the culture, history, and stories of Varanasi
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg hover:bg-yellow-600 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
