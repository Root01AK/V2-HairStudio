"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeServices from "../components/HomeServices";

gsap.registerPlugin(ScrollTrigger);

const rowOne = [
  { type: "image", src: "/results/1.jpg" },
  { type: "video", src: "/results/2.mp4" },
  { type: "image", src: "/results/3.jpg" },
  { type: "image", src: "/results/4.jpg" },
];

const rowTwo = [
  { type: "image", src: "/results/5.jpg" },
  { type: "video", src: "/results/6.mp4" },
  { type: "image", src: "/results/7.jpg" },
  { type: "image", src: "/results/8.jpg" },
];

// Duplicate items so the marquee loops seamlessly
const rowOneDup = [...rowOne, ...rowOne];
const rowTwoDup = [...rowTwo, ...rowTwo];

export default function ResultImagesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const testimonialPRef = useRef(null);
  const testimonialSpanRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  /* ─────────────────────────────────────────
     HELPER: reset + animate a single element
  ───────────────────────────────────────── */
function fadeReveal(el, delay = 0) {
  gsap.fromTo(
    el,
    { opacity: 0, x: -600 },
    { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", delay }
  );
}

  function resetEl(el) {
    gsap.set(el, { opacity: 0, x: -600 });
  }

  /* ─────────────────────────────────────────
     HELPER: attach a replay ScrollTrigger
  ───────────────────────────────────────── */
  function attachTrigger(el, delay = 0) {
    resetEl(el);
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => fadeReveal(el, delay),
      onEnterBack: () => fadeReveal(el, delay),
      onLeave: () => resetEl(el),
      onLeaveBack: () => resetEl(el),
    });
  }

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    /* ═══════════════════════════════
       MOBILE — touch carousel
    ═══════════════════════════════ */
    if (isMobile) {
      const tracks = document.querySelectorAll(".results-track");

      tracks.forEach((track) => {
        const cards = track.querySelectorAll(".results-card");
        if (!cards.length) return;

        const isReverse = track
          .closest(".results-row")
          ?.classList.contains("reverse");

        const gap = 16;
        const cardWidth = cards[0].offsetWidth + gap;
        let index = isReverse ? cards.length - 1 : 0;
        let interval;

        if (isReverse) track.scrollLeft = track.scrollWidth;

        const startAutoSlide = () => {
          interval = setInterval(() => {
            index = isReverse ? index - 1 : index + 1;
            if (!isReverse && index >= cards.length) index = 0;
            if (isReverse && index < 0) index = cards.length - 1;
            track.scrollTo({ left: index * cardWidth, behavior: "smooth" });
          }, 3000);
        };

        startAutoSlide();
        track.addEventListener("touchstart", () => clearInterval(interval));
        track.addEventListener("touchend", startAutoSlide);
      });

      return;
    }

    /* ═══════════════════════════════
       DESKTOP — GSAP
    ═══════════════════════════════ */
    const ctx = gsap.context(() => {

      setTimeout(() => {
        ScrollTrigger.refresh();
        attachTrigger(titleRef.current, 0);
        attachTrigger(subRef.current, 0.15);
        attachTrigger(testimonialPRef.current, 0);
        attachTrigger(testimonialSpanRef.current, 0.15);
      }, 200);

      /* ── 2. INFINITE MARQUEE ROW 1 (left) ── */
      const trackOne = rowOneRef.current;
      if (trackOne) {
        const totalWidth = trackOne.scrollWidth / 2; // half because items are doubled
        gsap.to(trackOne, {
          x: `-=${totalWidth}`,
          duration: 22,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }

      /* ── 3. INFINITE MARQUEE ROW 2 (right — reversed direction) ── */
      const trackTwo = rowTwoRef.current;
      if (trackTwo) {
        const totalWidth = trackTwo.scrollWidth / 2;
        // Start offset so it begins from the right
        gsap.set(trackTwo, { x: -totalWidth });
        gsap.to(trackTwo, {
          x: `+=${totalWidth}`,
          duration: 26,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => -(Math.abs(parseFloat(x)) % totalWidth)),
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="results-section">

        {/* HEADING */}
        <div className="results-header">
          <h2 ref={titleRef}>
            Real Hair Transformations.<br />
            Real Confidence Restored.
          </h2>
          <p className="results-sub" ref={subRef}>
            Discover authentic hair replacement results from clients who trusted
            V2 Hair Studio for natural-looking hair systems and expert care.
            Every transformation is crafted with precision, comfort, and
            attention to detail—designed not just to restore hair, but to
            rebuild confidence and self-assurance.
          </p>
        </div>

        {/* MARQUEE ROW 1 — moves left */}
        <div className="results-row">
          <div className="results-track" ref={rowOneRef}>
            {rowOneDup.map((item, i) => (
              <div key={i} className="results-card">
                {item.type === "image" ? (
                  <img src={item.src} alt="Result" />
                ) : (
                  <video src={item.src} muted autoPlay loop playsInline />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MARQUEE ROW 2 — moves right */}
        <div className="results-row reverse">
          <div className="results-track" ref={rowTwoRef}>
            {rowTwoDup.map((item, i) => (
              <div key={i} className="results-card">
                {item.type === "image" ? (
                  <img src={item.src} alt="Result" />
                ) : (
                  <video src={item.src} muted autoPlay loop playsInline />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="results-testimonial">
          <p ref={testimonialPRef}>
            I didn't just regain my hair — I regained my confidence."
          </p>
          <span ref={testimonialSpanRef}>— Verified Client, Chennai</span>
        </div>

      </section>

      <HomeServices />
    </>
  );
}