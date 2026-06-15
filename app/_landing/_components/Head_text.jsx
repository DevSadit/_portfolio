// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import TextPlugin from "gsap/TextPlugin";

// // Register the plugin
// gsap.registerPlugin(TextPlugin);

// const HeadText = () => {
//   useEffect(() => {
//     const bannert1 = gsap.timeline();

//     bannert1.to("#type", {
//       duration: 2,
//       text: "A Web Developer",
//       ease: "power1.out",
//     });
//   }, []);

//   return (
//     <div className="flex text-center justify-center items-center mt-20 md:mt-24 lg:mt-28">
//       <h1 className="text-4xl h-60 md:text-7xl uppercase leading-tight font-black">
//         Hi, I'm <br />
//         <span className="text-[#f9004d]">Shahmiraj Ehesan</span> <br />
//         <span id="type"></span>
//       </h1>
//     </div>
//   );
// };

// export default HeadText;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// ─── Config ──────────────────────────────────────────────────────────────────
// All timing in seconds. Tweak here — nowhere else.
const ROLES = ["A Web Developer", "AI Enthusiast"];

const TIMING = {
  typeSpeed: 0.055, // seconds per character while typing
  holdDuration: 1.8, // how long fully-typed text stays on screen
  deleteSpeed: 0.03, // seconds per character while deleting (faster = snappier)
  pauseBetween: 0.35, // breath gap between delete-end and next type-start
  cursorBlink: 0.55, // cursor blink interval
};

// ─── Component ────────────────────────────────────────────────────────────────
const HeadText = () => {
  const typeRef = useRef(null); // the span that receives typed text
  const cursorRef = useRef(null); // the blinking cursor bar

  useEffect(() => {
    const typeEl = typeRef.current;
    const cursorEl = cursorRef.current;
    if (!typeEl || !cursorEl) return;

    // ── 1. Cursor blink — runs independently, forever ─────────────────────
    const cursorTl = gsap.to(cursorEl, {
      opacity: 0,
      duration: TIMING.cursorBlink,
      ease: "steps(1)",
      yoyo: true,
      repeat: -1,
    });

    // ── 2. Master typing loop ─────────────────────────────────────────────
    const master = gsap.timeline({ repeat: -1 });

    ROLES.forEach((role) => {
      const typeDuration = role.length * TIMING.typeSpeed;
      const deleteDuration = role.length * TIMING.deleteSpeed;

      // Step A — type the word in, character by character
      master.to(typeEl, {
        duration: typeDuration,
        text: { value: role, delimiter: "" },
        ease: "none",
      });

      // Step B — "lock-in" flash: brief white glow the moment typing finishes
      master
        .to(typeEl, {
          duration: 0.12,
          color: "#ffffff",
          textShadow: "0 0 18px #f9004d, 0 0 36px #f9004d88",
          ease: "power2.out",
        })
        .to(typeEl, {
          duration: 0.18,
          color: "inherit",
          textShadow: "none",
          ease: "power2.in",
        });

      // Step C — hold so the reader can absorb the text
      master.to(typeEl, { duration: TIMING.holdDuration });

      // Step D — glitch flicker exit before deleting
      master
        .to(typeEl, {
          duration: 0.06,
          skewX: 8,
          opacity: 0.6,
          ease: "steps(1)",
          yoyo: true,
          repeat: 3,
        })
        .to(typeEl, { skewX: 0, opacity: 1, duration: 0.05 });

      // Step E — delete the word
      master.to(typeEl, {
        duration: deleteDuration,
        text: { value: "", delimiter: "" },
        ease: "none",
      });

      // Step F — short breath before the next word starts
      master.to(typeEl, { duration: TIMING.pauseBetween });
    });

    // ── 3. Reduced-motion: freeze animation, show first role statically ───
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      master.pause();
      cursorTl.pause();
      gsap.set(typeEl, { text: ROLES[0] });
      gsap.set(cursorEl, { opacity: 1 });
    }

    // ── 4. Cleanup on unmount ─────────────────────────────────────────────
    return () => {
      master.kill();
      cursorTl.kill();
    };
  }, []);

  return (
    <div className="flex text-center justify-center items-center mt-20 md:mt-24 lg:mt-28">
      <h1 className="text-4xl h-60 md:text-7xl uppercase leading-tight font-black">
        Hi, I&apos;m <br />
        <span className="text-[#f9004d]">Shahmiraj Ehesan</span> <br />
        {/*
          FIX: wrapper is `inline-block relative` with a fixed min-width.
          The cursor is `absolute` so it sits right after the last character
          without ever participating in line-wrapping or collapsing the row height.
        */}
        <span
          className="relative inline-block"
          style={{ minWidth: "3ch", minHeight: "1.2em" }}
        >
          {/* Text target — GSAP writes characters into this */}
          <span ref={typeRef} className="whitespace-nowrap" />

          {/* Cursor bar — absolutely anchored, never wraps */}
          <span
            ref={cursorRef}
            aria-hidden="true"
            className="absolute top-0 bottom-0 inline-block w-[3px] md:w-[5px] bg-[#f9004d] rounded-sm"
            style={{ left: "calc(100% + 2px)" }}
          />
        </span>
      </h1>
    </div>
  );
};

export default HeadText;
