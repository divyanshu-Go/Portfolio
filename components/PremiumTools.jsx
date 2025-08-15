"use client";

const tools = [
  {
    name: "Framer",
    desc: "Website Builder",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/framer.svg",
  },
  {
    name: "Figma",
    desc: "Design Tool",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  },
  {
    name: "Lemon Squeezy",
    desc: "Payments Provider",
    img: "https://lemon-squeezy.com/icons/icon-512x512.png",
  },
  {
    name: "ChatGPT",
    desc: "AI Assistant",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "Notion",
    desc: "Productivity Tool",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
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
];

export default function PremiumTools() {
  return (
    <section id="tools" className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold">
          PREMIUM <br/><span className="text-neutral-600">TOOLS</span>
        </h2>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md shadow-md">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
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
