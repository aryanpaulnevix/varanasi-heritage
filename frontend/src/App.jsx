import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";
import MapPage from "./pages/MapPage";
import Festivals from "./pages/Festivals";
import Monuments from "./pages/Monuments";
import Food from "./pages/Food";
import Crafts from "./pages/Crafts";
import Stories from "./pages/Stories";
import Ghats from "./pages/Ghats";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <HomePage />;
      case "Festivals":
        return <Festivals />;
      case "Monuments":
        return <Monuments />;
      case "Food":
        return <Food />;
      case "Crafts":
        return <Crafts />;
      case "Stories":
        return <Stories />;
      case "Ghats":
        return <Ghats />;
      case "Map":
        return <MapPage />;
      default:
        return <HomePage />;
    }
  };

  const pages = [
    "Home",
    "Festivals",
    "Monuments",
    "Food",
    "Crafts",
    "Stories",
    "Ghats",
    "Map",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-yellow-500 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-xl font-bold">Varanasi Heritage</h1>
          <div className="space-x-4">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-3 py-2 rounded-md font-medium ${
                  activePage === page ? "bg-red-500" : "hover:bg-red-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Page Content with top margin so navbar doesn’t overlap */}
      <main className="p-4 max-w-7xl mx-auto mt-20">{renderPage()}</main>

      {/* ✅ Floating Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default App;
