"use client";

import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "PixelForge Studios",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    date: "Jan 2020 – Present",
    link: "#",
  },
  {
    role: "BlueWave Innovators",
    description:
      "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    date: "Jun 2017 – Dec 2019",
    link: "#",
  },
  {
    role: "TrendCraft Solutions",
    description:
      "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    date: "Mar 2015 – May 2017",
    link: "#",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold">
          12 YEARS OF <br/><span className="text-neutral-600">EXPERIENCE</span>
        </h2>

        {/* Experience List */}
        <div className="mt-10 flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start gap-4">
                {/* Role and Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-neutral-400 text-sm mt-1">
                    {exp.description}
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">{exp.date}</p>
                </div>

                {/* Arrow Icon */}
                <ArrowUpRight className="w-4 h-4 mt-1 text-neutral-400 group-hover:text-orange-500 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
