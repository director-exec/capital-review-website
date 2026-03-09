import Link from 'next/link'

export default function SecondaryTertiaryCollectionsPage() {
  const serviceSections = [
    {
      id: 'specialized-recovery',
      title: 'Specialized Recovery Expertise',
      description: 'When accounts have cycled through multiple collection attempts without resolution, they require a specialized approach. Capital Review Management\'s Secondary & Tertiary Collections services are designed for these challenging situations demanding advanced methods and seasoned professionals. Our team has extensive experience navigating complex collection scenarios.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'specialized-communication',
      title: 'Strategic Communication Methods',
      description: 'Custom approaches informed by account history and consumer behavior patterns. We provide access to dedicated legal counsel for regulatory and compliance matters, plus innovative repayment solutions tailored to each consumer\'s financial circumstances.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'flexible-solutions',
      title: 'Customizable Payment Solutions',
      description: 'Creative repayment arrangements designed for each consumer\'s situation. Our specialized services unlock recovery on previously challenging accounts, manage complex cases, employ advanced location and contact methods, provide legal and compliance expertise, and craft individual payment programs.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'dark',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Secondary & Tertiary Collections</h1>
          <p>Advanced Strategies for Challenging Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Expert Solutions for Resistant Accounts</h2>
              <p>
                When accounts have cycled through multiple collection attempts without resolution, they require specialized expertise.
                Capital Review Management\'s Secondary & Tertiary Collections services are designed for these challenging situations
                demanding advanced methods and experienced professionals.
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
              <h2>When Standard Collection Methods Prove Insufficient</h2>
              <p>
                Some accounts demand more than routine collection tactics. Our Secondary & Tertiary Collections services
                deliver specialized expertise and sophisticated strategies to recover accounts that have resisted conventional efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Need specialized collection expertise for your challenging accounts?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}