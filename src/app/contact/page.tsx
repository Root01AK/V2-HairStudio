"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "../components/ContactForm"

export default function Herocontactb() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      ".Herocontactb-title span",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: "power4.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="Herocontactb-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
    <section className="Herocontactb-hero">
      <div className="Herocontactb-bg" />

      <div className="Herocontactb-content">
        <div className="Herocontactb-label">
          <span className="Herocontactb-line" />
          V2 Hair Studio · Chennai
        </div>

        <h1 ref={titleRef} className="Herocontactb-title">
          {splitText("LET'S TALK")}
        </h1>

        <p ref={subtitleRef} className="Herocontactb-subtitle">
          Ready to reclaim your confidence? Our experts are just one message away.
        </p>

        <button ref={btnRef} className="Herocontactb-btn">
          Contact Now →
        </button>
      </div>

      <div className="Herocontactb-vertical">
        Scroll to explore
      </div>
    </section>
    <ContactForm />
    </>
  );
}