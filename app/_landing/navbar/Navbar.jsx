"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Handle toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigation links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Project", href: "/projects" },
    { name: "Technology", href: "/technology" },
    { name: "Education", href: "/education" },
  ];

  return (
    <nav className="px-4 py-4 md:py-6 relative" ref={navRef}>
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl uppercase font-bold">
            <span className="text-[#f9004d]">E</span>hsan
          </h2>
        </div>

        {/* Hamburger button - only visible on mobile */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none md:hidden z-50"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon - show when menu is closed */}
          <svg
            className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* X icon - show when menu is open */}
          <svg
            className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#f9004d] px-4 py-2 rounded text-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
            Resume
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay - Fixed position, covers entire screen */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Mobile navigation - slides in from right side */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-40 w-4/5 max-w-sm h-screen bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-y-auto`}
      >
        <div className="px-4 pt-20 pb-6 space-y-6 h-full flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-lg font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-3 py-4 mt-auto mb-16">
            <button className="w-full bg-[#f9004d] px-4 py-3 rounded text-xl transition-all duration-300 hover:shadow-lg hover:bg-opacity-90">
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
