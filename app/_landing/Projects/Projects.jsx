"use client";
import { useState } from "react";

export default function Projects() {
  // State to track which project is being hovered
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data with title, description, and icon color
  const projects = [
    {
      id: 1,
      title: "Business Strategy",
      description:
        "Create visual plans showing the full scope of your project to keep you on track for success.",
      iconColor: "bg-red-500",
      iconClass: "i-business",
    },
    {
      id: 2,
      title: "App Development",
      description:
        "A wide collection of over 500 pre-built components to create modern mobile and web applications.",
      iconColor: "bg-blue-500",
      iconClass: "i-mobile",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Create visual apps showing the full scope of your project to keep you on track for success.",
      iconColor: "bg-pink-500",
      iconClass: "i-web",
    },
    {
      id: 4,
      title: "SEO Marketing",
      description:
        "Optimize your content and improve your search engine rankings with advanced SEO strategies.",
      iconColor: "bg-purple-500",
      iconClass: "i-seo",
    },
  ];

  return (
    <div className="w-full py-16 px-4 text-gray-800 dark:text-white">
      {/* Main container */}
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What I Do</h2>
          <div className="w-16 h-1 bg-pink-500"></div>
        </div>

        {/* Projects Grid - 2 columns on medium screens and above */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div
                className={`
                  relative p-6 md:p-8 rounded-lg overflow-hidden
                  transition-all duration-500 ease-in-out transform
                  ${
                    hoveredProject === project.id
                      ? "bg-white dark:bg-gray-800 shadow-xl scale-105 border-t-4 border-pink-500"
                      : "bg-gray-100 dark:bg-gray-900"
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${project.iconColor} text-white`}
                  >
                    {/* Using placeholder element for icon - you would replace with actual icons */}
                    <div className="w-6 h-6">
                      <img
                        src="/api/placeholder/24/24"
                        alt={project.title}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      hoveredProject === project.id ? "text-pink-500" : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Line - visible only on hover */}
                <div
                  className={`
                  absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500
                  transition-all duration-500 ease-in-out
                  ${hoveredProject === project.id ? "w-full" : "w-0"}
                `}
                ></div>
              </div>

              {/* Box shadow overlay effect */}
              <div
                className={`
                absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0
                transition-opacity duration-500 pointer-events-none
                ${hoveredProject === project.id ? "opacity-100" : ""}
              `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
