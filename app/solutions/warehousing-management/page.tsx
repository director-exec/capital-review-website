export default function WarehousingManagementPage() {
  const serviceSections = [
    {
      id: 'keep-cash-flow',
      title: 'Keep Your Cash Flow Coming',
      description: 'Capital Review will manage your \'end of life\' accounts at a reduced fee. Our proprietary scoring, analytics, and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute of limitations has not expired. We monitor multiple databases around the clock for favorable recovery opportunities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'secure-data-holding',
      title: 'Secure Data Holding',
      description: 'We retain and monitor accounts that are past standard collection efforts, while ensuring full compliance with data retention laws. Our system scans multiple national databases continuously to detect credit activity, employment updates, asset shifts, or other signs of renewed collectability.',
      image: 'https://images.unsplash.com/photo-1554224311-beee415c15c?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'proprietary-scoring',
      title: 'Proprietary Scoring & Analytics',
      description: 'We re-score and prioritize accounts based on updated financial behavior, payment capacity, and risk indicators. Warehoused accounts are held at lower servicing rates, with full recovery efforts only reinitiated when there\'s true potential to collect.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'cost-effective-strategy',
      title: 'Cost-Effective Strategy',
      description: 'Extend recovery timelines without legal risk, increase total lifetime ROI on each account, avoid premature closures or write-offs, and free up internal resources while we monitor and manage. Accounts nearing the statute of limitations still have value — if you manage them correctly.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Warehousing Management</h1>
          <p>Keep Your Cash Flow Coming</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Increase Your Revenue Stream</h2>
              <p>
                Capital Review will manage your 'end of life' accounts at a reduced fee. Our proprietary scoring, analytics,
                and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute
                of limitations has not expired.
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
              <h2>Don't Write Off Accounts Too Soon</h2>
              <p>
                Accounts nearing the statute of limitations still have value — if you manage them correctly. Let Capital Review
                help you track and recover them with minimal cost and maximum timing precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to maximize your recovery potential?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
