import React from "react";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";

function Ghats() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ghats of Varanasi</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.ghats.map((ghat, index) => (
          <Card
            key={index}
            title={ghat.name}
            description={ghat.short_description}
            imageFilename={ghat.image_filename}
            onClick={() => console.log(`Clicked ${ghat.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ghats;
