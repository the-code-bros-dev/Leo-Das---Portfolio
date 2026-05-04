"use client";
import Reveal from "@/utils/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

/* ✅ Correct Type */
const allprojects = [
  {
    num: "01",
    title: "Brand Identity System",
    category: "Branding · Visual Design",
    desc: "Logo, typography, and color system for a startup.",
    year: "2025",
    color: "text-orange-500",
    border: "border-orange-500/30",
  },
  {
    num: "02",
    title: "E-Commerce UI",
    category: "UI/UX · Web",
    desc: "Modern shopping UI with cart and checkout.",
    year: "2025",
    color: "text-slate-500",
    border: "border-slate-500/30",
  },
  {
    num: "03",
    title: "Analytics Dashboard",
    category: "SaaS · Data UI",
    desc: "Charts, metrics and admin panel.",
    year: "2026",
    color: "text-orange-500",
    border: "border-orange-500/30",
  },
  {
    num: "04",
    title: "Portfolio Website",
    category: "Frontend · Animation",
    desc: "Personal portfolio with smooth animations.",
    year: "2026",
    color: "text-slate-500",
    border: "border-slate-500/30",
  },
  {
    num: "05",
    title: "Food Delivery App",
    category: "Mobile UI",
    desc: "Clean UX for ordering food quickly.",
    year: "2026",
    color: "text-orange-500",
    border: "border-orange-500/30",
  },
  {
    num: "06",
    title: "Crypto Landing Page",
    category: "Web3 · Marketing",
    desc: "Landing page for blockchain startup.",
    year: "2026",
    color: "text-slate-500",
    border: "border-slate-500/30",
  },
];

export default function Projects() {
  const [view, setView] = useState<"half" | "all">("half");
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  /* ✅ Simple logic */
  const displayedProjects =
    view === "half" ? allprojects.slice(0, 4) : allprojects;

  return (
    <section ref={ref} id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 
        bg-[radial-gradient(rgba(255,119,28,0.04)_1px,transparent_1px)] 
        [background-size:40px_40px]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 font-anton"
        >
          <span className="font-mono text-xs text-orange-500">04.</span>
          <span className="text-xl text-slate-500 font-medium font-anton tracking-[0.3em] uppercase">
            Projects
          </span>
          <div className="flex-1 h-[1px] bg-[#f5ede01a]" />
        </motion.div>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(36px,4vw,52px)] font-extrabold"
          >
            Selected <span className="text-orange-500">Work</span>
          </motion.h2>

          {/* Toggle */}
          <Reveal delay={0.2}>
            <button
              onClick={() =>
                setView((prev) => (prev === "half" ? "all" : "half"))
              }
              className="text-orange-500/70  hover:text-orange-400 text-sm font-mono tracking-widest uppercase transition flex items-center gap-2"
            >
              {view === "half" ? "Show more" : "Show less"} →
            </button>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedProjects.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Link href="#">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group md:p-4 p-2 rounded-3xl border border-orange-500/50 hover:shadow-xs shadow-orange-500 transition-all hover:-translate-y-2 duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg mb-3">
                    <div
                      className="w-full h-40 bg-orange-500/20 
                    group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-orange-500 font-bold text-sm mb-1 
                  group-hover:text-orange-400 transition"
                  >
                    {p.title}
                  </h3>

                  <span className="text-slate-500 text-xs font-mono">
                    {p.category}
                  </span>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Big Text */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mt-24 text-[clamp(80px,12vw,160px)] font-extrabold 
  text-transparent pointer-events-none select-none"
  style={{
    WebkitTextStroke: "1px rgba(255,119,28,0.5)",
  }}
>
  HELLO
</motion.div>
      </div>
    </section>
  );
}

// "use client";
// import Reveal from "@/utils/Reveal";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// type Project = {
//   _id: string;
//   name: string;
//   description: string;
//   image: string;
//   liveUrl: string;
// };

// export default function Projects() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   // ✅ Fetch on client
//   useEffect(() => {
//     let isMounted = true;

//     const fetchProjects = async () => {
//       const res = await fetch("/api/projects");
//       const data = await res.json();

//       if (isMounted) {
//         setProjects(data);
//       }
//     };

//     fetchProjects();

//     return () => {
//       isMounted = false;
//     };
//   }, []);
// const [view, setView] = useState("half");

// const displayedProjects = useMemo(() => {
//   return view === "half"
//     ? projects.slice(0, 4)
//     : projects;
// }, [view, projects]);
//   return (
//     <section id="projects" className="py-32 bg-dark-bg">
//       <div className="max-w-7xl mx-auto px-6 md:max-w-none md:mx-0">
//         <Reveal>
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-neon-yellow font-mono text-sm tracking-widest">
//               04.
//             </span>
//             <span className="text-white/20 text-sm tracking-widest uppercase">
//               Real-World Projects
//             </span>
//             <div className="flex-1 h-px bg-white/10" />
//           </div>
//         </Reveal>
//         <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
//           <Reveal delay={0.1}>
//             <h2 className="text-5xl md:text-6xl font-black text-white">
//               Selected <br />
//               <span className="text-neon-yellow">Work</span>
//             </h2>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <div
//               className="text-white/40 hover:text-neon-yellow text-sm font-mono tracking-widest uppercase transition-colors flex items-center gap-2"
//               onClick={() => setView(view === "half" ? "all" : "half")}
//             >
//               {view === "half" ? "Show more" : "show less"} <span>→</span>
//             </div>
//           </Reveal>
//         </div>
//         <div className="grid lg:grid-cols-4 gap-3 md:gap-8 md:px-5">
//           {displayedProjects.map((p, i) => (
//             <Reveal key={i} delay={i * 0.08}>
//               <Link href={p.liveUrl} target="_blank">
//                 <motion.div
//                   className="group md:p-4 p-2 rounded-3xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-xs shadow-neon-yellow transition-all hover:-translate-y-5 duration-300 cursor-pointer">
//                     <div
//                     className="overflow-hidden rounded-lg">
//                       <Image
//                       src={p.image}
//                       alt={p.name}
//                       width={400}
//                       height={400}
//                     className=" h-auto rounded-lg col-span-1 group-hover:scale-110 transition-transform duration-300" />
//                     </div>
//                     <div className="py-2">
//                       <h3 className="text-white font-bold tracking-wide text-sm md:text-sm group-hover:text-neon-yellow transition-colors duration-300">
//                         {p.name}
//                       </h3>
//                       <span className="text-white/30 text-sm font-mono">
//                         {p.description}
//                       </span>
//                     </div>
//                 </motion.div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
