import React from "react";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";

function Monuments() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Monuments of Varanasi</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.monuments.map((monument, index) => (
          <Card
            key={index}
            title={monument.name}
            description={monument.short_description}
            imageFilename={monument.image_filename}
            onClick={() => console.log(`Clicked ${monument.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Monuments;
