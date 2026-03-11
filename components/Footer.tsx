import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
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
            <a href="/consumer-tools/make-a-payment">Make a Payment</a>
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
                alt="Better Business Bureau A-Rated"
                className="badge-bbb"
              />
              <img
                src="/LOGO/EC_BADGE.png"
                alt="EverChain Certified Network Member"
                className="badge-ec"
              />
              <img
                src="/LOGO/ACA_Member.svg"
                alt="ACA International Certified Member"
                className="badge-aca"
              />
              <img
                src="/LOGO/RMAI_Member.svg"
                alt="RMAI Certified Member"
                className="badge-rmai"
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
