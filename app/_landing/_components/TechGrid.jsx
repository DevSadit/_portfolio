"use client";
import { useState } from "react";
import Image from "next/image";

export default function TechGrid() {
  const [hoveredTech, setHoveredTech] = useState(null);

  // DO NOT modify this techList as per your request
  const techList = [
    {
      name: "HTML",
      category: "Frontend",
      color: "from-orange-400 to-red-500",
      image: "/Tech_svgs/html.svg",
    },
    {
      name: "CSS",
      category: "Frontend",
      color: "from-blue-400 to-blue-500",
      image: "/Tech_svgs/css3.svg",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      color: "from-yellow-400 to-yellow-500",
      image: "/Tech_svgs/javascript.svg",
    },
    {
      name: "React",
      category: "Frontend",
      color: "from-cyan-400 to-blue-400",
      image: "/Tech_svgs/react.svg",
    },
    {
      name: "Next.js",
      category: "Frontend",
      color: "from-gray-800 to-black",
      image: "/Tech_svgs/nextjs.svg",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "from-cyan-400 to-blue-500",
      image: "/Tech_svgs/tailwindcss.svg",
    },

    {
      name: "Node.js",
      category: "Backend",
      color: "from-green-500 to-green-600",
      image: "/Tech_svgs/nodejs.svg",
    },
    {
      name: "Express",
      category: "Backend",
      color: "from-yellow-100 to-yellow-200",
      image: "/Tech_svgs/express.svg",
    },
    {
      name: "MongoDB",
      category: "Backend",
      color: "from-green-500 to-green-700",
      image: "/Tech_svgs/mongodb.svg",
    },

    {
      name: "Git",
      category: "Version Control",
      color: "from-orange-600 to-red-600",
      image: "/Tech_svgs/git.svg",
    },
    {
      name: "GitHub",
      category: "Version Control",
      color: "from-gray-700 to-gray-900",
      image: "/Tech_svgs/github.svg",
    },

    {
      name: "Vercel",
      category: "Deployment",
      color: "from-gray-900 to-black",
      image: "/Tech_svgs/vercel.svg",
    },
    {
      name: "Netlify",
      category: "Deployment",
      color: "from-teal-400 to-blue-500",
      image: "/Tech_svgs/netlify.svg",
    },
    {
      name: "Hostinger",
      category: "Deployment",
      color: "from-purple-600 to-blue-600",
      image: "/Tech_svgs/hostinger.svg",
    },
  ];

  // Group by categories
  const frontendTech = [];
  const backendTech = [];
  const versionControlTech = [];
  const deploymentTech = [];

  for (let i = 0; i < techList.length; i++) {
    const tech = techList[i];
    if (tech.category === "Frontend") {
      frontendTech.push(tech);
    } else if (tech.category === "Backend") {
      backendTech.push(tech);
    } else if (tech.category === "Version Control") {
      versionControlTech.push(tech);
    } else if (tech.category === "Deployment") {
      deploymentTech.push(tech);
    }
  }

  // Render UI
  function renderTechSection(title, items) {
    return (
      <div className="mb-4">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">
          {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {items.map(function (tech) {
            const isHovered = hoveredTech === tech.name;

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group"
              >
                <div
                  className={`flex items-center justify-center rounded-xl p-4 transition-all duration-300 ease-out transform ${
                    isHovered
                      ? `scale-105 shadow-xl bg-gradient-to-br ${tech.color}`
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-md shadow-inner ring-1 ring-gray-300">
                    <Image
                      src={tech.image}
                      alt={tech.name + " logo"}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-1 text-center">
                  <p
                    className={`text-xs md:text-sm font-medium ${
                      isHovered ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {tech.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-center space-y-4">
      {renderTechSection("Frontend", frontendTech)}
      {renderTechSection("Backend", backendTech)}
      {renderTechSection("Version Control", versionControlTech)}
      {renderTechSection("Deployment", deploymentTech)}
    </div>
  );
}
