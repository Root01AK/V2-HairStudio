"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HairReplacementPsnap from "../components/HairReplacementPsnap";


gsap.registerPlugin(ScrollTrigger);

const resultsData = [
  { id: 1, image: "/1.png", alt: "Client 1" },
  { id: 2, image: "/1.png", alt: "Client 2" },
  { id: 3, image: "/1.png", alt: "Client 3" },
  { id: 4, image: "/1.png", alt: "Client 4" },
  // Duplicate items for seamless looping
  { id: 5, image: "/1.png", alt: "Client 1 Duplicate" },
  { id: 6, image: "/1.png", alt: "Client 2 Duplicate" },
];

export default function ResultsPreview() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = scrollRef.current;
      if (!wrapper) return;

      // Calculate total width of the track
      const totalWidth = wrapper.scrollWidth;
      
      // Auto-moving Marquee Logic
      const loop = gsap.to(wrapper, {
        x: `-${totalWidth / 2}`, // Move by half the duplicated content
        duration: 25, // Adjust speed (lower = faster)
        ease: "none",
        repeat: -1,
        onReverseComplete: () => {
          loop.totalTime(loop.rawTime() + loop.duration() * 10);
        }
      });

      // Pause on Hover
      wrapper.addEventListener("mouseenter", () => loop.pause());
      wrapper.addEventListener("mouseleave", () => loop.play());

      // Entrance Animation for the Header
      gsap.from(".hairrepgal-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".hairrepgal-section",
          start: "top 80%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="hairrepgal-section">
        <div className="hairrepgal-container">
          <div className="hairrepgal-header">
            <h2>Real Results. Real Confidence.</h2>
            <p>
              Experience visible transformations with our advanced hair
              replacement solutions. Every result shown is from real clients.
            </p>
          </div>

          <div className="hairrepgal-overflow-hidden">
            <div ref={scrollRef} className="hairrepgal-track">
              {resultsData.map((item) => (
                <div key={item.id} className="hairrepgal-card">
                  <div className="hairrepgal-image">
                    <img src={item.image} alt={item.alt} />
                    <span className="hairrepgal-badge">Before → After</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hairrepgal-cta">
            <a href="/Gallery" className="hairrepgal-button">
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>
      <HairReplacementPsnap />
    </>
  );
}