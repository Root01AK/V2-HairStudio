import React from 'react';
import HairReplacementwhy from "../components/HairReplacementwhy"


const processSteps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Understanding your needs and hair goals.",
    icon: "💬" 
  },
  {
    id: 2,
    title: "Customization",
    desc: "Tailoring the perfect solution for you.",
    icon: "✨"
  },
  {
    id: 3,
    title: "Natural Fixing",
    desc: "Seamless integration with expert care.",
    icon: "✂️"
  },
  {
    id: 4,
    title: "Styling & Support",
    desc: "Finishing touches and ongoing maintenance.",
    icon: "👑"
  }
];

export default function ProcessStrip() {
  return (
    <>
    <section className="hriC-process-section">
      <div className="hriC-process-header">
        <span className="hriC-process-label">Our Process</span>
        <h2 className="hriC-process-title">Four Steps to Perfection</h2>
      </div>

      <div className="hriC-process-container">
        {/* Visual Connector Line */}
        <div className="hriC-process-line"></div>

        {processSteps.map((step) => (
          <div key={step.id} className="hriC-process-step">
            <div className="hriC-step-icon-wrapper">
              <span className="hriC-step-number">{step.id}</span>
              <div className="hriC-step-icon">{step.icon}</div>
            </div>
            <h3 className="hriC-step-title">{step.title}</h3>
            <p className="hriC-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <HairReplacementwhy />
    </>
  );
}