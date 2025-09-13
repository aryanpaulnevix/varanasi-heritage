// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CityPage from "./pages/CityPage";
import PlacesPage from "./pages/PlacesPage";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:cityName" element={<CityPage />} />
          </Routes>
        </main>
        <ChatbotWidget />
      </div>
    </Router>
  );
}
