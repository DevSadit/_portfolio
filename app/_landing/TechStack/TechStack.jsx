// "use client";
// import { useState } from "react";

// export default function TechStack() {
//   const [hovered, setHovered] = useState(null);

//   const technologies = [
//     // Frontend
//     {
//       name: "HTML",
//       icon: "/icons/html5.svg",
//       color: "from-orange-500 to-red-600",
//       category: "Frontend",
//     },
//     {
//       name: "CSS",
//       icon: "/icons/css3.svg",
//       color: "from-blue-500 to-blue-600",
//       category: "Frontend",
//     },
//     {
//       name: "JavaScript",
//       icon: "/icons/javascript.svg",
//       color: "from-yellow-400 to-yellow-500",
//       category: "Frontend",
//     },
//     {
//       name: "React",
//       icon: "/icons/react.svg",
//       color: "from-cyan-400 to-blue-400",
//       category: "Frontend",
//     },
//     {
//       name: "Next.js",
//       icon: "/icons/nextjs.svg",
//       color: "from-gray-800 to-black",
//       category: "Frontend",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: "/icons/tailwind.svg",
//       color: "from-cyan-400 to-blue-500",
//       category: "Frontend",
//     },
//     {
//       name: "JWT",
//       icon: "/icons/jwt.svg",
//       color: "from-purple-500 to-pink-500",
//       category: "Frontend",
//     },

//     // Backend
//     {
//       name: "Node.js",
//       icon: "/icons/nodejs.svg",
//       color: "from-green-500 to-green-600",
//       category: "Backend",
//     },
//     {
//       name: "Express",
//       icon: "/icons/express.svg",
//       color: "from-gray-600 to-gray-700",
//       category: "Backend",
//     },
//     {
//       name: "MongoDB",
//       icon: "/icons/mongodb.svg",
//       color: "from-green-500 to-green-700",
//       category: "Backend",
//     },

//     // Version Control
//     {
//       name: "Git",
//       icon: "/icons/git.svg",
//       color: "from-orange-600 to-red-600",
//       category: "Version Control",
//     },
//     {
//       name: "GitHub",
//       icon: "/icons/github.svg",
//       color: "from-gray-700 to-gray-900",
//       category: "Version Control",
//     },

//     // Deployment
//     {
//       name: "Vercel",
//       icon: "/icons/vercel.svg",
//       color: "from-gray-900 to-black",
//       category: "Deployment",
//     },
//     {
//       name: "Netlify",
//       icon: "/icons/netlify.svg",
//       color: "from-teal-400 to-blue-500",
//       category: "Deployment",
//     },
//     {
//       name: "Hostinger",
//       icon: "/icons/hostinger.svg",
//       color: "from-purple-600 to-blue-600",
//       category: "Deployment",
//     },
//   ];

//   // Group technologies by category
//   const categories = {
//     Frontend: technologies.filter((tech) => tech.category === "Frontend"),
//     Backend: technologies.filter((tech) => tech.category === "Backend"),
//     "Version Control": technologies.filter(
//       (tech) => tech.category === "Version Control"
//     ),
//     Deployment: technologies.filter((tech) => tech.category === "Deployment"),
//   };

//   return (
//     <div className="w-full text-white py-20 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//             My Tech Stack
//           </h2>
//           <p className="text-xl text-gray-300">
//             Technologies I've been working with currently
//           </p>
//         </div>

