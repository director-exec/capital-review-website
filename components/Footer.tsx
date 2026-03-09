import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Full Logo Mark */}
        <div className="footer-logo-block">
          <svg className="footer-cr-logo" width="180" height="60" viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CR Mark — square with open bottom-left corner + R */}
            <path d="M6 6 H94 V94 H44" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" fill="none"/>
            <path d="M6 6 V56" stroke="currentColor" strokeWidth="8" strokeLinecap="square" fill="none"/>
            <path d="M32 24 V74" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
            <path d="M32 24 H54 Q68 24 68 37 Q68 48 54 48 H32" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" fill="none"/>
            <path d="M50 48 L68 74" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
            {/* CAPITAL */}
            <text x="115" y="34" fontFamily="var(--font-heading), Cormorant Garamond, serif" fontSize="26" fontWeight="600" letterSpacing="4" fill="currentColor">CAPITAL</text>
            {/* REVIEW */}
            <text x="115" y="62" fontFamily="var(--font-heading), Cormorant Garamond, serif" fontSize="26" fontWeight="600" letterSpacing="4" fill="currentColor">REVIEW</text>
            {/* MANAGEMENT */}
            <text x="115" y="90" fontFamily="var(--font-body), Source Sans 3, sans-serif" fontSize="18" fontWeight="400" letterSpacing="5" fill="currentColor">MANAGEMENT</text>
            {/* ASSESS. REVIEW. ADVISE. */}
            <text x="115" y="112" fontFamily="var(--font-body), Source Sans 3, sans-serif" fontSize="11" fontWeight="300" letterSpacing="3.5" fill="currentColor" opacity="0.6">ASSESS.  REVIEW.  ADVISE.</text>
          </svg>
        </div>

        {/* Legal Disclosure — single line, small */}
        <div className="footer-legal-banner">
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>

        {/* Compact Footer Content — single row layout */}
        <div className="footer-compact">
          {/* Left: Address + Contact */}
          <div className="footer-info">
            <p>
              Capital Review Management &nbsp;|&nbsp; 2200 N Frazier St. STE 120 Box 142, Conroe TX 77301
              &nbsp;|&nbsp; <a href="tel:866-766-2692">866-766-2692</a>
              &nbsp;|&nbsp; <a href="mailto:info@capitalreviewmgt.com">info@capitalreviewmgt.com</a>
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-links">
            <a href="/consumer-tools/make-a-payment" >Make a Payment</a>
            <Link href="/consumer-tools">Consumer Tools</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          {/* Right: Badges + Social — prominent */}
          <div className="footer-badges-social">
            <div className="footer-badges">
              <img
                src="/LOGO/BBBLogo.png"
                alt="Better Business Bureau"
                className="badge-bbb"
              />
              <img
                src="/LOGO/EC_BADGE.png"
                alt="EverChain Certified Network Member"
                className="badge-ec"
              />
            </div>
            <div className="social-links">
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar — licenses + copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>NMLS # Pending</span>
            <span></span>
          </div>
          <p>&copy; 2026 Capital Review Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
