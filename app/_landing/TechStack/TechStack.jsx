// Server component

import TechGrid from "../_components/TechGrid";

export default function TechStack() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
        My <span className="text-[#F9004D]">Tech</span> Stack
      </h2>
      <p className="text-base md:text-lg text-gray-400">
        Technologies I've been working with currently
      </p>
      <div className="w-full text-white h-screen py-6 px-4">
        <div className="max-w-5xl mx-auto h-full">
          <TechGrid />
        </div>
      </div>
    </div>
  );
}
