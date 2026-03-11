import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'early-intervention': {
    subject: 'Proactive Early Outreach (CRM-2.1)',
    bullets: [
      { text: 'Strategic early-stage contact via Maxify CRM omnichannel workflows (CRM-2.1) — respectful outreach long before charge-off becomes necessary.' },
      { text: 'Real-time analytics and behavioral data power every decision with 7-in-7 call frequency rules (CRM-1.3) ensuring compliant, targeted contact.' },
      { text: 'Brand-protective approach per CRM-2.2 Mini-Miranda standards — clarity, professionalism, and empathy in every consumer interaction.' },
    ],
  },
  'customized-outreach': {
    subject: 'Tailored Contact Plans (CRM-3.5)',
    bullets: [
      { text: 'Outreach plans customized to your business model with standing settlement parameters (CRM-3.5) and client-specific KPIs for optimal results.' },
      { text: 'Every message FDCPA-compliant per CRM-1.1 with TCPA consent validation (CRM-1.5) and 1-hour SMS STOP processing (CRM-2.4).' },
      { text: 'Contact methods preserve consumer relationships while motivating resolution — agents trained per CRM-6.4 with "resolution over collection" mindset.' },
    ],
  },
  'analytics-driven': {
    subject: 'Data-Driven Prioritization (CRM-2.1)',
    bullets: [
      { text: 'Maxify CRM scoring models and behavioral data determine optimal contact methods and prioritize accounts by recovery potential.' },
      { text: 'Systems integrate directly with your KPIs — real-time portfolio dashboards and custom performance tracking per CRM-2.1 analytics.' },
      { text: 'Full FDCPA/FCRA compliance (CRM-1.1) with AES-256 encryption (CRM-4.1) and PCI DSS-certified payment tokenization (CRM-3.8).' },
    ],
  },
  'business-benefits': {
    subject: 'Measurable Business Impact (CRM-3.1)',
    bullets: [
      { text: 'Prevent escalation to full collections with 30-day pre-reporting verification (CRM-1.4) — preserve relationships and improve early-stage recovery rates.' },
      { text: 'Lower long-term collection costs through timely intervention with standing settlement parameters (CRM-3.5) and strategic payment arrangements.' },
      { text: 'Restore account standing quickly — all calls recorded with 3-year retention (CRM-2.6) and QA-scored to ensure consistent quality.' },
    ],
  },
}

export default function PreChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'early-intervention',
      title: 'Early Intervention Strategy',
      description: 'Our pre-collection approach focuses on proactive, respectful outreach for accounts that are slightly past due — long before charge-off or full collection becomes necessary. These accounts don\'t need pressure. They need a nudge — and that\'s exactly what we provide through strategic early-stage contact, powered by sophisticated analytics and handled with a brand-protective approach.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'customized-outreach',
      title: 'Customized Outreach Plans',
      description: 'Tailored to your business model, risk tolerance, and account timelines. Our contact methods prioritize your company\'s image, focusing on clarity, professionalism, and empathy. Every message and method is FDCPA-compliant and aligned with industry-specific requirements.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'analytics-driven',
      title: 'Analytics-Driven Strategy',
      description: 'We use early-stage scoring models and behavioral data to prioritize accounts and determine best contact methods. Our systems integrate directly with your KPIs, enabling custom performance tracking and real-time insight. Whether managing high-volume portfolios or niche accounts, we operate with full FDCPA/FCRA compliance and strict consumer data safeguards.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'business-benefits',
      title: 'Business Benefits',
      description: 'Prevent escalation to full collections, preserve customer relationships, improve recovery rates on early-stage delinquencies, maintain a professional and compliant outreach tone, and lower long-term collection costs by up to 80%. Our pre-collection programs are designed to restore account standing quickly — before costly charge-offs, disputes, or legal action take hold.',
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
          <h1>Pre-Collection Services</h1>
          <p>Sometimes Early Intervention Is All It Takes</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Resolve More. Sooner. Smarter.</h2>
              <p>
                At Capital Review Management, we understand that the earlier you engage a delinquent account,
                the better the chances of resolution. Our Pre-Collection Services focus on proactive,
                respectful outreach for accounts that are slightly past due — long before charge-off or full
                collection becomes necessary.
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
              <h2>Let's Solve It Before It Escalates</h2>
              <p>
                The earlier you act, the greater your results. Our pre-collection programs are designed to restore
                account standing quickly — before costly charge-offs, disputes, or legal action take hold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to partner with a company that understands early intervention?</h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
