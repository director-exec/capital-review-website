import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'specialized-recovery': {
    subject: 'Multi-Attempt Account Recovery',
    bullets: [
      { text: 'Specialized approach for accounts that have been through multiple collection attempts without resolution.' },
      { text: 'Advanced strategies and experienced handling from a team with decades of complex collection expertise.' },
      { text: 'Innovative location and engagement techniques to reconnect with consumers who have resisted prior efforts.' },
    ],
  },
  'specialized-communication': {
    subject: 'Behavioral Communication',
    bullets: [
      { text: 'Customized outreach strategies based on detailed account history and consumer behavior pattern analysis.' },
      { text: 'Access to specialized legal resources for complex regulatory and compliance matters across jurisdictions.' },
      { text: 'Every communication is designed to motivate resolution while maintaining full regulatory compliance.' },
    ],
  },
  'flexible-solutions': {
    subject: 'Creative Resolution Options',
    bullets: [
      { text: 'Payment arrangements tailored to individual consumer circumstances for maximum resolution potential.' },
      { text: 'Advanced location and contact services to reach consumers who have changed addresses or phone numbers.' },
      { text: 'Expert legal and compliance support throughout the entire recovery process for complex cases.' },
    ],
  },
}

export default function SecondaryTertiaryCollectionsPage() {
  const serviceSections = [
    {
      id: 'specialized-recovery',
      title: 'Specialized Recovery for Difficult Accounts',
      description: 'When accounts have been through multiple collection attempts without resolution, they require a specialized approach. Capital Review Management\'s Secondary & Tertiary Collections services are designed specifically for these challenging cases that demand advanced strategies and experienced handling. Our team brings decades of experience in handling complex collection scenarios.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-communication',
      title: 'Specialized Communication Strategies',
      description: 'Customized approaches based on account history and consumer behavior patterns. We provide access to specialized legal resources for complex regulatory and compliance matters, and creative payment arrangements tailored to individual consumer circumstances.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'flexible-solutions',
      title: 'Flexible Payment Solutions',
      description: 'Creative payment arrangements tailored to individual consumer circumstances. Our specialized services provide recovery of previously uncollectible accounts, specialized handling of complex cases, advanced location and contact services, expert legal and compliance support, and customized payment arrangements.',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Secondary & Tertiary Collections</h1>
          <p>Specialized Recovery for Difficult Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Advanced Solutions for Accounts That Require Specialized Handling</h2>
              <p>
                When accounts have been through multiple collection attempts without resolution, they require a
                specialized approach. Capital Review Management's Secondary & Tertiary Collections services are
                designed specifically for these challenging cases that demand advanced strategies and experienced handling.
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
              <h2>When Standard Collections Aren't Enough</h2>
              <p>
                Some accounts require more than standard collection approaches. Our Secondary & Tertiary Collections
                services provide the specialized expertise and advanced strategies needed to recover accounts that
                have resisted traditional collection efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready for specialized collection solutions?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
