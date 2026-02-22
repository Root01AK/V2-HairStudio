"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "Is it painful?",
    answer: "No. It's completely non-surgical and comfortable.",
  },
  {
    question: "Will it look natural?",
    answer: "Yes. Each system is customized to match your hair perfectly.",
  },
  {
    question: "How long does it last?",
    answer: "It depends on care, lifestyle, and maintenance routine.",
  },
  {
    question: "Can I wash and style it?",
    answer: "Yes. You can wash, style, and manage it like natural hair.",
  },
];

export default function HairReplacementFAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Header fades up
      gsap.fromTo(
        ".hairreplac-faq-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // FAQ items stagger up
      const items = gsap.utils.toArray(".hairreplac-faq-item");
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index) => {
    const next = activeIndex === index ? null : index;
    setActiveIndex(next);

    // Smooth icon rotation
    const icons = document.querySelectorAll(".hairreplac-faq-icon");
    icons.forEach((icon, i) => {
      gsap.to(icon, {
        rotation: next === i ? 45 : 0,
        duration: 0.35,
        ease: "power2.out",
      });
    });
  };

  return (
    <section ref={sectionRef} className="hairreplac-faq-section">
      <div className="hairreplac-faq-container">

        <div className="hairreplac-faq-header">
          <h2>Common Questions</h2>
        </div>

        <div className="hairreplac-faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`hairreplac-faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleToggle(index)}
            >
              <div className="hairreplac-faq-question">
                <span>{item.question}</span>
                <div className="hairreplac-faq-icon">+</div>
              </div>

              <div className="hairreplac-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}