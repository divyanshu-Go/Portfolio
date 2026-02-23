// components/PremiumTools.jsx

import Image from "next/image";

const tools = [
  {
    name: "Next.js",
    desc: "React Framework",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "JavaScript",
    desc: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg",
  },
  {
    name: "Tailwind CSS",
    desc: "CSS Framework",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
  },
  {
    name: "Figma",
    desc: "Design Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  },
  {
    name: "Vite",
    desc: "Build Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vite.svg",
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
    name: "Postman",
    desc: "API Testing Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg",
  },
  {
    name: "Redux",
    desc: "State Management Library",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/redux.svg",
  },
  {
    name: "Solidity",
    desc: "Smart Contract Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/solidity.svg",
  },
  {
    name: "Ethereum",
    desc: "Blockchain Platform",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ethereum.svg",
  },
  {
    name: "Web3.js",
    desc: "Blockchain Library",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/web3dotjs.svg",
  },
  {
    name: "C++",
    desc: "Programming Language",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cplusplus.svg",
  },
];

export default function PremiumTools() {
  return (
    <section className="bg-neutral-950 text-white py-16 ">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold">
          PREMIUM <br />
          <span className="text-neutral-600">TOOLS</span>
        </h2>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md shadow-md">
                <Image src={tool.img} alt={tool.name} width={24} height={24} />
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
