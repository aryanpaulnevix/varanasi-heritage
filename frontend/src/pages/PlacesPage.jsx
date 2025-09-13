import React from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Varanasi"]; // expand later

export default function PlacesPage() {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cities.map((city) => (
        <div
          key={city}
          className="bg-white rounded shadow hover:shadow-lg p-4 cursor-pointer"
          onClick={() => navigate(`/places/${city}`)}
        >
          <h2 className="text-xl font-bold">{city}</h2>
        </div>
      ))}
    </div>
  );
}
