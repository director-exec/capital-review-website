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

        {/* Compact Footer Content — logo left, everything else center/right */}
        <div className="footer-compact" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left: CR Logo */}
          <div className="footer-cr-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8 V62" stroke="currentColor" strokeWidth="8" strokeLinecap="square" fill="none"/>
              <path d="M8 8 H92 V92 H20" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" fill="none"/>
              <path d="M50 50 L72 92" stroke="currentColor" strokeWidth="8" strokeLinecap="butt"/>
              <path d="M28 20 V78" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
              <path d="M28 20 H54 Q70 20 70 36 Q70 50 54 50 H28" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" fill="none"/>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.05' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Capital Review</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Management</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.38rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>Assess. Review. Advise.</span>
            </div>
          </div>

          {/* Center block: Address, Links, Social stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
            <div className="footer-info">
              <p>
                Capital Review Management &nbsp;|&nbsp; 2200 N Frazier St. STE 120 Box 142, Conroe TX 77301
                &nbsp;|&nbsp; <a href="tel:866-766-2692">866-766-2692</a>
                &nbsp;|&nbsp; <a href="mailto:info@capitalreviewmgt.com">info@capitalreviewmgt.com</a>
              </p>
            </div>

            <div className="footer-links">
              <a href="/consumer-tools/make-a-payment">Make a Payment</a>
              <Link href="/consumer-tools">Consumer Tools</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
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
