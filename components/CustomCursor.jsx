// components/CustomCursor.jsx
"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hoverProfile, setHoverProfile] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const profile = document.getElementById("profile-card");

    const enterProfile = () => setHoverProfile(true);
    const leaveProfile = () => setHoverProfile(false);

    window.addEventListener("mousemove", handleMove);

    if (profile) {
      profile.addEventListener("mouseenter", enterProfile);
      profile.addEventListener("mouseleave", leaveProfile);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (profile) {
        profile.removeEventListener("mouseenter", enterProfile);
        profile.removeEventListener("mouseleave", leaveProfile);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${pos.x - 15}px, ${pos.y - 15}px)`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ${
          hoverProfile
            ? "w-10 h-10 border-2 border-orange-600 bg-orange-500/50 mix-blend-difference"
            : "w-6 h-6 bg-orange-500/50"
        }`}
      />
    </div>
  );
}
