import Link from 'next/link'

export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'advanced-location-services',
      title: 'Advanced Location Capabilities',
      description: 'Our skip tracing uses cutting-edge technology and comprehensive data repositories to locate hard-to-find consumers. We employ advanced algorithms, public records analysis, and proprietary databases to track individuals who have moved, changed contact information, or are otherwise difficult to reach.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'comprehensive-database-access',
      title: 'Multi-Source Data Integration',
      description: 'We access extensive databases including credit bureaus, public records, utility filings, and specialized skip tracing resources. Our team synthesizes multiple data sources to compile the most accurate and current contact details for each individual.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'fcra-compliant-processes',
      title: 'FCRA-Compliant Operations',
      description: 'All skip tracing operations fully comply with the Fair Credit Reporting Act (FCRA) and applicable regulations. We maintain strict protocols protecting consumer privacy and data security while maximizing location effectiveness.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'specialized-expertise',
      title: 'Specialized Expertise',
      description: 'Our skip tracing team comprises experienced professionals who understand the unique challenges of locating individuals under varying circumstances. Whether handling name changes, address shifts, or complex family dynamics, we have the skill to overcome these obstacles.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'proven-success-rates',
      title: 'Proven Track Record',
      description: 'Our skip tracing services consistently achieve high success rates locating individuals across diverse demographics and circumstances. We track performance metrics continuously and refine our processes to maintain and improve our effectiveness.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Skip Tracing Services</h1>
          <p>Advanced Location Services for Hard-to-Find Consumers</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Locate the Unreachable</h2>
              <p>
                When standard contact methods fall short, our advanced skip tracing services help you locate elusive consumers.
                We leverage cutting-edge technology, extensive data repositories, and skilled professionals to track down individuals
                who have relocated, changed contact information, or are otherwise challenging to reach.
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
              <h2>When Conventional Contact Methods Fail</h2>
              <p>
                Skip tracing often proves the critical factor in successful collections once standard outreach has been exhausted.
                Our advanced location services help you re-establish contact with consumers and recover accounts that might otherwise be lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Ready to track down elusive consumers with precision?</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}