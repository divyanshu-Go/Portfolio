"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
        {/* Social Icons */}
        <div className="flex gap-5">
          <Link href="https://github.com/divyanshu-go" className="hover:text-white transition">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/divyanshu_go" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/divyanshu-sharma-go" className="hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:divyanshu9304628@gmail.com" className="hover:text-white transition">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
