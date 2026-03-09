import Link from 'next/link'

export default function NetworkOfAttorneysPage() {
  const serviceSections = [
    {
      id: 'trusted-representation',
      title: 'Nationwide Legal Representation',
      description: 'Our network comprises licensed, bonded, and highly-rated collection attorneys operating across every jurisdiction we service. You do not need to manage multiple law firms. We oversee each case — from filing through resolution — through our centralized platform, providing complete visibility and efficient coordination from a single contact.',
      image: 'https://images.pexels.com/photos/8730998/pexels-photo-8730998.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'client-directed-strategy',
      title: 'Client-Directed Legal Strategy',
      description: 'No legal action is filed and no settlement is reached without your explicit approval. The attorney represents your interests, and we manage all communication, documentation, and execution. Before recommending litigation, Capital Review conducts a collectability analysis including asset verification, employment confirmation, and compliance assessment.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'comprehensive-services',
      title: 'Complete Legal Capabilities',
      description: 'Our Legal Network Services include lawsuit filing and case tracking, judgment enforcement, settlement negotiation, court cost oversight, payment processing and reconciliation, multi-jurisdictional capabilities, and bonded representation across our service areas. Whether pursuing individual claims or managing portfolio litigation, we deliver the legal infrastructure you need.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8730998/pexels-photo-8730998.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Network of Attorneys</h1>
          <p>Strategic Legal Escalation When Required</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Strategic Legal Escalation When Required</h2>
              <p>
                Although more than 98% of obligations are resolved without litigation, certain situations demand formal legal action.
                Capital Review Management provides comprehensive legal support through a carefully vetted network of seasoned collection attorneys.
                When legal proceedings become necessary, you have the infrastructure ready to proceed decisively and in full compliance.
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
              <h2>When Legal Action Is Justified</h2>
              <p>
                Whether pursuing individual claims or managing portfolio litigation, Capital Review Management delivers the legal
                infrastructure necessary for confident execution — without compromising brand reputation or compliance commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready for strategic legal escalation when needed?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}