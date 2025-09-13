import React from "react";
import Card from "./Card";

const CardCarousel = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-6">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageFilename={item.imageFilename}
        />
      ))}
    </div>
  );
};

export default CardCarousel;
