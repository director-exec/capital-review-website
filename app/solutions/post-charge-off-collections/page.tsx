export default function PostChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'advanced-recovery',
      title: 'Advanced Recovery Solutions',
      description: 'When accounts go unpaid and age beyond internal efforts, Capital Review Management delivers the experience, systems, and compliance infrastructure needed to convert them into revenue — while protecting your brand reputation every step of the way. Our post charge-off collections are powered by advanced analytics, multichannel communication, and fully compliant protocols.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'omnichannel-outreach',
      title: 'Omnichannel Contact Tools',
      description: 'Voice, SMS, email, and mail — tailored to consumer behavior and channel preference. Every decision is backed by data: segmentation, scoring, and behavioral tracking guide our workflows to optimize recovery. We train all agents to handle post-charge-off consumers with empathy, clarity, and professionalism.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'compliance-first',
      title: 'Compliance-First Process',
      description: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — our internal legal oversight ensures full regulatory alignment at every stage. Whether you\'re a financial institution, healthcare provider, utility, or commercial business, our approach is designed to reduce friction and increase resolution — fast.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'proven-results',
      title: 'Proven Results',
      description: 'Our post charge-off collection programs consistently deliver superior recovery rates while maintaining the highest standards of compliance and customer service. We understand that every account represents a relationship that can be restored. With decades of results in regulated industries, we\'ve developed a refined, effective approach.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
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
