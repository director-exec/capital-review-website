import Link from 'next/link'

export default function CreditBureauReportingPage() {
  const serviceSections = [
    {
      id: 'bureau-integration',
      title: 'Integrated Bureau Connectivity',
      description: 'Capital Review Management maintains direct integration with the three major credit bureaus: Experian, Equifax, and TransUnion. Our secure platforms and reporting workflows ensure that authorized accounts are updated accurately, flagged appropriately, and monitored in real-time.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'compliance-benefits',
      title: 'Compliance & Resource Efficiency',
      description: 'We handle all bureau submissions — no additional systems or staff needed. We ensure all reporting is accurate, current, and reflects live account status including disputed items, in full FCRA compliance. Zero software fees, zero integration complexity — we manage the entire reporting process.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'recovery-enhancement',
      title: 'Enhanced Recovery Performance',
      description: 'Strategically deployed credit reporting can increase repayment incentive without compromising consumer protections. Your team focuses on core operations while we handle reporting mechanics and compliance. Disputed accounts are properly flagged, and all information is transmitted securely and responsibly.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'panel',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Credit Bureau Reporting</h1>
          <p>Strengthen Your Collection Strategy</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Strategic Bureau Reporting That Drives Results</h2>
              <p>
                As part of our comprehensive recovery offering, Capital Review Management provides optional credit bureau reporting
                to enhance your collection strategy at no additional cost. We report exclusively with your authorization, processing
                every account in strict compliance with the Fair Credit Reporting Act (FCRA) and all applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, index) => (
        <section key={section.id} className={`content-section ${section.background === 'panel' ? 'info-panel' : ''}`}>
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
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Learn How Bureau Reporting Complements Your Strategy</h2>
              <p>
                Contact us at 866-766-2692 to speak with our compliance and recovery specialists. We ensure all reporting is accurate,
                current, and accurately reflects live account status including disputes, in complete FCRA accordance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready to strengthen your collection approach with bureau reporting?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}