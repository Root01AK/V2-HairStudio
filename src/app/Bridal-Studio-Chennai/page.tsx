import React from 'react';
import BridalApproach from "../components/BridalApproach"

export default function BridalHero() {
  return (
    <>
    <section className="bridal-container">
      {/* Top Left: Small Badge and Intro Text */}
      <div className="bridal-content-left">
        <h1 className="bridal-main-title">
          BRIDAL <br />
          BEAUTY,<br />
          PERFECTED<br />
          <span className="bridal-author">Timeless Elegance for Your Special Day</span>
        </h1>
      </div>

      {/* Decorative Star Accent */}
      <div className="bridal-star-accent">✦</div>

      {/* Central Image: Arch Frame */}
      <div className="bridal-featured-frame">
        <div className="bridal-arch-container">
          <img 
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800" 
            alt="Main Bridal Dress" 
            className="bridal-main-img"
          />
        </div>
        {/* Circular "View Slideshow" Label */}
        <div className="bridal-view-label">
          <svg viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text>
              <textPath href="#circlePath">VIEW SLIDESHOW • VIEW SLIDESHOW • </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Right Image: Secondary Preview */}
      <div className="bridal-secondary-frame">
        <div className="bridal-arch-container bridal-gray-scale">
          <img 
            src="/1.png" 
            alt="Bridal Detail" 
          />
        </div>
      </div>

      {/* Bottom Description Strip */}
      <div className="bridal-footer-strip">
        <p>Elegant bridal creations that seamlessly blend traditional artistry with contemporary styling — crafted to complement every bride’s personality and vision.</p>
        <p>Bespoke consultations, personalized fittings, and custom detailing ensure a flawless, perfectly tailored bridal look made exclusively for you.</p>
        <p>Only the finest materials and expert craftsmanship are used to deliver lasting beauty, comfort, and confidence throughout your special day.</p>
      </div>

      {/* Decorative Swirl Line */}
      <div className="bridal-swirl-svg">
        <svg viewBox="0 0 500 200" fill="none">
          <path d="M0 150 C 150 250, 350 50, 500 100" stroke="#E5C5A8" strokeWidth="1" />
        </svg>
      </div>
    </section>
    <BridalApproach />
    </>
  );
}