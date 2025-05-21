import React from "react";
import { FaCode, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";

const Boxes = () => {
  return (
    //
    <div className="max-w-7xl mx-auto grid gap-4 sm:gap-5 md:gap-6 px-4 md:px-0 sm:px-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* Box 1 */}
      <div className="bg-[#1A1A1A] px-4 sm:px-5 md:px-6 py-10 sm:py-12 md:py-14 hover:-translate-y-1.5 hover:text-white rounded-xl hover:shadow-lg transition-all duration-300">
        <FaCode className="text-[#f9004d] text-4xl mb-3 md:mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Clean Code & Best Practices
        </h3>
        <p className="text-gray-400">
          I write readable, maintainable, and well-structured code using modern
          frontend standards and tools.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-[#1A1A1A] px-4 sm:px-5 md:px-6 py-10 sm:py-12 md:py-14 rounded-xl hover:shadow-lg hover:-translate-y-1.5 hover:text-white transition-all duration-300">
        <FaMobileAlt className="text-[#f9004d] text-4xl mb-3 md:mb-4" />
        <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
        <p className="text-gray-400">
          My websites are fully responsive they work seamlessly on mobile,
          tablet, and desktop.
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-[#1A1A1A] hover:-translate-y-1.5 px-4 sm:px-5 md:px-6 py-10 sm:py-12 md:py-14 rounded-xl hover:shadow-lg hover:text-white transition-all duration-300">
        <FaProjectDiagram className="text-[#f9004d] text-4xl mb-3 md:mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Real Projects with Real Impact
        </h3>
        <p className="text-gray-400">
          I'm proficient in building real-world projects using Next Js, React, Javascript, Node Js, MongoDb and Express.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Boxes;
