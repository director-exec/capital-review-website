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
                  Elite Portfolio Management<br />
                  2200 N Frazier St.<br />
                  STE 120 Box 142<br />
                  Conroe TX, 77301<br />
                  833-381-4416<br />
                  info@eliteportmgmt.com
                </p>
              </div>
            </div>

            <div className="footer-section follow-us-section">
              <h3>Follow Us</h3>
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

          <div className="footer-section">
            <h3>Site Resources</h3>
            <div className="resources-grid">
              <div className="resources-column">
                <ul>
                  <li><a href="https://portal.eliteportfoliomgmt.com/" target="_blank" rel="noopener noreferrer">Make a Payment</a></li>
                  <li><Link href="/consumer-tools">Consumer Tools</Link></li>
                  <li><a href="https://portal.eliteportfoliomgmt.com/" target="_blank" rel="noopener noreferrer">Client Login</a></li>
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
          <p>&copy; 2024 Elite Portfolio Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 