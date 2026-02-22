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
            Advanced<br />  
            <span>Non-Surgical Hair Replacement</span> <br /> for the Modern Gentleman
          </motion.h1>
          
          <p className="hairpthfm-subtext">
            Hair loss doesn’t define you — your presence does.
          </p>

          <div className="hairpthfm-cta-group">
            <button className="hairpthfm-btn-get-started">Book Now</button>
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
            <h3>8000+</h3>
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