import Link from "next/link";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Left */}
          <div className="footer-left">
            <div className="socials">
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>

            <address>
              149, Bismi Tower, 2nd Floor,
              Arcot Road,<br /> Valasaravakkam,
              Chennai-600087, Tamil Nadu
            </address>

            <a href="mailto:info@v2hairstudio.com">
              v2salonstudio@gmail.com
            </a>

            <a href="tel:+919999999999">
              044-4204 9221 | +91 88076 67077
            </a>
          </div>

          {/* Menu */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link href="/ourstory">OurStory</Link>
            <Link href="/services">Gallery</Link>
            <Link href="/bridal-studio-chennai">Bridal Studio</Link>
             <Link href="/contact">Contact</Link>
          </div>

          {/* Shop / Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <Link href="/hair-replacement-in-chennai">Hair Replacement</Link>
            <Link href="/hair-patch-for-men">Hair Patch</Link>
            <Link href="/hair-system-types">Hair System</Link>
            <Link href="/haircare&skin-care">Advanced Care</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <button className="footer-cta">Get Started</button>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            From hair replacement to bridal makeovers, our expert team
            helps you look confident and refined.
          </p>

          <div className="footer-links">
            <Link href="/terms">TERMS & CONDITIONS</Link>
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
          </div>
        </div>

        {/* Big Branding */}
        <div className="footer-brand">
  <span className="brand-v2">V2</span> Hair Studio
</div>

      </div>
    </footer>
  );
}
