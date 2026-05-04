"use client";
import { motion } from "framer-motion";

const items = [
  "Web Design",
  "App Design",
  "Development",
  "Branding",
  "Webflow",
  "Motion",
  "UX Research",
  "MERN Stack",
  "Next.js",
  "Figma",
];

export default function Ticker() {
  return (
    <div className="relative overflow-hidden mt-20 border-y border-black/10 bg-orange-500">

      {/* 🔥 Fade edges (premium feel) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-orange-500 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-orange-500 to-transparent z-10" />

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* ✅ Duplicate for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 py-4 whitespace-nowrap"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-cream">
              {item}
            </span>
            <span className="text-cream/40">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}