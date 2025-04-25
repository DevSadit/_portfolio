import React from "react";
const Navbar = () => {
  return (
    <nav className="flex items-center mt-3">
      <ul className="w-1/2 items-center">
        <li className="flex gap-x-2 items-center">
          <img
            className="w-20 border border-gray-500 font-black p-1 h-20 rounded-full"
            src="profile-pic.JPG"
            alt="kk"
          />
          <h2 className="text-2xl font-bold">Ehsan</h2>
        </li>
      </ul>

      <ul className="w-1/2 flex justify-between items-center group">
        <li className="text-white transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-400">
          About
        </li>
        <li className="text-white transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-400">
          Project
        </li>
        <li className="text-white transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-400">
          Technology
        </li>
        <li className="text-white transition-colors duration-300 group-hover:text-gray-300 hover:text-gray-400">
          Education
        </li>
        <button className="bg-red-500 px-4 py-2 rounded text-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          Resume
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
