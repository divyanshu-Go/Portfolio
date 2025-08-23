"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Stole UI",
    description:
      "An online platform to get free UI components and design inspiration.",
    image: "/project1.png",
    link: "#",
    tag: "Platform",
  },
  {
    title: "Doc Sansar",
    description: "Access study materials, assignments, Q&A, educational tools",
    image: "/project2.png",
    link: "#",
    tag: "Platform",
  },
  {
    title: "Stole Folio",
    description: "A free online platform to create stunning, professional portfolios in minutes.",
    image: "/project3.png",
    link: "#",
    tag: "Platform",
  },
];

export default function Projects() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          RECENT <br />
          <span className="text-neutral-600">PROJECTS</span>
        </motion.h2>

        {/* Projects List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 flex flex-col gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex gap-6 group items-center bg-neutral-900 p-4 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-800 shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={160}
                  height={112}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>

              {/* Icon */}
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-orange-500 transition" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
