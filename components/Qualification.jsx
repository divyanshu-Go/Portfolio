"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

const qualifications = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Maharaja Agrasen Institute of Technology, Delhi, Rohini",
    date: "2024 – Present",
    link: "https://mait.ac.in/",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic Gulzarbagh, Patna",
    date: "2021 – 2024",
    link: "#",
  },
];

export default function Qualification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24" id="qualification">
      <div className="max-w-4xl mx-auto" ref={ref}>
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          ACADEMIC <br />
          <span className="text-neutral-600">QUALIFICATIONS</span>
        </motion.h2>

        {/* Qualification List */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 flex flex-col gap-8"
        >
          {qualifications.map((edu, index) => (
            <motion.a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group block"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <GraduationCap className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                
                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-neutral-400 text-sm mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">{edu.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
