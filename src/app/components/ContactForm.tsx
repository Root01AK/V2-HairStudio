"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Faq from "../components/Faq";

export default function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge slides down from top
      gsap.from(".contact-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Title — word by word
      gsap.from(".contact-hero-left h1", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.15,
      });

      // Subtitle
      gsap.from(".contact-hero-left p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.35,
      });

      // Form card
      gsap.from(".contact-form-card", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.5,
      });

      // Right side — stagger each child
      gsap.from(".contact-hero-right > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.4,
      });

      // List items stagger
      gsap.from(".contact-hero-right li", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.6,
      });

      // Review box pops in
      gsap.from(".contact-review-box", {
        scale: 0.94,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: 0.85,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <section className="contact-hero-section" ref={containerRef}>
      <div className="contact-hero-container">

        {/* LEFT */}
        <div className="contact-hero-left">
          <span className="contact-badge">Limited Availability</span>

          <h1>
            Transform Your <span>Confidence</span> Today
          </h1>

          <p>
            Take the first step towards a new look. Book your 100%
            complimentary, non-obligatory scalp analysis with Chennai's
            top specialists.
          </p>

          <div className="contact-form-card">
            {/* Row: Name + Phone */}
            <div className="contact-form-row">
              <div className="field-group">
                <label className="form-label">Your Name</label>
                <input type="text" placeholder="e.g. Rahul Kumar" />
              </div>
              <div className="field-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" />
              </div>
            </div>

            {/* Service */}
            <div className="field-group">
              <label className="form-label">Service</label>
              <select defaultValue="">
  <option value="" disabled>Choose a service</option>
  <option value="hair">Hair Replacement</option>
  <option value="bridal">Bridal Styling</option>
  <option value="scalp">Scalp Treatment</option>
</select>
            </div>

            {/* Date */}
            <div className="field-group">
              <label className="form-label">Preferred Date</label>
              <input type="date" />
            </div>

            <button>Book My Free Consultation →</button>

            <p className="contact-privacy">
              🔒 Your data is 100% private. No spam, ever.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-hero-right">
          <h3>What to expect from your visit</h3>

          <ul>
            <li>
              <strong>Scalp Mapping</strong>
              <span>Deep analysis of hair density &amp; scalp health.</span>
            </li>
            <li>
              <strong>Expert Consultation</strong>
              <span>One-on-one session with senior specialists.</span>
            </li>
            <li>
              <strong>Personalized Roadmap</strong>
              <span>Customized treatment plan built for your needs.</span>
            </li>
          </ul>

          <div className="contact-review-box">
            <div>⭐⭐⭐⭐⭐</div>
            <p className="contact-rating">4.9 / 5 Rating on Google</p>
            <p className="contact-quote">
              "They didn't try to sell me anything. They explained the science
              behind my hair loss and gave me real options."
            </p>
            <span className="contact-author">— Vikram S., Chennai</span>
          </div>
        </div>

      </div>

      <Faq />
    </section>
    </>
  );
}