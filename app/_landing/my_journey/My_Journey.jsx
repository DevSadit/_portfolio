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
import Uni from "./Uni";
import Webdev from "./Webdev";
import Hsc from "./Hsc";
import Ssc from "./Ssc";
import Internship from "./Internship";

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
        <p className="text-base mb-6 text-center md:text-lg text-gray-400 max-w-xl mx-auto">
          From learning HTML late at night to building full projects with React,
          my journey as a developer has been full of challenges, growth, and
          passion.
        </p>

        <VerticalTimeline {...animationOptions} className="custom-timeline ">
          {/* Internship */}
          <Internship glowEffect={glowEffect} />

          {/* University Education */}
          <Uni glowEffect={glowEffect} />

          {/* Web Development Bootcamp */}
          <Webdev glowEffect={glowEffect} />

          {/* Higher Secondary Education */}
          <Hsc glowEffect={glowEffect} />

          {/* Secondary Education */}
          <Ssc glowEffect={glowEffect} />
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
