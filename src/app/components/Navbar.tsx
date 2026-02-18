"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <>
      {/* TOP BAR */}
      <header className="navbar">
        <div className="nav-left-inline">
          <button className="hamburger" onClick={() => setOpen(true)}>
            ☰
          </button>

          <nav className="nav-inline-links">
            <Link href="/Hair-Replacement-in-Chennai">Hair Replacement</Link>
            <Link href="/Hair-Patch-for-Men">Hair Patch</Link>
            <Link href="/Bridal-Studio-Chennai">Bridal Studio</Link>
          </nav>

        </div>

        {/* LOGO */}
        <div className="logo">
          <Link href="/">
            <img src="/logo-dark.png" alt="V2 Hair Studio" />
          </Link>
        </div>

        {/* CTA */}
        <div className="nav-right">
        <nav className="nav-links">
          <Link href="/HairCare&SkinCare">Advanced Care</Link>      
          <Link href="/Gallery">Gallery</Link>
        </nav>

        <div className="nav-cta">
          <a href="tel:+919999999999" className="btn-outline">Call Us</a>
          <Link href="/V2-Book" className="btn-primary">Book Free Consultation</Link>
        </div>
      </div>
      </header>

      {/* MEGA MENU */}
      {open && (
        <div className="nav-modal">
          <button className="close" onClick={() => setOpen(false)}>✕</button>

          <div className="nav-grid">

            {/* LEFT */}
            <div className="nav-left">
              {[
                { id: "home", label: "Home" },
                { id: "story", label: "Our Story" },
                { id: "hairReplacement", label: "Hair Replacement" },
                { id: "hairPatch", label: "Hair Patch for Men" },
                { id: "systemTypes", label: "Hair System Types" },
                { id: "bridal", label: "Bridal Studio" },
                { id: "care", label: "Hair Care & Skin Care" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map(item => (
                <p
                  key={item.id}
                  className={active === item.id ? "active" : ""}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </p>
              ))}
            </div>

            {/* CENTER */}
            <div className="nav-center" key={active}>

              {active === "home" && (
                <>
                  <h3>Home</h3>
                  <ul>
                    <li><Link href="/#results">Results</Link></li>
                    <li><Link href="/#process">Process</Link></li>
                    <li><Link href="/#why-us">Why Choose Us</Link></li>
                    <li><Link href="/#testimonials">Testimonials</Link></li>
                  </ul>
                </>
              )}

              {active === "story" && (
                <>
                  <h3>Our Story</h3>
                  <ul>
                    <li><Link href="/OurStory">Our Story</Link></li>
                    <li><Link href="/OurStory#difference">What Makes V2 Different</Link></li>
                    <li><Link href="/OurStory#quality">Our Service Quality</Link></li>
                  </ul>
                </>
              )}

              {active === "hairReplacement" && (
                <>
                  <h3>Hair Replacement in Chennai</h3>
                  <ul>
                    <li><Link href="/Hair-Replacement-in-Chennai#process">Our Process</Link></li>
                    <li><Link href="/Hair-Replacement-in-Chennai#results">Results</Link></li>
                    <li><Link href="/Hair-Replacement-in-Chennai#why-us">Why Us</Link></li>
                    <li><Link href="/Hair-Replacement-in-Chennai#cost">Cost</Link></li>
                    <li><Link href="/Hair-Replacement-in-Chennai#faq">FAQ</Link></li>
                  </ul>
                </>
              )}

              {active === "hairPatch" && (
                <>
                  <h3>Hair Patch for Men</h3>
                  <ul>
                    <li><Link href="/Hair-Patch-for-Men#features">What Makes Our Hair Patch</Link></li>
                    <li><Link href="/Hair-Patch-for-Men#benefits">Key Benefits</Link></li>
                  </ul>
                </>
              )}

              {active === "systemTypes" && (
                <>
                  <h3>Hair System Types</h3>
                  <ul>
                    <li><Link href="/Hair-System-Types#skin">Skin Hair System</Link></li>
                    <li><Link href="/Hair-System-Types#lace">Full Lace Hair System</Link></li>
                  </ul>
                </>
              )}

              {active === "bridal" && (
                <>
                  <h3>Bridal Studio</h3>
                  <ul>
                    <li><Link href="/Bridal-Studio-Chennai#approach">Our Approach</Link></li>
                    <li><Link href="/Bridal-Studio-Chennai#services">Bridal Services</Link></li>
                    <li><Link href="/Bridal-Studio-Chennai#gallery">Gallery</Link></li>
                  </ul>
                </>
              )}

              {active === "care" && (
                <>
                  <h3>Hair & Skin Care</h3>
                  <ul>
                    <li><Link href="/Hair-Care">Hair Care Services</Link></li>
                    <li><Link href="/Skin-Care">Skin Care Services</Link></li>
                  </ul>
                </>
              )}

              {active === "gallery" && (
                <>
                  <h3>Gallery</h3>
                  <ul>
                    <li><Link href="/Gallery">Explore More</Link></li>
                  </ul>
                </>
              )}

              {active === "contact" && (
                <>
                  <h3>Contact</h3>
                  <ul>
                    <li><Link href="/V2-Book">Book Free Consultation</Link></li>
                    <li><Link href="/Contact#location">Location</Link></li>
                    <li><Link href="/Contact#faq">FAQ</Link></li>
                  </ul>
                </>
              )}

            </div>

            {/* RIGHT */}
            <div className="nav-right">
              <div className="nav-preview">
                <img src={`/images/nav/${active}.jpg`} alt={active} />
                <div className="preview-content">
                  <h4>Experience V2 Hair Studio</h4>
                  <p>Premium non-surgical solutions · Chennai</p>
                  <Link href="/V2-Book" className="btn-primary">Book Consultation</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
