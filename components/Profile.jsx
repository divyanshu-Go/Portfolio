"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Github, Mail } from "lucide-react";

export default function Profile() {
    return (
        <div id="home" className="w-full flex flex-col gap-2 overflow-hidden  bg-white rounded-2xl p-8  text-center relative shadow-lg">
            {/* Decorative dashed curve */}
            <div className="absolute -rotate-[100deg] -top-15 left-8 w-30 h-30 border-4 border-dashed
                 border-orange-500 rounded-full border-b-0 border-r-0 "></div>

            {/* Profile Image */}
            <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-xl">
                <div className="absolute -top-10 -right-3 w-20 rotate-45 h-20 border-4 
                    border-dashed border-orange-500 rounded-full border-b-0 border-l-0"></div>
                <Image
                    src="/divyanshu.png"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-neutral-900">
                Divyanshu Sharma
            </h2>

            {/* Title */}
            <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                Full-stack Web Developer crafting innovative <br />
                solutions from concept to deployment.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-5 text-orange-500">
                <Link href="#" className="hover:text-orange-600 transition">
                    <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-orange-600 transition">
                    <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-orange-600 transition">
                    <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-orange-600 transition">
                    <Mail className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}
