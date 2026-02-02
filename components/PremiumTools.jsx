// components/PremiumTools.jsx

import Image from "next/image";

const tools = [
  {
    name: "Figma",
    desc: "Design Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  },
  {
    name: "JavaScript",
    desc: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg",
  },
  {
    name: "Next.js",
    desc: "React Framework",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Tailwind CSS",
    desc: "CSS Framework",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
  },
  {
    name: "Visual Studio Code",
    desc: "Code Editor",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg",
  },
  {
    name: "GitHub",
    desc: "Version Control",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  },
  {
    name: "Vercel",
    desc: "Deployment Platform",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg",
  },
  {
    name: "MongoDB",
    desc: "Database",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mongodb.svg",
  },
  {
    name: "Express.js",
    desc: "Backend Framework",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/express.svg",
  },
  {
    name: "Node.js",
    desc: "Backend Runtime",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg",
  },
  {
    name: "Solidity",
    desc: "Smart Contract Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/solidity.svg",
  },
  {
    name: "Notion",
    desc: "Productivity Tool",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  }
  ,
];

export default function PremiumTools() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold">
          PREMIUM <br />
          <span className="text-neutral-600">TOOLS</span>
        </h2>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md shadow-md">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={24}
                  height={24}
                />
              </div>

              <div className="transition-colors duration-300 group-hover:text-orange-500">
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-neutral-400 text-sm">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
