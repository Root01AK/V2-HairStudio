"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HairReplacementQA from "../components/HairReplacementQA";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumScrollTransition() {
  const wrapperRef = useRef(null);

  // Refs — hero
  const heroSectionRef   = useRef(null);
  const heroTextRef      = useRef(null);
  const heroImageRef     = useRef(null); // the travelling image

  // Refs — next section
  const nextSectionRef   = useRef(null);
  const nextFrameRef     = useRef(null); // the destination frame the image lands in
  const nextTextRef      = useRef(null);

  useGSAP(() => {
    //
    // ─── SHARED SCROLL DRIVER ───────────────────────────────────────────────────
    // One timeline scrubbed by a single ScrollTrigger.
    // scrub: 2 → very slow, syrupy, premium feel
    //
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=300%",           // 3× viewport of scroll = very slow transition
        scrub: 2,                // 2s lag = cinematic butter
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ─── PHASE 1 (progress 0 → 0.35) ────────────────────────────────────────────
    // Next section rises from below — slides up like a page surfacing
    // It starts fully off-screen (y: 100vh) and settles at y: 0
    tl.fromTo(
      nextSectionRef.current,
      { yPercent: 100 },
      { yPercent: 0, ease: "power2.inOut", duration: 1 },
      0
    );

    // ─── PHASE 1 — Hero text recedes (pushes back slightly, fades gently) ───────
    tl.to(
      heroTextRef.current,
      { y: -60, opacity: 0, ease: "power2.inOut", duration: 0.8 },
      0
    );

    // ─── PHASE 2 (progress 0 → 0.9) — IMAGE TRAVELS ─────────────────────────────
    // The image starts in the hero (right side, large).
    // It needs to land inside nextFrameRef (left side of next section, smaller).
    //
    // Because the image is absolutely positioned during travel via GSAP,
    // we animate it from its hero position to the frame's position.
    // We use xPercent/yPercent + scale so it works at all viewport sizes.
    //
    tl.to(
      heroImageRef.current,
      {
        // Moves left across the screen and up a touch to land in frame
        xPercent: -115,
        yPercent: -18,
        scale: 0.52,
        ease: "power1.inOut",  // very linear = feels like physics, not animation
        duration: 1,
      },
      0.05  // slight delay so section starts rising before image lifts
    );

    // ─── PHASE 3 (progress 0.5 → 1) — Next section content reveals ──────────────
    tl.from(
      ".ns-eyebrow",
      { y: 30, opacity: 0, ease: "power2.out", duration: 0.4 },
      0.55
    );
    tl.from(
      ".ns-title",
      { y: 50, opacity: 0, ease: "power2.out", duration: 0.5 },
      0.6
    );
    tl.from(
      ".ns-rule",
      { scaleX: 0, opacity: 0, ease: "power2.out", duration: 0.35, transformOrigin: "left center" },
      0.68
    );
    tl.from(
      ".ns-body",
      { y: 30, opacity: 0, ease: "power2.out", duration: 0.4 },
      0.72
    );
    tl.from(
      ".ns-pill",
      { y: 20, opacity: 0, stagger: 0.05, ease: "power2.out", duration: 0.3 },
      0.78
    );

    // ─── Hero section fades out very late — never abruptly hidden ────────────────
    tl.to(
      heroSectionRef.current,
      { opacity: 0, duration: 0.25, ease: "power1.in" },
      0.75
    );

  }, { scope: wrapperRef });

  const features = ["100% Human Hair", "Undetectable Bond", "Same-Day Fit", "Custom Density"];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream:   #f5f0e8;
          --warm:    #e8dfd0;
          --ink:     #0e0c0a;
          --charcoal:#1c1a17;
          --stone:   #3a3530;
          --dust:    #7a7060;
          --gold:    #b8935a;
          --gold-lt: #d4b483;
          --serif:   'Playfair Display', Georgia, serif;
          --sans:    'DM Sans', sans-serif;
        }

        html, body {
          background: var(--ink);
          overflow-x: hidden;
        }

        /* Grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: overlay;
          opacity: 0.5;
        }
      `}</style>

      {/*
        ─── OUTER WRAPPER ─────────────────────────────────────────────────────────
        GSAP pins THIS element. Height is just 100vh — GSAP adds scroll distance.
      */}
      <div ref={wrapperRef} style={{ height: "100vh", overflow: "hidden", position: "relative" }}>

        {/* ════════════════════════════════════════════════
            HERO SECTION
            Full-screen, z-index 1 (behind next section)
        ════════════════════════════════════════════════ */}
        <section
          ref={heroSectionRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            padding: "0 7vw",
            gap: "5vw",
            background: "var(--cream)",
          }}
        >
          {/* Warm vignette */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 80% 90% at 50% 50%, transparent 40%, rgba(14,12,10,0.18) 100%)",
          }} />

          {/* Top border */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            opacity: 0.5,
          }} />

          {/* ── HERO LEFT — TEXT ── */}
          <div ref={heroTextRef} style={{ position: "relative", zIndex: 2 }}>
            {/* Eyebrow */}
            <div style={{
              display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px",
            }}>
              <span style={{
                display: "block", width: "28px", height: "1px",
                background: "var(--gold)", opacity: 0.8,
              }} />
              <span style={{
                fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
                letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--gold)",
              }}>
                Premium Hair Studio
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(52px, 5.8vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              marginBottom: "32px",
            }}>
              Restore<br />
              <em style={{ fontStyle: "italic", color: "var(--stone)" }}>What&apos;s</em><br />
              Yours
            </h1>

            {/* Body */}
            <p style={{
              fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
              lineHeight: 2, color: "var(--dust)", maxWidth: "320px", marginBottom: "48px",
            }}>
              Precision-crafted, non-surgical hair replacement engineered
              to move, breathe, and feel entirely your own.
            </p>

            {/* CTA */}
            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: "16px",
                fontFamily: "var(--sans)", fontSize: "10px", fontWeight: 400,
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "var(--ink)", textDecoration: "none",
                paddingBottom: "10px",
                borderBottom: "1px solid rgba(14,12,10,0.2)",
                transition: "gap .4s, border-color .3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.gap = "26px"; e.currentTarget.style.borderColor = "var(--ink)"; }}
              onMouseLeave={e => { e.currentTarget.style.gap = "16px"; e.currentTarget.style.borderColor = "rgba(14,12,10,0.2)"; }}
            >
              Book a Consultation
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                <path d="M0 4H18M15 1L19 4L15 7" stroke="currentColor" strokeWidth="0.75" />
              </svg>
            </a>
          </div>

          {/* ── HERO RIGHT — TRAVELLING IMAGE ── */}
          {/*
            This is the image that will animate into the next section.
            It stays in DOM at its hero position; GSAP translates + scales it.
            We give it a very high z-index so it floats above BOTH sections during travel.
          */}
          <div
            ref={heroImageRef}
            style={{
              position: "relative",
              height: "78vh",
              zIndex: 50,           // above both sections
              willChange: "transform",
            }}
          >
            {/* Offset frame accent */}
            <div style={{
              position: "absolute",
              top: "-16px", right: "-16px", bottom: "16px", left: "16px",
              border: "1px solid rgba(184,147,90,0.2)",
              borderRadius: "3px",
              zIndex: 0,
            }} />

            {/* The actual image box */}
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "3px",
              overflow: "hidden",
              background: "linear-gradient(155deg, #2a2520 0%, #3d3028 45%, #1e1a16 100%)",
              boxShadow: "0 32px 80px rgba(14,12,10,0.35), 0 8px 24px rgba(14,12,10,0.2)",
            }}>
              {/*
                ── REPLACE THIS DIV WITH YOUR IMAGE ──
                <Image src="/1rev.png" alt="Hair" fill style={{ objectFit:"cover" }} priority />
              */}
              <div style={{
                width: "100%", height: "100%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "12px",
              }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="rgba(184,147,90,0.3)" strokeWidth="0.75" />
                  <path d="M16 8v16M8 16h16" stroke="rgba(184,147,90,0.4)" strokeWidth="0.75" />
                </svg>
                <span style={{
                  fontFamily: "var(--sans)", fontSize: "8.5px", letterSpacing: "0.35em",
                  color: "rgba(184,147,90,0.35)", textTransform: "uppercase",
                }}>
                  Your Image
                </span>
              </div>

              {/* Inner vignette */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(to bottom, transparent 50%, rgba(14,12,10,0.5) 100%)",
              }} />
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "36px", left: "50%",
            transform: "translateX(-50%)", display: "flex", flexDirection: "column",
            alignItems: "center", gap: "10px", zIndex: 10,
          }}>
            <span style={{
              fontFamily: "var(--sans)", fontSize: "8.5px", letterSpacing: "0.38em",
              textTransform: "uppercase", color: "var(--dust)",
            }}>
              Scroll
            </span>
            <div style={{
              width: "1px", height: "54px",
              background: "linear-gradient(to bottom, var(--gold), transparent)",
              animation: "drip 2s ease-in-out infinite",
            }} />
          </div>

          <style>{`
            @keyframes drip {
              0%,100% { opacity:.25; transform:scaleY(1); }
              50%      { opacity:1;   transform:scaleY(0.55); transform-origin:top; }
            }
          `}</style>
        </section>


        {/* ════════════════════════════════════════════════
            NEXT SECTION
            Starts at yPercent:100 (fully below viewport).
            GSAP slides it up to yPercent:0.
            z-index 10 — it covers the hero as it rises.
        ════════════════════════════════════════════════ */}
        <section
          ref={nextSectionRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            padding: "0 7vw",
            gap: "5vw",
            background: "var(--charcoal)",
            transform: "translateY(100%)",   // GSAP will override, but good initial state
          }}
        >
          {/* Ambient warm light */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(184,147,90,0.06) 0%, transparent 65%)",
          }} />

          {/* Top gold line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            opacity: 0.5,
          }} />

          {/* ── LEFT — destination frame for the travelling image ── */}
          <div style={{ position: "relative", height: "72vh" }}>
            {/*
              This frame is where the hero image LANDS.
              It's intentionally styled to match the image proportions.
              The image visually settles into this box.
            */}
            <div
              ref={nextFrameRef}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "3px",
                border: "1px solid rgba(184,147,90,0.12)",
                background: "rgba(255,255,255,0.02)",
                overflow: "hidden",
              }}
            >
              {/* Frame corner accents */}
              {[
                { top: 0,    left: 0,  borderTop:"1px solid var(--gold)", borderLeft:"1px solid var(--gold)", width:20, height:20, opacity:.4 },
                { top: 0,    right: 0, borderTop:"1px solid var(--gold)", borderRight:"1px solid var(--gold)", width:20, height:20, opacity:.4 },
                { bottom: 0, left: 0,  borderBottom:"1px solid var(--gold)", borderLeft:"1px solid var(--gold)", width:20, height:20, opacity:.4 },
                { bottom: 0, right: 0, borderBottom:"1px solid var(--gold)", borderRight:"1px solid var(--gold)", width:20, height:20, opacity:.4 },
              ].map((s, i) => (
                <div key={i} style={{ position:"absolute", ...s }} />
              ))}

              {/* Ghost "arriving" label */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "var(--sans)", fontSize: "8px", letterSpacing: "0.4em",
                  color: "rgba(184,147,90,0.15)", textTransform: "uppercase",
                }}>
                  Gallery
                </span>
              </div>

              {/* Bottom caption strip */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "20px 20px",
                background: "linear-gradient(to top, rgba(14,12,10,0.7) 0%, transparent 100%)",
              }}>
                <p style={{
                  fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "rgba(212,180,131,0.6)",
                }}>
                  Natural · Undetectable
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT — TEXT ── */}
          <div ref={nextTextRef}>
            <p className="ns-eyebrow" style={{
              fontFamily: "var(--sans)", fontSize: "9px", fontWeight: 300,
              letterSpacing: "0.42em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: "28px", opacity: 0.8,
            }}>
              02 — The Method
            </p>

            <h2 className="ns-title" style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(38px, 4vw, 66px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--cream)",
              marginBottom: "28px",
            }}>
              What Is Hair<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Replacement?</em>
            </h2>

            <div className="ns-rule" style={{
              width: "40px", height: "1px",
              background: "rgba(184,147,90,0.55)",
              marginBottom: "28px",
            }} />

            <p className="ns-body" style={{
              fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
              lineHeight: 2.05, color: "var(--dust)", maxWidth: "360px", marginBottom: "40px",
            }}>
              A sophisticated, non-surgical cosmetic solution designed to restore
              natural appearance with undetectable precision — crafted to match
              your hair's exact texture, density, and colour.
            </p>

            {/* Feature pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["100% Human Hair", "Breathable Base", "Custom Density", "Same-Day Fit"].map(f => (
                <span
                  key={f}
                  className="ns-pill"
                  style={{
                    fontFamily: "var(--sans)", fontSize: "9.5px", fontWeight: 300,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--gold-lt)",
                    padding: "8px 16px",
                    border: "1px solid rgba(184,147,90,0.2)",
                    borderRadius: "2px",
                    background: "rgba(184,147,90,0.04)",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
      {/* /wrapper — GSAP pin ends here */}

      {/* ── AFTER SECTION — normal scroll flow ── */}
      <section style={{
        minHeight: "100vh",
        background: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "80px 7vw",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(184,147,90,0.25), transparent)",
        }} />
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(36px, 3.5vw, 58px)",
          fontWeight: 300,
          color: "var(--cream)",
          lineHeight: 1.1,
        }}>
          Crafted for You,<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Worn with Confidence</em>
        </h2>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "14px", fontWeight: 200,
          lineHeight: 2, color: "var(--dust)", maxWidth: "460px",
        }}>
          The page returns to its natural rhythm here — additional sections flow normally below.
        </p>
      </section>
      <HairReplacementQA />
    </>
  );
}