"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    label: "Client Projects",
    tag: "Client",
    accent: "text-orange-400",
    dot: "bg-orange-400",
    projects: [
      {
        title: "Amrita Interior Design",
        description:
          "A freelance client project — a professional portfolio platform for an interior design studio.",
        image: "/project8.png",
        link: "https://github.com/divyanshu-Go/amrita_interiordesign",
      },
    ],
  },
  {
    label: "Full Stack",
    tag: "Full Stack",
    accent: "text-blue-400",
    dot: "bg-blue-400",
    projects: [
      {
        title: "Stole Folio",
        description:
          "A full-stack eCommerce platform for interior design products with auth and payment integration.",
        image: "/project6.png",
        link: "https://stole-folio.vercel.app/",
      },
      {
        title: "Stole UI",
        description:
          "An online platform offering free UI components and design inspiration.",
        image: "/project1.png",
        link: "https://stole-ui.vercel.app/",
      },
      {
        title: "Doc Sansar",
        description:
          "Access study materials, assignments, Q&A, and educational tools for students.",
        image: "/project2.png",
        link: "https://www.docsansar.com/",
      },
    ],
  },
  {
    label: "Blockchain",
    tag: "Blockchain",
    accent: "text-purple-400",
    dot: "bg-purple-400",
    projects: [
      {
        title: "Kickstart",
        description:
          "Decentralized crowdfunding on Ethereum — transparent, trustless, on-chain.",
        image: "/project5.png",
        link: "https://kickstart-crowdfund.vercel.app/",
      },
      {
        title: "Eco-Prime",
        description:
          "A Web3 learning project exploring Solidity, IPFS storage, and blockchain development.",
        image: "/project4.png",
        link: "https://eco-prime.vercel.app/",
      },
    ],
  },
  {
    label: "Mini Projects",
    tag: "Others",
    accent: "text-neutral-400",
    dot: "bg-neutral-500",
    projects: [
      {
        title: "Snake Game",
        description:
          "A classic Snake game built with pure HTML, CSS, and JavaScript.For Mobile only",
        image: "/project9.png",
        link: "https://snake-game-divyanshu.netlify.app/",
      },
      {
        title: "Currency Converter",
        description:
          "A simple currency converter built with pure HTML, CSS, and JavaScript.",
        image: "/project10.png",
        link: "https://currencyconverter-go.netlify.app/",
      },
      {
        title: "Password Generator",
        description:
          "A simple password generator built with pure HTML, CSS, and JavaScript.",
        image: "/project11.png",
        link: "https://password-generator-go.netlify.app/",
      },
    ],
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="flex gap-5 group items-center bg-neutral-900 p-4 rounded-xl hover:bg-neutral-800/80 transition-colors border border-transparent hover:border-neutral-700"
    >
      {/* 16:9 Image */}
      <div
        className="flex-shrink-0 w-44 rounded-lg overflow-hidden bg-neutral-800 shadow-md"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={176}
          height={99}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-base group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm mt-1 line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 transition flex-shrink-0" />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section className="bg-neutral-950 text-white py-16">
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

        {/* Category Sections */}
        <div className="mt-10 flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.tag}>
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cat.dot}`} />
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${cat.accent}`}
                >
                  {cat.label}
                </span>
                <span className="text-neutral-700 text-xs ml-1">
                  ({cat.projects.length})
                </span>
              </div>

              {/* Projects in this category */}
              <div className="flex flex-col gap-4">
                {cat.projects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}