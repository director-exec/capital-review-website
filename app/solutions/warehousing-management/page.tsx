import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'keep-cash-flow': {
    subject: 'End-of-Life Account Recovery',
    bullets: [
      { text: 'Manage your end-of-life accounts at a reduced fee — maximizing recovery on accounts where the statute of limitations has not expired.' },
      { text: 'Proprietary scoring, analytics, and skip tracing processes identify the best opportunities for cash flow recovery.' },
      { text: 'Around-the-clock monitoring of multiple databases detects favorable recovery opportunities in real time.' },
    ],
  },
  'secure-data-holding': {
    subject: 'Compliant Data Retention',
    bullets: [
      { text: 'Accounts retained and monitored past standard collection efforts with full compliance with data retention laws.' },
      { text: 'Continuous scanning of national databases for credit activity, employment updates, and asset shifts.' },
      { text: 'Signs of renewed collectability trigger targeted re-engagement — maximizing recovery timing and potential.' },
    ],
  },
  'proprietary-scoring': {
    subject: 'Intelligent Account Scoring',
    bullets: [
      { text: 'Accounts re-scored and prioritized based on updated financial behavior, payment capacity, and risk indicators.' },
      { text: 'Lower servicing rates for warehoused accounts — full recovery efforts reinitiated only when true potential exists.' },
      { text: 'Data-driven approach ensures resources are allocated to accounts with the highest probability of successful recovery.' },
    ],
  },
  'cost-effective-strategy': {
    subject: 'Maximize Lifetime ROI',
    bullets: [
      { text: 'Extend recovery timelines without legal risk and increase total lifetime ROI on each account in your portfolio.' },
      { text: 'Avoid premature closures or write-offs by keeping accounts actively monitored at minimal cost.' },
      { text: 'Free up internal resources while we manage the monitoring, scoring, and re-engagement of warehoused accounts.' },
    ],
  },
}

export default function WarehousingManagementPage() {
  const serviceSections = [
    {
      id: 'keep-cash-flow',
      title: 'Keep Your Cash Flow Coming',
      description: 'Capital Review will manage your \'end of life\' accounts at a reduced fee. Our proprietary scoring, analytics, and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute of limitations has not expired. We monitor multiple databases around the clock for favorable recovery opportunities.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'secure-data-holding',
      title: 'Secure Data Holding',
      description: 'We retain and monitor accounts that are past standard collection efforts, while ensuring full compliance with data retention laws. Our system scans multiple national databases continuously to detect credit activity, employment updates, asset shifts, or other signs of renewed collectability.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'proprietary-scoring',
      title: 'Proprietary Scoring & Analytics',
      description: 'We re-score and prioritize accounts based on updated financial behavior, payment capacity, and risk indicators. Warehoused accounts are held at lower servicing rates, with full recovery efforts only reinitiated when there\'s true potential to collect.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'cost-effective-strategy',
      title: 'Cost-Effective Strategy',
      description: 'Extend recovery timelines without legal risk, increase total lifetime ROI on each account, avoid premature closures or write-offs, and free up internal resources while we monitor and manage. Accounts nearing the statute of limitations still have value — if you manage them correctly.',
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
      {serviceSections.map((section) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'cream' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
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
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

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
