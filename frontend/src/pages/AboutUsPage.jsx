// src/pages/AboutUsPage.jsx
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FDF6E3] text-gray-900 px-6 md:px-16 py-10">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#7B2D26]">
        SanskrutiSetu
      </h1>

      {/* Background Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Background</h2>
        <p className="text-base md:text-lg leading-relaxed">
          India’s rich cultural heritage is diverse, vibrant, and full of
          stories, yet much of it remains unknown to today’s generation.
          Traditional methods of learning about heritage—books, government
          portals, or encyclopedias—often fail to engage youth effectively.
          <span className="font-semibold text-[#7B2D26]">
            {" "}
            SanskrutiSetu
          </span>{" "}
          bridges this cultural knowledge gap by transforming heritage
          exploration into an interactive, immersive, and fun experience.
        </p>
      </section>

      {/* Objectives Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
          <li>
            <span className="font-semibold">Preserve Indian Heritage:</span>{" "}
            Digitally archive stories, traditions, crafts, and folk narratives
            from various regions.
          </li>
          <li>
            <span className="font-semibold">Engage Modern Audiences:</span>{" "}
            Gamified exploration, interactive maps, AI storytelling, and short
            video reels make learning enjoyable.
          </li>
          <li>
            <span className="font-semibold">
              Encourage Community Participation:
            </span>{" "}
            Users can contribute stories, recipes, and crafts to build a
            collaborative cultural repository.
          </li>
          <li>
            <span className="font-semibold">
              Promote Tourism and Awareness:
            </span>{" "}
            Showcase historical sites, local craftsmanship, and cultural motifs
            to inspire travel and appreciation.
          </li>
          <li>
            <span className="font-semibold">Accessible for All:</span> Designed
            to be mobile-friendly, multilingual, and inclusive for youth,
            learners, tourists, and heritage enthusiasts worldwide.
          </li>
        </ul>
      </section>

      {/* Approach Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-base md:text-lg leading-relaxed">
          <span className="font-semibold">SanskrutiSetu</span> combines a
          user-friendly frontend (React + Tailwind) with a lightweight backend
          (Node.js/Firebase) and interactive features like maps, AI story
          narration, reels, and badges. By integrating technology with culture,
          it makes heritage exploration modern, engaging, and meaningful.
        </p>
      </section>

      {/* Vision Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
        <p className="text-base md:text-lg leading-relaxed">
          To reconnect today’s generation with India’s timeless traditions,
          creating a space where heritage is celebrated, shared, and preserved
          for future generations.
        </p>
      </section>
    </div>
  );
}
