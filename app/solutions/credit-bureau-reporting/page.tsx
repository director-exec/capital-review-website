export default function CreditBureauReportingPage() {
  const serviceSections = [
    {
      id: 'bureau-integration',
      title: 'Your Gateway to the Bureaus',
      description: 'Capital Review Management\'s network is fully integrated with the nation\'s three major credit bureaus, Experian, Equifax, and TransUnion. Our secure systems and reporting protocols ensure that authorized accounts are updated accurately, flagged appropriately, and tracked in real time.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'compliance-benefits',
      title: 'Stay Compliant & Save Time',
      description: 'We handle all bureau submissions on your behalf — no extra systems or staffing required. We ensure all reporting is accurate, up to date, and reflects the current account status (including disputes), in accordance with FCRA. No software costs, no integration burdens — we manage the full reporting process.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'recovery-enhancement',
      title: 'Improve Recovery Rates',
      description: 'Credit reporting, when used strategically, can increase repayment motivation without compromising consumer rights. Your team focuses on core business while we handle the credit reporting logistics and compliance protocols. Disputed accounts are flagged appropriately, and all consumer data is transmitted securely and responsibly.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Credit Bureau Reporting</h1>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Enhance Your Collection Strategy</h2>
              <p>
                As part of our full-service recovery solutions, Capital Review Management offers optional credit bureau reporting
                to enhance your collection strategy — at no additional cost. We report only with your authorization, and we handle
                every file with full adherence to the Fair Credit Reporting Act (FCRA) and all applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, index) => (
        <section key={section.id} className={`subpage-section ${section.background === 'cream' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
          <div className="subpage-container">
            <div className="subpage-grid">
              {section.imageLeft ? (
                <>
                  <div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="subpage-image"
                    />
                  </div>
                  <div>
                    <h2>{section.title}</h2>
                    <div className="subpage-text">
                      {section.description}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2>{section.title}</h2>
                    <div className="subpage-text">
                      {section.description}
                    </div>
                  </div>
                  <div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="subpage-image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Summary Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Have questions about how credit reporting fits your strategy?</h2>
              <p>
                Call 866-766-2692 to speak with our compliance and recovery team. We ensure all reporting is accurate,
                up to date, and reflects the current account status (including disputes), in accordance with FCRA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to enhance your collection strategy?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
