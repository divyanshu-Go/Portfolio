"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Designing Scalable MERN Stack Applications",
    description:
      "Exploring architecture patterns, database structuring, and UI/UX decisions that help build scalable full-stack apps using MongoDB, Express, React, and Node.js.",
    date: "Aug 10, 2025",
  },
  {
    title: "Next.js + Tailwind: Building High-Performance UIs",
    description:
      "A guide to crafting sleek, responsive, and fast web applications by combining Next.js's SSR power with Tailwind CSS's utility-first design approach.",
    date: "Jul 25, 2025",
  },
  {
    title: "From Figma to Code: A Developer’s Perspective",
    description:
      "Translating modern UI/UX designs into pixel-perfect, responsive, and maintainable code without losing design intent.",
    date: "Jun 14, 2025",
  },
  {
    title: "Smart Contracts & Web3 Integration with Solidity",
    description:
      "Best practices for writing secure smart contracts and integrating blockchain functionalities into modern web apps.",
    date: "May 5, 2025",
  },
];


export default function DesignThoughts() {
  return (
    <section
      id="thoughts"
      className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24 "
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          DESIGN <br />
          <span className="text-neutral-600">THOUGHTS</span>
        </motion.h2>

        {/* Posts List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 space-y-10"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="border-b border-neutral-800 pb-8 last:border-b-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold flex items-center gap-2 hover:text-orange-500 transition">
                    
                      {post.title}
                    <ArrowUpRight className="w-4 h-4 text-orange-500" />
                  </h3>
                  <p className="text-neutral-400 text-sm mt-2">
                    {post.description}
                  </p>
                  <p className="text-neutral-500 text-xs mt-3">{post.date}</p>
                </div>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
