import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left-section">
            <div className="footer-top-row">
              <div className="footer-section">
                <h3>Legal Disclosure</h3>
                <p>
                  This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
                </p>
              </div>

              <div className="footer-section">
                <h3>Mailing Address</h3>
                <p>
                  Capital Review Management<br />
                  2200 North Frazier<br />
                  Suite 120 Box 142<br />
                  Conroe, TX 77301<br />
                  866-766-2692<br />
                  info@capitalreviewmgt.com
                </p>
              </div>
            </div>

            <div className="footer-bottom-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px' }}>
              <div className="footer-section follow-us-section">
                <h3>Follow Us</h3>
                <div className="social-links" style={{ marginTop: '0 !important', paddingBottom: '0 !important' }}>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="footer-section">
                <p style={{ fontSize: '0.9rem', color: '#8892a4' }}>NMLS # Pending</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Site Resources</h3>
            <div className="resources-grid">
              <div className="resources-column">
                <ul>
                  <li><a href="#">Make a Payment</a></li>
                  <li><Link href="/consumer-tools">Consumer Tools</Link></li>
                  <li><a href="#">Client Login</a></li>
                  <li><Link href="/solutions">Solutions</Link></li>
                  <li><Link href="/text-message-opt-in">Text Message Opt-in</Link></li>
                </ul>
              </div>
              <div className="resources-column">
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms and Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Capital Review Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
