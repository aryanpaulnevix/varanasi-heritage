// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import homepageBg from "../assets/background/background_image.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homepageBg})` }}
    >
      <h1 className="text-5xl font-bold mb-6 text-[#7B2D26] text-center bg-white/70 px-4 py-2 rounded">
        Welcome to Prototype Places
      </h1>
      <p className="text-lg mb-8 text-center max-w-xl bg-white/70 px-4 py-2 rounded">
        Explore cities and discover their food, monuments, festivals, and more.
      </p>
      <button
        onClick={() => navigate("/places/Varanasi")}
        className="bg-[#F2A007] text-[#7B2D26] px-8 py-4 rounded font-bold hover:bg-yellow-500 transition"
      >
        Explore Varanasi
      </button>
    </div>
  );
};

export default HomePage;
