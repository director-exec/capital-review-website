'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the header height and add some buffer
      const headerHeight = 200; // Approximate height of normal header
      setIsScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup body class when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  return (
    <>
      {/* Normal Header - Always visible */}
      <header className="normal-header">
        <div className="container">
          <div className="header-content">
            {/* Logo with CR Mark */}
            <div className="logo">
              <Link href="/" className="logo-link">
                <svg className="logo-shield" width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="94" height="94" fill="none" stroke="currentColor" strokeWidth="6"/>
                  <path fill="currentColor" d="M24 17 L24 83 L35 83 L35 53 C42 53 47 53 50 55 L67 87 L80 87 L61 53 C72 51 81 42 81 31 C81 21 72 17 58 17 Z M35 25 L56 25 C66 25 72 28 72 33 C72 39 66 43 56 43 L35 43 Z"/>
                </svg>
                <div className="logo-text">
                  <span className="logo-wordmark">Capital Review Management</span>
                  <span className="logo-subtitle">Strategic Recovery &middot; Trusted Process &middot; Proven Results</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="header-right hidden mobile:flex">
              {/* Top Right: Contact Info + Payment Button */}
              <div className="header-top-right">
                <div className="contact-info">
                  Need Help? Call us at 866-766-2692
                </div>
                <a href="/consumer-tools/make-a-payment" className="payment-button">
                  Make A Payment
                </a>
              </div>

              {/* Bottom Right: Navigation */}
              <div className="header-bottom-right">
                <nav>
                  <ul className="nav-menu">
                    <li className="nav-item">
                      <Link href="/about">About</Link>
                      <div className="dropdown-menu">
                        <Link href="/about/security">Security</Link>
                        <Link href="/about/compliance">Compliance</Link>
                        <Link href="/about/tcpa-compliance">TCPA Compliance</Link>
                        <Link href="/about/industries-we-serve">Industries We Serve</Link>
                        <Link href="/about/community-involvement">Community Involvement</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/consumer-tools">Consumer Tools</Link>
                      <div className="dropdown-menu">
                        <Link href="/consumer-tools/request-account-validation">Request Account Validation</Link>
                        <Link href="/consumer-tools/bankruptcy-notification">Bankruptcy Notification</Link>
                        <Link href="/consumer-tools/fraud-identity-theft">Fraud & Identity Theft</Link>
                        <Link href="/consumer-tools/remove-my-number">Remove My Number</Link>
                        <Link href="/consumer-tools/submit-compliment-complaint">Submit a Compliment or Complaint</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/solutions">Solutions</Link>
                      <div className="dropdown-menu">
                        <Link href="/solutions/pre-charge-off-collections">Pre Charge-Off Collections</Link>
                        <Link href="/solutions/post-charge-off-collections">Post Charge-Off Collections</Link>
                        <Link href="/solutions/secondary-tertiary-collections">Secondary & Tertiary Collections</Link>
                        <Link href="/solutions/credit-bureau-reporting">Credit Bureau Reporting</Link>
                        <Link href="/solutions/network-of-attorneys">Network of Attorneys</Link>
                        <Link href="/solutions/warehousing-management">Warehousing Management</Link>
                      </div>
                    </li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button className="mobile-menu-btn mobile:hidden" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Compact Header - Appears after scroll */}
      <header className={`compact-header ${isScrolled ? 'show' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo with CR Mark */}
            <div className="logo">
              <Link href="/" className="logo-link">
                <svg className="logo-shield" width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="94" height="94" fill="none" stroke="currentColor" strokeWidth="6"/>
                  <path fill="currentColor" d="M24 17 L24 83 L35 83 L35 53 C42 53 47 53 50 55 L67 87 L80 87 L61 53 C72 51 81 42 81 31 C81 21 72 17 58 17 Z M35 25 L56 25 C66 25 72 28 72 33 C72 39 66 43 56 43 L35 43 Z"/>
                </svg>
                <span className="logo-wordmark">Capital Review Management</span>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="header-right hidden mobile:flex">
              {/* Navigation Only */}
              <nav>
                <ul className="nav-menu">
                  <li className="nav-item">
                    <Link href="/about">About</Link>
                    <div className="dropdown-menu">
                      <Link href="/about/security">Security</Link>
                      <Link href="/about/compliance">Compliance</Link>
                      <Link href="/about/tcpa-compliance">TCPA Compliance</Link>
                      <Link href="/about/industries-we-serve">Industries We Serve</Link>
                      <Link href="/about/community-involvement">Community Involvement</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link href="/consumer-tools">Consumer Tools</Link>
                    <div className="dropdown-menu">
                      <Link href="/consumer-tools/request-account-validation">Request Account Validation</Link>
                      <Link href="/consumer-tools/bankruptcy-notification">Bankruptcy Notification</Link>
                      <Link href="/consumer-tools/fraud-identity-theft">Fraud & Identity Theft</Link>
                      <Link href="/consumer-tools/remove-my-number">Remove My Number</Link>
                      <Link href="/consumer-tools/submit-compliment-complaint">Submit a Compliment or Complaint</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link href="/solutions">Solutions</Link>
                    <div className="dropdown-menu">
                      <Link href="/solutions/pre-charge-off-collections">Pre Charge-Off Collections</Link>
                      <Link href="/solutions/post-charge-off-collections">Post Charge-Off Collections</Link>
                      <Link href="/solutions/secondary-tertiary-collections">Secondary & Tertiary Collections</Link>
                      <Link href="/solutions/credit-bureau-reporting">Credit Bureau Reporting</Link>
                      <Link href="/solutions/network-of-attorneys">Network of Attorneys</Link>
                      <Link href="/solutions/warehousing-management">Warehousing Management</Link>
                    </div>
                  </li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button className="mobile-menu-btn mobile:hidden" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} id="mobileMenu">
        {/* Mobile Contact Info */}
        <div className="mobile-menu-section mobile-contact-info">
          <a href="tel:866-766-2692" className="mobile-call-btn">
            Call Us
          </a>
          <a href="/consumer-tools/make-a-payment" className="mobile-payment-btn" onClick={closeMobileMenu}>
            Make A Payment
          </a>
        </div>

        <div className="mobile-menu-section">
          <Link href="/about" onClick={closeMobileMenu}>
            <h4>About</h4>
          </Link>
          <div className="mobile-menu-links">
            <Link href="/about/security" onClick={closeMobileMenu}>Security</Link>
            <Link href="/about/compliance" onClick={closeMobileMenu}>Compliance</Link>
            <Link href="/about/tcpa-compliance" onClick={closeMobileMenu}>TCPA Compliance</Link>
            <Link href="/about/industries-we-serve" onClick={closeMobileMenu}>Industries We Serve</Link>
            <Link href="/about/community-involvement" onClick={closeMobileMenu}>Community Involvement</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <Link href="/consumer-tools" onClick={closeMobileMenu}>
            <h4>Consumer Tools</h4>
          </Link>
          <div className="mobile-menu-links">
            <Link href="/consumer-tools/request-account-validation" onClick={closeMobileMenu}>Request Account Validation</Link>
            <Link href="/consumer-tools/bankruptcy-notification" onClick={closeMobileMenu}>Bankruptcy Notification</Link>
            <Link href="/consumer-tools/fraud-identity-theft" onClick={closeMobileMenu}>Fraud & Identity Theft</Link>
            <Link href="/consumer-tools/remove-my-number" onClick={closeMobileMenu}>Remove My Number</Link>
            <Link href="/consumer-tools/submit-compliment-complaint" onClick={closeMobileMenu}>Submit a Compliment or Complaint</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <Link href="/solutions" onClick={closeMobileMenu}>
            <h4>Solutions</h4>
          </Link>
          <div className="mobile-menu-links">
            <Link href="/solutions/pre-charge-off-collections" onClick={closeMobileMenu}>Pre Charge-Off Collections</Link>
            <Link href="/solutions/post-charge-off-collections" onClick={closeMobileMenu}>Post Charge-Off Collections</Link>
            <Link href="/solutions/secondary-tertiary-collections" onClick={closeMobileMenu}>Secondary & Tertiary Collections</Link>
            <Link href="/solutions/credit-bureau-reporting" onClick={closeMobileMenu}>Credit Bureau Reporting</Link>
            <Link href="/solutions/network-of-attorneys" onClick={closeMobileMenu}>Network of Attorneys</Link>
            <Link href="/solutions/warehousing-management" onClick={closeMobileMenu}>Warehousing Management</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <Link href="/contact" onClick={closeMobileMenu}>
            <h4>Contact Us</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
