// components/Profile.jsx
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Download } from "lucide-react";

export default function ProfileComponent() {
  return (
    <div
      id="profile-card"
      className="w-full flex flex-col gap-4 overflow-hidden bg-white rounded-2xl p-8 text-center relative shadow-lg"
    >
      {/* Decorative dashed curve */}
      <div className="absolute -rotate-[10deg] top-52 -left-12 w-30 h-30 border-4 border-dashed border-orange-500 rounded-full border-b-0 border-r-0"></div>

      {/* Profile Image */}
      <div className="relative w-40 mx-auto my-6 rounded-xl bg-gradient-to-tr from-blue-600 to-red-600 ">
        {/* Wave effect at the top */}
        <div className="absolute top-0 left-0 w-full h-6 bg-white wave-top"></div>

        {/* Dashed Circle Decoration */}
        <div className="absolute -top-10 -right-10 rotate-90 w-30 h-30 border-4 border-dashed border-orange-500 rounded-full border-b-0 border-l-0 border-t-0"></div>

        {/* Profile Image */}
        <div className="relative flex justify-center">
          <Image
            src="/divyanshu.png"
            alt="Profile"
            width={160}
            height={160}
            className="relative -mt-12 transition-transform duration-300 ease-out hover:scale-110 origin-bottom object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-neutral-900">Divyanshu Sharma</h2>

      {/* Title */}
      <p className="text-neutral-500 mt-1 text-sm leading-relaxed">
        Full-stack & DApp Developer crafting innovative <br />
        solutions from concept to deployment.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href="https://www.linkedin.com/in/divyanshu-sharma-go"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://x.com/divyanshu_go"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
        >
          <Twitter className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/divyanshu-go"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:divyanshu9304628@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </div>

      {/* Resume Download */}
      <div className="mt-5">
        <Link
          href="/divyanshu_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors text-sm"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </Link>
      </div>
    </div>
  );
}
