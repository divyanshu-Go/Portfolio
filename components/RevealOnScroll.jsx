"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  disableInitial = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={disableInitial ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
