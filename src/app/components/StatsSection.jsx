"use client";
import { useEffect, useRef } from "react";
import CtaSection from "../components/CtaSection";

function useCountUp(target, suffix = "", duration = 2000) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const start = performance.now();
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function StatsSection() {
  const ref1 = useCountUp(1000, "+");
  const ref2 = useCountUp(30, "+");
  const ref3 = useCountUp(95, "%");
  const ref4 = useCountUp(17, "+");

  return (
    <>
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-item">
            <h3 ref={ref1}>0+</h3>
            <p>Clients helped globally</p>
          </div>

          <div className="stat-item">
            <h3 ref={ref2}>0+</h3>
            <p>Licensed professionals</p>
          </div>

          <div className="stat-item">
            <h3 ref={ref3}>0%</h3>
            <p>Client satisfaction rate</p>
          </div>

          <div className="stat-item">
            <h3 ref={ref4}>0+</h3>
            <p>Years of experience</p>
          </div>

        </div>
      </section>
      <CtaSection />
    </>
  );
}