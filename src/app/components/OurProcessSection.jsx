"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChooseUs from './WhyChooseUs';
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  { num: "01", title: "Hair Sample Analysis", desc: "We carefully collect a sample of your existing hair to perfectly match the color, density, texture, and natural growth pattern. This ensures your new hair system blends seamlessly with your natural look." },
  { num: "02", title: "Precision Application", desc: "Your customized hair system is bonded to a breathable skin membrane and securely applied to your scalp using advanced non-surgical techniques. The result is a comfortable, natural fit with zero surgery involved.." },
  { num: "03", title: "Personalized Styling", desc: "Once applied, we cut, shape, and style your new hair according to your preference and face structure — ensuring a look that feels completely your own." },
  { num: "04", title: "Confidence Restored", desc: "This isn’t just about hair replacement. It’s about restoring your confidence, presence, and self-assurance. Walk out feeling like yourself again — only more confident." },
];

export default function OurProcessRotating() {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Rotate ring
      tl.to(ringRef.current, {
        rotate: 360,
        ease: "none",
      });

      // Counter-rotate steps
      tl.to(
        ".process-step",
        {
          rotate: -360,
          ease: "none",
        },
        0 // sync with ring rotation
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <section ref={sectionRef} className="process-rotating-section">
        <div className="process-layout">

          {/* LEFT CONTENT */}
          <div className="process-left">
            <h1>Our Proven Hair Replacement Process</h1>
            <h2>Safe. Structured. Non-Surgical. Natural</h2>
            <p className="process-desc">
              At V2 Hair Studio, we follow a clinically guided, step-by-step hair replacement process to deliver safe,
              natural-looking, and long-lasting results — completely non-surgical and pain-free.

              Every procedure is performed by experienced specialists in a hygienic, private environment designed for your comfort,
              confidentiality, and confidence.
            </p>
            <div className="process-highlights">
              <div className="highlight-item">
                <span className="dot"></span>
                <p>100% Non-Surgical & Pain-Free</p>
              </div>

              <div className="highlight-item">
                <span className="dot"></span>
                <p>Customized for Every Scalp Type</p>
              </div>

              <div className="highlight-item">
                <span className="dot"></span>
                <p>Hygienic Clinical Setup</p>
              </div>

              <div className="highlight-item">
                <span className="dot"></span>
                <p>Natural-Looking, Seamless Results</p>
              </div>
            </div>

          </div>


          {/* RIGHT CIRCLE */}
          <div className="process-right">

            <div className="process-rotating-wrapper">

              {/* ROTATING RING */}
              <div ref={ringRef} className="process-ring">

                <div className="process-step top">
                  <img src="./process/p-1.png" alt="" />
                  <span>01</span>
                  <h4>Hair Sample Analysis</h4>
                </div>

                <div className="process-step right">
                  <img src="./process/p-2.png" alt="" />
                  <span>02</span>
                  <h4>Precision Application</h4>
                </div>

                <div className="process-step bottom">
                  <img src="./process/p-3.png" alt="" />
                  <span>03</span>
                  <h4>Personalized Styling</h4>
                </div>

                <div className="process-step left">
                  <img src="./process/p-4.png" alt="" />
                  <span>04</span>
                  <h4>Confidence Restored</h4>
                </div>

              </div>

              {/* CENTER LOGO */}
              <div className="process-center">
                <img src="/logo-dark.png" alt="V2 Hair Studio" />
              </div>

            </div>

          </div>

        </div>
        <div className="process-steps-strip">
          {stepsData.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`process-strip-card ${isActive ? "active" : ""}`}
                onClick={() => {
                  if (isMobile) {
                    setActiveIndex(isActive ? null : index);
                  }
                }}
              >
                <span className="process-step-label">
                  STEP — {step.num}
                </span>

                <h3 className="process-step-title">{step.title}</h3>

                <div className="hover-hint">
                  {isMobile
                    ? isActive
                      ? "Tap to close"
                      : "Tap to view"
                    : "Hover me"}
                </div>

                <div className="process-step-content">
                  <p className="process-step-description">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


      </section>
      <WhyChooseUs />
    </>
  );
}
