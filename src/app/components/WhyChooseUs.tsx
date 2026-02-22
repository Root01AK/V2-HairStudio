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
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeStep = useRef(0);
  const isMobile = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to set refs
  const setBlockRef = (el: HTMLDivElement | null, index: number) => {
    blockRefs.current[index] = el;
  };

  const setCircleRef = (el: HTMLDivElement | null, index: number) => {
    circleRefs.current[index] = el;
  };

  const setLineRef = (el: HTMLDivElement | null, index: number) => {
    lineRefs.current[index] = el;
  };

  function goToStep(next: number) {
    const prev = activeStep.current;
    if (next === prev) return;

    const dir = next > prev ? 1 : -1;

    // Kill any ongoing animations on these elements
    if (blockRefs.current[prev]) {
      gsap.killTweensOf(blockRefs.current[prev]);
    }
    if (blockRefs.current[next]) {
      gsap.killTweensOf(blockRefs.current[next]);
    }

    // Update visibility for better performance
    blockRefs.current.forEach((block, index) => {
      if (block) {
        if (index === next) {
          block.style.visibility = 'visible';
        } else if (index === prev) {
          // Will be hidden after animation
          setTimeout(() => {
            if (block && index !== activeStep.current) {
              block.style.visibility = 'hidden';
            }
          }, 400);
        }
      }
    });

    // OUT — previous block exits opposite direction
    if (blockRefs.current[prev]) {
      gsap.to(blockRefs.current[prev], {
        opacity: 0,
        x: dir > 0 ? -50 : 50,
        duration: 0.4,
        ease: "power2.in",
        overwrite: true,
      });
    }

    // IN — next block enters
    if (blockRefs.current[next]) {
      gsap.fromTo(blockRefs.current[next],
        { opacity: 0, x: dir > 0 ? 50 : -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          ease: "power3.out", 
          overwrite: true,
          delay: 0.1,
        }
      );
    }

    // Circles + lines animation
    points.forEach((_, i) => {
      if (circleRefs.current[i]) {
        gsap.killTweensOf(circleRefs.current[i]);
        gsap.to(circleRefs.current[i], {
          opacity: i === next ? 1 : i < next ? 0.55 : 0.2,
          scale: i === next ? 1 : i < next ? 0.85 : 0.72,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      }

      if (i < points.length - 1 && lineRefs.current[i]) {
        gsap.killTweensOf(lineRefs.current[i]);
        gsap.to(lineRefs.current[i], {
          scaleY: i < next || i === next ? 1 : 0,
          duration: 0.4,
          ease: "power2.out",
          transformOrigin: "top center",
          overwrite: true,
        });
      }
    });

    activeStep.current = next;
  }

  useEffect(() => {
    isMobile.current = window.innerWidth <= 768;
    
    // Don't run on mobile
    if (isMobile.current || !containerRef.current || !stickyRef.current || !leftRef.current) {
      return;
    }

    const container = containerRef.current;
    const sticky = stickyRef.current;
    const left = leftRef.current;

    // Store all ScrollTriggers to kill them properly
    const scrollTriggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Initial setup function
      const setupAnimations = () => {
        // Set initial states
        blockRefs.current.forEach((el, i) => {
          if (el) {
            gsap.set(el, {
              opacity: i === 0 ? 1 : 0,
              x: i === 0 ? 0 : 80,
            });
            // Set initial visibility
            el.style.visibility = i === 0 ? 'visible' : 'hidden';
          }
        });

        circleRefs.current.forEach((el, i) => {
          if (el) {
            gsap.set(el, {
              opacity: i === 0 ? 1 : 0.2,
              scale: i === 0 ? 1 : 0.72,
            });
          }
        });

        lineRefs.current.forEach((el, i) => {
          if (el) {
            gsap.set(el, { 
              scaleY: 0,
            });
          }
        });

        // Left panel initial state
        gsap.set(left, { opacity: 0, x: -100 });

        // Left panel animation on scroll
        const leftTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top 80%",
          onEnter: () => {
            gsap.to(left, { 
              opacity: 1, 
              x: 0, 
              duration: 1, 
              ease: "power3.out",
              overwrite: true,
            });
          },
          onEnterBack: () => {
            gsap.to(left, { 
              opacity: 1, 
              x: 0, 
              duration: 1, 
              ease: "power3.out",
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.set(left, { 
              opacity: 0, 
              x: -100,
              overwrite: true,
            });
          },
        });
        scrollTriggers.push(leftTrigger);

        // Pin trigger
        const totalSteps = points.length;
        const scrollDistance = (totalSteps - 1) * window.innerHeight;

        const pinTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: sticky,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
        scrollTriggers.push(pinTrigger);

        // Step navigation trigger
        let lastStep = 0;
        const stepTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const step = Math.min(
              totalSteps - 1,
              Math.floor(progress * (totalSteps - 1) + 0.3)
            );
            
            if (step !== lastStep && step >= 0 && step < totalSteps) {
              goToStep(step);
              lastStep = step;
            }
          },
        });
        scrollTriggers.push(stepTrigger);

        // Left panel parallax
        const parallaxTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            if (left) {
              gsap.set(left, {
                y: self.progress * 30,
              });
            }
          },
        });
        scrollTriggers.push(parallaxTrigger);
      };

      // Small delay to ensure DOM is ready
      timeoutRef.current = setTimeout(setupAnimations, 100);

    }, container);

    return () => {
      // Proper cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      // Kill all animations
      ctx.revert();
      
      // Kill all ScrollTriggers
      scrollTriggers.forEach(trigger => {
        if (trigger) {
          trigger.kill();
        }
      });
      
      // Clear all refs
      blockRefs.current = [];
      circleRefs.current = [];
      lineRefs.current = [];
      activeStep.current = 0;
    };
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
                  ref={(el) => setCircleRef(el, i)}
                  className="wcu-circle"
                  style={{ background: p.color }}
                >
                  {p.number}
                </div>
                {i < points.length - 1 && (
                  <div className="wcu-line-track">
                    <div
                      ref={(el) => setLineRef(el, i)}
                      className="wcu-line-fill"
                      style={{ background: points[i + 1].color }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── RIGHT — all blocks absolutely stacked, one visible at a time ── */}
          <div className="wcu-right" style={{ position: 'relative' }}>
            {points.map((p, i) => (
              <div
                key={i}
                ref={(el) => setBlockRef(el, i)}
                className="wcu-block"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  opacity: i === 0 ? 1 : 0,
                  visibility: i === 0 ? 'visible' : 'hidden',
                  transition: 'visibility 0s linear 0.4s',
                }}
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