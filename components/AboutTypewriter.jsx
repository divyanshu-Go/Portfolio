"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function AboutTypewriter() {
  const [mounted, setMounted] = useState(false);

  // Ensure this runs ONLY after first paint
  useEffect(() => {
    setMounted(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "MERN Stack Developer",
      "Next JS Developer",
      "Solidity Developer",
      "Smart Contract Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Prevent hydration blocking
  if (!mounted) return null;

  return (
    <>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        {text}
        <Cursor cursorColor="#f97316" />
      </h1>
    </>
  );
}
