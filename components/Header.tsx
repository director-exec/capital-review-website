'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Normal Header - Always visible */}
      <header className="normal-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image 
                  src="/LOGO/logo1.png"
                  alt="Diversified Adjustment Service, Inc." 
                  width={600} 
                  height={150}
                  priority
                />
              </Link>
            </div>
            
            {/* Right Side Container */}
            <div className="header-right">
              {/* Top Right: Contact Info + Payment Button */}
              <div className="header-top-right">
                <div className="contact-info">
                  Need Help? Call us at 1.800.279.3733
                </div>
                <Link href="/consumer-tools/make-a-payment" className="payment-button">
                  <i className="fas fa-dollar-sign"></i>
                  Make A Payment
                </Link>
              </div>
              
              {/* Bottom Right: Navigation */}
              <div className="header-bottom-right">
                <nav className="hidden lg:flex">
                  <ul className="nav-menu">
                    <li className="nav-item">
                      <Link href="/about">About</Link>
                      <div className="dropdown-menu">
                        <Link href="/about/security">Security</Link>
                        <Link href="/about/compliance">Compliance</Link>
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
                        <Link href="/solutions/pre-charge-off-collections">Pre-Charge Off Collections</Link>
                        <Link href="/solutions/post-charge-off-collections">Post Charge-Off Collections</Link>
                        <Link href="/solutions/secondary-tertiary-collections">Secondary & Tertiary Collections</Link>
                        <Link href="/solutions/credit-bureau-reporting">Credit Bureau Reporting</Link>
                        <Link href="/solutions/skip-tracing">Skip Tracing</Link>
                        <Link href="/solutions/network-of-attorneys">Network of Attorneys</Link>
                        <Link href="/solutions/warehousing-management">Warehousing Management</Link>
                      </div>
                    </li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn lg:hidden" onClick={toggleMobileMenu}>
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Compact Header - Appears after scroll */}
      <header className={`compact-header ${isScrolled ? 'show' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image 
                  src="/LOGO/Borderless.png"
                  alt="Diversified Adjustment Service, Inc." 
                  width={350} 
                  height={75}
                  priority
                />
              </Link>
            </div>
            
            {/* Right Side Container */}
            <div className="header-right">
              {/* Navigation Only */}
              <nav className="hidden lg:flex">
                <ul className="nav-menu">
                  <li className="nav-item">
                    <Link href="/about">About</Link>
                    <div className="dropdown-menu">
                      <Link href="/about/security">Security</Link>
                      <Link href="/about/compliance">Compliance</Link>
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
                      <Link href="/solutions/pre-charge-off-collections">Pre-Charge Off Collections</Link>
                      <Link href="/solutions/post-charge-off-collections">Post Charge-Off Collections</Link>
                      <Link href="/solutions/secondary-tertiary-collections">Secondary & Tertiary Collections</Link>
                      <Link href="/solutions/credit-bureau-reporting">Credit Bureau Reporting</Link>
                      <Link href="/solutions/skip-tracing">Skip Tracing</Link>
                      <Link href="/solutions/network-of-attorneys">Network of Attorneys</Link>
                      <Link href="/solutions/warehousing-management">Warehousing Management</Link>
                    </div>
                  </li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button className="mobile-menu-btn lg:hidden" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} id="mobileMenu">
        <div className="mobile-menu-section">
          <h4>About</h4>
          <div className="mobile-menu-links">
            <Link href="/about/security" onClick={closeMobileMenu}>Security</Link>
            <Link href="/about/compliance" onClick={closeMobileMenu}>Compliance</Link>
            <Link href="/about/industries-we-serve" onClick={closeMobileMenu}>Industries We Serve</Link>
            <Link href="/about/community-involvement" onClick={closeMobileMenu}>Community Involvement</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Consumer Tools</h4>
          <div className="mobile-menu-links">
            <Link href="/consumer-tools/request-account-validation" onClick={closeMobileMenu}>Request Account Validation</Link>
            <Link href="/consumer-tools/bankruptcy-notification" onClick={closeMobileMenu}>Bankruptcy Notification</Link>
            <Link href="/consumer-tools/fraud-identity-theft" onClick={closeMobileMenu}>Fraud & Identity Theft</Link>
            <Link href="/consumer-tools/remove-my-number" onClick={closeMobileMenu}>Remove My Number</Link>
            <Link href="/consumer-tools/submit-compliment-complaint" onClick={closeMobileMenu}>Submit a Compliment or Complaint</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Solutions</h4>
          <div className="mobile-menu-links">
            <Link href="/solutions/pre-charge-off-collections" onClick={closeMobileMenu}>Pre-Charge Off Collections</Link>
            <Link href="/solutions/post-charge-off-collections" onClick={closeMobileMenu}>Post Charge-Off Collections</Link>
            <Link href="/solutions/secondary-tertiary-collections" onClick={closeMobileMenu}>Secondary & Tertiary Collections</Link>
            <Link href="/solutions/credit-bureau-reporting" onClick={closeMobileMenu}>Credit Bureau Reporting</Link>
            <Link href="/solutions/skip-tracing" onClick={closeMobileMenu}>Skip Tracing</Link>
            <Link href="/solutions/network-of-attorneys" onClick={closeMobileMenu}>Network of Attorneys</Link>
            <Link href="/solutions/warehousing-management" onClick={closeMobileMenu}>Warehousing Management</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Contact</h4>
          <div className="mobile-menu-links">
            <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
} 