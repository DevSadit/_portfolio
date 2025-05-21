"use client";

import { useState, useEffect } from "react";
import ContactForm from "../_components/contactform";
import Link from "next/link";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Improved loading state with skeleton UI
  if (!mounted) {
    return (
      <div  className="min-h-screen bg-[#0A0A0A] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-pulse text-center mb-12">
              <div className="h-12 bg-gray-800 rounded w-1/3 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-800 rounded w-2/3 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex flex-col">
                <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 mb-4 h-32"></div>
                <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 mb-4 h-32"></div>
                <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 h-32"></div>
              </div>

              <div className="md:col-span-2">
                {/* The ContactForm component handles its own loading state */}
                <div className="animate-pulse bg-[#111111] rounded-lg p-8 border border-gray-800 w-full" style={{ minHeight: "520px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  

  return (
    <div id="contact" className="min-h-screen bg-[#0A0A0A] mb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r text-white bg-clip-text">
        Get in <span className="text-[#F9004D]">Touch</span>
      </h2>
      <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">{"Whether it’s a collaboration, a project idea, or just a quick chat, I’m always open to new connections"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col">
              <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 mb-4 hover:border-[#F9004D] transition-all duration-300">
                <div className="text-[#F9004D] text-2xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">dev.ehesan@gmail.com</p>
              </div>

              <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 mb-4 hover:border-[#F9004D] transition-all duration-300">
                <div className="text-[#F9004D] text-2xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Chattogram, Bangladesh</p>
              </div>

              <div className="bg-[#111111] rounded-lg p-6 border border-gray-800 hover:border-[#F9004D] transition-all duration-300">
                <div className="text-[#F9004D] text-2xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-[#F9004D] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <Link target="_blank" href="https://github.com/DevSadit" className="text-gray-400 hover:text-[#F9004D] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                  <a href="#" className="text-gray-400 hover:text-[#F9004D] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#F9004D] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}