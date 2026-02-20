"use client";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* Top Badge */}
        <div className="cta-badge">
          <span> Your Transformation Starts Here</span>
        </div>

        {/* Heading */}
        <h2 className="cta-title">
          Ready to Transform Your <br />
          <span className="gradient-text">Confidence & Style?</span>
        </h2>

        {/* Description */}
        <p className="cta-description">
          Join hundreds who trust V2 Hair Studio for natural-looking,
          non-surgical hair solutions that restore confidence
          and enhance your appearance effortlessly.
        </p>

        {/* Buttons */}
        <div className="cta-buttons">
          <a href="/V2-Book" className="cta-btn primary">
            Book Free Consultation →
          </a>

          <a href="https://wa.me/919999999999" className="cta-btn secondary">
            WhatsApp Us
          </a>
        </div>

        {/* Features */}
        <div className="cta-features">
          <span>✔ No upfront payment</span>
          <span>✔ 100% Non-Surgical</span>
          <span>✔ Private & Confidential</span>
        </div>

      </div>
    </section>
  );
}