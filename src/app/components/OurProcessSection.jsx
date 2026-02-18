"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChooseUs from './WhyChooseUs';

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
            <h2>Our Proven Hair Replacement Process</h2>
            <p>Safe. Structured. Non-Surgical. Natural</p>
            <p className="process-desc">
              At V2 Hair Studio, we follow a clinically guided, step-by-step hair replacement process to deliver safe,
              natural-looking, and long-lasting results — completely non-surgical and pain-free.

              Every procedure is performed by experienced specialists in a hygienic, private environment designed for your comfort,
              confidentiality, and confidence.
            </p>

            <ul className="process-points">
              <li>➔ 100% Non-Surgical & Pain-Free</li>
              <li>➔ Customized for Every Scalp Type</li>
              <li>➔ Hygienic Clinical Setup</li>
              <li>➔ Natural-Looking, Seamless Results</li>
            </ul>
          </div>


          {/* RIGHT CIRCLE */}
          <div className="process-right">

            <div className="process-rotating-wrapper">

              {/* ROTATING RING */}
              <div ref={ringRef} className="process-ring">

                <div className="process-step top">
                  <img src="/process/consultation.jpg" alt="" />
                  <span>01</span>
                  <h4>Hair Sample Analysis</h4>
                </div>

                <div className="process-step right">
                  <img src="/process/design.jpg" alt="" />
                  <span>02</span>
                  <h4>Precision Application</h4>
                </div>

                <div className="process-step bottom">
                  <img src="/process/application.jpg" alt="" />
                  <span>03</span>
                  <h4>Personalized Styling</h4>
                </div>

                <div className="process-step left">
                  <img src="/process/styling.jpg" alt="" />
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
        {/* NEW PROGRESS STRIP UI CLONE */}
        <div className="process-steps-strip">
          {stepsData.map((step, index) => (
            <div key={index} className="process-strip-card">
              <span className="process-step-label">STEP—{step.num}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
}
