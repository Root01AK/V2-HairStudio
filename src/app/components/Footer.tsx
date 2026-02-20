import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Left */}
          <div className="footer-left">
            <div className="socials">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>

            <address>
             149, Bismi Tower, 2nd Floor,
          Arcot Road,<br/> Valasaravakkam,
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
            <h4>MENU</h4>
            <Link href="/AboutUs">OurStory</Link>
            <Link href="/services">Gallery</Link>
            <Link href="/bridal-studio">Bridal Studio</Link>
            <Link href="/lookbook">Advanced Care</Link>
          </div>

          {/* Shop / Services */}
          <div className="footer-column">
            <h4>SERVICES</h4>
            <Link href="/services/hair-replacement">Hair Replacement</Link>
            <Link href="/services/hair-patch-men">Hair Patch</Link>
            <Link href="/services/haircare">Haircare</Link>
            <Link href="/services/skin-care">Skin Care</Link>
          </div>

          {/* Legal */}
          <div id="info" class="footer-column">
            <h4>INFO</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
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
          v2  Hair Studio
        </div>

      </div>
    </footer>
  );
}
