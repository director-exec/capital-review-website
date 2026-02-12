import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <h1>STRATEGY MEETS RESOLUTION.</h1>
          <p className="description">
            <strong>A Strategic Approach to Account Resolution</strong>
          </p>
          <p className="description-secondary">
            Capital Review Management combines disciplined review processes with professional communication to deliver measurable recovery outcomes. Our approach prioritizes compliance, consumer dignity, and client confidence at every stage.
          </p>
          <p className="description-secondary">
            We leverage modern platforms, secure infrastructure, and thoroughly trained professionals to ensure each interaction upholds the highest standards — while maximizing returns and minimizing reputational exposure for our clients.
          </p>
          <div className="cta-buttons">
            <Link href="/consumer-tools" className="btn btn-hero">For Consumers</Link>
            <Link href="/solutions" className="btn btn-hero">For Businesses</Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-credit-card"></i></div>
              <h3>Make a Payment</h3>
              <p>Resolve your account through our convenient and secure payment options.</p>
              <a href="#" className="btn btn-primary">Make a Payment</a>
              <p style={{ fontSize: '0.75rem', color: '#8892a4', marginTop: '0.5rem' }}>Payment portal coming soon</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-tools"></i></div>
              <h3>Consumer Tools</h3>
              <p>Access self-service resources, submit inquiries, or get support at any point in the process.</p>
              <Link href="/consumer-tools" className="btn btn-primary">View Consumer Tools</Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Business Solutions</h3>
              <p>Strengthen your recovery outcomes while safeguarding your brand. Discover our comprehensive suite of services.</p>
              <Link href="/solutions" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-image"></div>
            <div className="about-content">
              <h2>About Capital Review Management</h2>
              <p>
                We operate with a compliance-first philosophy, treating every consumer interaction with professionalism and every client engagement as a lasting partnership. Our standards, technology, and track record distinguish us in the industry.
              </p>
              <Link href="/about" className="btn btn-primary">
                <i className="fas fa-arrow-right"></i> Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="compliance">
        <div className="container">
          <div className="compliance-content">
            <h2>Compliance & Regulatory Standards</h2>
            <p>
              Capital Review Management upholds all required state licenses and industry certifications. Our dedicated compliance team ensures complete alignment with applicable federal and state regulations.
            </p>
            <div className="compliance-grid">
              <div className="compliance-card">
                <div className="compliance-icon"><i className="fas fa-shield-alt"></i></div>
                <h3>Federal Regulations</h3>
                <div className="cert-badges">
                  <span className="cert-badge">FDCPA</span>
                  <span className="cert-badge">FCRA</span>
                  <span className="cert-badge">GLBA</span>
                  <span className="cert-badge">TCPA</span>
                </div>
              </div>
              <div className="compliance-card">
                <div className="compliance-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Industry Standards</h3>
                <ul className="standards-list">
                  <li>FDCPA and TCPA oversight and documentation protocols</li>
                  <li>State licensing, COAs, and bonding requirements across all 50 states</li>
                  <li>Ongoing compliance audits and professional development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Reach out at 866-766-2692 to learn how Capital Review Management can support your receivables, protect your reputation, and drive results.
            </p>
            <div className="contact-buttons">
              <a href="tel:866-766-2692" className="btn btn-contact">
                <i className="fas fa-phone"></i> 866-766-2692
              </a>
              <a href="mailto:info@capitalreviewmgt.com" className="btn btn-outline">
                <i className="fas fa-envelope"></i> info@capitalreviewmgt.com
              </a>
            </div>
            <div className="contact-address">
              <i className="fas fa-map-marker-alt"></i>
              <span>Capital Review Management, 2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
