"use client";
import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserGraduate,
  FaStar,
  FaBookReader,
} from "react-icons/fa";

const My_Journey = () => {
  // State to track viewport width for responsive design
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle resize events
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Animation settings
  const animationOptions = {
    animateIn: "fadeIn",
    animateOnce: false,
  };

  // Custom styling
  const glowEffect = isMobile
    ? "0 0 5px #f9004d, 0 0 10px rgba(249, 0, 77, 0.3)"
    : "0 0 10px #f9004d, 0 0 20px rgba(249, 0, 77, 0.5)";

  const greenGlowEffect = isMobile
    ? "0 0 5px #10cc52, 0 0 10px rgba(16, 204, 82, 0.3)"
    : "0 0 10px #10cc52, 0 0 20px rgba(16, 204, 82, 0.5)";

  return (
    <div id="journey" className=" min-h-screen">
      <div className="mx-auto">
        <h2 className="text-3xl mb-2 text-center md:text-5xl font-bold bg-gradient-to-r text-white bg-clip-text">
          My <span className="text-[#F9004D]">Journey</span>
        </h2>
        <p className="text-base mb-6 text-center md:text-lg text-gray-400 max-w-xl mx-auto">From learning HTML late at night to building full projects with React, my journey as a developer has been full of challenges, growth, and passion.</p>

        <VerticalTimeline {...animationOptions} className="custom-timeline ">
          {/* University Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgba(26, 26, 26, 0.9)",
              color: "#fff",
              boxShadow: glowEffect,
              borderRadius: "12px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f9004d" }}
            date="2024 - present"
            dateClassName="text-xs sm:text-sm md:text-base text-gray-300"
            iconStyle={{
              background: "#f9004d",
              color: "#fff",
              boxShadow: glowEffect,
            }}
            icon={<FaUserGraduate />}
          >
            <div className="p-2">
              <h3 className="vertical-timeline-element-title text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-pink-500">
                BSc in Computer Science & Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl mb-2 sm:mb-3 text-gray-300">
                Premier University Chittagong
              </h4>
              <div className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                <p>
                  Focusing on core computer science principles, software
                  development, and engineering practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Data Structures
                </span>
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Algorithms
                </span>
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Software Engineering
                </span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Web Development Bootcamp */}
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
                  Intensive training in modern web development technologies and
                  best practices.
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
                  Completed 3+ real-world projects with focus on responsive
                  design and user experience
                </p>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Higher Secondary Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgba(26, 26, 26, 0.9)",
              color: "#fff",
              boxShadow: glowEffect,
              borderRadius: "12px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f9004d" }}
            date="2022 - 2023"
            dateClassName="text-xs sm:text-sm md:text-base text-gray-300"
            iconStyle={{
              background: "#f9004d",
              color: "#fff",
              boxShadow: glowEffect,
            }}
            icon={<FaGraduationCap />}
          >
            <div className="p-2">
              <h3 className="vertical-timeline-element-title text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-pink-500">
                Higher Secondary School Certificate (Grade 12)
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl mb-2 sm:mb-3 text-gray-300">
                Dewanhat City Corporation College
              </h4>
              <div className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                <p>
                  Focused on science and mathematics with c++ basics.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Science
                </span>
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Mathematics
                </span>
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Computer Science
                </span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Secondary Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgba(26, 26, 26, 0.9)",
              color: "#fff",
              boxShadow: glowEffect,
              borderRadius: "12px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f9004d" }}
            date="2020 - 2021"
            dateClassName="text-xs sm:text-sm md:text-base text-gray-300"
            iconStyle={{
              background: "#f9004d",
              color: "#fff",
              boxShadow: glowEffect,
            }}
            icon={<FaBookReader />}
          >
            <div className="p-2">
              <h3 className="vertical-timeline-element-title text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-pink-500">
                Senior School Certificate (Grade 10)
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg sm:text-xl mb-2 sm:mb-3 text-gray-300">
                Patenga High School
              </h4>
              <div className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                <p>
                  Built strong foundation in science and mathematics.
                </p>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Science
                </span>
                <span className="bg-pink-900 bg-opacity-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-pink-200">
                  Mathematics
                </span>

              </div>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

      {/* Custom CSS for mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 1169px) {
          .vertical-timeline-element-date {
            margin-top: 0.5rem !important;
            margin-bottom: 1rem !important;
            padding: 0 !important;
          }

          .vertical-timeline-element-content {
            margin-left: 40px !important;
            padding: 1rem !important;
          }

          .vertical-timeline-element-icon {
            width: 30px !important;
            height: 30px !important;
            margin-left: -15px !important;
          }

          .vertical-timeline::before {
            left: 15px !important;
          }

          .vertical-timeline-element-icon svg {
            width: 18px !important;
            height: 18px !important;
            margin-top: 6px !important;
            margin-left: 6px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default My_Journey;
