import React from 'react';
import HairReplacementFaq from '../components/HairReplacementFaq';


export default function PricingSnapshot() {
  return (
    <>
    <section className="bridal-pricing-wrapper">
      {/* Dark background with subtle glow effects */}
      <div className="bridal-background-glow"></div>
      
      <div className="bridal-pricing-container">
        {/* Central visual element: Vertical rocket/needle for height/growth metaphor */}
        <div className="bridal-visual-pillar"></div>

        <div className="bridal-pricing-content">
          <h1 className="bridal-plan-title">Hair Replacement</h1>
          
          <div className="bridal-price-card">
            <span className="bridal-label">Starting from</span>
            <h2 className="bridal-amount">₹11,999*</h2>
          </div>

          <p className="bridal-disclaimer">
            Take on the challenge with our specialized evaluation process. 
            Final cost depends on customization & density.
          </p>

          <button className="bridal-cta-button">
            Get Funded <span>→</span>
          </button>
        </div>
      </div>
    </section>
    <HairReplacementFaq />
    </>
  );
}