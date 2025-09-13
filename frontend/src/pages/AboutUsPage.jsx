// src/pages/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Prototype Places</h1>
      <p className="text-gray-700 mb-4">
        This is a prototype website showcasing different places. Currently, it
        displays Varanasi as a sample city with categories like Food, Monuments,
        Festivals, Crafts, Stories, Ghats, and Map.
      </p>
      <p className="text-gray-700">
        In the future, more cities and richer content will be added. The
        navigation bar, search functionality, and dropdown menus are designed to
        scale with additional cities and categories.
      </p>
    </div>
  );
}
