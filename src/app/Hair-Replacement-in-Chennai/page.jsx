"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HairReplacementQA from "../components/HairReplacementQA"

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const wrapper = document.querySelector("#hriC-3d-wrap");
      const beforeImg = document.querySelector(".image-front");
      const afterImg = document.querySelector(".image-back");

      // --- Initial states (NO OVERLAP) ---
      gsap.set(wrapper, { transformPerspective: 2000 });

      gsap.set(beforeImg, {
        xPercent: -25,
        rotateY: -20,
        rotateZ: -3,
        scale: 1.18,
        opacity: 1,
        z: 0
      });

      gsap.set(afterImg, {
        xPercent: 35,
        rotateY: 25,
        rotateZ: 4,
        scale: 1.18,
        opacity: 0,
        z: -400
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1800",
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      // --- BEFORE enters clean ---
      tl.to(beforeImg, {
        xPercent: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      });

      // --- HARD HANDOFF (this removes ghosting) ---
      tl.to(beforeImg, {
        opacity: 0,
        z: -500,
        duration: 0.6,
        ease: "power2.in"
      });

      // --- AFTER enters AFTER before exits ---
      tl.to(afterImg, {
        opacity: 1,
        xPercent: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        z: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.2");

      // --- Camera settle ---
      tl.to(wrapper, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // --- SUBTLE LUXURY MOTION (loop, not scroll) ---
      gsap.to(afterImg, {
        y: -8,
        rotateY: 1.5,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="hriC-page-wrapper" ref={sectionRef}>
      <section className="hriC-hero-container" ref={containerRef}>

        {/* Left Content Side */}
        <div className="hriC-content-left">
          <h1 className="hriC-title-main">
            The Art and Science <br />
            <span className="hriC-avatar-inline">
              <img src="https://i.pravatar.cc/100?u=1" alt="p1" />
              <img src="https://i.pravatar.cc/100?u=2" alt="p2" />
              <img src="https://i.pravatar.cc/100?u=3" alt="p3" />
            </span>
            of Crafting <br /> Exceptional Designs
          </h1>

          <p className="hriC-hero-desc">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution.
          </p>

          <button className="hriC-btn-disc">Discove</button>

          <div className="hriC-service-list">
            <div className="hriC-service-item">
              <div className="hriC-item-left">
                <span className="hriC-icon">📊</span>
                <div>
                  <h4>PITCH DECKS</h4>
                  <p>The latest trends</p>
                </div>
              </div>
              <span className="hriC-arrow">→</span>
            </div>

            <div className="hriC-service-item">
              <div className="hriC-item-left">
                <span className="hriC-icon">📝</span>
                <div>
                  <h4>AI PRESENTATIONS</h4>
                  <p>1000+ EXAMPLES</p>
                </div>
              </div>
              <span className="hriC-arrow">→</span>
            </div>
          </div>
        </div>

        {/* Right Visual Side */}
        {/* Right Visual Side */}
        <div className="hriC-visual-right">
          <div className="hriC-visual-wrapper" id="hriC-3d-wrap">

            <div className="hriC-main-image-frame">
              {/* Image 1 */}
              <img
                className="hriC-image image-front"
                src="/1rev.png"
                alt="Image One"
              />

              {/* Image 2 */}
              <img
                className="hriC-image image-back"
                src="/2rev.png"
                alt="Image Two"
              />
            </div>

          </div>
        </div>



      </section>
      <HairReplacementQA />
    </div>
  );
}