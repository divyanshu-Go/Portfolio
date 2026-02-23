// components/About.jsx

import Link from "next/link";
import { ArrowRight, Layers, SquareStack } from "lucide-react";
import AboutTypewriter from "./AboutTypewriter";

export default function About() {
  return (
    <section className="bg-neutral-950 text-white py-16 ">
      <div className="max-w-4xl mx-auto">

        {/* Heading (instant render + enhancement) */}
        <div className="">
          {/* Static text for instant paint */}

          {/* Typewriter overlays after hydration */}
          <span className="relative inset-0">
            <AboutTypewriter />
          </span>
        </div>

        {/* Subheading */}
        <p className="text-neutral-400 mt-4 max-w-lg">
          Passionate full-stack developer who loves turning ideas into impactful,
          user-friendly products.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-10">
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-orange-500 rounded-xl p-6 overflow-hidden group"
          >
            <Layers className="w-6 h-6 mb-4" />
            <p className="font-bold uppercase text-sm leading-tight">
              Dynamic Animation, <br /> Motion Design
            </p>
            <div className="mt-4 flex justify-end">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-lime-400 text-black rounded-xl p-6 overflow-hidden group"
          >
            <SquareStack className="w-6 h-6 mb-4" />
            <p className="font-bold uppercase text-sm leading-tight">
              Framer, Figma, <br /> Vite, NextJs, ReactJS
            </p>
            <div className="mt-4 flex justify-end">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
