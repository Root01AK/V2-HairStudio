"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from './Testimonials';

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    number: "1",
    stat: "17+",
    title: "Experienced Hair Specialists",
    desc: "Our specialists are trained in non-surgical hair replacement techniques with meticulous attention to detail. Every application is tailored to your face shape, hair density, and lifestyle.",
    color: "#ef6548",
  },
  {
    number: "2",
    stat: "100%",
    title: "Premium-Grade Hair Systems",
    desc: "We use breathable skin and lace systems crafted for comfort, durability, and a natural hairline that looks undetectable.",
    color: "#f1ccb9",
  },
    {
    number: "3",
    stat: "300+",
    title: "Same-Day Transformation",
    desc: "Most hair systems and patches are applied within a single session. No downtime. No disruption. Just an immediate boost in confidence.",
    color: "#ef6548",
  },
  {
    number: "4",
    stat: "100%",
    title: "Private & Hygienic Studio Setup",
    desc: "Your privacy is respected at every step. All procedures are performed in a clean, controlled environment designed for comfort and discretion.",
    color: "#f1ccb9",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const stickyRef    = useRef(null);
  const leftRef      = useRef(null);
  const blockRefs    = useRef([]);
  const circleRefs   = useRef([]);
  const lineRefs     = useRef([]);
  const activeStep   = useRef(0);

  function goToStep(next) {
    const prev = activeStep.current;
    if (next === prev) return;

    const dir = next > prev ? 1 : -1;

    // OUT — previous block exits opposite direction
    gsap.to(blockRefs.current[prev], {
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      duration: 0.35,
      ease: "power2.in",
      overwrite: true,
    });

    // IN — next block enters
    gsap.fromTo(
      blockRefs.current[next],
      { opacity: 0, x: dir > 0 ? 80 : -80 },
      { opacity: 1, x: 0, duration: 0.55, ease: "power3.out", overwrite: true }
    );

    // Circles + lines
    points.forEach((_, i) => {
      const isActive = i === next;
      const isPast   = i < next;

      gsap.to(circleRefs.current[i], {
        opacity: isActive ? 1 : isPast ? 0.55 : 0.2,
        scale:   isActive ? 1 : isPast ? 0.85 : 0.72,
        duration: 0.4,
        ease: "power2.out",
      });

      if (i < points.length - 1) {
        gsap.to(lineRefs.current[i], {
          scaleY: isPast || isActive ? 1 : 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });

    activeStep.current = next;
  }

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      setTimeout(() => {
        ScrollTrigger.refresh();

        /* ── INITIAL STATE ── */
        blockRefs.current.forEach((el, i) => {
          gsap.set(el, {
            opacity: i === 0 ? 1 : 0,
            x: i === 0 ? 0 : 80,
          });
        });

        circleRefs.current.forEach((el, i) => {
          gsap.set(el, {
            opacity: i === 0 ? 1 : 0.2,
            scale:   i === 0 ? 1 : 0.72,
          });
        });

        lineRefs.current.forEach((el) => {
          gsap.set(el, { scaleY: 0, transformOrigin: "top center" });
        });

        /* ── LEFT PANEL: slide from left ── */
        gsap.set(leftRef.current, { opacity: 0, x: -100 });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80%",
          onEnter:     () => gsap.to(leftRef.current, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }),
          onEnterBack: () => gsap.to(leftRef.current, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }),
          onLeaveBack: () => gsap.set(leftRef.current, { opacity: 0, x: -100 }),
        });

        /* ── PIN + STEP TRIGGER ── */
        let lastStep = 0;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(points.length - 1) * 100}vh`,
          pin: stickyRef.current,
          pinSpacing: true,
          snap: {
            snapTo: 1 / (points.length - 1),
            duration: { min: 0.3, max: 0.5 },
            delay: 0.05,
            ease: "power1.inOut",
          },
          onUpdate(self) {
            const step = Math.min(
              points.length - 1,
              Math.round(self.progress * (points.length - 1))
            );
            if (step !== lastStep) {
              goToStep(step);
              lastStep = step;
            }
          },
        });

      }, 300);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div ref={containerRef} className="wcu-container">
      <div ref={stickyRef} className="wcu-sticky">

        {/* ── LEFT ── */}
        <div ref={leftRef} className="wcu-left">
          <p className="wcu-eyebrow">Why Choose V2 Hair Studio?</p>
          <h2 className="wcu-heading">
            Experience.<br />Precision.<br />Confidence.
          </h2>
          <p className="wcu-tagline">
            V2 Hair Studio — Chennai's most trusted hair replacement destination.
          </p>
        </div>

        {/* ── CENTER TIMELINE ── */}
        <div className="wcu-timeline">
          {points.map((p, i) => (
            <div key={i} className="wcu-timeline-item">
              <div
                ref={(el) => (circleRefs.current[i] = el)}
                className="wcu-circle"
                style={{ background: p.color }}
              >
                {p.number}
              </div>
              {i < points.length - 1 && (
                <div className="wcu-line-track">
                  <div
                    ref={(el) => (lineRefs.current[i] = el)}
                    className="wcu-line-fill"
                    style={{ background: points[i + 1].color }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── RIGHT — all 4 blocks absolutely stacked, one visible at a time ── */}
        <div className="wcu-right">
          {points.map((p, i) => (
            <div
              key={i}
              ref={(el) => (blockRefs.current[i] = el)}
              className="wcu-block"
            >
              <div className="wcu-stat" style={{ color: p.color }}>
                {p.stat}
              </div>
              <h3 className="wcu-title">{p.title}</h3>
              <p className="wcu-desc">{p.desc}</p>
              <span className="wcu-block-num" style={{ color: p.color }}>
                0{p.number}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
    <Testimonials />
    </>
  );
}