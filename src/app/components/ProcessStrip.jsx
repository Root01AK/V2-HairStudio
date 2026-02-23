"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HairReplacementwhy from "./HairReplacementwhy";

const processSteps = [
  {
    id: 1,
    title: "Consultation",
    desc: "A private session to understand your hair history, lifestyle, and goals — the foundation of every perfect result.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="0.75"/>
        <path d="M7 11h8M11 7v8" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customisation",
    desc: "Every strand, density, and base is handcrafted to mirror your natural hairline with undetectable precision.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18L18 4M4 4l14 14" stroke="currentColor" strokeWidth="0.75"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Natural Fixing",
    desc: "Expert application ensures a seamless, breathable bond — indistinguishable from your own scalp in any light.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 16c0-4 2-8 5-10M16 6c-4 2-8 4-10 10" stroke="currentColor" strokeWidth="0.75"/>
        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Styling & Support",
    desc: "Finishing by our master stylists, paired with ongoing maintenance to keep every detail perfect over time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
  },
];

export default function ProcessStrip() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── Heading reveal ───────────────────────────────────────────────────────
      gsap.timeline({
        scrollTrigger: {
          trigger: ".ps-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
        .from(".ps-eyebrow", { y: 18, opacity: 0, duration: 0.55, ease: "power3.out" })
        .from(".ps-rule-left", { scaleX: 0, duration: 0.7, ease: "power3.inOut", transformOrigin: "left center" }, "-=0.2")
        .from(".ps-rule-right", { scaleX: 0, duration: 0.7, ease: "power3.inOut", transformOrigin: "right center" }, "<")
        .from(".ps-title", { y: 48, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.35")
        .from(".ps-sub", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // ── Connector line draws across ──────────────────────────────────────────
      gsap.fromTo(
        ".ps-connector",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".ps-steps",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Steps stagger in ────────────────────────────────────────────────────
      gsap.utils.toArray(".ps-step").forEach((step, i) => {
        gsap.fromTo(
          step,
          { y: 70, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.95,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: ".ps-steps",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // icon ring pulse
        const ring = step.querySelector(".ps-icon-ring");
        gsap.fromTo(
          ring,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1, opacity: 1,
            duration: 0.7,
            ease: "back.out(1.8)",
            delay: i * 0.12 + 0.25,
            scrollTrigger: {
              trigger: ".ps-steps",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // number count-up feel
        const num = step.querySelector(".ps-step-num");
        gsap.fromTo(
          num,
          { opacity: 0, y: 10 },
          {
            opacity: 1, y: 0,
            duration: 0.5,
            delay: i * 0.12 + 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ps-steps",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // ── Parallax on orb ─────────────────────────────────────────────────────
      gsap.to(".ps-orb", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

    }, sectionRef);

    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <>
      <style>{`
        /* ── PROCESS STRIP ─────────────────────────────────────── */
        .ps-section {
          position: relative;
          padding: 80px 0 150px;
          background: #ffffff;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* grain */
        .ps-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        /* top / bottom border lines */
        .ps-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,147,90,0.3), transparent);
        }

        .ps-bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,147,90,0.2), transparent);
        }

        /* orb */
        .ps-orb {
          position: absolute;
          width: 560px; height: 560px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(184,147,90,0.055) 0%, transparent 65%);
          filter: blur(80px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        /* inner container */
        .ps-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 6vw;
        }

        /* ── HEADING ── */
        .ps-heading {
          text-align: center;
          margin-bottom: 88px;
        }

        .ps-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          color: #7f352f;
        }
        .ps-eyebrow-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #7f352f;
          opacity: 0.6;
        }

        .ps-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(40px, 4.8vw, 74px);
          font-weight: 300;
          line-height: 1.06;
          letter-spacing: -0.015em;
          color: #f1ccb9;
          margin-bottom: 20px;
        }
        .ps-title em {
          font-style: italic;
          color: #7f352f;
        }

        .ps-sub {
          font-size: 13px;
          font-weight: 200;
          line-height: 2;
          color: #5a5a6e;
          max-width: 380px;
          margin: 0 auto;
        }

        /* ── STEPS GRID ── */
        .ps-steps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        @media (max-width: 900px) {
          .ps-steps { grid-template-columns: repeat(2, 1fr); }
          .ps-connector { display: none; }
        }
        @media (max-width: 540px) {
          .ps-steps { grid-template-columns: 1fr; }
        }

        /* connecting line behind icons */
        .ps-connector {
          position: absolute;
          top: 44px;
          left: calc(12.5%);
          right: calc(12.5%);
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(184,147,90,0.25) 10%,
            rgba(184,147,90,0.25) 90%,
            transparent 100%
          );
          transform-origin: left center;
          z-index: 0;
        }

        /* ── STEP CARD ── */
        .ps-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 28px 0;
          cursor: default;
        }

        /* divider between steps */
        .ps-step + .ps-step::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(184,147,90,0.1), transparent);
        }

        /* ── ICON RING ── */
        .ps-icon-ring {
          position: relative;
          width: 88px; height: 88px;
          margin-bottom: 32px;
          flex-shrink: 0;
        }

        /* outer glow ring */
        .ps-icon-ring::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(184,147,90,0.12);
          transition: border-color 0.4s ease;
        }
        .ps-step:hover .ps-icon-ring::before {
          border-color: rgba(184,147,90,0.35);
        }

        /* inner circle */
        .ps-icon-circle {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #0f0f1a;
          border: 1px solid rgba(184,147,90,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ef6548;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .ps-step:hover .ps-icon-circle {
          background: #14141f;
          border-color:#ef6548;
          box-shadow: 0 0 28px rgba(184,147,90,0.1), inset 0 0 20px rgba(184,147,90,0.04);
        }

        /* step number badge */
        .ps-step-num {
          position: absolute;
          top: -4px; right: -4px;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #7f352f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #ffffffff;
          z-index: 2;
        }

        /* ── STEP TEXT ── */
        .ps-step-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: -0.01em;
          color: #ef6548;
          margin-bottom: 14px;
          transition: color 0.3s ease;
        }
        .ps-step:hover .ps-step-title { color: #7f352f; }

        .ps-step-desc {
          font-size: 12.5px;
          font-weight: 200;
          line-height: 1.9;
          color: #5a5a6e;
          max-width: 200px;
          transition: color 0.3s ease;
        }
        .ps-step:hover .ps-step-desc { color: #6e6e80; }
      `}</style>

      <section ref={sectionRef} className="ps-section">
        <div className="ps-orb" />
        <div className="ps-bottom-line" />

        <div className="ps-inner">

          {/* ── HEADING ── */}
          <div className="ps-heading">
            <div className="ps-eyebrow">
              <span className="ps-eyebrow-dot" />
              Our Process
              <span className="ps-eyebrow-dot" />
            </div>

            <h2 className="ps-title">
              Four Steps to <em>Perfection</em>
            </h2>

            <p className="ps-sub">
              A precise, unhurried process — from first conversation
              to flawless finish.
            </p>
          </div>

          {/* ── STEPS ── */}
          <div className="ps-steps">
            {/* Horizontal connector line */}
            <div className="ps-connector" />

            {processSteps.map((step) => (
              <div key={step.id} className="ps-step">
                {/* Icon ring */}
                <div className="ps-icon-ring">
                  <div className="ps-icon-circle">
                    {step.icon}
                  </div>
                  <span className="ps-step-num">{step.id}</span>
                </div>

                <h3 className="ps-step-title">{step.title}</h3>
                <p className="ps-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <HairReplacementwhy />
    </>
  );
}