"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const skills = [
  "Figma",
  "React",
  "Next.js",
  "Webflow",
  "Motion Design",
  "Brand Identity",
  "Design Systems",
  "Prototyping",
];

const timeline = [
  { role: "MERN Stack Developer", company: "Abode Explorers · Remote", period: "2025 – 2026" },
  { role: "UI Designer", company: "Freelance · Global", period: "2025 – Present" },
  { role: "Web Designer", company: "Freelance · Global", period: "2025 – Present" },
  { role: "Content Creator", company: "the_code_bros_dev · YouTube/Instagram", period: "2026 – Present" },
];

function useParallax(offset: [number, number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], offset);
  const y = useSpring(raw, { stiffness: 60, damping: 25 });

  return { ref, y };
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const { ref: floatRef, y: floatY } = useParallax([30, -30]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -left-[300px] top-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(84,104,119,0.08)_0%,transparent_70%)]" />
        <div className="absolute right-0 bottom-0 w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-orange-500 tracking-widest">
            02.
          </span>
          <span className="text-xl text-slate-500 font-medium font-anton tracking-[0.3em] uppercase">
            About Me
          </span>
          <div className="flex-1 h-px bg-[#f5ede014]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(36px,4vw,52px)] font-extrabold leading-tight tracking-tight mb-8"
            >
              I design with <span className="text-orange-500">purpose</span> & <br />
              obsess over <span className="text-slate-500">details.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base leading-relaxed text-slate-800 mb-6"
            >
              As a MERN stack developer experienced in Next.js, I build scalable
              and high-performance web applications. With a growing focus on
              UI/UX, I aim to create digital experiences that are both visually
              appealing and easy to use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base leading-relaxed text-slate-800  mb-10"
            >
              I specialize in translating complex problems into clean,
              intuitive interfaces. Whether it's a mobile app or a full design
              system, I bring equal rigor to aesthetics and function.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="px-4 py-2 text-xs font-semibold border border-orange-500/30 text-orange-500 rounded-sm tracking-wide uppercase
                  hover:bg-orange-500/20 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div ref={floatRef}>
            <motion.h3
              style={{ y: floatY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-slate-500 tracking-widest uppercase mb-8 font-mono"
            >
              {/* // Experience */}
            </motion.h3>

            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group relative flex justify-between items-start py-7 border-b border-orange-500 transition-all duration-300 hover:pl-4"
                >
                  {/* Left */}
                  <div>
                    <div className="text-base font-bold text-slate-800 mb-1">
                      {item.role}
                    </div>
                    <div className="text-sm text-slate-600 tracking-wide">
                      {item.company}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="text-[11px] text-orange-500 font-mono tracking-wide whitespace-nowrap ml-4 mt-1">
                    {item.period}
                  </div>

                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}