import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'advanced-recovery': {
    subject: 'Strategic Recovery Systems',
    bullets: [
      { text: 'Advanced analytics and multichannel communication power every recovery effort — converting aged accounts into revenue.' },
      { text: 'Fully compliant protocols protect your brand reputation at every step, from first contact to final resolution.' },
      { text: 'Experienced team with decades of results in regulated industries including financial services, healthcare, and utilities.' },
    ],
  },
  'omnichannel-outreach': {
    subject: 'Omnichannel Contact Strategy',
    bullets: [
      { text: 'Voice, SMS, email, and mail — each channel tailored to consumer behavior and preference for maximum engagement.' },
      { text: 'Data-driven workflows: segmentation, scoring, and behavioral tracking guide every outreach decision.' },
      { text: 'All agents trained to handle post-charge-off consumers with empathy, clarity, and professionalism.' },
    ],
  },
  'compliance-first': {
    subject: 'Regulatory Compliance',
    bullets: [
      { text: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — internal legal oversight ensures full regulatory alignment at every stage.' },
      { text: 'Industry-specific compliance frameworks for financial institutions, healthcare providers, utilities, and commercial businesses.' },
      { text: 'Approach designed to reduce friction and increase resolution speed while maintaining complete regulatory adherence.' },
    ],
  },
  'proven-results': {
    subject: 'Measurable Performance',
    bullets: [
      { text: 'Consistently delivers superior recovery rates while maintaining the highest standards of compliance and customer service.' },
      { text: 'Every account represents a relationship that can be restored — our refined approach reflects decades of industry experience.' },
      { text: 'Real-time reporting and performance tracking give you full visibility into recovery progress and outcomes.' },
    ],
  },
}

export default function PostChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'advanced-recovery',
      title: 'Advanced Recovery Solutions',
      description: 'When accounts go unpaid and age beyond internal efforts, Capital Review Management delivers the experience, systems, and compliance infrastructure needed to convert them into revenue — while protecting your brand reputation every step of the way. Our post charge-off collections are powered by advanced analytics, multichannel communication, and fully compliant protocols.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'omnichannel-outreach',
      title: 'Omnichannel Contact Tools',
      description: 'Voice, SMS, email, and mail — tailored to consumer behavior and channel preference. Every decision is backed by data: segmentation, scoring, and behavioral tracking guide our workflows to optimize recovery. We train all agents to handle post-charge-off consumers with empathy, clarity, and professionalism.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'compliance-first',
      title: 'Compliance-First Process',
      description: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — our internal legal oversight ensures full regulatory alignment at every stage. Whether you\'re a financial institution, healthcare provider, utility, or commercial business, our approach is designed to reduce friction and increase resolution — fast.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'proven-results',
      title: 'Proven Results',
      description: 'Our post charge-off collection programs consistently deliver superior recovery rates while maintaining the highest standards of compliance and customer service. We understand that every account represents a relationship that can be restored. With decades of results in regulated industries, we\'ve developed a refined, effective approach.',
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Post Charge-Off Collections</h1>
          <p>A Proven Model for Maximizing Recovery</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Advanced Recovery Solutions for Charged-Off Accounts</h2>
              <p>
                When accounts go unpaid and age beyond internal efforts, Capital Review Management delivers the experience,
                systems, and compliance infrastructure needed to convert them into revenue — while protecting your brand
                reputation every step of the way.
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
              <h2>High-Impact Recovery for Delinquent Accounts</h2>
              <p>
                Our post charge-off collection programs consistently deliver superior recovery rates while maintaining
                the highest standards of compliance and customer service. We understand that every account represents
                a relationship that can be restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to maximize your recovery rates?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
