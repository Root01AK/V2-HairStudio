import React from 'react';
import CtaSection from './CtaSection';


export default function BridalCollection() {
  return (
    <>
    <section id="bridal-hero">
      <div id="left-side">
        <div id="portrait-frame">
          <img 
            src="/1.png" 
            alt="Bridal Portrait" 
          />
          <h2 id="portrait-label">Radiance, perfected for your moment.</h2>
        </div>
        
        <div id="cta-section">
          <button id="btn-collection">
            Bridal Studio
          </button>
        </div>
      </div>

      {/* The large outline background letter */}
      <div id="watermark-letter">V2</div>

      <div id="right-side">
        <div id="top-text-area">
          <h1 id="main-title">Beauty That Breathes Elegance</h1>
          <p id="description-paragraph">
            Luxurious, science-backed bridal skincare and beauty rituals designed 
            for women who celebrate grace, confidence, and timeless elegance.
          </p>
          <em id="italic-motto">Glow begins within.</em>
        </div>

        <div id="bottom-image-area">
          <img 
            src="/2.jpeg" 
            alt="Bridal Details" 
          />
        </div>
      </div>
    </section>
    <CtaSection />
    </>
  );
}