"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GalleryChild from "../components/GalleryChild";

export default function GalleryHeroLuxury() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        {
          scale: 0.85,
          opacity: 0,
          letterSpacing: "0.25em",
        },
        {
          scale: 1,
          opacity: 1,
          letterSpacing: "0.05em",
          duration: 1.6,
        }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.9"
        )
        .fromTo(
          imageRef.current,
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8 },
          "-=1.6"
        );
    }, containerRef);

    return () => ctx.revert(); // cleanup for production
  }, []);

  return (
    <>
      <section ref={containerRef} className="luxury-hero">
        {/* Background Image */}
        <div
          ref={imageRef}
          className="luxury-bg"
          style={{
            backgroundImage: "url('/gem-bg.jpg')", // replace with your image
          }}
        />

        {/* Overlay Layer */}
        <div className="luxury-overlay" />

        {/* Content */}
        <div className="luxury-content">
          <h1 ref={headingRef} className="luxury-heading">
            V2 STUDIO
            <br />
            Confidence With
            <br />
            Timeless Elegance
          </h1>

          <p ref={subRef} className="luxury-sub">
            Discover expert hair transformations crafted with authenticity,
            precision, and lasting comfort.
          </p>
        </div>
      </section>

      <GalleryChild />
    </>
  );
}
