"use client";
import { motion } from "framer-motion";
import HairPatchsec from "../components/Hairpatchsec";

export default function HairPatchHero() {
  return (
    <>
    <section className="hairpthfm-hero-section">
      <div className="hairpthfm-hero-container">
        
        {/* LEFT CONTENT BOX */}
        <div className="hairpthfm-content-left">
          <motion.h1 
            className="hairpthfm-main-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find and restore your <br /> 
            <span>confidence</span> here!
          </motion.h1>
          
          <p className="hairpthfm-subtext">
            The best hair restoration studio communicates a feel and 
            makes it easy for visitors to discover their perfect look.
          </p>

          <div className="hairpthfm-cta-group">
            <button className="hairpthfm-btn-get-started">Get Started</button>
            <button className="hairpthfm-btn-explore">
              Explore Styles
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL BOX (Overlapping Cards) */}
        <div className="hairpthfm-visual-right">
          
          {/* Main Large Image Card */}
          <motion.div 
            className="hairpthfm-card hairpthfm-main-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src="/man-hair-1.jpg" alt="Hair Patch Result" />
          </motion.div>

          {/* Floating Stats Card */}
          <motion.div 
            className="hairpthfm-stats-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="hairpthfm-stats-label">Total Transformations</p>
            <h3>12,580 <span>View more</span></h3>
            <p className="hairpthfm-stats-source">Source <strong>Studio Verified</strong></p>
          </motion.div>

          {/* Secondary Floating Image */}
          <motion.div 
            className="hairpthfm-card hairpthfm-second-img"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}>
            <img src="/man-hair-2.jpg" alt="Confidence" />
          </motion.div>
        </div>

      </div>
    </section>
    <HairPatchsec />
    </>
  );
}