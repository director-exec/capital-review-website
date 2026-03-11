import Link from 'next/link'
import SectionCard from './components/SectionCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1>Strategy Without Compromise</h1>
          <p className="description">
            <strong>Built on Compliance, Driven by Results</strong>
          </p>
          <p className="description-secondary">
            Capital Review Management combines disciplined review processes with professional communication to deliver measurable recovery outcomes. Our approach prioritizes compliance, consumer dignity, and client confidence at every stage.
          </p>
          <p className="description-secondary">
            We leverage modern platforms, secure infrastructure, and thoroughly trained professionals to ensure each interaction upholds the highest standards — while maximizing returns and minimizing reputational exposure for our clients.
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
              <Link href="/consumer-tools/make-a-payment" className="btn btn-primary">
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

      {/* Compliance Section */}
      <section className="compliance">
        <div className="container">
          <div className="compliance-content">
            <h2>Compliance & Certifications</h2>
            <p>
              Capital Review Management upholds all required state licenses and industry certifications. Our dedicated compliance team ensures complete alignment with applicable federal and state regulations.
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
                <div className="cert-badges">
                  <span className="cert-badge">Everchain Certified</span>
                  <span className="cert-badge">Multi-State Licensed</span>
                  <span className="cert-badge">Insured & Bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-card-wrapper">
              <SectionCard
                subject="About Capital Review"
                bullets={[
                  { text: 'Disciplined review processes and professional communication delivering measurable recovery outcomes for creditors nationwide.' },
                  { text: 'Compliance-first philosophy — every consumer interaction reflects the highest standards of professionalism, respect, and regulatory adherence.' },
                  { text: 'Modern technology platform with secure infrastructure, real-time reporting, and data-driven strategies that maximize ROI.' },
                  { text: 'Long-term client partnerships built on transparency, ethical practices, and consistent performance that protects your brand reputation.' },
                ]}
              />
            </div>
            <div className="about-content">
              <h2>About Capital Review</h2>
              <p>
                We operate with a compliance-first philosophy, treating every consumer interaction with professionalism and every client engagement as a lasting partnership. Our standards, technology, and track record distinguish us in the industry.
              </p>
              <Link href="/about" className="btn btn-primary">
                <i className="fas fa-arrow-right"></i>
                Learn More
              </Link>
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
              Reach out at 888-681-0360 to learn how Capital Review Management can support your receivables, protect your reputation, and drive results.
            </p>

            <div className="contact-buttons">
              <a href="tel:888-681-0360" className="btn btn-contact">
                <i className="fas fa-phone"></i>
                888-681-0360
              </a>
              <a href="mailto:info@capitalreviewmanagement.com" className="btn btn-outline">
                <i className="fas fa-envelope"></i>
                info@capitalreviewmanagement.com
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
