"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts to prevent hydration issues
  useState(() => {
    setIsMounted(true);
  }, []);

  // Project data array - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Zenzep - Blogs Website",
      image: "/projects/one.png",
      category: "Blog",
      tag: "Trending",
      tagColor: "bg-gradient-to-r from-blue-400 to-cyan-400", // Blue gradient for "Trending"
      link: "/projects/main-demo",
    },
    {
      id: 2,
      title: "Travel Website",
      image: "/projects/two.png",
      category: "Travel",
      tag: null, // No tag for this one
      link: "/projects/main-demo-light",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-[#F9004D]">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Check out some of my latest projects and works that showcase my
            skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-300"
              onMouseEnter={() => isMounted && setHoveredProject(project.id)}
              onMouseLeave={() => isMounted && setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div
                  className={`w-full h-full bg-gray-700 transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Placeholder div - remove this and uncomment Image above when you have actual images */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500">{project.title} Image</span>
                  </div>
                </div>

                {/* Tag (if exists) */}
                {project.tag && (
                  <div
                    className={`absolute top-4 right-4 px-4 py-1 rounded text-white text-sm font-medium ${project.tagColor}`}
                  >
                    {project.tag}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-80 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.category}</p>
              </div>

              {/* Hover Overlay - Only visible on hover */}
              <div>
                <Link
                  href={project.link}
                  className="px-6 py-3 bg-[#F9004D] text-white font-medium rounded hover:bg-opacity-90 transition-all"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
