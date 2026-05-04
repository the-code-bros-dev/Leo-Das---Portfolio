"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const [sent, setSent] = useState(false);

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] 
        -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-[radial-gradient(circle,rgba(255,119,28,0.06)_0%,transparent_60%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 font-anton"
        >
          <span className="font-mono text-xs text-orange-500">05.</span>
          <span className="text-xl text-slate-500 font-medium tracking-[0.3em] uppercase">
            Contact
          </span>
          <div className="flex-1 h-[1px] bg-cream/10" />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(40px,6vw,80px)] font-extrabold leading-none mb-6"
            >
              Let's <span className="text-orange-500">Talk.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed mb-10"
            >
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something remarkable together.
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-5"
            >
              {["Twitter", "LinkedIn", "Dribbble", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase text-orange-500
                  hover:text-orange-500 transition"
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="border border-orange-500/30 p-12 text-center rounded-xl">
                <div className="text-5xl mb-4">✦</div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  Message Sent!
                </h3>
                <p className="text-cream/50">I'll get back to you soon.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                
                {/* Inputs */}
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", placeholder: "Project inquiry" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-orange-500 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border border-slate-500/50
                      focus:border-orange-500/50 outline-none px-4 py-3 text-sm 
                      transition"
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border border-slate-500/50
                    focus:border-orange-500/50 outline-none px-4 py-3 text-sm 
                    resize-y transition"
                  />
                </div>

                {/* Button */}
                <button
                  onClick={() => setSent(true)}
                  className="bg-orange-500 text-cream font-bold text-sm tracking-widest uppercase 
                  px-10 py-4 w-fit hover:bg-orange-600 hover:-translate-y-1 
                  transition-all duration-200"
                >
                  Send Message →
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-cream/10 flex flex-col md:flex-row 
          justify-between items-center gap-6 text-center md:text-left"
        >
          <span className="text-xs text-cream/30">
            © 2026 uthaya. All rights reserved.
          </span>

          <span className="text-xs text-cream/20 font-mono">
            Crafted with ♥ the-code-bros-dev
          </span>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-cream/30 hover:text-orange-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}