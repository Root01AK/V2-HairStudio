"use client";
import { motion } from "framer-motion";


const haircare = [
  { title: "Scalp Treatments", desc: "Expert care for dandruff, dryness, and oil control.", icon: "🌿" },
  { title: "Hair Spa & Nourishing", desc: "Deep conditioning and intense repair treatments.", icon: "✨" },
  { title: "Smoothening & Straightening", desc: "Achieve sleek, frizz-free, and manageable hair.", icon: "💇" },
  { title: "Keratin Treatment", desc: "Protein-infused therapy for structural hair restoration.", icon: "🛡️" },
  { title: "Coloring & Grey Blending", desc: "Seamless blending and vibrant, natural-looking tones.", icon: "🎨" },
  { title: "Haircut & Styling", desc: "Precision cuts tailored to your unique facial structure.", icon: "✂️" },
];

const skincare = [
  { id: "01", title: "Facials (Hydrating / Brightening)", desc: "Deeply nourishing treatments customized to your specific skin type." },
  { id: "02", title: "Cleanup & Detan", desc: "Effective removal of impurities and environmental pollutants." },
  { id: "03", title: "Anti-Tan Treatments", desc: "Advanced therapy to reverse sun damage and even out skin tone." },
  { id: "04", title: "Groom Makeup", desc: "Natural, camera-ready grooming for men and women." },
  { id: "05", title: "Pre-Bridal Skin Prep", desc: "Comprehensive skin conditioning for your most important day." },
];

export default function ServicesList() {
  return (
    <div className="hcskincare-container">
      
      {/* HAIRCARE SECTION: Grid Layout */}
      <section className="hcskincare-section">
        <div className="hcskincare-header">
          <span className="hcskincare-tag">Hair Wellness</span>
          <h2 className="hcskincare-h2">Professional Haircare Treatments</h2>
        </div>

        <div className="hcskincare-grid">
          {haircare.map((item, index) => (
            <motion.div 
              key={index}
              className="hcskincare-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hcskincare-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="hcskincare-divider" />

      {/* SKINCARE SECTION: List Layout inspired by Agency UI */}
      <section className="hcskincare-section">
        <div className="hcskincare-header">
          <span className="hcskincare-tag">Skin Aesthetic</span>
          <h2 className="hcskincare-h2">Advanced Skincare & Grooming</h2>
        </div>

        <div className="hcskincare-list">
          {skincare.map((item) => (
            <motion.div 
              key={item.id} 
              className="hcskincare-list-item"
              whileHover={{ backgroundColor: "#f9f9f9" }}
            >
              <div className="hcskincare-list-left">
                <span className="hcskincare-num">{item.id}</span>
                <h3 className="hcskincare-list-title">{item.title}</h3>
              </div>
              <p className="hcskincare-list-desc">{item.desc}</p>
              <div className="hcskincare-arrow">↗</div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}