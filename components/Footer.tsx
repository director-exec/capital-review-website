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

        {/* Full CR Logo — bottom-left, small and subtle */}
        <div className="footer-logo-block">
          <div className="footer-cr-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 55 V8 H92 V92 H8" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" fill="none"/>
              <path d="M50 50 L70 92" stroke="currentColor" strokeWidth="8" strokeLinecap="butt"/>
              <path d="M28 20 V80" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
              <path d="M28 20 H54 Q70 20 70 36 Q70 50 54 50 H28" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" fill="none"/>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Capital</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Review</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Management</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.42rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>Assess. Review. Advise.</span>
            </div>
          </div>
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

          {/* Social Links */}
          <div className="footer-badges-social">
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
