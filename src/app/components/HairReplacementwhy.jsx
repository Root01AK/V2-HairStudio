import React from 'react';
import HairReplacementGallery from '../components/HairReplacementGallery';


export default function WhyChooseUs() {
  return (
    <>
    <section id="why-choose-section">
      <div id="header-container">
        <h1>Why choose <span>us?</span></h1>
        <p>From routine maintenance to major repairs, we've got your car covered with reliable and friendly service.</p>
      </div>

      <div id="grid-layout">
        {/* Left Column */}
        <div id="left-col">
          <div className="feature-box">
            <div className="icon-red">🔧</div>
            <h3>Expert Technicians</h3>
            <p>Our certified experts provide top-quality service. Trust us for accurate diagnostics and repairs.</p>
          </div>
          <div className="feature-box">
            <div className="icon-red">🔄</div>
            <h3>Fast Turnaround</h3>
            <p>Get back on the road quickly with our efficient service. Most repairs are completed within the same day.</p>
          </div>
        </div>

        {/* Center Column - Image */}
        <div id="center-col">
          <div id="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000" 
              alt="Luxury Car Detail" 
            />
            <div id="pink-accent-box"></div>
          </div>
        </div>

        {/* Right Column */}
        <div id="right-col">
          <div className="feature-box">
            <div className="icon-red">💰</div>
            <h3>Affordable Pricing</h3>
            <p>High-quality repairs at prices you can afford. No hidden fees, just honest and transparent pricing.</p>
          </div>
          <div className="feature-box">
            <div className="icon-red">⚙️</div>
            <h3>All-Inclusive Services</h3>
            <p>From routine maintenance to complex repairs, we handle it all. Your one-stop shop for all your car care needs.</p>
          </div>
        </div>
      </div>
    </section>
    <HairReplacementGallery />
    </>
  );
}