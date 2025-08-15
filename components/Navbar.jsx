"use client";

import Link from "next/link";
import { Home, Folder, Wrench, Edit3, PencilRuler } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#Home" },
  { name: "Projects", icon: Folder, href: "#projects" },
  { name: "Experience", icon: PencilRuler, href: "#experience" },
  { name: "Tools", icon: Wrench, href: "#tools" },
  { name: "Thoughts", icon: Edit3, href: "#thoughts" },
];

export default function Navbar() {
  return (
      <div className="flex w-72 justify-center gap-7 bg-neutral-900 px-8 py-4 rounded-full shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative group text-neutral-300 hover:text-white transition"
          >
            <item.icon className="w-5 h-5" />
            {/* Tooltip */}
            <span
              className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-0.5 rounded-md 
              opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-200 ease-out whitespace-nowrap pointer-events-none"
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
  );
}
