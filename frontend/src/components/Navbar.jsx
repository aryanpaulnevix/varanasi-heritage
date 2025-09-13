// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const allPlaces = ["Varanasi"]; // add more places later

export default function Navbar({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // filter places based on search input
  const filteredPlaces = allPlaces.filter((place) =>
    place.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaceClick = (place) => {
    setActivePage("Places");
    navigate(`/places/${place}`);
    setPlacesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#7B2D26] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-white title-font">
          Prototype Places
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activePage === "Home"
                ? "bg-[#F2A007] text-[#7B2D26]"
                : "text-white hover:bg-[#5e1f1b]"
            }`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </Link>

          {/* Places Dropdown */}
          <div className="relative">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 ${
                activePage === "Places"
                  ? "bg-[#F2A007] text-[#7B2D26]"
                  : "text-white hover:bg-[#5e1f1b]"
              }`}
              onMouseEnter={() => setPlacesOpen(true)}
              onMouseLeave={() => setPlacesOpen(false)}
            >
              <span>Places</span>
              <span>▼</span>
            </button>

            {placesOpen && (
              <div
                onMouseEnter={() => setPlacesOpen(true)}
                onMouseLeave={() => setPlacesOpen(false)}
                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 p-2"
              >
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {/* Places List */}
                {filteredPlaces.map((place) => (
                  <button
                    key={place}
                    className="w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                    onClick={() => handlePlaceClick(place)}
                  >
                    {place}
                  </button>
                ))}
                {filteredPlaces.length === 0 && (
                  <p className="text-gray-400 text-sm px-2 py-1">No results</p>
                )}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              activePage === "About"
                ? "bg-[#F2A007] text-[#7B2D26]"
                : "text-white hover:bg-[#5e1f1b]"
            }`}
            onClick={() => setActivePage("About")}
          >
            About
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md bg-[#F2A007] text-[#7B2D26] font-bold"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute right-4 left-4 mt-1 bg-white text-[#7B2D26] rounded shadow-lg z-40 overflow-hidden p-2">
          <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);
              setActivePage("Home");
            }}
            className="block px-4 py-2 border-b last:border-b-0"
          >
            Home
          </Link>

          {/* Mobile Places */}
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {filteredPlaces.map((place) => (
              <button
                key={place}
                className="block w-full text-left px-2 py-1 mb-1 rounded hover:bg-gray-100"
                onClick={() => {
                  handlePlaceClick(place);
                  setMobileOpen(false);
                }}
              >
                {place}
              </button>
            ))}
          </div>

          <Link
            to="/about"
            onClick={() => {
              setMobileOpen(false);
              setActivePage("About");
            }}
            className="block px-4 py-2 border-b last:border-b-0"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
