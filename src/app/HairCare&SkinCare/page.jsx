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
          <h1 className="hcskincare-brand-name">GLOWRA</h1>
          <p className="hcskincare-brand-sub">Skincare & Hair Wellness.</p>
        </div>
        <div className="hcskincare-header-stats">
          <span>18x, 100x</span>
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
            Nourish Your Glow. <br />
            Define Your Radiance.
          </motion.h2>
        </div>
        
        <div className="hcskincare-hero-desc">
          <span className="hcskincare-label">Description</span>
          <p>
            Glowra is a beauty and wellness brand dedicated to fusing cutting-edge 
            science with natural ingredients. Every product is crafted to enhance 
            your natural beauty.
          </p>
        </div>
      </div>

      <hr className="hcskincare-divider" />

      {/* MOBILE/LOWER HERO SECTION */}
      <div className="hcskincare-lower-container">
        <div className="hcskincare-tagline-box">
          <h3 className="hcskincare-label-large">Tagline</h3>
          <p>
            Glowra is a beauty and wellness brand dedicated to fusing natural 
            ingredients. Every product enhances your natural beauty.
          </p>
        </div>

        <div className="hcskincare-image-box">
          <span className="hcskincare-range-label">HERO Skincare-range</span>
          <motion.div 
            className="hcskincare-img-reveal"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <img src="/1.png" alt="Skincare Model" />
          </motion.div>
        </div>
      </div>
    </section>
    <HSServicesList />
    </>
  );
}