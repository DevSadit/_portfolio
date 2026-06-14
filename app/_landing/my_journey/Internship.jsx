import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Internship = ({
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
      date="Jan 2026 - May 2026"
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
          Web Developer Intern
        </h3>

        <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl mb-2 sm:mb-3 text-gray-300">
          Career Abroad Mentorship · Remote
        </h4>

        <div className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
          <p>
            Developing and optimizing a production <strong>Next.js</strong>{" "}
            platform, building reusable UI components, and integrating student
            onboarding workflows for a growing international education platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            Next.js
          </span>

          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            React
          </span>

          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            Tailwind CSS
          </span>

          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            UI Components
          </span>

          <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
            Performance
          </span>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default Internship;
