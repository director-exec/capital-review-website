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
                <svg className="logo-shield" width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left wall: from top-left down, stops partway (gap at bottom-left) */}
                  <path d="M8 8 V62" stroke="currentColor" strokeWidth="8" strokeLinecap="square" fill="none"/>
                  {/* Top + right + bottom: wraps from top-left across, down, and along bottom — stops before left wall */}
                  <path d="M8 8 H92 V92 H20" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" fill="none"/>
                  {/* R leg: from bowl junction down to meet the bottom frame line */}
                  <path d="M50 50 L72 92" stroke="currentColor" strokeWidth="8" strokeLinecap="butt"/>
                  {/* R: vertical stem */}
                  <path d="M28 20 V78" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
                  {/* R: bowl */}
                  <path d="M28 20 H54 Q70 20 70 36 Q70 50 54 50 H28" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" fill="none"/>
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
                <a href="/consumer-tools/make-a-payment" className="payment-button" >
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
                <svg className="logo-shield" width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8 V62" stroke="currentColor" strokeWidth="8" strokeLinecap="square" fill="none"/>
                  <path d="M8 8 H92 V92 H20" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" fill="none"/>
                  <path d="M50 50 L72 92" stroke="currentColor" strokeWidth="8" strokeLinecap="butt"/>
                  <path d="M28 20 V78" stroke="currentColor" strokeWidth="7" strokeLinecap="square"/>
                  <path d="M28 20 H54 Q70 20 70 36 Q70 50 54 50 H28" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" fill="none"/>
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
          <a href="/consumer-tools/make-a-payment" className="mobile-payment-btn"  onClick={closeMobileMenu}>
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