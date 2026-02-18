"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProcessStrip from "./ProcessStrip";

export default function HairReplacementQA() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".qa-landscape-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="qa-landscape-section">
        <div className="qa-landscape-container">
          <div className="qa-landscape-card">
            <div className="qa-landscape-content">
              <h2>What Is Hair Replacement?</h2>
              <p>
                Hair replacement is a non-surgical cosmetic solution designed
                to restore natural hair using customized systems tailored to
                match your hairline and density.
              </p>
            </div>
          </div>

          <div className="qa-landscape-card">
            <div className="qa-landscape-content">
              <h2>Who Is It For?</h2>
              <p>
                Ideal for individuals experiencing partial or complete hair
                loss due to genetics or medical conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessStrip />
    </>
  );
}
