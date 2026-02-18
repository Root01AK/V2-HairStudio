"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AboutSection from "../components/AboutSection"

export default function AboutHero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="about-section">

      {/* Top Heading */}
      <div className="about-heading">
        <h2>
          Discover our <span>V2 Studio</span>
        </h2>
        <p>
          Chennai’s Trusted Hair Replacement & Bridal Studio <br/>
          Our journey began with a simple mission — to create a space where transformation feels comfortable, private, and empowering.
        </p>
      </div>

      {/* Video Container */}
      <div className="about-video-container">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="about-video"
        >
          <source src="/3.mp4" type="video/mp4" />
        </video>

        {/* Big Overlay Text */}
        <h1 ref={textRef} className="about-overlay-text">
          V2 Hair Studio
        </h1>

        {/* Play Button */}
        <div className="about-play">
          ▶
        </div>

      </div>
      <AboutSection />
    </section>
  );
}
