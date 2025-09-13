import { Link } from "react-router-dom";
import { Home, Map, Landmark } from "lucide-react";
import { useState } from "react";
import ChatbotSVG from "../assets/icons/Chatbot.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 z-50">
      {/* Home */}
      <Link to="/" className="flex flex-col items-center">
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </Link>

      {/* Places */}
      <Link to="/places" className="flex flex-col items-center">
        <Landmark className="w-6 h-6" />
        <span className="text-xs">Places</span>
      </Link>

      {/* Map */}
      <Link to="/map" className="flex flex-col items-center">
        <Map className="w-6 h-6" />
        <span className="text-xs">Map</span>
      </Link>

      {/* Explore (Reels, Challenges, Leaderboard) */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center"
        >
          <span className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
            +
          </span>
          <span className="text-xs">Explore</span>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2">
            <Link to="/reels" className="hover:text-yellow-500">
              Reels
            </Link>
            <Link to="/challenges" className="hover:text-yellow-500">
              Challenges
            </Link>
            <Link to="/leaderboard" className="hover:text-yellow-500">
              Leaderboard
            </Link>
          </div>
        )}
      </div>

      {/* Chatbot */}
      <button className="flex flex-col items-center">
        <img src={ChatbotSVG} alt="Chatbot" className="w-6 h-6" />
        <span className="text-xs">Chatbot</span>
      </button>
    </nav>
  );
}
