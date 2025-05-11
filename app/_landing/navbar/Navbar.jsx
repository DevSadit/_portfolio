import React from "react";
const Navbar = () => {
  return (
    <nav className="flex items-center mt-3">
      <ul className="w-1/2 items-center">
        <li className="flex gap-x-2 items-center">
          <h2 className="text-3xl uppercase font-bold">Ehsan</h2>
        </li>
      </ul>

      <ul className="w-1/2 flex justify-between items-center group">
        <li className="text-gray-400 transition-colors duration-300  hover:text-white">
          About
        </li>
        <li className="text-gray-400 transition-colors duration-300  hover:text-white">
          Project
        </li>
        <li className="text-gray-400 transition-colors duration-300  hover:text-white">
          Technology
        </li>
        <li className="text-gray-400 transition-colors duration-300  hover:text-white">
          Education
        </li>
        <button className="bg-[#f9004d] px-4 py-2 rounded text-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
// text-gray-400
// text-gray-400
