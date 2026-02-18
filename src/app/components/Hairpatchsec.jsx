"use client";
import { motion } from "framer-motion";
import HairReplacementGallery from "../components/HairReplacementGallery"

const infoCards = [
  { title: "Standard Patch", status: "OFFER", icon: "👤" },
  { title: "Custom Lace Base", status: "NEW", icon: "✨" },
  { title: "Skin Base Pro", status: "OFFER", icon: "🛡️" },
];

export default function HairPatchServices() {
  return (
    <>
    <div className="hairpthfm-services-wrapper">
      
      {/* SECTION 1: TOP INFO CARDS */}
      <div className="hairpthfm-top-header">
        <h2 className="hairpthfm-section-title">Hair Systems.</h2>
        <p className="hairpthfm-section-desc">
          Being a first-choice studio within our sectors. Our process 
          applies techniques from a variety of disciplines.
        </p>
      </div>

      <div className="hairpthfm-card-grid">
        {infoCards.map((card, i) => (
          <div key={i} className="hairpthfm-info-card">
            <span className="hairpthfm-card-badge">{card.status}</span>
            <div className="hairpthfm-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>Adjust global theme options and see design changes in real-time.</p>
            <button className="hairpthfm-learn-more">Learn More</button>
          </div>
        ))}
      </div>

      <p className="hairpthfm-stats-line">Our nearly 8,000 committed staff members are ready to help.</p>

      {/* SECTION 2: ALTERNATING CONTENT BLOCKS */}
      <div className="hairpthfm-content-blocks">
        
        {/* BLOCK 1: IMAGE RIGHT */}
        <section className="hairpthfm-split-block">
          <div className="hairpthfm-text-side">
            <h2 className="hairpthfm-block-title">V-LOOP</h2>
            <div className="hairpthfm-feature">
              <h5>Natural Front Hairline</h5>
              <p>Your daily hair needs are influenced by your lifestyle and activity level. As we age, our hairline changes, which can lead to stress.</p>
            </div>
            <div className="hairpthfm-feature">
              <h5>Durability & Comfort</h5>
              <p>Premium base materials ensure that your hair system remains breathable even during intense physical workouts.</p>
            </div>
            <button className="hairpthfm-book-btn">BOOK NOW ›</button>
          </div>
          <div className="hairpthfm-image-side">
            <img src="/hair-system-1.jpg" alt="Service Detail" />
          </div>
        </section>

        {/* BLOCK 2: IMAGE LEFT (REVERSED) */}
        <section className="hairpthfm-split-block hairpthfm-reverse">
          <div className="hairpthfm-text-side">
            <h2 className="hairpthfm-block-title">SILK BASE</h2>
            <div className="hairpthfm-feature">
              <h5>Enhanced Scalp Realism</h5>
              <p>One of the primary benefits of Silk Base systems is the ability to significantly enhance the realism of the hair parting.</p>
            </div>
            <div className="hairpthfm-feature">
              <h5>Breathable Fabric Tech</h5>
              <p>Proprietary fabric tech also plays a crucial role in reducing heat buildup and ensuring scalp health.</p>
            </div>
            <button className="hairpthfm-book-btn">BOOK NOW ›</button>
          </div>
          <div className="hairpthfm-image-side">
            <img src="/hair-system-2.jpg" alt="Scalp Detail" />
          </div>
        </section>

      </div>
    </div>
    <HairReplacementGallery />
  
    </>
  );
}