"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BridalCollection() {
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const mottoRef = useRef(null);

  function resetAll() {
    gsap.set(titleRef.current, { opacity: 0, x: -60 });
    gsap.set(descRef.current, { opacity: 0, x: -60 });
    gsap.set(mottoRef.current, { opacity: 0, x: -60 });
  }

  function runSequence() {
    resetAll();

    gsap.timeline()
      .to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
      })
      .to(descRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .to(mottoRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      }, "-=0.4");
  }

  useEffect(() => {
    if (!rightRef.current) return;

    resetAll();

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      ScrollTrigger.create({
        trigger: rightRef.current,
        start: "top 80%",
        onEnter: () => runSequence(),
        onEnterBack: () => runSequence(),
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="bridal-hero">
      <div id="left-side">
        <div id="portrait-frame">
          <img src="/bridal-home.jpeg" alt="Bridal Portrait" />
          <h2 id="portrait-label">Radiance, perfected for your moment.</h2>
        </div>
        <div id="cta-section">
          <a href="/Bridal-Studio-Chennai" id="btn-collection">
            Bridal Studio
          </a>
        </div>
      </div>

      <div id="watermark-letter">v2</div>

      <div id="right-side" ref={rightRef}>
        <div id="top-text-area">
          <h1 id="main-title" ref={titleRef}>
            Beauty That Breathes Elegance
          </h1>
          <p id="description-paragraph" ref={descRef}>
            Luxurious, science-backed bridal skincare and beauty rituals
            designed for women who celebrate grace, confidence, and timeless
            elegance.
          </p>
          <em id="italic-motto" ref={mottoRef}>
            Glow begins within.
          </em>
        </div>

        <div id="bottom-image-area">
          <img
            src="/makeup-kit.jpeg"
            alt="Bridal Details"
            className="water-img"
          />
        </div>
      </div>
    </section>
  );
}