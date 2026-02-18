import React from 'react';


export default function TravelItinerary() {
  const itinerary = [
    { id: 1, label: "Arrival in Bali" },
    { id: 2, label: "Explore Ubud" },
    { id: 3, label: "Ubud to Nusa Penida" },
    { id: 4, label: "Nusa Penida Exploration" },
    { id: 5, label: "Nusa Penida to Tanah Lot" },
    { id: 6, label: "Tanah Lot to Seminyak" },
  ];

  return (
    <section className="hairsystin-main-container">
      {/* Top Image Grid */}
      <div className="hairsystin-gallery-grid">
        <div className="hairsystin-main-visual">
          <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200" alt="Main View" />
        </div>
        <div className="hairsystin-side-visuals">
          <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600" alt="Beach View" />
          <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600" alt="Temple View" />
        </div>
      </div>

      {/* Booking and Description Section */}
      <div className="hairsystin-content-split">
        <div className="hairsystin-info-card">
          <h2 className="hairsystin-tour-title">Bali Bliss: Ubud and Seminyak Adventure</h2>
          <p className="hairsystin-tour-intro">Experience Bali's beauty on this 7-day tour, exploring temples, jungles, and cultural sites.</p>
          
          <div className="hairsystin-tag-row">
            <span className="hairsystin-tag">🏠 Hotel & Destination</span>
            <span className="hairsystin-tag">🕒 7 Days</span>
            <span className="hairsystin-tag">🗺️ 9 Places</span>
          </div>

          <div className="hairsystin-price-action">
            <div className="hairsystin-price-block">
              <small>Price</small>
              <strong>$1,250 <span>per person</span></strong>
            </div>
            <button className="hairsystin-btn-book">Booking Now</button>
          </div>
        </div>

        <div className="hairsystin-description-text">
          <small>[DESCRIPTION]</small>
          <p>Discover the breathtaking beauty of Bali and uncover its hidden gems on this immersive 7-day tour. Begin your journey by exploring iconic temples and lush tropical jungles...</p>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="hairsystin-itinerary-header">
        <small>[TRAVEL PLANS]</small>
        <h2 className="hairsystin-itinerary-title">Your Travel Itinerary</h2>
      </div>

      <div className="hairsystin-itinerary-layout">
        <ul className="hairsystin-itinerary-nav">
          {itinerary.map((item) => (
            <li key={item.id} className="hairsystin-nav-item">
              <span>{item.id}. {item.label}</span>
              <span className="hairsystin-nav-arrow">↗</span>
            </li>
          ))}
        </ul>

        <div className="hairsystin-itinerary-featured">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=800" alt="Arrival" />
        </div>

        <div className="hairsystin-itinerary-details">
          <div className="hairsystin-date-badge">📅 Day 1: Tue, April 16 - Arrival in Bali</div>
          <h3 className="hairsystin-arrival-title">Arrive at Ngurah Rai International Airport.</h3>
          <p className="hairsystin-arrival-desc">After a warm welcome, you'll be transferred to your hotel in Ubud, the cultural heart of Bali.</p>
          <a href="#" className="hairsystin-link-more">Details Information</a>
        </div>
      </div>
    </section>
  );
}