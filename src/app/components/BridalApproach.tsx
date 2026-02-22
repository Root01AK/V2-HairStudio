"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BridalService from "./BridalService";

gsap.registerPlugin(ScrollTrigger);

const approachSteps = [
  {
    title: "Consult",
    text: "We understand your wedding vision, outfit, and preferences through a personalized bridal consultation.",
    bg: "#E8D8C3",
  },
  {
    title: "Create",
    text: "We design your look with precision — balancing tradition, modern elegance, and your natural beauty.",
    bg: "#5A2E4D",
  },
  {
    title: "Perfect",
    text: "On your special day, we execute every detail flawlessly to ensure long-lasting, camera-ready perfection.",
    bg: "#2F1B1A",
  }
];

export default function OurApproach() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".bridalapp-step-panel");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${approachSteps.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      panels.forEach((panel, i) => {

        // Entrance
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 60 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          i
        );

        // Exit previous
        if (i > 0) {
          tl.to(
            panels[i - 1],
            { autoAlpha: 0, y: -40, duration: 0.6 },
            i
          );
        }

        // Background transition
        tl.to(
          ".bridalapp-right-content",
          {
            backgroundColor: approachSteps[i].bg,
            duration: 0.8,
          },
          i
        );

        // Title animation
        tl.from(
          panel.querySelector(".bridalapp-step-title"),
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
          },
          i + 0.2
        );

        // Text animation
        tl.from(
          panel.querySelector(".bridalapp-step-text"),
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          i + 0.3
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, { scope: mainRef });

  // Floating blob animation (safe scoped)
  useGSAP(() => {
    const blob = mainRef.current?.querySelector(".bridalapp-yellow-blob");
    if (!blob) return;

    gsap.to(blob, {
      y: -20,
      rotation: 360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: mainRef });

  return (
    <>
      <div ref={mainRef} className="bridalapp-approach-wrapper">
        <div className="bridalapp-approach-flex">

          {/* LEFT STATIC */}
          <div className="bridalapp-left-static">
            <div className="bridalapp-left-inner">
              <h2 className="bridalapp-main-h2">Our Approach</h2>

              <div className="bridalapp-description-box">
                <p className="bridalapp-highlight">
                  No Gimmicks. No Guesswork. Just Natural Results.
                </p>

                <p className="bridalapp-para">
                  At V2 Studio, our approach blends clinical precision with artistic expertise.
                  Every transformation is guided by consultation, customization, and proven
                  non-surgical techniques — ensuring safe procedures and confident outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SCROLL PANELS */}
          <div className="bridalapp-right-content">
            {approachSteps.map((step, index) => (
              <div key={index} className="bridalapp-step-panel">
                <div className="bridalapp-step-info">
                  <h3 className="bridalapp-step-title">{step.title}</h3>
                  <p className="bridalapp-step-text">{step.text}</p>
                </div>
                <div className="bridalapp-yellow-blob"></div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <BridalService />
    </>
  );
}