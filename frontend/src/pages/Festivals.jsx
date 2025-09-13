// frontend/src/pages/Festivals.jsx
import React from "react";
import data from "../data/varanasi_culture.json";
import { getImage } from "../assets/image";
import Card from "../components/Card";

function Festivals() {
  return (
    <div className="pt-20 px-6">
      <h1 className="text-2xl font-bold mb-6">Festivals of Varanasi</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.festivals.map((festival, index) => (
          <Card
            key={index}
            title={festival.name}
            description={festival.short_description}
            imageFilename={festival.image_filename}
            onClick={() => console.log(`Clicked ${festival.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Festivals;
