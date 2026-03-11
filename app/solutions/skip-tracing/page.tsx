import Link from 'next/link';
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'advanced-location-services': {
    subject: 'Maxify CRM Location Technology (CRM-2.1)',
    bullets: [
      { text: 'Maxify CRM-integrated algorithms (CRM-2.1), public records searches, and proprietary databases to track down hard-to-find individuals with precision.' },
      { text: 'Multichannel data verification cross-references multiple sources — all data transmitted via TLS 1.2+ (CRM-4.1) for secure, accurate contact information.' },
      { text: 'Real-time tracking capabilities integrated with Maxify CRM workflows locate consumers who have moved, changed numbers, or gone off-grid.' },
    ],
  },
  'comprehensive-database-access': {
    subject: 'Multi-Source Intelligence (CRM-2.1)',
    bullets: [
      { text: 'Extensive databases including credit bureaus, public records, utility records, and proprietary skip tracing systems — all FCRA-compliant per CRM-1.1.' },
      { text: 'Multiple data sources combined through Maxify CRM analytics (CRM-2.1) to create the most accurate, up-to-date contact profiles for each individual.' },
      { text: 'Continuous database updates with AES-256 encryption at rest (CRM-4.1) ensure we work with the freshest available information securely at all times.' },
    ],
  },
  'fcra-compliant-processes': {
    subject: 'Regulatory Compliance (CRM-1.1)',
    bullets: [
      { text: 'All skip tracing activities conducted in full FCRA compliance per CRM-1.1 with consumer privacy safeguards (CRM-1.6) and applicable state regulations.' },
      { text: 'Role-based access controls (CRM-4.4) with MFA authentication and 15-minute session timeouts protect consumer data while maximizing location success rates.' },
      { text: 'State-specific compliance matrices (CRM-9.x) maintained with 60-day renewal lead times keep processes aligned with evolving regulatory requirements.' },
    ],
  },
  'specialized-expertise': {
    subject: 'Trained Skip Trace Specialists (CRM-6.4)',
    bullets: [
      { text: 'Specialists trained per CRM-6.4 with 85% minimum pass scores who understand the unique challenges of locating individuals in various circumstances.' },
      { text: 'Expert navigation of complex scenarios including name changes, address updates, and multi-state relocations — all documented through Maxify CRM audit trails.' },
      { text: 'Monthly QA reviews of 5+ cases per specialist with 4-step corrective action process (CRM-6.6) ensure consistent quality and compliance.' },
    ],
  },
  'proven-success-rates': {
    subject: 'Data-Driven Results (CRM-3.1)',
    bullets: [
      { text: 'Consistently high success rates tracked through Maxify CRM real-time portfolio dashboards across various demographics and circumstances.' },
      { text: 'Performance metrics analyzed continuously with 60-day unverified account return policies (CRM-3.3) ensuring transparent client partnerships.' },
      { text: 'Scalable solutions from single-account searches to high-volume portfolio-wide skip tracing — all with full audit trails and FDCPA compliance (CRM-1.1).' },
    ],
  },
}

export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'advanced-location-services',
      title: 'Advanced Location Services',
      description: 'Our skip tracing services utilize cutting-edge technology and comprehensive databases to locate hard-to-find consumers. We employ sophisticated algorithms, public records searches, and proprietary databases to track down individuals who have moved, changed contact information, or are otherwise difficult to reach.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-database-access',
      title: 'Comprehensive Database Access',
      description: 'We have access to extensive databases including credit bureaus, public records, utility records, and proprietary skip tracing databases. Our team combines multiple data sources to create the most accurate and up-to-date contact information for each individual.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'fcra-compliant-processes',
      title: 'FCRA-Compliant Processes',
      description: 'All our skip tracing activities are conducted in full compliance with the Fair Credit Reporting Act (FCRA) and other applicable regulations. We maintain strict protocols to ensure consumer privacy and data protection while maximizing our ability to locate individuals.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-expertise',
      title: 'Specialized Expertise',
      description: 'Our skip tracing team includes experienced professionals who understand the unique challenges of locating individuals in various circumstances. Whether dealing with name changes, address updates, or complex family situations, we have the expertise to navigate these challenges effectively.',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'proven-success-rates',
      title: 'Proven Success Rates',
      description: 'Our skip tracing services consistently achieve high success rates in locating individuals across various demographics and circumstances. We track our performance metrics and continuously refine our processes to maintain and improve our success rates.',
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
