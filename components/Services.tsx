"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  { icon: "✦", title: "UI/UX Creative Design", desc: "Research-driven interfaces that balance beauty and usability across all platforms.", tags: ["Figma", "Prototyping"] },
  { icon: "◈", title: "Visual & Graphic Design", desc: "Brand identities, motion graphics, and visual systems that make lasting impressions.", tags: ["Branding", "Motion"] },
  { icon: "⊛", title: "Strategy & Digital Marketing", desc: "Data-backed design strategies that align business goals with user needs.", tags: ["Analytics", "Growth"] },
  { icon: "⬡", title: "Webflow Development", desc: "Pixel-perfect no-code builds with animations, CMS, and performance optimization.", tags: ["Webflow", "CMS"] },
  { icon: "◎", title: "Design Systems", desc: "Scalable, documented component libraries for consistent product experiences.", tags: ["Tokens", "Docs"] },
  { icon: "⟡", title: "Product Consulting", desc: "Strategic guidance on product direction, team structure, and design processes.", tags: ["Strategy", "Audit"] },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      id="service"
      className="relative py-28 overflow-hidden bg-slate-500/5"
    >
      {/* 🔥 Background Glow */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute right-[-200px] top-1/2 w-[600px] h-[600px] rounded-full 
        bg-[radial-gradient(circle,rgba(255,119,28,0.05)_0%,transparent_70%)] -translate-y-1/2" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 font-anton"
        >
          <span className="font-mono text-xs text-orange-500">03.</span>
          <span className="text-xl text-slate-500 font-medium tracking-[0.3em] uppercase ">
            Services
          </span>
          <div className="flex-1 h-[1px] bg-[#f5ede01a]" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(36px,4vw,52px)] font-extrabold tracking-tight mb-16"
        >
          What I'm <span className="text-orange-500">Offering</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] font-syne">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative p-10 border hover:border-[#f5ede010] 
              hover:bg-[#161311]/60 cursor-pointer
              transition-all duration-300
              bg-orange-500/5 border-orange-500/30"
            >
              {/* Icon */}
              <div className="text-2xl text-orange-500 mb-5">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-orange-500">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-500 mb-6 group-hover:text-cream">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-3 py-1 border-2 border-orange-500/30 
                    text-orange-500 uppercase tracking-widest rounded-sm group-hover:text-cream"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 text-lg text-orange-500/30 
              transition group-hover:text-orange-500">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}