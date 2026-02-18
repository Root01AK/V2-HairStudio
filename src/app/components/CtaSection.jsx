"use client";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-icon">+</div>

        <h2 className="cta-title">
         Let’s Make Your Best Move
        </h2>

        <div className="cta-buttons">
          <a href="#" className="cta-btn primary">
            Book Free Consultation →
          </a>

          <a href="#" className="cta-btn secondary">
            WhatsApp Us Now
          </a>
        </div>

        <div className="cta-features">
          <span>✔ No upfront payment</span>
          <span>✔ Easily cancellation</span>
          <span>✔ Private & confidential consultation</span>
        </div>

      </div>
    </section>
  );
}
