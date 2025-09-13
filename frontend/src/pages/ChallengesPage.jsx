// frontend/src/pages/ChallengesPage.jsx
import varanasiData from "../data/varanasi_culture.json";

import ChallengeCard from "../components/Challenges/ChallengeCard";

export default function ChallengesPage() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">#HeritageChallenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder challenge cards */}
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
}
