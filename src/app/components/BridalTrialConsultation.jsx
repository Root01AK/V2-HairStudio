"use client";
import { motion } from "framer-motion";


export default function TrialConsultation() {
  return (
    <section className="bridalsec-trial-section">
      <div className="bridalsec-trial-container">
        
        {/* LEFT SIDE: Atmospheric Editorial Image */}
        <div className="bridalsec-trial-image-box">
          <motion.div 
            className="bridalsec-image-wrapper"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <img src="/1.png" alt="Trial Session" />
            <div className="bridalsec-image-overlay">
              <span className="bridalsec-tag">EST. 2009</span>
              <h3>The Perfect Fit Begins with a Conversation.</h3>
            </div>
          </motion.div>
        </div>
        {/* RIGHT SIDE: Consultation Details & CTA */}
        <div className="bridalsec-trial-content">
          <div className="bridalsec-text-block">
            <span className="bridalsec-label">Consultation</span>
            <h2 className="bridalsec-heading">Trial & Styling Session</h2>
            <p className="bridalsec-description">
              Experience our artistry in a private 90-minute consultation designed to celebrate your 
              individuality. Together, we explore silhouettes, textures, and styling details that 
              reflect your personality and wedding aesthetic.
            </p>
          </div>
          <div className="bridalsec-features">
            <div className="bridalsec-feature-item">
              <span className="bridalsec-num">01</span>
              <div>
                <h4>Initial Discovery</h4>
                <p>A thoughtful conversation to understand your vision, inspirations, preferences, and the story you want your bridal look to tell.</p>
              </div>
            </div>
            <div className="bridalsec-feature-item">
              <span className="bridalsec-num">02</span>
              <div>
                <h4>Fabric & Silhouette</h4>
                <p>Guided exploration of premium materials and cuts.</p>
              </div>
            </div>
          </div>
          <motion.button 
            className="bridalsec-book-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            BOOK YOUR CONSULTATION <span>→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}