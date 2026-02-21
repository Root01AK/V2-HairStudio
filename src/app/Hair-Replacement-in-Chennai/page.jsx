"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function DockingHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const nextRef = useRef(null); // Added for pinSpacing reference

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          endTrigger: nextRef.current || ".next-section",
          end: "+=1200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false // Set true for debugging
        }
      });

      // Image docks to top-left-ish position
      tl.to(imageRef.current, {
        x: "-55vw",
        y: "20vh",
        scale: 0.75,
        ease: "power2.inOut"
      }, 0);

      // Bonus: Animate hero text for polish
      tl.from(".hero-left h1", {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, 0);
      tl.to(".hero-left", {
        y: -30,
        opacity: 0.8,
        duration: 0.5
      }, 0.2);

      // Animate next section reveal
      tl.from(".next-right h2", {
        y: 100,
        opacity: 0,
        duration: 1
      }, 0.6);
    },
    { scopeKey: containerRef } // Better than just scope for deps tracking
  );

  return (
    <div ref={containerRef}>
      <section className="hero-section min-h-screen flex items-center justify-between p-8 lg:p-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
        <div className="hero-left max-w-md z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Premium Hair Replacement</h1>
          <p className="text-xl text-white/80">Confidence. Precision. Realism.</p>
        </div>

        <div className="hero-right w-1/2 h-3/4 flex items-center justify-end">
          <div ref={imageRef} className="hero-image w-full h-full max-w-md lg:max-w-2xl">
            <img 
              src="/1rev.png" 
              alt="Hero" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section ref={nextRef} className="next-section min-h-screen py-20 px-8 lg:px-20 bg-gradient-to-r from-slate-800 to-purple-900/20 flex items-center justify-between">
        <div className="next-left w-1/2 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl shadow-xl" />
        <div className="next-right max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What Is Hair Replacement?</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            A non-surgical cosmetic solution designed to restore natural appearance.
          </p>
        </div>
      </section>

      <section className="content-section min-h-screen py-20 px-8 lg:px-20 bg-slate-900">
        <h2 className="text-4xl font-bold text-white text-center">More Information</h2>
        <p className="text-xl text-white/80 mt-8 text-center max-w-2xl mx-auto">
          Additional content sections will scroll in naturally after the pinned hero animation completes.[web:14]
        </p>
      </section>
    </div>
  );
}