//         {/* Categories */}
//         {Object.entries(categories).map(([categoryName, techs]) => (
//           <div key={categoryName} className="mb-14">
//             <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-b border-gray-800 pb-2">
//               {categoryName}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//               {techs.map((tech) => (
//                 <div
//                   key={tech.name}
//                   className="group"
//                   onMouseEnter={() => setHovered(tech.name)}
//                   onMouseLeave={() => setHovered(null)}
//                 >
//                   <div
//                     className={`
//                       relative flex items-center justify-center rounded-xl p-6
//                       transition-all duration-300 ease-out transform
//                       ${
//                         hovered === tech.name
//                           ? "scale-110 shadow-lg bg-gradient-to-br " +
//                             tech.color
//                           : "bg-gray-800 hover:bg-gray-750"
//                       }
//                     `}
//                   >
//                     <div
//                       className={`
//                       w-16 h-16 flex items-center justify-center
//                       ${
//                         hovered === tech.name
//                           ? "scale-110 transition-transform duration-300"
//                           : ""
//                       }
//                     `}
//                     >
//                       {/* Replace with actual images - using placeholder for demo */}
//                       <img
//                         src={`/api/placeholder/64/64`}
//                         alt={`${tech.name} logo`}
//                         className="max-w-full max-h-full"
//                       />
//                     </div>
//                   </div>
//                   <div className="mt-3 text-center">
//                     <p
//                       className={`font-medium transition-colors duration-300 ${
//                         hovered === tech.name ? "text-white" : "text-gray-300"
//                       }`}
//                     >
//                       {tech.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function TechStack() {
//   // State to track which tech is being hovered
//   const [hovered, setHovered] = useState(null);

//   // Technology data with name, icon path, and color
//   const technologies = [
//     // Frontend
//     { name: "HTML", category: "Frontend", color: "from-orange-500 to-red-600" },
//     { name: "CSS", category: "Frontend", color: "from-blue-500 to-blue-600" },
//     {
//       name: "JavaScript",
//       category: "Frontend",
//       color: "from-yellow-400 to-yellow-500",
//     },
//     { name: "React", category: "Frontend", color: "from-cyan-400 to-blue-400" },
//     { name: "Next.js", category: "Frontend", color: "from-gray-800 to-black" },
//     {
//       name: "Tailwind CSS",
//       category: "Frontend",
//       color: "from-cyan-400 to-blue-500",
//     },
//     { name: "JWT", category: "Frontend", color: "from-purple-500 to-pink-500" },

//     // Backend
//     {
//       name: "Node.js",
//       category: "Backend",
//       color: "from-green-500 to-green-600",
//     },
//     {
//       name: "Express",
//       category: "Backend",
//       color: "from-gray-600 to-gray-700",
//     },
//     {
//       name: "MongoDB",
//       category: "Backend",
//       color: "from-green-500 to-green-700",
//     },

//     // Version Control
//     {
//       name: "Git",
//       category: "Version Control",
//       color: "from-orange-600 to-red-600",
//     },
//     {
//       name: "GitHub",
//       category: "Version Control",
//       color: "from-gray-700 to-gray-900",
//     },

//     // Deployment
//     { name: "Vercel", category: "Deployment", color: "from-gray-900 to-black" },
//     {
//       name: "Netlify",
//       category: "Deployment",
//       color: "from-teal-400 to-blue-500",
//     },
//     {
//       name: "Hostinger",
//       category: "Deployment",
//       color: "from-purple-600 to-blue-600",
//     },
//   ];

//   // Group technologies by category
//   const categories = {
//     Frontend: technologies.filter((tech) => tech.category === "Frontend"),
//     Backend: technologies.filter((tech) => tech.category === "Backend"),
//     "Version Control": technologies.filter(
//       (tech) => tech.category === "Version Control"
//     ),
//     Deployment: technologies.filter((tech) => tech.category === "Deployment"),
//   };

//   return (
//     <div className="w-full text-white py-16 px-4">
//       {/* Main container with padding for all screen sizes */}
//       <div className="max-w-5xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//             My Tech Stack
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300">
//             Technologies I've been working with currently
//           </p>
//         </div>

//         {/* Categories Section */}
//         {Object.entries(categories).map(([categoryName, techs]) => (
//           <div key={categoryName} className="mb-10">
//             {/* Category Title */}
//             <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-200 border-b border-gray-800 pb-2">
//               {categoryName}
//             </h3>

//             {/* Technology Grid - Responsive for different screen sizes */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
//               {techs.map((tech) => (
//                 <div
//                   key={tech.name}
//                   onMouseEnter={() => setHovered(tech.name)}
//                   onMouseLeave={() => setHovered(null)}
//                   className="group"
//                 >
//                   {/* Technology Card */}
//                   <div
//                     className={`
//                       flex items-center justify-center rounded-xl p-4 md:p-6
//                       transition-all duration-300 ease-out transform
//                       ${
//                         hovered === tech.name
//                           ? "scale-105 shadow-lg bg-gradient-to-br " +
//                             tech.color
//                           : "bg-gray-800 hover:bg-gray-700"
//                       }
//                     `}
//                   >
//                     {/* Icon Container */}
//                     <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
//                       {/* Replace with actual icon path in your project */}
//                       <img
//                         src={`/api/placeholder/64/64`}
//                         alt={`${tech.name} logo`}
//                         className="max-w-full max-h-full"
//                       />
//                     </div>
//                   </div>

