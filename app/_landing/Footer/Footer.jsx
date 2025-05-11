import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="text-gray-700" />
      <p className="text-gray-600 py-2 text-center">
        Copyright © {new Date().getFullYear()} - All right reserved by{" "}
        <b>Sh Ehesan</b>{" "}
      </p>
    </div>
  );
};

export default Footer;
