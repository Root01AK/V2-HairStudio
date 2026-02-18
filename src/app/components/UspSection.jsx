"use client";
import InteriorHero from "../components/InteriorHero"

export default function UspSection() {
  return (
    <>
    <section className="usp-section">

      {/* LEFT IMAGE GRID */}
      <div className="usp-images">
        <div className="usp-img">
          <img src="/2.jpeg" alt="Hair Studio" />
        </div>
        <div className="usp-img">
          <img src="/2.jpeg" alt="Hair Styling" />
        </div>
        <div className="usp-img">
          <img src="/2.jpeg" alt="Hair Replacement" />
        </div>
        <div className="usp-img">
          <img src="/2.jpeg" alt="Consultation" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="usp-content">

        <span className="usp-tag">V2 HAIR STUDIO</span>

        <h2 className="usp-title">
         What Makes Us Different
        </h2>

        <ul className="usp-list">
          <li>Advanced non-surgical hair replacement techniques</li>
          <li>Customized hair systems tailored to every scalp</li>
          <li>Private, hygienic, clinic-style setup</li>
          <li>Premium bridal styling & pre-wedding grooming</li>
          <li>Honest consultation & transparent pricing</li>
        </ul>

        <div className="usp-btn">
          <button>Book Consultation →</button>
        </div>

      </div>
    </section>
    <InteriorHero />
    </>
  );
}
