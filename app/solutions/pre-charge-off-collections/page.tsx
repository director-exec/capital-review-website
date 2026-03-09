import Link from 'next/link'

export default function PreChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'early-intervention',
      title: 'Strategic Early Engagement',
      description: 'Our pre-collection approach emphasizes proactive, professional outreach for accounts that are slightly past due — well before write-off or aggressive collection becomes necessary. These accounts need guidance, not pressure. We provide thoughtful early-stage contact powered by advanced analytics and executed with brand awareness.',
      image: 'https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'customized-outreach',
      title: 'Customized Engagement Plans',
      description: 'Tailored to your business model, risk tolerance, and account schedules. Our contact strategies prioritize your organization\'s reputation, focusing on clarity, professionalism, and empathy. Every communication and approach is fully FDCPA-compliant and aligned with industry requirements.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'analytics-driven',
      title: 'Data-Informed Strategy',
      description: 'We use early-stage scoring models and behavioral insights to prioritize accounts and identify optimal contact channels. Our systems integrate with your performance metrics, enabling custom tracking and real-time visibility. Whether managing large portfolios or specialized accounts, we operate with full FDCPA/FCRA compliance and strong consumer data safeguards.',
      image: 'https://images.pexels.com/photos/7433837/pexels-photo-7433837.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'business-benefits',
      title: 'Key Business Advantages',
      description: 'Prevent escalation to full collections, preserve customer relationships, improve recovery rates on early-stage accounts, maintain a professional and compliant outreach approach, and reduce long-term collection costs by up to 80%. Our pre-collection programs are designed to restore account standing quickly — before costly write-offs, disputes, or legal proceedings occur.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Pre-Collection Services</h1>
          <p>Early Action Delivers Better Outcomes</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Recover More. Engage Earlier. Improve Results.</h2>
              <p>
                At Capital Review Management, we recognize that early engagement with a past-due account significantly improves resolution likelihood.
                Our Pre-Collection Services focus on proactive, professional outreach for accounts that are slightly overdue — well before
                write-off or intensive collection action becomes necessary.
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
              <h2>Resolve It Before It Escalates</h2>
              <p>
                Acting early yields the best results. Our pre-collection programs are designed to restore
                account standing quickly — before expensive write-offs, disputes, or legal action takes root.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready to partner with a team specialized in proactive account recovery?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}