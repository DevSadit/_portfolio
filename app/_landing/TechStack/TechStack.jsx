"use client";

import TechGrid from "../_components/TechGrid";

export default function TechStack() {
  return (
    <div id="techstack" className="text-center min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
        My <span className="text-[#F9004D]">Tech</span> Stack
      </h2>
      <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">These are the tools and technologies I use to build efficient and modern web applications</p>

      <div className="w-full text-white">
        <div className="px-4 md:px-0 py-4 md:py-6 max-w-7xl mx-auto">
          <TechGrid />
        </div>
      </div>
    </div>
  );
}
