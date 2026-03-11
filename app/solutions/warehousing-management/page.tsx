import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'keep-cash-flow': {
    subject: 'Portfolio Recovery Optimization (CRM-3.1)',
    bullets: [
      { text: 'Manage end-of-life accounts at reduced fees with Maxify CRM analytics (CRM-2.1) — maximizing recovery where the statute of limitations has not expired.' },
      { text: 'Proprietary scoring and skip tracing integrated with Maxify CRM workflows identify the best cash flow recovery opportunities in real time.' },
      { text: 'Around-the-clock database monitoring with 30-day pre-reporting verification (CRM-1.4) before any credit bureau action on warehoused accounts.' },
    ],
  },
  'secure-data-holding': {
    subject: 'Secure Data Retention (CRM-4.1)',
    bullets: [
      { text: 'Accounts retained with AES-256 encryption at rest and TLS 1.2+ in transit (CRM-4.1) — full compliance with data retention laws and CRM-1.1 standards.' },
      { text: 'Continuous scanning of national databases with role-based access controls (CRM-4.4) for credit activity, employment updates, and asset shifts.' },
      { text: 'Signs of renewed collectability trigger targeted re-engagement through Maxify CRM omnichannel workflows (CRM-2.1) — maximizing recovery timing.' },
    ],
  },
  'proprietary-scoring': {
    subject: 'Maxify CRM Scoring Engine (CRM-2.1)',
    bullets: [
      { text: 'Accounts re-scored and prioritized through Maxify CRM analytics (CRM-2.1) based on updated financial behavior, payment capacity, and risk indicators.' },
      { text: 'Lower servicing rates with recovery reinitiated only when true potential exists — standing settlement parameters (CRM-3.5) applied when appropriate.' },
      { text: 'Data-driven allocation ensures resources target highest-probability accounts with PCI DSS tokenization (CRM-3.8) for any payment processing.' },
    ],
  },
  'cost-effective-strategy': {
    subject: 'Lifetime Portfolio ROI (CRM-3.1)',
    bullets: [
      { text: 'Extend recovery timelines with full FDCPA compliance (CRM-1.1) — increase total lifetime ROI on each account without legal risk.' },
      { text: 'Avoid premature closures with continuous monitoring through Maxify CRM — all activity documented with full audit trails and 3-year retention (CRM-2.6).' },
      { text: 'Free up internal resources while we manage monitoring, scoring, and re-engagement with state-specific compliance matrices (CRM-9.x) across all jurisdictions.' },
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
