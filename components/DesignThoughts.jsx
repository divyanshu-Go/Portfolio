"use client";

import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Starting and Growing a Career in Web Design",
    description:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    href: "#",
  },
  {
    title: "Create a Landing Page That Performs Great",
    description:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    href: "#",
  },
];

export default function DesignThoughts() {
  return (
    <section id="thoughts" className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          DESIGN <br/><span className="text-neutral-600">THOUGHTS</span>
        </h2>

        {/* Posts List */}
        <div className="mt-10 space-y-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-b border-neutral-800 pb-8 last:border-b-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <a
                      href={post.href}
                      className="hover:text-orange-500 transition"
                    >
                      {post.title}
                    </a>
                    <ArrowUpRight className="w-4 h-4 text-orange-500" />
                  </h3>
                  <p className="text-neutral-400 text-sm mt-2">
                    {post.description}
                  </p>
                  <p className="text-neutral-500 text-xs mt-3">
                    {post.date}
                  </p>
                </div>
                <span className="text-neutral-500 text-xs whitespace-nowrap">
                  {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
