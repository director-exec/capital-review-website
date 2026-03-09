export default function PreChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'early-intervention',
      title: 'Early Intervention Strategy',
      description: 'Our pre-collection approach focuses on proactive, respectful outreach for accounts that are slightly past due — long before charge-off or full collection becomes necessary. These accounts don\'t need pressure. They need a nudge — and that\'s exactly what we provide through strategic early-stage contact, powered by sophisticated analytics and handled with a brand-protective approach.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'customized-outreach',
      title: 'Customized Outreach Plans',
      description: 'Tailored to your business model, risk tolerance, and account timelines. Our contact methods prioritize your company\'s image, focusing on clarity, professionalism, and empathy. Every message and method is FDCPA-compliant and aligned with industry-specific requirements.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'analytics-driven',
      title: 'Analytics-Driven Strategy',
      description: 'We use early-stage scoring models and behavioral data to prioritize accounts and determine best contact methods. Our systems integrate directly with your KPIs, enabling custom performance tracking and real-time insight. Whether managing high-volume portfolios or niche accounts, we operate with full FDCPA/FCRA compliance and strict consumer data safeguards.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'business-benefits',
      title: 'Business Benefits',
      description: 'Prevent escalation to full collections, preserve customer relationships, improve recovery rates on early-stage delinquencies, maintain a professional and compliant outreach tone, and lower long-term collection costs by up to 80%. Our pre-collection programs are designed to restore account standing quickly — before costly charge-offs, disputes, or legal action take hold.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
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
