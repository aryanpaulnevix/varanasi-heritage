import React from "react";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";

function Crafts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Crafts of Varanasi</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.crafts.map((craft, index) => (
          <Card
            key={index}
            title={craft.name}
            description={craft.short_description}
            imageFilename={craft.image_filename}
            onClick={() => console.log(`Clicked ${craft.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Crafts;
