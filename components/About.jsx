"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, SquareStack } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          WEB <br /> DEVELOPER
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 mt-4 max-w-lg"
        >
          Passionate full-stack developer who loves turning ideas into impactful,
          user-friendly products.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-8 mt-10"
        >
          <div>
            <p className="text-3xl font-bold">+2</p>
            <p className="text-xs text-neutral-400 uppercase">
              Years of <br /> Experience
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">+12</p>
            <p className="text-xs text-neutral-400 uppercase">
              Projects <br /> Completed
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">2</p>
            <p className="text-xs text-neutral-400 uppercase">
              Clients <br /> Project
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        >
          {/* Card 1 - Orange */}
          <div className="relative bg-orange-500 rounded-xl p-6 overflow-hidden cursor-pointer group">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <circle cx="150" cy="50" r="200" fill="none" stroke="white" strokeWidth="50" />
              </svg>
            </div>
            <Layers className="w-6 h-6 mb-4 relative z-10" />
            <p className="font-bold uppercase text-sm leading-tight relative z-10">
              Dynamic Animation, <br /> Motion Design
            </p>
            <div className="mt-4 flex justify-end relative z-10">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 - Green */}
          <div
            className="relative bg-lime-400 text-black rounded-xl p-6 overflow-hidden cursor-pointer group"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 12px)",
            }}
          >
            <SquareStack className="w-6 h-6 mb-4 relative z-10" />
            <p className="font-bold uppercase text-sm leading-tight relative z-10">
              Framer, Figma, <br /> Wordpress, ReactJS
            </p>
            <div className="mt-4 flex justify-end relative z-10">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
