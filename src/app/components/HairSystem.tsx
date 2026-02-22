"use client";

import CtaSection from "./CtaSection";



const systems = [
  {
    name: "Lace",
    natural: "⭐⭐⭐⭐",
    durability: "⭐⭐⭐",
    breathability: "⭐⭐⭐⭐",
    best: "Styling Freedom",
  },
  {
    name: "Poly",
    natural: "⭐⭐⭐",
    durability: "⭐⭐⭐⭐",
    breathability: "⭐⭐⭐",
    best: "Active Lifestyle",
  },
  {
    name: "Mono",
    natural: "⭐⭐⭐⭐",
    durability: "⭐⭐⭐",
    breathability: "⭐⭐⭐⭐",
    best: "Sensitive Scalp",
  },
  {
    name: "Swiss",
    natural: "⭐⭐⭐⭐⭐",
    durability: "⭐⭐⭐",
    breathability: "⭐⭐⭐⭐",
    best: "Premium Invisible Finish",
    featured: true,
  },
];

export default function SystemComparison() {
  return (
    <>
    <section className="comparison-section">
      <div className="comparison-header">
        <h2>Find The Perfect Hair System For You</h2>
      </div>

      <div className="comparison-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>System Type</th>
              {systems.map((system) => (
                <th
                  key={system.name}
                  className={system.featured ? "featured-column" : ""}
                >
                  {system.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Natural Look</td>
              {systems.map((system) => (
                <td
                  key={system.name + "natural"}
                  className={system.featured ? "featured-column" : ""}
                >
                  {system.natural}
                </td>
              ))}
            </tr>

            <tr>
              <td>Durability</td>
              {systems.map((system) => (
                <td
                  key={system.name + "durability"}
                  className={system.featured ? "featured-column" : ""}
                >
                  {system.durability}
                </td>
              ))}
            </tr>

            <tr>
              <td>Breathability</td>
              {systems.map((system) => (
                <td
                  key={system.name + "breath"}
                  className={system.featured ? "featured-column" : ""}
                >
                  {system.breathability}
                </td>
              ))}
            </tr>

            <tr>
              <td>Best For</td>
              {systems.map((system) => (
                <td
                  key={system.name + "best"}
                  className={system.featured ? "featured-column" : ""}
                >
                  {system.best}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <CtaSection />
    </>
  );
}