// src/pages/LeaderboardPage.jsx
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const leaderboard = [
  { id: 1, name: "Aryan", points: 1250 },
  { id: 2, name: "Priya", points: 1150 },
  { id: 3, name: "Rahul", points: 980 },
  { id: 4, name: "Sneha", points: 870 },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <motion.h1
        className="text-3xl font-bold mb-6 flex items-center gap-2 text-purple-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Crown className="w-8 h-8 text-yellow-500" /> Leaderboard
      </motion.h1>

      <div className="bg-white rounded-2xl shadow-lg p-4 divide-y">
        {leaderboard.map((user, idx) => (
          <motion.div
            key={user.id}
            className="flex justify-between items-center py-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold">{idx + 1}.</span>
              <span className="text-lg">{user.name}</span>
            </div>
            <span className="font-semibold text-purple-600">
              {user.points} pts
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
