"use client";
import UspSection from "../components/UspSection"

export default function AboutSection() {
    return (
        <section className="about-wrapper">

            {/* Top Row */}
            <div className="about-top">
                <h1 className="about-brand">V2 Hair Studio</h1>

                <p className="about-intro">
                    At V2 Studio, we believe confidence begins with how you feel about yourself. Based in Chennai, 
                    we specialize in advanced non-surgical hair replacement and premium bridal styling experiences designed 
                    to deliver natural results with unmatched precision.
                </p>
            </div>

            {/* Big Title */}
            <h2 className="about-title">Our Story</h2>

            {/* Image */}
            <div className="about-image-container">
                <img src="/2.jpeg" alt="V2 Team" />
            </div>
            <div className="about-content">
                <p>
                   Founded in 2009, V2 Studio was created with a clear vision — to redefine hair restoration and bridal beauty in 
                   Chennai. We recognized the need for a studio that seamlessly blends clinical precision with artistic styling, offering not just services, 
                   but truly personalized experiences. From customized hair systems and advanced non-surgical hair patches to elegant bridal transformations, 
                   every service is delivered with meticulous attention to detail, premium-quality materials, and expert craftsmanship refined over years of practice.
                   We understand that hair loss and wedding-day beauty are deeply personal journeys. That’s why discretion, 
                   hygiene, in-depth consultation, and comfort are at the core of everything we do — ensuring every client leaves with natural results and renewed confidence.
                </p>
            </div>
            <UspSection />
        </section>
    );
}
