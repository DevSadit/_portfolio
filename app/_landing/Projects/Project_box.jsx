import Image from 'next/image'
import React from 'react'

const Project_box = ({ project, hoveredProject, isMounted, isMobile, handleProjectInteraction, setHoveredProject }) => {
    return (
        <div
            key={project.id}
            className="group p-4 md:p-0 relative overflow-hidden rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            onMouseEnter={() => isMounted && !isMobile && handleProjectInteraction(project.id)}
            onMouseLeave={() => isMounted && !isMobile && setHoveredProject(null)}
            onClick={() => isMounted && isMobile && handleProjectInteraction(project.id)}
        >
            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div
                    className={`w-full h-full transition-transform duration-500 ${hoveredProject === project.id ? "scale-110" : "scale-100"
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
                className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center transition-all duration-300 ${hoveredProject === project.id ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div className="flex flex-col gap-2 sm:gap-3 transform transition-all duration-500 ease-out px-3 sm:px-0">
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 sm:px-6 py-2 sm:py-3 bg-[#F9004D] text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${hoveredProject === project.id
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
                        className={`px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${hoveredProject === project.id
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
                        className={`px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all w-full sm:w-40 text-center ${hoveredProject === project.id
                            ? "transform-none opacity-100"
                            : "transform translate-y-4 opacity-0"
                            } transition-all duration-300 delay-200`}
                    >
                        Server Side
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project_box