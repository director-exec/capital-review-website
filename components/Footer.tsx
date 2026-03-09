import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Legal Banner */}
        <div className="footer-legal-banner">
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>

        {/* Info Row */}
        <div className="footer-info-row">
          <div className="footer-company-info">
            <span>Capital Review Management</span>
            <span>2200 North Frazier, Suite 120 Box 142, Conroe, TX 77301</span>
            <a href="tel:866-766-2692">866-766-2692</a>
            <a href="mailto:info@capitalreviewmgt.com">info@capitalreviewmgt.com</a>
          </div>
        </div>

        {/* Links Row */}
        <div className="footer-links-row">
          <div className="footer-quick-links">
            <a href="#">Make a Payment</a>
            <Link href="/consumer-tools">Consumer Tools</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div className="footer-badges">
              <img src="/LOGO/BBBLogo.png" alt="BBB Accredited" />
              <img src="/LOGO/EC_BADGE.png" alt="EverChain Certified" />
            </div>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 Capital Review Management. All rights reserved.</p>
          <span className="footer-license">NMLS # Pending</span>
        </div>
      </div>
    </footer>
  );
}
