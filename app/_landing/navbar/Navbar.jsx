"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll events to show/hide navbar
  useEffect(() => {
    if (!isMounted) return;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the top of the page or when scrolling up
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        // Hide navbar when scrolling down
        setVisible(false);
      }

      // Update scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMounted]);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  // Handle outside click to close menu
  useEffect(() => {
    if (!isMounted) return;

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
  }, [menuOpen, isMounted]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (!isMounted) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, isMounted]);

  // Handle toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigation links
  const navLinks = [
    { name: "Journey", href: "#education" },
    { name: "Techstack", href: "#techstack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`backdrop-blur-sm bg-black/10 sticky top-0 z-50 border-b border-gray-800 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      ref={navRef}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl uppercase font-bold tracking-wider">
            <span className="text-[#f9004d]">E</span>hsan
          </h2>
        </div>

        {/* Mobile controls - Resume button and hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Resume button for mobile */}
          <Link target="_blank" href="https://drive.google.com/file/d/1yXDj3QH4rJcz12jEfg-S5fOZ3tSzGhBz/view?usp=drive_link" suppressHydrationWarning className="bg-[#f9004d] px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 hover:bg-[#d0003d] active:scale-95">
            Resume
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={toggleMenu}
            suppressHydrationWarning
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none z-50 transition-colors duration-200"
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
        </div>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 font-medium transition-all duration-300 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#f9004d] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link target="_blank" href="https://drive.google.com/file/d/1yXDj3QH4rJcz12jEfg-S5fOZ3tSzGhBz/view?usp=drive_link" suppressHydrationWarning className="bg-[#f9004d] px-5 py-2 rounded 
          text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f9004d]/20 active:translate-y-0">
            Resume
          </Link>
        </div>
      </div>

      {/* Mobile navigation overlay - Fixed position, covers entire screen */}
      {isMounted && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile navigation - slides in from right side */}
      {isMounted && (
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 z-40 w-4/5 max-w-sm h-screen bg-gradient-to-b from-gray-900 to-black shadow-xl transform transition-all duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden overflow-y-auto`}
        >
          <div className="px-6 pt-20 pb-6 space-y-1 h-full flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3.5 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
