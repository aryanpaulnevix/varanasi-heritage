// src/pages/ReelsPage.jsx
import { motion } from "framer-motion";
import { Play, Heart, MessageCircle } from "lucide-react";

const reelsData = [
  {
    id: 1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Morning Aarti at Varanasi",
    likes: 1200,
    comments: 230,
  },
  {
    id: 2,
    video: "https://www.w3schools.com/html/movie.mp4",
    title: "Street Food Walk",
    likes: 980,
    comments: 140,
  },
];

export default function ReelsPage() {
  return (
    <div className="h-screen w-full overflow-y-scroll bg-black text-white snap-y snap-mandatory">
      {reelsData.map((reel) => (
        <motion.div
          key={reel.id}
          className="h-screen w-full flex items-center justify-center relative snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <video
            src={reel.video}
            controls
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />

          {/* Overlay info */}
          <div className="absolute bottom-10 left-5">
            <h2 className="text-lg font-semibold">{reel.title}</h2>
          </div>

          {/* Actions */}
          <div className="absolute right-5 bottom-20 flex flex-col gap-6 items-center">
            <button className="flex flex-col items-center">
              <Heart className="w-7 h-7" />
              <span className="text-sm">{reel.likes}</span>
            </button>
            <button className="flex flex-col items-center">
              <MessageCircle className="w-7 h-7" />
              <span className="text-sm">{reel.comments}</span>
            </button>
            <button>
              <Play className="w-7 h-7" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
