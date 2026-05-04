"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-10 overflow-hidden border-t border-slate-500/50">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] 
        -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-[radial-gradient(circle,rgba(255,119,28,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* 🚀 CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start md:items-center 
          justify-between gap-10 mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Let’s build something{" "}
              <span className="text-orange-500">great.</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-md">
              Have an idea or project in mind? Let’s turn it into something
              exceptional.
            </p>
          </div>

          <button className="px-8 py-4 bg-orange-500 text-cream font-semibold 
          uppercase tracking-wider text-sm rounded-full 
          hover:bg-orange-400 transition hover:-translate-y-1">
            Get in touch →
          </button>
        </motion.div>

        {/* 🔗 Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {[
            {
              title: "Navigation",
              links: ["Home", "Projects", "Services", "Contact"],
            },
            {
              title: "Social",
              links: ["Twitter", "LinkedIn", "GitHub", "Dribbble"],
            },
            {
              title: "Resources",
              links: ["Privacy", "Terms", "Sitemap"],
            },
            {
              title: "Contact",
              links: ["hello@email.com", "+91 98765 43210"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-orange-500 mb-4 tracking-widest uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="text-slate-500 text-sm hover:text-orange-500 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🧾 Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between 
        gap-4 pt-6 border-t border-slate-500/50 text-sm text-slate-500">
          <span>© 2026 Uthaya. All rights reserved.</span>
          <span className="font-mono text-xs tracking-widest">
            Crafted with ♥ the-code-bros-dev
          </span>
        </div>

        {/* 🔥 Big Background Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          text-[clamp(100px,18vw,260px)] font-extrabold 
          text-transparent pointer-events-none select-none"
          style={{
            WebkitTextStroke: "1px rgba(255,119,28,0.4)",
          }}
        >
          CONTACT
        </motion.div>
      </div>
    </footer>
  );
}