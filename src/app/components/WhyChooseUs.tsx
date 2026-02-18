import React from 'react';
import Testimonials from './Testimonials';

export default function WhyChooseUs() {
  return (
    <>
    <section id="why-choose-section">
      <div id="header-container">
        <h1>Why choose <span>V2 Hair Studio?</span></h1>
        <p>Experience. Precision. Confidence.</p>
        <p>At V2 Hair Studio, we go beyond basic hair replacement. Our approach combines advanced non-surgical techniques, 
          personalized consultation, and premium-quality hair systems to deliver natural, long-lasting results you can trust.</p>
      </div>

      <div id="grid-layout">
        {/* Left Column */}
        <div id="left-col">
          <div className="feature-box">
            <div className="icon-red">🧑‍⚕️</div>
            <h3>Experienced Hair Specialists</h3>
            <p>Our trained professionals specialize in non-surgical hair replacement and scalp solutions. With expert precision and attention to detail,
               we ensure seamless blending and natural-looking results.</p>
          </div>
          <div className="feature-box">
            <div className="icon-red">⚡</div>
            <h3>Instant & Same-Day Transformation</h3>
            <p>Walk in with concerns — walk out with confidence. Most hair patch and hair system applications are completed within the same day, with zero downtime.</p>
          </div>
        </div>

        {/* Center Column - Image */}
        <div id="center-col">
          <div id="image-wrapper">
            <img 
              src="2.jpeg" 
              alt="Luxury Car Detail" 
            />
            <div id="pink-accent-box"></div>
          </div>
        </div>

        {/* Right Column */}
        <div id="right-col">
          <div className="feature-box">
            <div className="icon-red">🧴</div>
            <h3>Premium Quality Hair Systems</h3>
            <p>We use high-grade, breathable skin and lace systems designed for durability, comfort, and a completely natural appearance.</p>
          </div>
          <div className="feature-box">
            <div className="icon-red">⚙️</div>
            <h3>Private & Hygienic Environment</h3>
            <p>Your privacy matters. Every procedure is performed in a clean, clinical setup designed for discretion and comfort.</p>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    </>
  );
}