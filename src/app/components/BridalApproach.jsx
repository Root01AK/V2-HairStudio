"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BridalService from "../components/BridalService"

gsap.registerPlugin(ScrollTrigger);

const approachSteps = [
  {
    title: "Consult",
    text: "We understand your wedding vision, outfit, and preferences through a personalized bridal consultation.",
    bg: "#2563eb",
  },
  {
    title: "Create",
    text: "We design your look with precision — balancing tradition, modern elegance, and your natural beauty.",
    bg: "#65a30d",
  },
  {
    title: "Perfect",
    text: "On your special day, we execute every detail flawlessly to ensure long-lasting, camera-ready perfection.",
    bg: "#d946ef",
  }
];

export default function OurApproach() {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      const panels = gsap.utils.toArray(".bridalapp-step-panel");

      // Timeline for panel fade in/out & background color
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${approachSteps.length * 100}%`,
          scrub: true,
          pin: true,
        }
      });

      panels.forEach((panel, i) => {
        // Fade in current panel
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 1 },
          i
        );

        // Fade out previous panel
        if (i > 0) {
          tl.to(
            panels[i - 1],
            { autoAlpha: 0, y: -50, duration: 1 },
            i
          );
        }

        // Animate background color of right content
        tl.to(
          ".bridalapp-right-content",
          { backgroundColor: approachSteps[i].bg, duration: 1 },
          i
        );
      });

      // Animate main title reveal
      gsap.from(".bridalapp-main-h2", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div ref={mainRef} className="bridalapp-approach-wrapper">
      <div className="bridalapp-approach-flex">
        
        {/* LEFT SIDE - STATIC/PINNED */}
        <div className="bridalapp-left-static">
          <div className="bridalapp-left-inner">
            <h2 className="bridalapp-main-h2">Our Approach</h2>
            <div className="bridalapp-description-box">
              <p className="bridalapp-highlight">No Gimmicks. No Guesswork. Just Natural Results.</p>
              <p className="bridalapp-para">
                At V2 Studio, our approach blends clinical precision with artistic expertise. 
                Every transformation is guided by consultation, customization, and proven non-surgical techniques — 
                ensuring safe procedures and confident outcomes.
              </p>
              <button className="bridalapp-cta-outline">Book Now</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - SCROLLING CONTENT */}
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
