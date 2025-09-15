// src/pages/ReelsPage.jsx
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/background/background_image.jpg";
import { motion } from "framer-motion";
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";

import dilli_reel from "../assets/reels/dilli_reel.mp4";
import kedarnath_reel from "../assets/reels/kedarnath_reel.mp4";
import rajasthan_reel from "../assets/reels/rajasthan_reel.mp4";
import varanasi_reel from "../assets/reels/varanasi_reel.mp4";

const reelsData = [
  {
    id: 1,
    video: dilli_reel,
    title: "Delhi Vibes",
    likes: 1200,
    comments: 300,
  },
  {
    id: 2,
    video: kedarnath_reel,
    title: "Kedarnath Journey",
    likes: 950,
    comments: 210,
  },
  {
    id: 3,
    video: rajasthan_reel,
    title: "Rajasthan Heritage",
    likes: 1800,
    comments: 450,
  },
  {
    id: 4,
    video: varanasi_reel,
    title: "Varanasi Spiritual Aarti",
    likes: 2500,
    comments: 600,
  },
];

export default function ReelsPage() {
  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(false);
  const [playingStates, setPlayingStates] = useState(reelsData.map(() => true));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const main = document.querySelector("main");
    if (main) {
      main.style.paddingTop = "0px";
      main.style.marginTop = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      if (main) {
        main.style.paddingTop = "";
        main.style.marginTop = "";
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = videoRefs.current.findIndex((v) => v === entry.target);
          if (index === -1) return;

          if (entry.isIntersecting) {
            videoRefs.current[index].play().catch(() => {});
            setPlayingStates((prev) =>
              prev.map((s, i) => (i === index ? true : s))
            );
          } else {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0;
            setPlayingStates((prev) =>
              prev.map((s, i) => (i === index ? false : s))
            );
          }
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  // Add effect for pausing when another tab is being opened
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden → pause all videos
        videoRefs.current.forEach((video, index) => {
          if (video && !video.paused) {
            video.pause();
            setPlayingStates((prev) =>
              prev.map((s, i) => (i === index ? false : s))
            );
          }
        });
      } else {
        // Tab is visible again → resume only the visible video
        videoRefs.current.forEach((video, index) => {
          const rect = video.getBoundingClientRect();
          const inView =
            rect.top >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight);

          if (video && inView) {
            video.play().catch(() => {});
            setPlayingStates((prev) =>
              prev.map((s, i) => (i === index ? true : s))
            );
          }
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ✅ Toggle only if click is inside safe center zone
  const handleVideoClick = (e, index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const rect = video.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const safeX1 = rect.width * 0.3;
    const safeX2 = rect.width * 0.7;
    const safeY1 = rect.height * 0.3;
    const safeY2 = rect.height * 0.7;

    if (x >= safeX1 && x <= safeX2 && y >= safeY1 && y <= safeY2) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) =>
          prev.map((s, i) => (i === index ? true : s))
        );
      } else {
        video.pause();
        setPlayingStates((prev) =>
          prev.map((s, i) => (i === index ? false : s))
        );
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth hide-scrollbar">
        {reelsData.map((reel, index) => (
          <motion.div
            key={reel.id}
            className="w-full h-screen snap-start flex justify-center items-center relative border-b border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="relative w-[90%] max-w-[420px] aspect-[9/16] overflow-hidden rounded-xl flex justify-center items-center shadow-lg bg-black"
              onClick={(e) => handleVideoClick(e, index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.video}
                loop
                playsInline
                muted={muted}
                autoPlay
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
              />

              <div className="absolute bottom-5 left-3 text-white z-10">
                <h2 className="text-lg font-semibold">{reel.title}</h2>
              </div>

              <div className="absolute right-3 bottom-5 flex flex-col gap-4 items-center text-white z-10">
                <button className="flex flex-col items-center">
                  <Heart className="w-6 h-6" />
                  <span className="text-sm">{reel.likes}</span>
                </button>
                <button className="flex flex-col items-center">
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-sm">{reel.comments}</span>
                </button>
                <button className="flex flex-col items-center">
                  <Share2 className="w-6 h-6" />
                </button>
                <button>
                  <Play className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMuted((prev) => !prev);
                  }}
                >
                  {muted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>
              </div>

              {!playingStates[index] && (
                <div className="absolute inset-0 flex justify-center items-center bg-black/30">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
