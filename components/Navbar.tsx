"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Service", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 transition-all duration-400
        ${scrolled
          ? "py-3 bg-[#161311]/95 backdrop-blur-md border-orange-500/20"
          : "py-6 bg-transparent"
        }`}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("home")}
        className="flex items-center cursor-none"
      >
        <div className={`${scrolled ? "bg-orange-500" : "border border-orange-500"} px-2 rounded-md`}>
          <h1 className={`ml-1 text-xl ${scrolled ?"text-cream":"text-orange-500" } font-anton tracking-widest font-medium  uppercase `}>ME</h1>
        </div>
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-12">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`cursor-pointer text-sm font-medium tracking-wide uppercase ${scrolled ?"text-[#f5ede0]/70":"text-slate-700"} transition hover:text-orange-500 hover:opacity-100`}
          >
            {link}
          </button>
        ))}

        <button
          onClick={() => scrollTo("contact")}
          className="cursor-pointer bg-orange-500 text-cream px-6 py-2.5 text-xs font-bold tracking-wider uppercase rounded-sm transition hover:bg-orange-600"
        >
          Let's Talk →
        </button>
      </div>

      {/* Hamburger */}
      <button
        className="flex flex-col gap-[5px] md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-7 h-[2px] bg-orange-500 rounded"
            animate={{
              rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0,
              y: open && i === 0 ? 7 : open && i === 2 ? -7 : 0,
              opacity: open && i === 1 ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] left-0 right-0 bg-[#161311] border-b border-orange-500/20 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-lg font-semibold text-[#f5ede0] cursor-pointer"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}