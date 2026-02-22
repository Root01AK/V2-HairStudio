"use client"
import { useEffect, useState } from "react";
import BridalApproach from "../components/BridalApproach"

const images = [
  "/bridal/14.jpeg",
  "/bridal/19.jpg",
  "/bridal/22.jpg",
  "/bridal/24.jpg",
  "/bridal/3.jpeg",
  "/bridal/26.jpg",
];

export default function BridalHero() {
  const [current, setCurrent] = useState(0);

  const nextIndex = (current + 1) % images.length;

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <>
      <section className="bridal-container">
        {/* Top Left: Small Badge and Intro Text */}
        <div className="bridal-content-left">
          <h1 className="bridal-main-title">
            BRIDAL <br />
            BEAUTY,<br />
            PERFECTED.<br />
            <span className="bridal-author">Timeless Elegance for Your Most Extraordinary Day</span>
          </h1>
        </div>

        {/* Decorative Star Accent */}
        <div className="bridal-star-accent">✦</div>

        {/* MAIN IMAGE */}
        <div className="bridal-featured-frame">
          <div className="bridal-arch-container">
            <img
              src={images[current]}
              alt="Main Bridal"
              className="bridal-main-img"
            />
          </div>

          {/* Circular Label */}
          <div className="bridal-view-label">
            <svg viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text>
                <textPath href="#circlePath">
                  VIEW SLIDESHOW • VIEW SLIDESHOW •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* PREVIEW (NEXT IMAGE) */}
        <div className="bridal-secondary-frame">
          <div className="bridal-arch-container bridal-gray-scale">
            <img
              src={images[nextIndex]}
              alt="Next Bridal"
              className="bridal-preview-img"
            />
          </div>
        </div>

        {/* Bottom Description Strip */}
        <div className="bridal-footer-strip">
          <p>At V2 Bridal Studio, every look is masterfully curated to embody grace, refinement, and timeless sophistication. We blend heritage elegance with contemporary luxury — creating bridal transformations that are unforgettable, photogenic, and flawlessly executed.</p>
          <p>From private bespoke consultations and exclusive preview sessions to precision styling and meticulous detailing, every element is tailored to your individuality.</p>
          <p>Only the finest luxury products, advanced techniques, and expert craftsmanship are used to ensure radiant beauty, impeccable comfort, and unwavering confidence — from your first step down the aisle to your final celebration moment.</p>
        </div>
      </section>
      <BridalApproach />
    </>
  );
}