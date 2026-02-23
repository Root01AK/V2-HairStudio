"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HairReplacementQA from "../components/HairReplacementQA";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function PremiumScrollTransition() {
  const wrapperRef     = useRef(null);
  const heroSectionRef = useRef(null);
  const heroTextRef    = useRef(null);
  const heroImageRef   = useRef(null);
  const nextSectionRef = useRef(null);
  const nextTextRef    = useRef(null);

  useGSAP(() => {
    // Re-calculate on every refresh so vw-based positions stay accurate
    ScrollTrigger.config({ invalidateOnRefresh: true });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ── 1. Dark panel slides up ──────────────────────────────────────────────
    tl.fromTo(
      nextSectionRef.current,
      { yPercent: 100 },
      { yPercent: 0, ease: "power2.inOut", duration: 1 },
      0
    );

    // ── 2. Hero text exits upward ────────────────────────────────────────────
    tl.to(
      heroTextRef.current,
      { y: -80, opacity: 0, ease: "power2.inOut", duration: 0.7 },
      0
    );

    // ── 3. IMAGE DOCKING ─────────────────────────────────────────────────────
    // The image starts at: left = 52.5vw (right column of hero)
    // It must land at:     left = 7vw   (left column of dark section)
    // 
    // Distance to travel = 52.5vw - 7vw = 45.5vw  (move LEFT)
    // Image element width = calc(50vw - 9.5vw) ≈ 40.5vw
    // xPercent = -(45.5 / 40.5) * 100 ≈ -112%
    //
    // The destination frame is 72vh tall, image starts at 78vh
    // scale = 72/78 ≈ 0.923
    // No yPercent adjustment needed since both are vertically centred via top:50%
    // ─────────────────────────────────────────────────────────────────────────
    tl.to(
      heroImageRef.current,
      {
        xPercent: -112,
        scale: 0.923,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    );

    // ── 4. Dark section text animates in (right column) ──────────────────────
    tl.from(".ns-eyebrow", { y: 30, opacity: 0, ease: "power2.out", duration: 0.4 }, 0.5);
    tl.from(".ns-title",   { y: 45, opacity: 0, ease: "power2.out", duration: 0.5 }, 0.55);
    tl.from(".ns-rule",    { scaleX: 0, opacity: 0, transformOrigin: "left center", ease: "power2.out", duration: 0.3 }, 0.63);
    tl.from(".ns-body",    { y: 25, opacity: 0, ease: "power2.out", duration: 0.4 }, 0.67);
    tl.from(".ns-pill",    { y: 18, opacity: 0, stagger: 0.04, ease: "power2.out", duration: 0.3 }, 0.73);

    // ── 5. Hero section fades out fully ─────────────────────────────────────
    tl.to(heroSectionRef.current, { opacity: 0, duration: 0.2, ease: "power1.in" }, 0.72);

  }, { scope: wrapperRef });

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --primary:        #ef6548;
          --secondary-dark: #7f352f;
          --soft-bg:        #f1ccb9;
          --white:          #ffffff;
          --text-dark:      #111111;
          --cream:          #fdf8f5;
          --charcoal:       #1a0e0b;
          --dust:           #7a5c55;
          --gold-lt:        #f5a48e;
          --serif:          'Playfair Display', Georgia, serif;
          --sans:           'DM Sans', sans-serif;
        }

        html, body { background: var(--charcoal); overflow-x: hidden; }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 9999;
          mix-blend-mode: overlay; opacity: 0.5;
        }

        @keyframes drip {
          0%, 100% { opacity: .2; transform: scaleY(1); }
          50%       { opacity: 1; transform: scaleY(0.55); transform-origin: top; }
        }
      `}</style>

      {/*
        ══════════════════════════════════════════════════════════
        Z-INDEX MAP:
          z:1   Hero section (cream)
          z:10  Dark section (charcoal) — slides up over hero
          z:20  Floating image — free to travel across both
          z:40  Dark section text column — always on top
        ══════════════════════════════════════════════════════════
      */}
      <div
        ref={wrapperRef}
        style={{ height: "100vh", overflow: "hidden", position: "relative" }}
      >

        {/* ══════════════════════════════════
            HERO — cream bg
            Layout: LEFT [text] | RIGHT [phantom — image floats here]
        ══════════════════════════════════ */}
        <section
          ref={heroSectionRef}
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            display: "grid", gridTemplateColumns: "1fr 1fr",
            alignItems: "center", padding: "0 7vw", gap: "5vw",
            background: "var(--cream)",
          }}
        >
          {/* Blush glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 75% 80% at 65% 45%, rgba(241,204,185,0.55) 0%, transparent 65%)",
          }} />
          {/* Top line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
            opacity: 0.7,
          }} />
          {/* Bottom strip */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, width: "40%", height: "3px",
            background: "var(--soft-bg)",
          }} />

          {/* LEFT: Text */}
          <div ref={heroTextRef} style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "var(--primary)", opacity: 0.8 }} />
              <span style={{
                fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
                letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--primary)",
              }}>Premium Hair Studio</span>
            </div>

            <h1 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 5.5vw, 90px)",
              fontWeight: 300, lineHeight: 1.0,
              letterSpacing: "-0.015em",
              color: "var(--text-dark)", marginBottom: "28px",
            }}>
              Restore<br />
              <em style={{ fontStyle: "italic", color: "var(--secondary-dark)" }}>What&apos;s</em><br />
              Yours
            </h1>

            <p style={{
              fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
              lineHeight: 2, color: "var(--dust)", maxWidth: "320px", marginBottom: "44px",
            }}>
              Precision-crafted, non-surgical hair replacement engineered
              to move, breathe, and feel entirely your own.
            </p>

            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: "16px",
                fontFamily: "var(--sans)", fontSize: "10px", fontWeight: 400,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: "var(--white)", textDecoration: "none",
                background: "var(--primary)",
                padding: "15px 30px", borderRadius: "2px",
                boxShadow: "0 8px 24px rgba(239,101,72,0.28)",
                transition: "background 0.3s, gap 0.4s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--secondary-dark)";
                e.currentTarget.style.gap = "24px";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.gap = "16px";
              }}
            >
              Book a Consultation
              <svg width="18" height="8" viewBox="0 0 20 8" fill="none">
                <path d="M0 4H18M15 1L19 4L15 7" stroke="currentColor" strokeWidth="0.75" />
              </svg>
            </a>
          </div>

          {/* RIGHT: phantom spacer */}
          <div style={{ height: "78vh" }} />

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "32px", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
            zIndex: 5,
          }}>
            <span style={{
              fontFamily: "var(--sans)", fontSize: "8.5px", letterSpacing: "0.38em",
              textTransform: "uppercase", color: "var(--dust)",
            }}>Scroll</span>
            <div style={{
              width: "1px", height: "54px",
              background: "linear-gradient(to bottom, var(--primary), transparent)",
              animation: "drip 2s ease-in-out infinite",
            }} />
          </div>
        </section>

        {/* ══════════════════════════════════
            DARK SECTION — charcoal bg
            Layout: LEFT [ghost frame] | RIGHT [text — z:40]
            Slides up from below on scroll.
        ══════════════════════════════════ */}
        <section
          ref={nextSectionRef}
          style={{
            position: "absolute", inset: 0, zIndex: 10,
            display: "grid", gridTemplateColumns: "1fr 1fr",
            alignItems: "center", padding: "0 7vw", gap: "5vw",
            background: "var(--charcoal)",
            // Initial position — GSAP animates this to yPercent:0
            transform: "translateY(100%)",
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 70% at 28% 50%, rgba(239,101,72,0.09) 0%, transparent 65%)",
          }} />
          {/* Top line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
            opacity: 0.6,
          }} />

          {/* LEFT: ghost frame — the floating image docks here visually */}
          <div style={{ position: "relative", height: "72vh" }}>
            <div style={{
              width: "100%", height: "100%",
              borderRadius: "3px",
              border: "1px solid rgba(239,101,72,0.18)",
              background: "rgba(241,204,185,0.02)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Corner brackets */}
              {[
                { top: 0,    left:  0, borderTop:    "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
                { top: 0,    right: 0, borderTop:    "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
                { bottom: 0, left:  0, borderBottom: "1px solid var(--primary)", borderLeft:  "1px solid var(--primary)" },
                { bottom: 0, right: 0, borderBottom: "1px solid var(--primary)", borderRight: "1px solid var(--primary)" },
              ].map((s, i) => (
                <div key={i} style={{ position: "absolute", width: 22, height: 22, opacity: 0.5, ...s }} />
              ))}
              {/* Bottom caption */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px",
                background: "linear-gradient(to top, rgba(26,5,2,0.8), transparent)",
              }}>
                <p style={{
                  fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "rgba(241,204,185,0.5)",
                }}>Natural · Undetectable</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Text
              position:relative + zIndex:40 ensures it renders ABOVE the floating
              image (z:20) which may overlap this column during transition */}
          <div
            ref={nextTextRef}
            style={{ position: "relative", zIndex: 40 }}
          >
            <p className="ns-eyebrow" style={{
              fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
              letterSpacing: "0.42em", textTransform: "uppercase",
              color: "var(--primary)", marginBottom: "28px",
            }}>02 — The Method</p>

            <h2 className="ns-title" style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 3.8vw, 62px)",
              fontWeight: 300, lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--white)", marginBottom: "24px",
            }}>
              What Is Hair<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Replacement?</em>
            </h2>

            <div className="ns-rule" style={{
              width: "40px", height: "2px",
              background: "var(--primary)",
              marginBottom: "24px", borderRadius: "1px",
            }} />

            <p className="ns-body" style={{
              fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
              lineHeight: 2.0, color: "var(--dust)", maxWidth: "360px", marginBottom: "36px",
            }}>
              A sophisticated, non-surgical cosmetic solution designed to restore
              natural appearance with undetectable precision — crafted to match
              your hair&apos;s exact texture, density, and colour.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["100% Human Hair", "Breathable Base", "Custom Density", "Same-Day Fit"].map(f => (
                <span key={f} className="ns-pill" style={{
                  fontFamily: "var(--sans)", fontSize: "9.5px", fontWeight: 300,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--soft-bg)", padding: "8px 16px",
                  border: "1px solid rgba(239,101,72,0.25)", borderRadius: "2px",
                  background: "rgba(239,101,72,0.07)",
                }}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FLOATING IMAGE
            ─────────────────────────────────
            • Direct child of wrapper (NOT inside any section)
            • This breaks it out of all stacking contexts
            • zIndex: 20 = above both sections, below text column (z:40)

            INITIAL POSITION matches hero's right column exactly:
              left  = 7vw (pad) + ~40.5vw (col1) + 5vw (gap) = 52.5vw
              width = 100vw - 52.5vw - 7vw (right pad) = 40.5vw
                    = calc(50vw - 9.5vw)
              top   = 50% with translateY(-50%) → vertically centred

            GSAP END STATE:
              xPercent: -112  → shifts left by 112% of own width ≈ 45.4vw
                                 landing it at: 52.5vw - 45.4vw ≈ 7vw (left col start) ✓
              scale: 0.923    → 78vh × 0.923 ≈ 72vh (matches destination frame height)
        ══════════════════════════════════ */}
        <div
          ref={heroImageRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "52.5vw",
            transform: "translateY(-50%)",   // GSAP will ADD to this via xPercent/scale
            width: "calc(50vw - 9.5vw)",
            height: "78vh",
            zIndex: 20,
            willChange: "transform",
          }}
        >
          {/* Decorative offset border */}
          <div style={{
            position: "absolute",
            top: "-14px", right: "-14px", bottom: "14px", left: "14px",
            border: "1px solid rgba(239,101,72,0.3)",
            borderRadius: "3px",
          }} />
          {/* Image wrapper */}
          <div style={{
            position: "relative", width: "100%", height: "100%",
            borderRadius: "3px", overflow: "hidden",
            boxShadow: "0 32px 80px rgba(127,53,47,0.35), 0 8px 24px rgba(239,101,72,0.15)",
          }}>
            <Image
              src="/1rev.png"
              alt="Hair Replacement"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            {/* Bottom fade overlay */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "linear-gradient(to bottom, transparent 55%, rgba(26,5,2,0.65) 100%)",
              zIndex: 1,
            }} />
          </div>
        </div>

      </div>{/* /wrapper */}

      {/* ══════════════════════════════════
          AFTER SECTION
      ══════════════════════════════════ */}
      <section style={{
        background: "var(--cream)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: "24px",
        padding: "80px 7vw", textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
          opacity: 0.5,
        }} />
        <div style={{
          position: "absolute", width: "560px", height: "560px",
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(239,101,72,0.07) 0%, transparent 65%)",
          filter: "blur(90px)", borderRadius: "50%", pointerEvents: "none",
        }} />
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(36px, 3.5vw, 58px)",
          fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.1,
          position: "relative", zIndex: 1,
        }}>
          Crafted for You,<br />
          <em style={{ fontStyle: "italic", color: "var(--primary)" }}>Worn with Confidence</em>
        </h2>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
          lineHeight: 2, color: "var(--dust)", maxWidth: "460px",
          position: "relative", zIndex: 1,
        }}>
          The page returns to its natural rhythm — additional sections flow normally below.
        </p>
        <div style={{
          width: "40px", height: "2px",
          background: "var(--primary)", borderRadius: "1px",
          position: "relative", zIndex: 1,
        }} />
      </section>

      <HairReplacementQA />
    </>
  );
}