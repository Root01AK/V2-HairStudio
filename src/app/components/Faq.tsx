"use client";

import { useState } from "react";

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
    question:
      "Can I give specific instructions and ask for special bridal requests?",
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

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Questions? Look here.</h2>
        <p className="faq-subtitle">
          Can't find an answer? Call us or WhatsApp our team anytime.
        </p>

        {/* Category Filter */}
        <div className="faq-filters">
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
        <div className="faq-list">
          {filteredFaqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <span className="icon">
                  {activeIndex === index ? "–" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="faq-cta-section">
        <span className="faq-cta-badge">CERTIFIED TECHNICIANS</span>
        <h2>Ready for a Total Transformation?</h2>
        <p>
          Visit our Chennai Clinic today for a 100% natural look.
          Your confidence is just one consultation away.
        </p>

        <div className="faq-cta-buttons">
          <button className="primary">Get Started Now</button>
          <button className="secondary">Book a Consultation</button>
        </div>

        <div className="faq-cta-points">
          <span>✔ 100% Natural Results</span>
          <span>✔ Zero Side Effects</span>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="faq-map-section">
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
