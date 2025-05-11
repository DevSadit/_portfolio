import React from "react";
import Head_text from "../_components/Head_text";
import Boxes from "../_components/Boxes";

const Header = () => {
  return (
    <div className="mt-32">
      {/* head text */}
      <Head_text />

      {/* 3 boxes */}
      <div className="text-gray-400 mt-14 py-12 px-4 md:px-16">
        <Boxes />
      </div>
    </div>
  );
};

export default Header;
