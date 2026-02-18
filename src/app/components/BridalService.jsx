"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BridalGallery from "../components/BridalGallery"

const services = [
  {
    id: 1,
    title: "Bridal Styling",
    image: "/1.png", // Replace with your image paths
    description: "Complete bridal styling designed to reflect your personality — blending traditional elegance with contemporary sophistication."
  },
  {
    id: 2,
    title: "Personalized Fitting",
    image: "/1.png",
    description: "Bespoke fittings and custom detailing to ensure a flawless, comfortable, and perfectly tailored bridal look."
  },
  {
    id: 3,
    title: "Premium Fabrics & Enhancements",
    image: "/1.png",
    description: "Only premium-quality materials, hair enhancements, and accessories selected to deliver lasting beauty and all-day comfort."
  },
  {
    id: 4,
    title: "Makeup Artistry",
    image: "/1.png",
    description: "Professional bridal makeup artistry focused on enhancing your natural features with a radiant, long-lasting finish."
  }
];

export default function BridalServices() {
  const [expanded, setExpanded] = useState(0);

  return (
    <>
    <section className="bridal-service-section">
      <div className="bridal-service-header">
        <span className="bridal-tag">Our Bridal Services</span>
        <h2>What We Can Do for You</h2>
        <p>Tailored bridal solutions crafted to elevate your most memorable moments with elegance, precision, and care.</p>
      </div>

      <div className="bridal-service-container">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`bridal-service-card ${expanded === index ? "expanded" : ""}`}
            onMouseEnter={() => setExpanded(index)}
            initial={{ width: "15%" }}
            animate={{ 
              width: expanded === index ? "45%" : "15%",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
            }}
          >
            <div className="bridal-card-image-wrapper">
              <img src={service.image} alt={service.title} />
              <div className="bridal-card-overlay" />
            </div>

            <div className="bridal-card-content">
              <div className="bridal-card-top">
                <span className="bridal-number">0{index + 1}</span>
                <div className="bridal-arrow">↗</div>
              </div>
              
              <div className="bridal-card-text">
                <h3>{service.title}</h3>
                {expanded === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <BridalGallery />
    </>
  );
}