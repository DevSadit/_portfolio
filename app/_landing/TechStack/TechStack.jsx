"use client";

import TechGrid from "../_components/TechGrid";

export default function TechStack() {
  return (
    <div className="text-center min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
        My <span className="text-[#F9004D]">Tech</span> Stack
      </h2>
      <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores earum laudantium temporibus reprehenderit iure facere aperiam </p>
      
      <div className="w-full text-white py-6">
        <div className="px-4 py-4 md:py-6  mx-auto">
          <TechGrid />
        </div>
      </div>
    </div>
  );
}
