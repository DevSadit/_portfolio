"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Project_box from "./Project_box";

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
      title: "Fitflow - Fitness Website",
      image: "/projects/two.png",
      category: "Health And Fitness",
      links: {
        live: "https://fitness-tracker-d37b8.web.app/",
        client: "https://github.com/DevSadit/FitFlow_Client",
        server: "https://github.com/DevSadit/FitFlow_Server",
      },
    },
    {
      id: 3,
      title: "Miss Beautifull",
      image: "/projects/three.jpg",
      category: "Romantic and FUn",
      links: {
        live: "https://devsadit.github.io/Fun_Romantic_Web/",
        client: "https://github.com/DevSadit/Fun_Romantic_Web",
        server: "https://github.com/DevSadit/Fun_Romantic_Web",
      },
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto sm:px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
            My <span className="text-[#F9004D]">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">Here are some of the projects I've worked on to sharpen my skills and solve real-world problems.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {projects.map((project) =>
            <Project_box
              key={project.id}
              project={project}
              hoveredProject={hoveredProject}
              isMounted={isMounted}
              isMobile={isMobile}
              handleProjectInteraction={handleProjectInteraction}
              setHoveredProject={setHoveredProject}
            />)}
        </div>
      </div>
    </section>
  );
}
