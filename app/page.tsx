import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Precision Meets Resolution</h1>
          <p className="description">
            <strong>A Digital Approach to Strategic Outcomes</strong>
          </p>
          <p className="description-secondary">
            With over four decades of successful collections experience, Elite Portfolio Management delivers best-in-class recovery solutions with a focus on compliance, professionalism, and empathy.
          </p>
          <p className="description-secondary">
            We combine advanced technology, secure infrastructure, and highly trained personnel to ensure every consumer interaction reflects the highest standards of the industry — and every client experiences maximum ROI with minimum reputational risk.
          </p>
          <div className="cta-buttons">
            <Link href="/consumer-tools" className="btn btn-hero">
              For Consumers
            </Link>
            <Link href="/solutions" className="btn btn-hero">
              For Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Make a Payment</h3>
              <p>Use one of our secure, convenient payment options to resolve your account.</p>
              <Link href="https://portal.eliteportfoliomgmt.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Make a Payment
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Consumer Tools</h3>
              <p>Access helpful resources, submit requests, or get assistance every step of the way.</p>
              <Link href="/consumer-tools" className="btn btn-primary">
                View Consumer Tools
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Business Solutions</h3>
              <p>Recover more while protecting your brand. Explore our full suite of recovery services.</p>
              <Link href="/solutions" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-image"></div>
            <div className="about-content">
              <h2>About Elite Portfolio</h2>
              <p>
                We maintain a compliance-first culture, treating every consumer with respect and every client relationship as a long-term partnership. Our ethics, technology, and performance set us apart.
              </p>
              <Link href="/about" className="btn btn-primary">
                <i className="fas fa-arrow-right"></i>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="compliance">
        <div className="container">
          <div className="compliance-content">
            <h2>Compliance & Certifications</h2>
            <p>
              Elite Portfolio Management maintains all required state licenses and industry certifications. Our internal compliance team ensures full alignment with federal and state regulations.
            </p>

            <div className="compliance-grid">
              <div className="compliance-card">
                <div className="compliance-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Federal Regulations</h3>
                <div className="cert-badges">
                  <span className="cert-badge">FDCPA</span>
                  <span className="cert-badge">FCRA</span>
                  <span className="cert-badge">GLBA</span>
                  <span className="cert-badge">TCPA</span>
                </div>
              </div>

              <div className="compliance-card">
                <div className="compliance-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Industry Standards</h3>
                <ul className="standards-list">
                  <li>FDCPA and TCPA oversight and documentation standards</li>
                  <li>State licensing, COAs, and bond requirements across all 50 states</li>
                  <li>Regular compliance audits and training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Call us at 833-381-4416 to learn how Elite Portfolio can support your receivables, protect your reputation, and deliver results.
            </p>

            <div className="contact-buttons">
              <a href="tel:833-381-4416" className="btn btn-contact">
                <i className="fas fa-phone"></i>
                833-381-4416
              </a>
              <a href="mailto:info@eliteportmgmt.com" className="btn btn-outline">
                <i className="fas fa-envelope"></i>
                info@eliteportmgmt.com
              </a>
            </div>

            <div className="contact-address">
              <i className="fas fa-map-marker-alt"></i>
              <span>Elite Portfolio Management, 2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 
