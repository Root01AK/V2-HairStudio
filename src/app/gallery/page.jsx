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
    gsap.set([headingRef.current, subRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(imageRef.current, {
      scale: 1.1,
      opacity: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.8,
      force3D: true,
    })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "-=1.3"
      )
      .to(
        subRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.8"
      );
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <>
      <section ref={containerRef} className="luxury-hero">
        {/* Content */}
        <div className="luxury-content">
          <h1 ref={headingRef} className="luxury-heading">
            v2 STUDIO
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
