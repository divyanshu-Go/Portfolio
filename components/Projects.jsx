"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Stole UI",
    description:
      "An online platform to get free UI components and design inspiration.",
    image: "/project1.png", // place in public/projects/
    link: "#",
    tag: "Platform",
  },
  {
    title: "NajmAI",
    description: "SaaS Framer Template",
    image: "/project2.png",
    link: "#",
    tag: "Template",
  },
  {
    title: "Nashra",
    description: "SaaS Framer Template",
    image: "/project3.png",
    link: "#",
    tag: "Template",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold">
          RECENT <br/><span className="text-neutral-600">PROJECTS</span>
        </h2>

        {/* Projects List */}
        <div className="mt-10 flex flex-col gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group items-start"
            >
              {/* Project Image */}
              <div className="w-32 h-20 flex-shrink-0 rounded-md overflow-hidden bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={128}
                  height={80}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">
                  {project.description}
                </p>
              </div>

              {/* Icon */}
              <ArrowUpRight className="w-4 h-4 mt-1 text-neutral-400 group-hover:text-orange-500 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
