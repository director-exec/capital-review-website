import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'trusted-representation': {
    subject: 'Multi-Jurisdictional Coverage',
    bullets: [
      { text: 'Licensed, bonded, and highly rated collection attorneys operating across multiple U.S. jurisdictions.' },
      { text: 'Centralized claim management — from filing to settlement — with full visibility from one point of contact.' },
      { text: 'No need to manage multiple firms; we oversee every claim through our unified, streamlined system.' },
    ],
  },
  'client-directed-strategy': {
    subject: 'Client-Controlled Process',
    bullets: [
      { text: 'No lawsuit initiated and no settlement accepted without your explicit approval — the attorney represents you.' },
      { text: 'Pre-litigation collectability review including asset investigation, employment verification, and compliance checklists.' },
      { text: 'Full communication, documentation, and execution management on your behalf throughout the legal process.' },
    ],
  },
  'comprehensive-services': {
    subject: 'Full Legal Infrastructure',
    bullets: [
      { text: 'Lawsuit initiation and monitoring, judgment enforcement, settlement negotiation, and court cost tracking.' },
      { text: 'Payment forwarding, accounting, and multi-jurisdictional coverage with bonded representation in every jurisdiction.' },
      { text: 'Whether pursuing a single claim or managing a large portfolio, we execute with confidence and full compliance.' },
    ],
  },
}

export default function NetworkOfAttorneysPage() {
  const serviceSections = [
    {
      id: 'trusted-representation',
      title: 'Trusted Legal Representation — Anywhere in the U.S.',
      description: 'Our partners include licensed, bonded, and highly rated collection attorneys operating across multiple U.S. jurisdictions. You don\'t have to manage multiple firms. We oversee every claim — from filing to settlement — through our centralized system, so you get full visibility and efficiency from one point of contact.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'client-directed-strategy',
      title: 'Client-Directed Legal Strategy',
      description: 'No lawsuit is initiated and no settlement is accepted without your explicit approval. The attorney represents you, and we manage the communication, documentation, and execution on your behalf. Before recommending litigation, Capital Review conducts a collectability review including asset investigation, employment verification, and compliance checklists.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-services',
      title: 'Comprehensive Legal Services',
      description: 'Our Capital Review Legal Network Services include lawsuit initiation and monitoring, judgment enforcement, settlement negotiation, court cost tracking, payment forwarding and accounting, multi-jurisdictional coverage, and bonded representation wherever we operate. Whether you\'re pursuing a single claim or managing a large portfolio, we have the legal infrastructure to execute with confidence.',
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Nationwide Legal Network</h1>
          <p>Strategic Legal Escalation When It Matters Most</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Strategic Legal Escalation When It Matters Most</h2>
              <p>
                While over 98% of debts are resolved without the need for litigation, certain situations demand a formal legal response.
                The Capital Review Management team offers comprehensive nationwide legal support through a vetted network of experienced collection
                attorneys. So when legal action is required, you have the infrastructure in place to act decisively and compliantly.
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
              <h2>When Legal Action Is Warranted</h2>
              <p>
                Whether you're pursuing a single claim or managing a national portfolio, Capital Review Management has the legal
                infrastructure to execute with confidence — without ever losing sight of your brand reputation or compliance obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready for strategic legal escalation?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
