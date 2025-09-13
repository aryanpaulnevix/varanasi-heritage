import React from "react";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";

function Food() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Food of Varanasi</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.food.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            description={item.short_description}
            imageFilename={item.image_filename}
            onClick={() => console.log(`Clicked ${item.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Food;
