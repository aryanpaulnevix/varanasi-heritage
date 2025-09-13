import React from "react";
import data from "../data/varanasi_culture.json";
import Card from "../components/Card";

function Stories() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Folk Tales of Varanasi</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {data.stories.map((story, index) => (
          <Card
            key={index}
            title={story.title}
            description={story.text}
            imageFilename={story.image_filename}
            onClick={() => console.log(`Clicked ${story.title}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Stories;
