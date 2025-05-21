"use client";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

// Register the plugin
gsap.registerPlugin(TextPlugin);

const HeadText = () => {
  useEffect(() => {
    const bannert1 = gsap.timeline();

    bannert1.to("#type", {
      duration: 2,
      text: "A Web Developer",
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="flex text-center justify-center items-center mt-20 md:mt-24 lg:mt-28">
      <h1 className="text-4xl h-60 md:text-7xl uppercase leading-tight font-black">
        Hi, I'm <br />
        <span className="text-[#f9004d]">Shahmiraj Ehesan</span> <br />
        <span id="type"></span>
      </h1>
    </div>
  );
};

export default HeadText;
