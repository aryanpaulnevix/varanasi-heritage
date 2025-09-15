// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // To detect Reels page
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const [showDesktopNav, setShowDesktopNav] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.toLowerCase();
    if (query === "varanasi") navigate("/places/varanasi");
  };

  // Auto-hide navbar only on Reels page for desktop
  useEffect(() => {
    if (location.pathname !== "/reels") {
      setShowDesktopNav(true);
      return;
    }

    const handleMouseMove = (e) => {
      // Show navbar if cursor near top 60px
      if (e.clientY < 60) setShowDesktopNav(true);
      else setShowDesktopNav(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex justify-between items-center bg-[#7B2D26] text-white px-8 py-4 shadow-md fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          showDesktopNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Sanskruti Setu
        </Link>

        {/* Links */}
        <div className="flex gap-8 items-center">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          {/* Places Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="hover:text-yellow-300 transition flex items-center gap-1"
            >
              Places ▼
            </button>
            {openDropdown && (
              <div
                className="absolute left-0 top-full bg-white text-black shadow-md rounded min-w-[150px] z-50"
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <Link
                  to="/places/varanasi"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Varanasi
                </Link>
              </div>
            )}
          </div>

          <Link to="/reels" className="hover:text-yellow-300 transition">
            Reels
          </Link>
          <Link to="/challenges" className="hover:text-yellow-300 transition">
            Challenges
          </Link>
          <Link to="/leaderboard" className="hover:text-yellow-300 transition">
            Leaderboard
          </Link>
          <Link to="/community" className="hover:text-yellow-300 transition">
            Community
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About Us
          </Link>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="ml-6">
          <input
            type="text"
            name="search"
            placeholder="Search places..."
            className="px-3 py-1 rounded text-black"
          />
        </form>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-[#7B2D26] text-white flex justify-around py-3 shadow-inner z-50">
        <Link to="/" className="flex flex-col items-center">
          Home
        </Link>

        {/* Places Dropdown (mobile) */}
        <div className="relative">
          <button
            className="flex flex-col items-center"
            onClick={() => setMobileDropdown(!mobileDropdown)}
          >
            Places ▼
          </button>
          {mobileDropdown && (
            <div
              className="absolute bottom-12 left-0 bg-white text-black shadow-md rounded min-w-[150px] z-50"
              onMouseLeave={() => setMobileDropdown(false)}
            >
              <Link
                to="/places/varanasi"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setMobileDropdown(false)}
              >
                Varanasi
              </Link>
            </div>
          )}
        </div>

        <Link to="/reels" className="flex flex-col items-center">
          Reels
        </Link>
        <Link to="/challenges" className="flex flex-col items-center">
          Challenges
        </Link>
        <Link to="/leaderboard" className="flex flex-col items-center">
          Leaderboard
        </Link>
        <Link to="/community" className="flex flex-col items-center">
          Community
        </Link>
        <Link to="/about" className="flex flex-col items-center">
          About
        </Link>
      </nav>
    </>
  );
}
