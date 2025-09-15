// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReelsPage from "./pages/ReelsPage";
import Community from "./pages/CommunityPage";
import ChallengesPage from "./pages/ChallengesPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CityPage from "./pages/CityPage";
import PlacesPage from "./pages/PlacesPage";
import ChatbotWidget from "./components/ChatbotWidget/ChatbotWidget";

function AppContent({ activePage, setActivePage }) {
  const location = useLocation();

  // Check if we are on homepage
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {isHomePage ? (
        // HomePage without extra wrapper, full background
        <HomePage />
      ) : (
        // Other pages with padding & max-width
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:cityName" element={<CityPage />} />
          </Routes>
        </main>
      )}

      <ChatbotWidget />
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <AppContent activePage={activePage} setActivePage={setActivePage} />
          }
        />
      </Routes>
    </Router>
  );
}
