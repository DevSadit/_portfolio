import React from "react";
import Head_text from "../_components/Head_text";
import Boxes from "../_components/Boxes";

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* head text */}
      <Head_text />

      {/* 3 boxes */}
      <div className="text-gray-400 mt-14 py-8 mx-2 md:mx-0">
        <Boxes />
      </div>
    </div>
  );
};

export default Header;
