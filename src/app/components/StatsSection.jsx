"use client";
import CtaSection from "../components/CtaSection"

export default function StatsSection() {
  return (
    <>
    <section className="stats-section">
      <div className="stats-container">

        <div className="stat-item">
          <h3>1000+</h3>
          <p>Clients helped globally</p>
        </div>

        <div className="stat-item">
          <h3>30+</h3>
          <p>Licensed professionals</p>
        </div>

        <div className="stat-item">
          <h3>95%</h3>
          <p>Client satisfaction rate</p>
        </div>

        <div className="stat-item">
          <h3>17+</h3>
          <p>Years of experience</p>
        </div>

      </div>
    </section>
    <CtaSection />
    </>
  );
}
