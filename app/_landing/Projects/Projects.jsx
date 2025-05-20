"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set isMounted to true when component mounts to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
    
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle project interaction based on device type
  const handleProjectInteraction = (projectId) => {
    if (isMobile) {
      // Toggle on mobile
      setHoveredProject(hoveredProject === projectId ? null : projectId);
    } else {
      // Set on desktop hover
      setHoveredProject(projectId);
    }
  };

  // Project data array - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Zenzep - Blogs Website",
      image: "/projects/one.png",
      category: "Blog",
      tagColor: "bg-gradient-to-r from-blue-400 to-cyan-400", // Blue gradient for "Trending"
      links: {
        live: "https://blog-website-aef2b.web.app/",
        client: "https://github.com/DevSadit/ZenZap_Client",
        server: "https://github.com/DevSadit/ZenZap_Server",
      },
    },
    {
      id: 2,
      title: "Travel Website",
      image: "/projects/two.png",
      category: "Travel",
      links: {
        live: "https://travelworld.shuence.com/",
        client: "https://github.com/shuence/TravelWorld?tab=readme-ov-file",
        server: "https://github.com/shuence/TravelWorld?tab=readme-ov-file",
      },
    },
  ];

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
            My <span className="text-[#F9004D]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto px-2">
            Check out some of my latest projects and works that showcase my
            skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onMouseEnter={() => isMounted && !isMobile && handleProjectInteraction(project.id)}
              onMouseLeave={() => isMounted && !isMobile && setHoveredProject(null)}
              onClick={() => isMounted && isMobile && handleProjectInteraction(project.id)}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div
                  className={`w-full h-full transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />

                  {/* Placeholder div - remove this and uncomment Image above when you have actual images */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm md:text-base">{project.title} Image</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 md:p-6 bg-black bg-opacity-80 transform transition-all duration-300 ease-in-out">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{project.category}</p>
              </div>

              {/* Hover/Touch Overlay with Buttons */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="flex flex-col gap-2 sm:gap-3 transform transition-all duration-500 ease-out px-3 sm:px-0">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 sm:px-6 py-2 sm:py-3 bg-[#F9004D] text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${
                      hoveredProject === project.id 
                        ? "transform-none opacity-100" 
                        : "transform translate-y-4 opacity-0"
                    } transition-all duration-300 delay-75`}
                  >
                    Live Page
                  </a>
                  <a
                    href={project.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${
                      hoveredProject === project.id 
                        ? "transform-none opacity-100" 
                        : "transform translate-y-4 opacity-0"
                    } transition-all duration-300 delay-150`}
                  >
                    Client Side
                  </a>
                  <a
                    href={project.links.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${
                      hoveredProject === project.id 
                        ? "transform-none opacity-100" 
                        : "transform translate-y-4 opacity-0"
                    } transition-all duration-300 delay-200`}
                  >
                    Server Side
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
