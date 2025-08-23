"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Download } from "lucide-react";

export default function ProfileComponent() {
    return (
        <div id="profile-card" className="w-full flex flex-col gap-4 overflow-hidden bg-white rounded-2xl p-8 text-center relative shadow-lg">
            {/* Decorative dashed curve */}
            <div className="absolute -rotate-[100deg] -top-15 left-8 w-30 h-30 border-4 border-dashed border-orange-500 rounded-full border-b-0 border-r-0"></div>

            {/* Profile Image */}
            <div className="relative w-40 h-50 mx-auto mb-4 overflow-hidden rounded-xl">
                <div className="absolute -top-10 -right-3 w-20 rotate-45 h-20 border-4 border-dashed border-orange-500 rounded-full border-b-0 border-l-0"></div>
                <Image
                    src="/divyanshu.png"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-neutral-900">Divyanshu Sharma</h2>

            {/* Title */}
            <p className="text-neutral-500 mt-1 text-sm leading-relaxed">
                Full-stack Web Developer crafting innovative <br />
                solutions from concept to deployment.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
                <Link
                    href="https://www.linkedin.com/in/divyanshu-sharma-go"
                    target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
                >
                    <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                    href="https://x.com/divyanshu_go"
                    target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
                >
                    <Twitter className="w-5 h-5" />
                </Link>
                <Link
                    href="https://github.com/divyanshu-go"
                    target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
                >
                    <Github className="w-5 h-5" />
                </Link>
                <Link
                    href="mailto:divyanshu9304628@gmail.com"
                    target="_blank" rel="noopener noreferrer"
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
