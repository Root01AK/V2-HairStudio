"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProcessStrip from "./ProcessStrip";

const QA_ITEMS = [
  {
    index: "01",
    question: "What Is Hair Replacement?",
    answer:
      "Hair replacement is a non-surgical cosmetic solution designed to restore natural hair using customized systems tailored to match your hairline, density, and texture with undetectable precision.",
    tag: "Foundation",
  },
  {
    index: "02",
    question: "Who Is It For?",
    answer:
      "Ideal for individuals experiencing partial or complete hair loss due to genetics, alopecia, or medical conditions — anyone seeking a permanent-feeling, natural-looking restoration.",
    tag: "Eligibility",
  },
  {
    index: "03",
    question: "How Long Does It Last?",
    answer:
      "With proper maintenance each system lasts 6–12 months. Our studio offers dedicated aftercare sessions to keep every bond, edge, and strand performing at its finest.",
    tag: "Longevity",
  },
  {
    index: "04",
    question: "Is It Detectable?",
    answer:
      "No. Each piece is hand-knotted on a breathable skin-thin base, perfectly matched to your scalp tone. Even in direct light and close contact it remains invisible.",
    tag: "Discretion",
  },
];

export default function HairReplacementQA() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const ruleRef    = useRef(null);
  const subRef     = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── HEADING REVEAL ───────────────────────────────────────────────────────
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      headingTl
        .from(".qa-eyebrow",      { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(ruleRef.current,    { scaleX: 0, duration: 0.7, ease: "power3.inOut", transformOrigin: "left center" }, "-=0.3")
        .from(".qa-heading-word", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, "-=0.4")
        .from(subRef.current,     { y: 24, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");

      // ── CARDS ────────────────────────────────────────────────────────────────
      const cards = gsap.utils.toArray(".qa-landscape-card");

      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(card,
          { y: 90, opacity: 0, scale: 0.97, x: isEven ? -20 : 20 },
          {
            y: 0, opacity: 1, scale: 1, x: 0,
            duration: 1.1, ease: "power3.out", delay: i * 0.06,
            scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play none none reverse" },
          }
        );

        const indexEl = card.querySelector(".qa-card-index");
        if (indexEl) {
          gsap.from(indexEl, {
            opacity: 0, scale: 0.6, duration: 0.8, ease: "back.out(1.6)",
            scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play none none reverse" },
          });
        }

        const line = card.querySelector(".qa-card-line");
        if (line) {
          gsap.fromTo(line, { scaleY: 0 }, {
            scaleY: 1, duration: 1, ease: "power3.inOut", transformOrigin: "top center",
            scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play none none reverse" },
          });
        }

        const inner = card.querySelectorAll(".qa-card-tag, h2, p");
        gsap.from(inner, {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.25,
          scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play none none reverse" },
        });
      });

      // ── ORB PARALLAX ─────────────────────────────────────────────────────────
      gsap.to(".qa-orb-1", {
        y: -60, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to(".qa-orb-2", {
        y: 80, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 2 },
      });

    }, sectionRef);

    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400&display=swap');

        /* ─────────────────────────────────────────
           SECTION — deep warm dark (matches charcoal)
        ───────────────────────────────────────── */
        .qa-section {
          position: relative;
          padding: 120px 0 140px;
          background: #7f352f;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* grain */
        .qa-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        /* top coral accent line */
        .qa-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ef6548, transparent);
          opacity: 0.55;
        }

        /* ── ORBS — coral + burgundy ── */
        .qa-orb-1, .qa-orb-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .qa-orb-1 {
          width: 480px; height: 480px;
          top: -80px; left: -120px;
          background: radial-gradient(circle, rgba(239,101,72,0.1) 0%, transparent 70%);
        }
        .qa-orb-2 {
          width: 360px; height: 360px;
          bottom: 60px; right: -60px;
          background: radial-gradient(circle, rgba(127,53,47,0.14) 0%, transparent 70%);
        }

        /* ── INNER ── */
        .qa-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 6vw;
        }

        /* ── HEADING ── */
        .qa-heading-block { margin-bottom: 80px; }

        .qa-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .qa-eyebrow-line {
          display: block;
          width: 28px; height: 1px;
          background: #ef6548;
          opacity: 0.8;
        }
        .qa-eyebrow-text {
          font-size: 9.5px;
          font-weight: 300;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #ef6548;
        }

        /* heading rule — coral gradient */
        .qa-heading-rule {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(239,101,72,0.45), transparent);
          margin-bottom: 32px;
          transform-origin: left center;
          border-radius: 1px;
        }

        .qa-heading-words {
          overflow: hidden;
          margin-bottom: 24px;
        }
        .qa-heading-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(44px, 5.5vw, 84px);
          font-weight: 300;
          line-height: 1.02;
          letter-spacing: -0.015em;
          color: #ffffff;
          display: flex;
          flex-wrap: wrap;
          gap: 0 0.28em;
        }
        .qa-heading-word { display: inline-block; }
        /* em — peach (gold-lt equivalent) */
        .qa-heading-title em {
          font-style: italic;
          color: #f5a48e;
        }

        /* subtext — warm dust */
        .qa-sub {
          font-size: 13px;
          font-weight: 200;
          line-height: 2;
          color: #f1ccb9;
          max-width: 420px;
        }

        /* ── CARDS GRID ── */
        .qa-landscape-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        @media (max-width: 768px) {
          .qa-landscape-container { grid-template-columns: 1fr; }
        }

        /* ── CARD — deep warm dark ── */
        .qa-landscape-card {
          position: relative;
          background: #1c0f0c;
          border: 1px solid rgba(239,101,72,0.09);
          padding: 52px 48px 48px;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.4s ease, background 0.4s ease;
          border-radius:30px;
        }
        .qa-landscape-card:hover {
          border-color: rgba(239,101,72,0.28);
          background: #1c0f0c;
        }

        /* hover shimmer — coral wash */
        .qa-landscape-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(239,101,72,0.0) 0%, rgba(239,101,72,0.055) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .qa-landscape-card:hover::after { opacity: 1; }

        /* left accent line — coral */
        .qa-card-line {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: #f1ccb9;
          transform-origin: top center;
          opacity: 0.55;
          border-radius: 0 1px 1px 0;
        }

        /* corner bracket — coral */
        .qa-card-corner {
          position: absolute;
          top: 20px; right: 20px;
          width: 18px; height: 18px;
          border-top: 1px solid rgba(239,101,72,0.28);
          border-right: 1px solid rgba(239,101,72,0.28);
        }

        /* ghost index — secondary-dark tint */
        .qa-card-index {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          line-height: 1;
          color: rgba(127,53,47,0.2);
          position: absolute;
          right: 40px; bottom: 24px;
          letter-spacing: -0.04em;
          pointer-events: none;
          user-select: none;
        }

        /* tag pill — coral */
        .qa-card-tag {
          display: inline-block;
          font-size: 8.5px;
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #ef6548;
          border: 1px solid rgba(239,101,72,0.22);
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 28px;
          background: rgba(239,101,72,0.06);
        }

        /* question — white, hover peach */
        .qa-landscape-card h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 2.4vw, 38px);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        .qa-landscape-card:hover h2 { color: #f5a48e; }

        /* answer — warm dust */
        .qa-landscape-card p {
          font-size: 13px;
          font-weight: 200;
          line-height: 2;
          color: #7a5c55;
          max-width: 360px;
          transition: color 0.3s ease;
        }
        .qa-landscape-card:hover p { color: #8a6c65; }

        /* subtle bottom borders */
        .qa-landscape-card:nth-child(1),
        .qa-landscape-card:nth-child(2) {
          border-bottom-color: rgba(239,101,72,0.05);
        }

        /* ── BOTTOM RULE — coral ── */
        .qa-bottom-rule {
          margin-top: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(239,101,72,0.35), transparent);
          border-radius: 1px;
        }
      `}</style>

      <section ref={sectionRef} className="qa-section">
        <div className="qa-orb-1" />
        <div className="qa-orb-2" />

        <div className="qa-inner">

          {/* ── HEADING ── */}
          <div className="qa-heading-block" ref={headingRef}>
            <div className="qa-eyebrow">
              <span className="qa-eyebrow-line" />
              <span className="qa-eyebrow-text">Your Questions, Answered</span>
            </div>

            <div ref={ruleRef} className="qa-heading-rule" />

            <div className="qa-heading-words">
              <h2 className="qa-heading-title">
                {"Everything You".split(" ").map((w, i) => (
                  <span key={i} className="qa-heading-word">{w}</span>
                ))}
                &nbsp;
                <em className="qa-heading-word">Need to Know</em>
              </h2>
            </div>

            <p ref={subRef} className="qa-sub">
              Transparent answers about the process, results, and experience —
              so you can move forward with complete confidence.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="qa-landscape-container">
            {QA_ITEMS.map((item) => (
              <div key={item.index} className="qa-landscape-card">
                <div className="qa-card-line" />
                <div className="qa-card-corner" />
                <span className="qa-card-index">{item.index}</span>

                <div className="qa-landscape-content">
                  <span className="qa-card-tag">{item.tag}</span>
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="qa-bottom-rule" />
        </div>
      </section>

      <ProcessStrip />
    </>
  );
}