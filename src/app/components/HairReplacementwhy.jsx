"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HairReplacementGallery from "../components/HairReplacementGallery";

const FEATURES = [
  {
    id: 1,
    side: "left",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="0.75"/>
        <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
      </svg>
    ),
    title: "Master Craftsmen",
    desc: "Every technician is a certified specialist with years of hair-system experience — precision in every bond and knot.",
  },
  {
    id: 2,
    side: "left",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
    title: "Bespoke Systems",
    desc: "No two clients are the same. Each system is handcrafted to match your exact scalp tone, hair texture, and density.",
  },
  {
    id: 3,
    side: "right",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10a7 7 0 1014 0A7 7 0 003 10z" stroke="currentColor" strokeWidth="0.75"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round"/>
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Walk in with doubt, walk out with confidence. Most fittings and consultations are completed in a single visit.",
  },
  {
    id: 4,
    side: "right",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l1.8 3.6 4 .6-2.9 2.8.7 4L10 12l-3.6 1.9.7-4L4.2 7.2l4-.6z" stroke="currentColor" strokeWidth="0.75"/>
      </svg>
    ),
    title: "Lifetime Aftercare",
    desc: "Our relationship doesn't end at the chair. Dedicated maintenance, adjustment, and support — for as long as you need.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── Heading ──────────────────────────────────────────────────────────────
      gsap.timeline({
        scrollTrigger: {
          trigger: ".wc-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
        .from(".wc-eyebrow", { y: 16, opacity: 0, duration: 0.55, ease: "power3.out" })
        .from(".wc-title-line", { y: 60, opacity: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" }, "-=0.3")
        .from(".wc-rule", { scaleX: 0, duration: 0.6, ease: "power3.inOut", transformOrigin: "center center" }, "-=0.4")
        .from(".wc-sub", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // ── Center image ─────────────────────────────────────────────────────────
      gsap.timeline({
        scrollTrigger: {
          trigger: ".wc-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
        .from(".wc-img-frame", { scale: 0.88, opacity: 0, duration: 1.2, ease: "power3.out" })
        .from(".wc-img-accent-v", { scaleY: 0, duration: 0.9, ease: "power3.inOut", transformOrigin: "top center" }, "-=0.7")
        .from(".wc-img-accent-h", { scaleX: 0, duration: 0.9, ease: "power3.inOut", transformOrigin: "left center" }, "<")
        .from(".wc-img-badge", { y: 20, opacity: 0, scale: 0.85, duration: 0.6, ease: "back.out(1.6)" }, "-=0.4");

      // ── Feature boxes — left side ─────────────────────────────────────────
      gsap.utils.toArray(".wc-feature-left").forEach((el, i) => {
        gsap.fromTo(el,
          { x: -50, opacity: 0, scale: 0.97 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.9, ease: "power3.out", delay: i * 0.14,
            scrollTrigger: { trigger: ".wc-grid", start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // ── Feature boxes — right side ───────────────────────────────────────
      gsap.utils.toArray(".wc-feature-right").forEach((el, i) => {
        gsap.fromTo(el,
          { x: 50, opacity: 0, scale: 0.97 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.9, ease: "power3.out", delay: i * 0.14,
            scrollTrigger: { trigger: ".wc-grid", start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // ── Icon rings spring in ─────────────────────────────────────────────
      gsap.utils.toArray(".wc-icon").forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1, opacity: 1,
            duration: 0.65, ease: "back.out(2)", delay: i * 0.14 + 0.3,
            scrollTrigger: { trigger: ".wc-grid", start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      // ── Ambient orb parallax ─────────────────────────────────────────────
      gsap.to(".wc-orb", {
        y: -100, ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", end: "bottom top", scrub: 2,
        },
      });

    }, sectionRef);

    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  const leftFeatures  = FEATURES.filter(f => f.side === "left");
  const rightFeatures = FEATURES.filter(f => f.side === "right");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400&display=swap');

        /* ── SECTION ─────────────────────────────────────────────── */
        .wc-section {
          position: relative;
          padding: 130px 0 150px;
          background: #7f352f;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .wc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .wc-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,147,90,0.3), transparent);
        }

        .wc-bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,147,90,0.2), transparent);
        }

        .wc-orb {
          position: absolute;
          width: 700px; height: 700px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(184,147,90,0.045) 0%, transparent 65%);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none; z-index: 0;
        }

        .wc-inner {
          position: relative; z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 6vw;
        }

        /* ── HEADING ── */
        .wc-heading {
          text-align: center;
          margin-bottom: 96px;
        }

        .wc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #ef6548;
        }
        .wc-eyebrow-line {
          display: block; width: 28px; height: 1px;
          background: #b8935a; opacity: 0.7;
        }

        .wc-title-overflow { overflow: hidden; }
        .wc-title-line {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(46px, 5.5vw, 88px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -0.015em;
          color: #e4e0d8;
        }
        .wc-title-line em {
          font-style: italic;
          color: #f1ccb9;
        }

        .wc-rule {
          width: 48px; height: 1px;
          background: rgba(184,147,90,0.5);
          margin: 24px auto 20px;
        }

        .wc-sub {
          font-size: 13px; font-weight: 200;
          line-height: 2; color: #ffffffff;
          max-width: 400px; margin: 0 auto;
        }

        /* ── 3-COL GRID ── */
        .wc-grid {
          display: grid;
          grid-template-columns: 1fr 380px 1fr;
          gap: 0 4vw;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .wc-grid { grid-template-columns: 1fr 280px 1fr; gap: 0 3vw; }
        }
        @media (max-width: 760px) {
          .wc-grid {
            grid-template-columns: 1fr;
            gap: 48px 0;
          }
          .wc-center-col { order: -1; }
        }

        /* ── FEATURE COLUMNS ── */
        .wc-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* ── FEATURE BOX ── */
        .wc-feature {
          position: relative;
          padding: 36px 32px;
          border: 1px solid rgba(184,147,90,0.07);
          background: #ffffffff;
          overflow: hidden;
          transition: border-color 0.4s ease, background 0.4s ease;
          cursor: default;
        }
        .wc-feature:hover {
          border-color: rgba(184,147,90,0.2);
          background: #111120;
        }
        .wc-feature::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(184,147,90,0) 0%, rgba(184,147,90,0.04) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .wc-feature:hover::after { opacity: 1; }

        /* left-col — accent line on right edge */
        .wc-feature-left { border-right: none; }
        .wc-feature-left::before {
          content: '';
          position: absolute;
          right: 0; top: 16px; bottom: 16px; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(184,147,90,0.2), transparent);
        }

        /* right-col — accent line on left edge */
        .wc-feature-right { border-left: none; }
        .wc-feature-right::before {
          content: '';
          position: absolute;
          left: 0; top: 16px; bottom: 16px; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(184,147,90,0.2), transparent);
        }

        /* icon */
        .wc-icon {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: #0f0f1a;
          border: 1px solid rgba(184,147,90,0.14);
          display: flex; align-items: center; justify-content: center;
          color: #ef6548;
          margin-bottom: 20px;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .wc-feature:hover .wc-icon {
          border-color: rgba(184,147,90,0.35);
          box-shadow: 0 0 20px rgba(184,147,90,0.1);
        }

        .wc-feature h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 300;
          letter-spacing: -0.01em;
          color: #ef6548;
          margin-bottom: 12px;
          transition: color 0.3s;
        }
        .wc-feature:hover h3 { color: #d4b483; }

        .wc-feature p {
          font-size: 12.5px; font-weight: 200;
          line-height: 1.95; color: #5a5a6e;
          transition: color 0.3s;
        }
        .wc-feature:hover p { color: #6e6e80; }

        /* ghost number */
        .wc-feature-num {
          position: absolute;
          bottom: 12px; right: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px; font-weight: 300;
          color: rgba(184,147,90,0.05);
          line-height: 1;
          pointer-events: none; user-select: none;
          letter-spacing: -0.04em;
        }

        /* ── CENTER IMAGE ── */
        .wc-center-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wc-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3);
        }

        .wc-img-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.85) contrast(1.05) saturate(0.9);
        }

        /* image vignette */
        .wc-img-frame::after {
          content: '';
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(9,9,14,0.3) 0%, transparent 35%, transparent 65%, rgba(9,9,14,0.5) 100%);
          pointer-events: none;
        }

        /* vertical accent line left of image */
        .wc-img-accent-v {
          position: absolute;
          left: -14px; top: 16px; bottom: 16px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(184,147,90,0.3), transparent);
          transform-origin: top center;
        }

        /* horizontal accent line below image */
        .wc-img-accent-h {
          position: absolute;
          right: 16px; left: -14px; bottom: -14px;
          height: 1px;
          background: linear-gradient(90deg, rgba(184,147,90,0.3), transparent);
          transform-origin: left center;
        }

        /* corner bracket top-right */
        .wc-img-corner {
          position: absolute;
          top: -10px; right: -10px;
          width: 22px; height: 22px;
          border-top: 1px solid rgba(184,147,90,0.3);
          border-right: 1px solid rgba(184,147,90,0.3);
          pointer-events: none;
        }

        /* badge on image */
        .wc-img-badge {
          position: absolute;
          bottom: 28px; left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: rgba(9,9,14,0.7);
          border: 1px solid rgba(184,147,90,0.18);
          backdrop-filter: blur(10px);
          padding: 14px 22px;
          border-radius: 2px;
          white-space: nowrap;
        }
        .wc-badge-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px; font-weight: 300;
          color: #d4b483; line-height: 1;
          letter-spacing: -0.02em;
        }
        .wc-badge-label {
          font-size: 8px; font-weight: 300;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(184,147,90,0.6);
        }
      `}</style>

      <section ref={sectionRef} className="wc-section">
        <div className="wc-orb" />
        <div className="wc-bottom-line" />

        <div className="wc-inner">

          {/* ── HEADING ── */}
          <div className="wc-heading">
            <div className="wc-eyebrow">
              <span className="wc-eyebrow-line" />
              Why Choose Us
              <span className="wc-eyebrow-line" />
            </div>

            <div className="wc-title-overflow">
              <span className="wc-title-line">The Studio That</span>
            </div>
            <div className="wc-title-overflow">
              <span className="wc-title-line"><em>Puts You First</em></span>
            </div>

            <div className="wc-rule" />

            <p className="wc-sub">
              Every detail — from the first consultation to your final styling —
              is designed around one person. You.
            </p>
          </div>

          {/* ── 3-COL GRID ── */}
          <div className="wc-grid">

            {/* LEFT FEATURES */}
            <div className="wc-col">
              {leftFeatures.map((f) => (
                <div key={f.id} className="wc-feature wc-feature-left">
                  <div className="wc-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="wc-feature-num">0{f.id}</span>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="wc-center-col">
              <div className="wc-img-accent-v" />
              <div className="wc-img-accent-h" />
              <div className="wc-img-corner" />

              <div className="wc-img-frame">
                {/*
                  Replace src with your own image:
                  <Image src="/your-image.jpg" alt="Studio" fill style={{ objectFit:"cover" }} />
                */}
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800"
                  alt="Hair Studio"
                />

                {/* Badge */}
                <div className="wc-img-badge">
                  <span className="wc-badge-num">500+</span>
                  <span className="wc-badge-label">Transformations</span>
                </div>
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="wc-col">
              {rightFeatures.map((f) => (
                <div key={f.id} className="wc-feature wc-feature-right">
                  <div className="wc-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="wc-feature-num">0{f.id}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <HairReplacementGallery />
    </>
  );
}