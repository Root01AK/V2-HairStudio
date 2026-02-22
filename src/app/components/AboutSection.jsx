"use client";
import { useEffect, useRef } from "react";
import UspSection from "../components/UspSection";

function useFadeFromLeft(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateX(-60px)";
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateX(-60px)";
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function AboutSection() {
  const refTop       = useFadeFromLeft(0);
  const refBrand     = useFadeFromLeft(0);
  const refIntro     = useFadeFromLeft(0.1);
  const refTitle     = useFadeFromLeft(0.15);
  const refImage     = useFadeFromLeft(0.2);
  const refContent   = useFadeFromLeft(0.25);

  return (
    <section className="about-wrapper">

      {/* Top Row */}
      <div ref={refTop} className="about-top">
        <h1 ref={refBrand} className="about-brand">V2 Hair Studio</h1>

        <p ref={refIntro} className="about-intro">
          At V2 Hair Studio, we believe confidence begins with how you feel about yourself. Based in Chennai,
          we specialize in advanced non-surgical hair replacement and premium bridal styling experiences designed
          to deliver natural results with unmatched precision.
        </p>
      </div>

      {/* Big Title */}
      <h2 ref={refTitle} className="about-title">Our Story</h2>

      {/* Image */}
      <div ref={refImage} className="about-image-container">
        <img src="/2.jpeg" alt="V2 Team" />
      </div>

      <div ref={refContent} className="about-content">
        <p>
          Founded in 2009, V2 Hair Studio was created with a clear vision — to redefine hair restoration and bridal beauty in
          Chennai. We recognized the need for a studio that seamlessly blends clinical precision with artistic styling, offering not just services,
          but truly personalized experiences. From customized hair systems and advanced non-surgical hair patches to elegant bridal transformations,
          every service is delivered with meticulous attention to detail, premium-quality materials, and expert craftsmanship refined over years of practice.
          We understand that hair loss and wedding-day beauty are deeply personal journeys. That's why discretion,
          hygiene, in-depth consultation, and comfort are at the core of everything we do — ensuring every client leaves with natural results and renewed confidence.
        </p>
      </div>

      <UspSection />
    </section>
  );
}