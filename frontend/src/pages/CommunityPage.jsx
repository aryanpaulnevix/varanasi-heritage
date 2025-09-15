import { useState } from "react";
import CommunityWall from "../components/Community/CommunityWall";

export default function CommunityPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Example categories
  const categories = [
    "All",
    "Temples",
    "Festivals",
    "Crafts",
    "Food",
    "Stories",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-3">
        Heritage Community Forum
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Discover, discuss, and share knowledge about India’s cultural treasures.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search discussions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
        />

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                category === cat
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Community Wall (posts) */}
      <CommunityWall search={search} category={category} />
    </div>
  );
}
