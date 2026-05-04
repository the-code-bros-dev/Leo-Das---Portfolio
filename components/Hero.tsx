"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../assets/leo.png";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 font-syne"
    >
      {/* ── Background gradient blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large warm orange/yellow central glow */}
        <div
          className="absolute"
          style={{
            top: "-10%",
            left: "15%",
            width: "70%",
            height: "90%",
            background:
              "radial-gradient(ellipse at center, rgba(255,185,80,0.55) 0%, rgba(255,200,100,0.35) 30%, rgba(253,245,220,0.0) 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Softer peach layer */}
        <div
          className="absolute"
          style={{
            top: "5%",
            left: "25%",
            width: "50%",
            height: "70%",
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(255,160,50,0.28) 0%, rgba(255,220,130,0.18) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Right-side warm accent */}
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "0%",
            width: "35%",
            height: "60%",
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(255,210,100,0.3) 0%, transparent 65%)",
            filter: "blur(55px)",
          }}
        />
      </div>

      {/* ── Noise / grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between ">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[2px] bg-orange-500" />
              <span className="text-[12px] tracking-[0.3em] uppercase text-orange-500 font-mono">
                Available for work
              </span>
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(48px,6vw,100px)] font-extrabold leading-none tracking-widest text-slate-500 mb-2 font-anton"
            >
              Hey, I'm
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(56px,7vw,96px)] font-extrabold leading-none tracking-tight text-orange-500 mb-6"
            >
              Leo Das.
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-6 overflow-hidden"
            >
              <span className="text-[clamp(20px,2.5vw,28px)] font-bold text-slate-500">
                Creative Designer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-slate max-w-md mb-10"
            >
              UX leader · design thinker · product designer. I craft digital
              experiences that are authentic, elegant, and human-centered.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-orange-500 text-white px-9 py-4 font-bold text-sm tracking-wider uppercase rounded-sm transition border-2 border-orange-500/60 hover:bg-transparent hover:text-orange-500 duration-300 relative overflow-hidden"
              >
                View Work ↗
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative group overflow-hidden px-9 py-4 text-sm font-semibold tracking-wider uppercase rounded-md border-2 border-orange-500/60 text-orange-500 transition-all duration-300"
              >
                {/* 🔥 Background Fill */}
                <span
                  className="absolute inset-0 bg-orange-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"
                />

                {/* ✨ Glow Effect */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-orange-400/40 transition duration-300 z-0"
                />

                {/* 🧠 Text */}
                <span className="relative z-10 group-hover:text-white transition duration-300">
                  Let's Collaborate →
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-12 mt-6 border-t border-[#f5ede01a] font-anton tracking-widest"
            >
              {[
                ["2+", "Years Exp."],
                ["50+", "Projects"],
                ["98%", "Happy Clients"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-4xl font-extrabold text-orange-500 leading-none">
                    {num}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center mr-20"
          >
            {/* Rings-1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] border-2 border-dashed border-orange-500/50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Rings-2 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] border-t-4 border-dashed border-orange-500/50 
               rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] border-t-4 border-dashed border-orange-500/50 
               rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Rings-3 */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] border border-orange-500/20
              rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Rings-4 */}
            <motion.div
              className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] border-2 border-orange-500/50 shadow-2xl 
              rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-bg"
            />
            {/* Image Box */}
            <div className="overflow-hidden rounded-full">
              <Image
                src={profile}
                alt="Leo Das"
                className="object-contain w-60 h-60 md:h-70 md:w-70"
              />
            </div>

            {/* Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-5 -right-5 bg-orange-500 text-[#161311] px-5 py-3 rounded-md text-xs font-bold tracking-wide"
            >
              MERN Stack <br />
              <span className="opacity-70 font-normal">Developer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-orange-500 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-10 bg-linear-to-b from-orange-500 to-transparent"
        />
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}
