"use client";
import { motion } from "framer-motion";
import HSServicesList from "../components/H&SServicesList"

export default function SkincareHero() {
  return (
    <>
    <section className="hcskincare-hero-wrapper">
      {/* BRAND HEADER LINE */}
      <header className="hcskincare-brand-header">
        <div className="hcskincare-logo-group">
          <h1 className="hcskincare-brand-name">V2 Advanced Care</h1>
          <p className="hcskincare-brand-sub">Hair & Skin Wellness</p>
        </div>
      </header>

      <hr className="hcskincare-divider" />

      {/* MAIN HERO CONTENT */}
      <div className="hcskincare-main-container">
        <div className="hcskincare-hero-text">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           Advanced Solutions.<br />
          Visible Confidence. 
          </motion.h2>
        </div>
        
        <div className="hcskincare-hero-desc">
          <span className="hcskincare-label">Define Your Glow.</span>
          <p>
            V2 Advanced Care is a premium hair and skin wellness division of V2 Hair
            Studio, designed to combine clinical expertise with high-performance formulations.

            Every treatment and product is carefully developed to restore scalp health, 
            strengthen hair, and enhance skin vitality — helping you look confident, refreshed, and naturally radiant.
          </p>
        </div>
      </div>

      <hr className="hcskincare-divider" />

      {/* MOBILE/LOWER HERO SECTION */}
      <div className="hcskincare-lower-container">
        <div className="hcskincare-tagline-box">
          <h3 className="hcskincare-label-large">Where Science Meets Self-Confidence.</h3>
          <p>
            V2 Advanced Care blends dermatological science with curated natural actives to 
            restore, repair, and refine. From scalp rejuvenation to skin revitalization, every formula is designed to enhance your natural identity — not mask it.
          </p>
        </div>

        <div className="hcskincare-image-box">
          <span className="hcskincare-range-label">Clinical Care. Luxury Experience. Visible Results.</span>
          <motion.div 
            className="hcskincare-img-reveal"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <img src="/adv-1.png" alt="Skincare Model" />
          </motion.div>
        </div>
      </div>
    </section>
    <HSServicesList />
    </>
  );
}