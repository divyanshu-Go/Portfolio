"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

// ─── Config ─────────────────────────────────────────────────────────
const LEETCODE_USERNAME = "Divyanshu-Go";
const CODEFORCES_HANDLE = "Divyanshu-Go";

// ─── LeetCode Card ─────────────────────────────────────────────────
function LeetCodeCard() {
  return (
    <motion.a
      href={`https://leetcode.com/u/${LEETCODE_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col gap-4 bg-neutral-900 border border-neutral-800 hover:border-yellow-500/40 rounded-xl p-5 transition-colors"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-yellow-400">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white text-sm">LeetCode</p>
            <p className="text-neutral-500 text-xs">@{LEETCODE_USERNAME}</p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-yellow-400 transition" />
      </div>

      {/* Static Content */}
      <div className="flex items-center gap-2 text-neutral-500 text-sm">
        <Code2 className="w-4 h-4" />
        Practice DSA regularly
      </div>
    </motion.a>
  );
}

// ─── Codeforces Card ───────────────────────────────────────────────
function CodeforcesCard() {
  return (
    <motion.a
      href={`https://codeforces.com/profile/${CODEFORCES_HANDLE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="group flex flex-col gap-4 bg-neutral-900 border border-neutral-800 hover:border-blue-500/40 rounded-xl p-5 transition-colors"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-400/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-blue-400">
              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5V4.5c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white text-sm">Codeforces</p>
            <p className="text-neutral-500 text-xs">@{CODEFORCES_HANDLE}</p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition" />
      </div>

      {/* Static Content */}
      <div className="flex items-center gap-2 text-neutral-500 text-sm">
        <Code2 className="w-4 h-4" />
        Competitive Programming
      </div>
    </motion.a>
  );
}

// ─── Main Section ───────────────────────────────────────────────────
export default function DSAProfiles() {
  return (
    <section className="bg-neutral-950 text-white py-16 ">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          DSA & <br />
          <span className="text-neutral-600">COMPETITIVE</span>
        </motion.h2>

        <p className="text-neutral-400 mt-3 text-sm max-w-sm">
          I practice data structures and algorithms regularly.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LeetCodeCard />
          <CodeforcesCard />
        </div>
      </div>
    </section>
  );
}