import Link from 'next/link'

export default function WarehousingManagementPage() {
  const serviceSections = [
    {
      id: 'keep-cash-flow',
      title: 'Maintain Your Revenue Stream',
      description: 'Capital Review manages your aging accounts at a reduced rate. Our proprietary scoring, analytics, and skip tracing capabilities help you maximize recovery and sustain cash flow on accounts where statute of limitations remains valid. We monitor multiple databases continuously for optimal recovery opportunities.',
      image: 'https://images.pexels.com/photos/8111877/pexels-photo-8111877.jpeg?_gl=1*21l4jz*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzM2OTIkbzMkZzAkdDE3NTQ5MzM2OTIkajYwJGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'secure-data-holding',
      title: 'Compliant Data Management',
      description: 'We maintain and track accounts that have extended beyond standard collection windows, with full adherence to data retention laws. Our technology continuously monitors national databases for credit updates, employment shifts, asset changes, and other indicators of increased collectability.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'proprietary-scoring',
      title: 'Advanced Scoring & Analytics',
      description: 'We reassess and prioritize accounts using updated financial data, payment capacity indicators, and risk assessment. Warehoused accounts remain at reduced servicing costs, with active recovery efforts resuming only when genuine collection prospects emerge.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'cost-effective-strategy',
      title: 'Cost-Effective Portfolio Management',
      description: 'Extend recovery timelines without legal exposure, increase lifetime ROI per account, avoid premature account closures, and free internal resources while we monitor and manage. Accounts nearing statute of limitations retain substantial value when handled strategically.',
      image: 'https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Warehousing Management</h1>
          <p>Sustain Revenue From Aging Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Expand Your Recovery Timeline</h2>
              <p>
                Capital Review manages your aging accounts at a reduced rate. Our proprietary scoring, analytics,
                and skip tracing capabilities help you maximize recovery and sustain cash flow on accounts where statute
                of limitations remains valid.
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
              <h2>Prevent Premature Account Closure</h2>
              <p>
                Accounts nearing statute of limitations retain significant value when managed strategically. Let Capital Review
                help you track and recover them with minimal overhead and optimal timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready to unlock your full recovery potential?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}