//                   {/* Technology Name */}
//                   <div className="mt-2 text-center">
//                     <p
//                       className={`text-sm md:text-base font-medium ${
//                         hovered === tech.name ? "text-white" : "text-gray-300"
//                       }`}
//                     >
//                       {tech.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function TechStack() {
  // Track which technology card is being hovered
  const [hoveredTech, setHoveredTech] = useState(null);

  // List of technology data organized by category
  const techList = [
    // Frontend technologies
    { name: "HTML", category: "Frontend", color: "from-orange-500 to-red-600" },
    { name: "CSS", category: "Frontend", color: "from-blue-500 to-blue-600" },
    {
      name: "JavaScript",
      category: "Frontend",
      color: "from-yellow-400 to-yellow-500",
    },
    { name: "React", category: "Frontend", color: "from-cyan-400 to-blue-400" },
    { name: "Next.js", category: "Frontend", color: "from-gray-800 to-black" },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      color: "from-cyan-400 to-blue-500",
    },

    // Backend technologies
    {
      name: "Node.js",
      category: "Backend",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Express",
      category: "Backend",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "MongoDB",
      category: "Backend",
      color: "from-green-500 to-green-700",
    },

    // Version Control technologies
    {
      name: "Git",
      category: "Version Control",
      color: "from-orange-600 to-red-600",
    },
    {
      name: "GitHub",
      category: "Version Control",
      color: "from-gray-700 to-gray-900",
    },

    // Deployment technologies
    { name: "Vercel", category: "Deployment", color: "from-gray-900 to-black" },
    {
      name: "Netlify",
      category: "Deployment",
      color: "from-teal-400 to-blue-500",
    },
    {
      name: "Hostinger",
      category: "Deployment",
      color: "from-purple-600 to-blue-600",
    },
  ];

  // Organize technologies by their categories
  const techByCategory = {
    Frontend: techList.filter((tech) => tech.category === "Frontend"),
    Backend: techList.filter((tech) => tech.category === "Backend"),
    "Version Control": techList.filter(
      (tech) => tech.category === "Version Control"
    ),
    Deployment: techList.filter((tech) => tech.category === "Deployment"),
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
        My <span className="text-[#F9004D]">Tech</span> Stack
      </h2>
      <p className="text-base md:text-lg text-gray-400">
        Technologies I've been working with currently
      </p>
      <div className="w-full text-white h-screen py-6 px-4">
        {/* Main container */}
        <div className="max-w-5xl mx-auto h-full">
          {/* Categories container */}
          <div className="h-full flex flex-col justify-center space-y-4">
            {Object.entries(techByCategory).map(
              ([categoryName, technologies]) => (
                <div key={categoryName} className="mb-4">
                  {/* Category Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-200 border-b border-gray-700 pb-2">
                    {categoryName}
                  </h3>

                  {/* Technology Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="group"
                      >
                        {/* Technology Card */}
                        <div
                          className={`
                        flex items-center justify-center rounded-xl p-3 md:p-4
                        transition-all duration-300 ease-out transform
                        ${
                          hoveredTech === tech.name
                            ? "scale-105 shadow-lg bg-gradient-to-br " +
                              tech.color
                            : "bg-gray-800 hover:bg-gray-700"
                        }
                      `}
                        >
                          {/* Logo Container */}
                          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                            <img
                              src="/api/placeholder/64/64"
                              alt={`${tech.name} logo`}
                              className="max-w-full max-h-full"
                            />
                          </div>
                        </div>

                        {/* Technology Name */}
                        <div className="mt-1 text-center">
                          <p
                            className={`text-xs md:text-sm font-medium ${
                              hoveredTech === tech.name
                                ? "text-white"
                                : "text-gray-300"
                            }`}
                          >
                            {tech.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
