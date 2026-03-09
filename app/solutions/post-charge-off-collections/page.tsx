import Link from 'next/link'

export default function PostChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'advanced-recovery',
      title: 'Advanced Recovery Solutions',
      description: 'When accounts remain unresolved and surpass internal capabilities, Capital Review Management delivers the expertise, systems, and compliance framework necessary to recover revenue — while protecting your brand throughout the process. Our post charge-off collection efforts leverage predictive analytics, multi-channel outreach, and fully compliant procedures.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'omnichannel-outreach',
      title: 'Omnichannel Engagement',
      description: 'Voice, SMS, email, and mail — calibrated to consumer behavior and communication preferences. Every action is data-driven: segmentation, scoring, and behavioral tracking guide our processes to maximize recovery. We train all staff to engage post-charge-off consumers with empathy, clarity, and professionalism.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'compliance-first',
      title: 'Compliance-First Approach',
      description: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — our in-house legal team ensures complete regulatory adherence at every stage. Whether you are a financial institution, healthcare provider, utility company, or commercial business, our methodology is designed to reduce friction and accelerate resolution.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'proven-results',
      title: 'Proven Track Record',
      description: 'Our post charge-off collection programs consistently deliver superior recovery rates while maintaining the highest standards of regulatory compliance and consumer service. We understand that each account represents a relationship with recovery potential. With extensive success in regulated industries, we have perfected an efficient methodology.',
      image: '/Pages/Calculator_Writing_Stats_Graph.jpeg',
      background: 'panel',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Post Charge-Off Collections</h1>
          <p>Proven Recovery Strategies for Written-Off Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Advanced Recovery for Charged-Off Accounts</h2>
              <p>
                When accounts remain unresolved and surpass internal capabilities, Capital Review Management delivers the expertise,
                systems, and compliance framework necessary to recover revenue — while protecting your brand reputation throughout the process.
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
              <h2>High-Impact Recovery for Delinquent Accounts</h2>
              <p>
                Our post charge-off collection programs consistently deliver superior recovery rates while maintaining
                the highest standards of regulatory compliance and consumer service. We understand that every account represents
                a relationship with recovery potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready to maximize your recovery performance?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}