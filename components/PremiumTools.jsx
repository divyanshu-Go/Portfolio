"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    desc: "Design Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  },
  {
    name: "Notion",
    desc: "Productivity Tool",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Next.js",
    desc: "React Framework",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Tailwind CSS",
    desc: "CSS Framework",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
  },
  {
    name: "Visual Studio Code",
    desc: "Code Editor",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg",
  },
  {
    name: "GitHub",
    desc: "Version Control",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  },
  {
    name: "Vercel",
    desc: "Deployment Platform",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg",
  },
  {
    name: "MongoDB",
    desc: "Database",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mongodb.svg",
  },
  {
    name: "Express.js",
    desc: "Backend Framework",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/express.svg",
  },
  {
    name: "Node.js",
    desc: "Backend Runtime",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg",
  },
  {
    name: "Solidity",
    desc: "Smart Contract Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/solidity.svg",
  },
  {
    name: "JavaScript",
    desc: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg",
  },
];

export default function PremiumTools() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          PREMIUM <br />
          <span className="text-neutral-600">TOOLS</span>
        </motion.h2>

        {/* Tools Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md shadow-md">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="transition-colors duration-300 group-hover:text-orange-500">
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-neutral-400 text-sm">{tool.desc}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
