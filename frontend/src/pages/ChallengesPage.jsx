// src/pages/ChallengesPage.jsx
import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Capture Sunrise at Ghat",
    reward: "50 points",
    completed: false,
  },
  { id: 2, title: "Try 3 Local Foods", reward: "100 points", completed: true },
  {
    id: 3,
    title: "Learn 5 Words in Bhojpuri",
    reward: "70 points",
    completed: false,
  },
];

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 p-6">
      <motion.h1
        className="text-3xl font-bold mb-6 flex items-center gap-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Trophy className="w-8 h-8 text-yellow-600" /> Challenges
      </motion.h1>

      <div className="space-y-6">
        {challenges.map((ch) => (
          <motion.div
            key={ch.id}
            className={`p-4 rounded-xl shadow-md flex justify-between items-center ${
              ch.completed ? "bg-green-100" : "bg-white"
            }`}
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <h2 className="text-xl font-semibold">{ch.title}</h2>
              <p className="text-gray-600">{ch.reward}</p>
            </div>
            {ch.completed ? (
              <CheckCircle className="text-green-600 w-7 h-7" />
            ) : (
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Start
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
