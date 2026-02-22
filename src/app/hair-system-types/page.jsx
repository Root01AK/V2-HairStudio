"use client"
import { useState } from "react";
import HairSystem from "../components/HairSystem"
  const itinerary = [
    {
      id: 1,
      label: "Lace Hair Systems",
      title: "Comprehensive Hair & Scalp Restoration Therapy",
      bestFor: "Natural, undetectable hairlines.",

      features: [
        "Ultra-fine lace front for invisible edges",
        "Realistic scalp appearance",
        "Ideal for medium to heavy styling",
      ],

      whoItsFor:
        "Those looking for ultimate realism and flexibility with styling freedom.",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800",
    },

    {
      id: 2,
      label: "Poly (PU) Base Hair Systems",
      title: "Purifying & Balancing Scalp Renewal Program",
      bestFor: "Stronger adhesion & active lifestyles.",

      features: [
        "Smooth polyurethane base",
        "Easy bonding with adhesive tapes/glues",
        "Excellent water resistance",
      ],

      whoItsFor:
        "Users who prefer secure fit and durability — ideal for sports and frequent movement.",

      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800",
    },

    {
      id: 3,
      label: "Monofilament Hair Systems",
      title: "Intensive Keratin & Protein Repair Treatment",
      bestFor: "Soft, breathable comfort.",

      features: [
        "Multi-directional hair movement",
        "Extremely lightweight",
        "Gentle on sensitive scalp",
      ],

      whoItsFor:
        "Those prioritizing comfort, subtle movement, and realistic scalp look.",

      image:
        "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800",
    },
        {
      id: 4,
      label: "Swiss Lace Systems",
      title: "Intensive Keratin & Protein Repair Treatment",
      bestFor: "Finest, most undetectable finish.",

      features: [
        "Ultra-thin, high-quality Swiss lace",
        "Superior breathability",
        "Natural parting and styling",
      ],

      whoItsFor:
        "Individuals seeking premium aesthetics with fine detail.",

      image:
        "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800",
    },
  ];

export default function TravelItinerary() {
  const [activeId, setActiveId] = useState(1);

  const activeItem = itinerary.find((item) => item.id === activeId);


  return (
    <>
    <section className="hairsystin-main-container">
      {/* Top Image Grid */}
      <div className="hairsystin-gallery-grid">
        <div className="hairsystin-main-visual">
          <img src="/1.png" alt="Main View" />
        </div>
        <div className="hairsystin-side-visuals">
          <img src="/1.png" alt="Beach View" />
          <img src="/2.jpeg" alt="Temple View" />
        </div>
      </div>

      {/* Booking and Description Section */}
      <div className="hairsystin-content-split">
        <div className="hairsystin-info-card">
          <h2 className="hairsystin-tour-title">Hair System Types | Advanced Custom Solutions for Hair Loss</h2>
          <p className="hairsystin-tour-intro">A premium range of bespoke hair systems designed for natural appearance, comfort, and durability — expertly crafted to match your lifestyle and texture.</p>

          <div className="hairsystin-tag-row">
            <span className="hairsystin-tag">Restore Confidence.</span>
            <span className="hairsystin-tag">Redefine Your Look.</span>
          </div>

          <div className="hairsystin-price-action">
            <div className="hairsystin-price-block">
              <small>Price</small>
              <strong>₹11,999 <span>only</span></strong>
            </div>
            <button className="hairsystin-btn-book">Book Now</button>
          </div>
        </div>

        <div className="hairsystin-description-text">
          <small>What Is a Hair System?</small>
          <p>A hair system is a non-surgical, customized hair replacement solution that restores natural hair density with
            real or high-quality synthetic hair. Designed to blend seamlessly with your scalp and existing hair, hair systems
            provide a confident, realistic look without downtime.</p>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="hairsystin-itinerary-header">
        <small>V2's USP</small>
        <h2 className="hairsystin-itinerary-title">Our Hair System Types</h2>
      </div>

      <div className="hairsystin-itinerary-layout">

        {/* LEFT NAV */}
        <ul className="hairsystin-itinerary-nav">
          {itinerary.map((item) => (
            <li
              key={item.id}
              className={`hairsystin-nav-item ${activeId === item.id ? "active" : ""
                }`}
              onClick={() => setActiveId(item.id)}
            >
              <span>
                {item.id}. {item.label}
              </span>
              <span className="hairsystin-nav-arrow">↗</span>
            </li>
          ))}
        </ul>

        {/* IMAGE */}
        <div className="hairsystin-itinerary-featured">
          <img src={activeItem?.image} alt={activeItem?.label} />
        </div>

        {/* DETAILS */}
        <div className="hairsystin-itinerary-details">
          <div className="hairsystin-date-badge">
            {activeItem?.bestFor}
          </div>

          <h3 className="hairsystin-arrival-title">
            {activeItem?.title}
          </h3>

          <ul className="hairsystin-arrival-desc">
            {activeItem?.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p className="hairsystin-link-more">
            {activeItem?.whoItsFor}
          </p>
        </div>
      </div>
    </section>
    <HairSystem />
    </>
  );
}