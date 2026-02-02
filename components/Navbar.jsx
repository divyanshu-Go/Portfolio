// components/Navbar.jsx

"use client";

import Link from "next/link";
import { Home, Folder, Wrench, Edit3, School, University, Shapes, Contact } from "lucide-react";
import { animate } from "framer-motion";

const navItems = [
  { name: "Home", icon: Home, id: "home" },
  { name: "Projects", icon: Folder, id: "projects" },
  { name: "Academics", icon: University  , id: "qualification" },
  { name: "Tools", icon: Wrench, id: "tools" },
  { name: "Thoughts", icon: Shapes , id: "thoughts" },
  { name: "Contact", icon: Contact , id: "contact" },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 100; // offset for navbar
      animate(window.scrollY, y, {
        duration: 0.7,
        onUpdate: (val) => window.scrollTo(0, val),
      });
    }
  };

  return (
    <div className="flex w-72 justify-center gap-7 bg-neutral-900 px-8 py-4 rounded-full shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleScroll(item.id)}
          className="relative group text-neutral-300 hover:text-orange-500 transition cursor-pointer"
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
        </button>
      ))}
    </div>
  );
}
