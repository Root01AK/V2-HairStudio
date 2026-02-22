import React, { useEffect, useRef } from 'react';
import HairReplacementFaq from '../components/HairReplacementFaq';

// Splits text into individual spans for character-level animation
function SplitText({ text, className, baseDelay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char-span"
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(40px) rotateX(-90deg)",
            transition: `opacity 0.5s ease ${baseDelay + i * 0.03}s, transform 0.5s ease ${baseDelay + i * 0.03}s`,
            transformOrigin: "bottom center",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function useAnimateIn(delay = 0, animStyle = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const defaultHidden = {
      opacity: "0",
      transform: "translateY(40px)",
      transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      ...animStyle,
    };

    Object.assign(el.style, defaultHidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1) rotate(0deg)";

          // Animate char-spans inside if any
          const chars = el.querySelectorAll(".char-span");
          chars.forEach((c) => {
            c.style.opacity = "1";
            c.style.transform = "translateY(0) rotateX(0deg)";
          });
        } else {
          Object.assign(el.style, defaultHidden);
          const chars = el.querySelectorAll(".char-span");
          chars.forEach((c) => {
            c.style.opacity = "0";
            c.style.transform = "translateY(40px) rotateX(-90deg)";
          });
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function PricingSnapshot() {
  const pillarRef    = useAnimateIn(0,   { transform: "scaleY(0)", transformOrigin: "bottom center" });
  const titleRef     = useAnimateIn(0.1);
  const cardRef      = useAnimateIn(0.25, { transform: "translateY(50px) scale(0.9)" });
  const labelRef     = useAnimateIn(0.2);
  const amountRef    = useAnimateIn(0.3, { transform: "translateX(-40px)" });
  const disclaimerRef = useAnimateIn(0.45);
  const btnRef       = useAnimateIn(0.55, { transform: "translateY(20px) scale(0.95)" });

  // Number count-up for price
  useEffect(() => {
    const el = amountRef.current;
    if (!el) return;

    const runCountUp = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let start = 8000;
          const end = 11999;
          const duration = 1200;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + eased * (end - start));
            el.querySelector(".price-count").textContent = `₹${current.toLocaleString("en-IN")}*`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      });
    };

    const obs = new IntersectionObserver(runCountUp, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="bridal-pricing-wrapper">
        <div className="bridal-background-glow"></div>

        <div className="bridal-pricing-container">
          {/* Pillar grows upward */}
          <div
            ref={pillarRef}
            className="bridal-visual-pillar"
            style={{ transformOrigin: "bottom center" }}
          />

          <div className="bridal-pricing-content">
            {/* Title flips in per character */}
            <h1 ref={titleRef} className="bridal-plan-title">
              Hair Replacement
            </h1>

            {/* Card scales + fades */}
            <div ref={cardRef} className="bridal-price-card">
              <span ref={labelRef} className="bridal-label">Starting from</span>
              {/* Amount slides from left + counts up */}
              <h2 ref={amountRef} className="bridal-amount">
                <span className="price-count">₹11,999*</span>
              </h2>
            </div>

            {/* Disclaimer fades up */}
            <p ref={disclaimerRef} className="bridal-disclaimer">
              Take on the challenge with our specialized evaluation process.
              Final cost depends on customization &amp; density.
            </p>

            {/* Button pulses in */}
            <button
              ref={btnRef}
              className="bridal-cta-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.transition = "transform 0.25s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Book Now<span>→</span>
            </button>
          </div>
        </div>
      </section>

      <HairReplacementFaq />
    </>
  );
}