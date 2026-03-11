import Link from 'next/link'
import SectionCard from '../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'pre-collection': {
    subject: 'Early-Stage Recovery (CRM-3.1)',
    bullets: [
      { text: 'Proactive outreach via Maxify CRM (CRM-2.1) for accounts slightly past due — omnichannel contact with real-time analytics before charge-off becomes necessary.' },
      { text: 'Brand-protective strategies per CRM-2.2 Mini-Miranda standards with 7-in-7 call frequency rules (CRM-1.3) and 1-hour SMS STOP processing (CRM-2.4).' },
      { text: 'Strategic payment arrangements with standing settlement parameters (CRM-3.5) and PCI DSS-certified tokenization (CRM-3.8) for secure transactions.' },
    ],
  },
  'post-charge-off': {
    subject: 'Charged-Off Recovery (CRM-3.1)',
    bullets: [
      { text: 'Advanced recovery powered by Maxify CRM analytics (CRM-2.1) with segmentation, behavioral tracking, and omnichannel workflows for optimized results.' },
      { text: 'All agents trained per CRM-6.4 with 85% minimum pass scores — "resolution over collection" mindset in every consumer engagement.' },
      { text: 'Full FDCPA/FCRA/TCPA compliance (CRM-1.1) with all calls recorded and retained for 3 years (CRM-2.6) and QA-scored monthly.' },
    ],
  },
  'secondary-tertiary': {
    subject: 'Advanced-Stage Collections (CRM-3.1)',
    bullets: [
      { text: 'Specialized handling for multi-attempt accounts with innovative skip tracing and re-engagement through Maxify CRM workflows (CRM-2.1).' },
      { text: '60-day unverified account return policies (CRM-3.3) and standing settlement parameters (CRM-3.5) ensure transparent client partnerships.' },
      { text: 'Network of attorneys (CRM-5.1) available for complex recovery with litigation holds and evidence preservation per CRM-7.3.' },
    ],
  },
  'warehousing': {
    subject: 'Portfolio Optimization (CRM-3.1)',
    bullets: [
      { text: 'Proprietary scoring and Maxify CRM analytics (CRM-2.1) re-prioritize warehoused accounts based on updated financial behavior and payment capacity.' },
      { text: 'AES-256 encryption at rest and TLS 1.2+ in transit (CRM-4.1) with role-based access controls (CRM-4.4) protect all retained portfolio data.' },
      { text: 'Reduced servicing rates with recovery reinitiated only when true potential exists — 30-day pre-reporting verification (CRM-1.4) before any bureau action.' },
    ],
  },
  'network-attorneys': {
    subject: 'Legal Network (CRM-5.1)',
    bullets: [
      { text: 'Vetted network of licensed, bonded collection attorneys per CRM-5.1 operating across multiple U.S. jurisdictions with centralized claim management.' },
      { text: 'Client-directed strategy: no lawsuit initiated and no settlement accepted without explicit approval — full audit trails through Maxify CRM.' },
      { text: 'Immediate litigation holds and evidence preservation per CRM-7.3 with comprehensive documentation at every stage of the legal process.' },
    ],
  },
  'credit-bureau': {
    subject: 'Bureau Reporting (CRM-1.4)',
    bullets: [
      { text: 'Fully integrated with Experian, Equifax, and TransUnion — 30-day pre-reporting verification window (CRM-1.4) before any credit bureau action.' },
      { text: 'Full FCRA adherence per CRM-1.1 with accurate, real-time account status tracking and dispute handling through Maxify CRM.' },
      { text: 'Zero integration burden — we manage the complete reporting process with AES-256 encryption (CRM-4.1) and PCI DSS tokenization (CRM-3.8).' },
    ],
  },
}

export default function SolutionsPage() {
  const serviceSections = [
    {
      id: 'pre-collection',
      title: 'Pre Charge-Off Collections',
      description: 'Early intervention strategies to prevent charge-offs and maximize recovery potential. Our proactive approach helps clients maintain account relationships while maximizing recovery rates through strategic communication and payment arrangements.',
      link: '/solutions/pre-charge-off-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'post-charge-off',
      title: 'Post Charge-Off Collections',
      description: 'Recovery solutions for charged-off accounts with proven results. We specialize in recovering balances from accounts that have been written off using advanced strategic collection techniques.',
      link: '/solutions/post-charge-off-collections',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'secondary-tertiary',
      title: 'Secondary & Tertiary Collections',
      description: 'Specialized recovery for difficult accounts requiring advanced strategies. Our experienced team handles accounts that have been through multiple collection attempts, using innovative approaches to locate and engage debtors.',
      link: '/solutions/secondary-tertiary-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'warehousing',
      title: 'Warehousing Management',
      description: 'Portfolio management and optimization for maximum recovery efficiency. We provide comprehensive portfolio analysis, segmentation, and strategic management to maximize your recovery potential while minimizing operational costs.',
      link: '/solutions/warehousing-management',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'network-attorneys',
      title: 'Network of Attorneys',
      description: 'Legal collection services with experienced legal professionals. Our network of licensed attorneys provides legal collection services across multiple jurisdictions, ensuring compliance with state-specific regulations and maximizing recovery through legal channels.',
      link: '/solutions/network-of-attorneys',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'credit-bureau',
      title: 'Credit Bureau Reporting',
      description: 'As part of our full-service recovery solutions, Capital Review Management\'s network offers optional credit bureau reporting to enhance your collection strategy. We handle every file with full adherence to the Fair Credit Reporting Act (FCRA) and all applicable regulations. Our network will report only with your authorization.',
      link: '/solutions/credit-bureau-reporting',
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Business Solutions</h1>
          <p>Comprehensive recovery solutions designed to maximize your returns while protecting your brand reputation.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Recovery Solutions That Work</h2>
              <p>
                Capital Review Management delivers proven recovery solutions across all stages of the collection process.
                Our comprehensive suite of services combines advanced technology, regulatory expertise, and human empathy
                to achieve superior results while maintaining the highest standards of compliance and professionalism.
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
                      <Link href={section.link} className="subpage-btn">
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{section.title}</h2>
                      <div className="subpage-text">
                        {section.description}
                      </div>
                      <Link href={section.link} className="subpage-btn">
                        Learn More
                      </Link>
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

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Contact Capital Review Management for a secure solution to your collection needs.</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
