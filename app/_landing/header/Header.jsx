import React from "react";
import Head_text from "../_components/Head_text";

const Header = () => {
  return (
    <div>
      {/* head text */}
      <Head_text />

      {/* 3 boxes */}
      <div className="my-20 flex justify-between items-center">
        <div>1</div>
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Header;
