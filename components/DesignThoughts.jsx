// components/DesignThoughts.jsx

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
      className="bg-neutral-950 text-white py-16 "
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          DESIGN <br />
          <span className="text-neutral-600">THOUGHTS</span>
        </h2>

        {/* Posts */}
        <div className="mt-10 space-y-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-b border-neutral-800 pb-8 last:border-b-0"
            >
              <h3 className="text-lg font-bold flex items-center gap-2 hover:text-orange-500 transition">
                {post.title}
                <ArrowUpRight className="w-4 h-4 text-orange-500" />
              </h3>

              <p className="text-neutral-400 text-sm mt-2">
                {post.description}
              </p>

              <p className="text-neutral-500 text-xs mt-3">
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
