import Link from 'next/link';

export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'advanced-location-services',
      title: 'Advanced Location Services',
      description: 'Our skip tracing services utilize cutting-edge technology and comprehensive databases to locate hard-to-find consumers. We employ sophisticated algorithms, public records searches, and proprietary databases to track down individuals who have moved, changed contact information, or are otherwise difficult to reach.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-database-access',
      title: 'Comprehensive Database Access',
      description: 'We have access to extensive databases including credit bureaus, public records, utility records, and proprietary skip tracing databases. Our team combines multiple data sources to create the most accurate and up-to-date contact information for each individual.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'fcra-compliant-processes',
      title: 'FCRA-Compliant Processes',
      description: 'All our skip tracing activities are conducted in full compliance with the Fair Credit Reporting Act (FCRA) and other applicable regulations. We maintain strict protocols to ensure consumer privacy and data protection while maximizing our ability to locate individuals.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-expertise',
      title: 'Specialized Expertise',
      description: 'Our skip tracing team includes experienced professionals who understand the unique challenges of locating individuals in various circumstances. Whether dealing with name changes, address updates, or complex family situations, we have the expertise to navigate these challenges effectively.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'proven-success-rates',
      title: 'Proven Success Rates',
      description: 'Our skip tracing services consistently achieve high success rates in locating individuals across various demographics and circumstances. We track our performance metrics and continuously refine our processes to maintain and improve our success rates.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Skip Tracing Services</h1>
          <p>Advanced Location Services for Hard-to-Find Consumers</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Locate the Unlocatable</h2>
              <p>
                When traditional contact methods fail, our advanced skip tracing services can help you locate
                hard-to-find consumers. We utilize cutting-edge technology, comprehensive databases, and
                experienced professionals to track down individuals who have moved, changed contact information,
                or are otherwise difficult to reach.
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
              <h2>When Traditional Methods Fail</h2>
              <p>
                Skip tracing is often the key to successful collections when standard contact methods have been exhausted.
                Our advanced location services can help you reconnect with consumers and potentially recover accounts
                that would otherwise be lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to locate hard-to-find consumers?</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
