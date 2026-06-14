import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Webdev = ({
  glowEffect = "0 0 10px #f9004d, 0 0 20px rgba(249, 0, 77, 0.5)",
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(26, 26, 26, 0.9)",
        color: "#fff",
        boxShadow: glowEffect,
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #f9004d" }}
      date="2024"
      dateClassName="text-xs sm:text-sm md:text-base text-gray-300"
      iconStyle={{
        background: "#f9004d",
        color: "#fff",
        boxShadow: glowEffect,
      }}
      icon={<FaLaptopCode />}
    >
      <div className="p-2">
        <h3 className="vertical-timeline-element-title text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-pink-500">
          Complete Web Development Bootcamp
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl mb-2 sm:mb-3 text-gray-300">
          Programming Hero
        </h4>
        <div className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
          <p>
            Intensive training in modern web development technologies and best
            practices.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            React
          </span>
          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            Next Js
          </span>
          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            MongoDB
          </span>
          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            Express
          </span>
        </div>
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-pink-900 bg-opacity-20 rounded-lg border-l-2 sm:border-l-4 border-pink-500">
          <p className="text-xs sm:text-sm italic text-gray-300">
            Completed 3+ real-world projects with focus on responsive design and
            user experience
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default Webdev;
