"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Faq from "../components/Faq";


export default function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate-up", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-hero-section" ref={containerRef}>
      <div className="contact-hero-container">

        {/* LEFT */}
        <div className="contact-hero-left">
          <span className="contact-badge contact-animate-up">
            LIMITED AVAILABILITY
          </span>

          <h1 className="contact-animate-up">
            Transform Your <span>Confidence</span> Today
          </h1>

          <p className="contact-animate-up">
            Take the first step towards a new look. Book your 100%
            complimentary, non-obligatory scalp analysis with Chennai’s
            top specialists.
          </p>

          <div className="contact-form-card contact-animate-up">
            <div className="contact-form-row">
              <input type="text" placeholder="e.g. Rahul Kumar" />
              <input type="tel" placeholder="+91 00000 00000" />
            </div>

            <select>
              <option>Choose a service</option>
              <option>Hair Transplant</option>
              <option>PRP Therapy</option>
              <option>Scalp Treatment</option>
            </select>

            <input type="date" />

            <button>Book My Free Consultation</button>

            <p className="contact-privacy">
              🔒 Your data is 100% private. No spam, guaranteed.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-hero-right">
          <h3 className="contact-animate-up">
            What to expect from your visit
          </h3>

          <ul>
            <li className="contact-animate-up">
              <strong>Scalp Mapping</strong>
              <span>Deep analysis of hair density & scalp health.</span>
            </li>
            <li className="contact-animate-up">
              <strong>Expert Consultation</strong>
              <span>One-on-one session with senior specialists.</span>
            </li>
            <li className="contact-animate-up">
              <strong>Personalized Roadmap</strong>
              <span>Customized treatment plan for your needs.</span>
            </li>
          </ul>

          <div className="contact-review-box contact-animate-up">
            ⭐⭐⭐⭐⭐
            <p className="contact-rating">4.9/5 Rating on Google</p>
            <p className="contact-quote">
              “They didn’t try to sell me anything. They explained the science
              behind my hair loss.”
            </p>
            <span className="contact-author">— Vikram S., Chennai</span>
          </div>
        </div>

      </div>
      <Faq/>
    </section>
  );
}
