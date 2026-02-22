"use client";

import { useState, useEffect, useRef } from "react";
import CtaSection from "./CtaSection";

const categories = ["All", "Hair", "Bridal", "Hair Care"];

const faqs = [
  {
    category: "Hair",
    question: "What if I just had renovation work done?",
    answer:
      "We recommend waiting at least 48 hours after renovation work so dust settles completely before hair or scalp treatments.",
  },
  {
    category: "Hair",
    question: "Do I get a discount if I'm a frequent customer?",
    answer:
      "Yes, we offer loyalty benefits and exclusive pricing for our regular clients.",
  },
  {
    category: "Bridal",
    question: "Can I give specific instructions and ask for special bridal requests?",
    answer:
      "Absolutely. You can share your preferences during consultation, and our bridal experts will tailor the service to your needs.",
  },
  {
    category: "Hair Care",
    question: "What if I don't have prior hair care products?",
    answer:
      "No worries. We provide professional-grade hair care products during every session.",
  },
  {
    category: "Bridal",
    question: "Do you offer bridal trials before the wedding?",
    answer:
      "Yes, bridal trials are available and highly recommended to finalize your look in advance.",
  },
];

function useReveal(delay = 0) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(35px)";
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(35px)";
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const headingRef   = useReveal(0);
  const subtitleRef  = useReveal(0.1);
  const filtersRef   = useReveal(0.2);
  const listRef      = useReveal(0.3);
  const mapRef       = useReveal(0);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      <div className="faq-wrapper">
        <section className="faq-section">

          <h2 ref={headingRef as React.Ref<HTMLHeadingElement>}>
            Frequently Asked Questions? Look here.
          </h2>

          <p
            ref={subtitleRef as React.Ref<HTMLParagraphElement>}
            className="faq-subtitle"
          >
            Can't find an answer? Call us or WhatsApp our team anytime.
          </p>

          {/* Category Filter */}
          <div
            ref={filtersRef as React.Ref<HTMLDivElement>}
            className="faq-filters"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div
            ref={listRef as React.Ref<HTMLDivElement>}
            className="faq-list"
          >
            {filteredFaqs.map((faq, index) => (
              <div
                className="faq-item"
                key={index}
                style={{
                  opacity: 1,
                  transform: "none",
                  transition: `opacity 0.4s ease ${index * 0.07}s, transform 0.4s ease ${index * 0.07}s`,
                }}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span
                    className="icon"
                    style={{
                      display: "inline-block",
                      transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {activeIndex === index && (
                  <div
                    className="faq-answer"
                    style={{
                      animation: "fadeSlideDown 0.35s ease forwards",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <CtaSection />

      {/* MAP SECTION */}
      <section
        ref={mapRef as React.Ref<HTMLElement>}
        className="faq-map-section"
      >
        <div className="faq-map-content">
          <div className="faq-map-info">
            <h3>Our Chennai Clinic</h3>
            <p>
              123, 4th Floor, Sterling Road,<br />
              Nungambakkam, Chennai – 600034
            </p>
            <p>📞 +91 44 2800 1234</p>
            <p>🕒 Mon – Sat: 10:00 AM – 8:00 PM</p>
          </div>

          <div className="faq-map-embed">
            <iframe
              src="https://www.google.com/maps?q=Chennai&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}