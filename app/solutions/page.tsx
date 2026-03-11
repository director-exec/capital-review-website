import Link from 'next/link'
import SectionCard from '../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'pre-collection': {
    subject: 'Early-Stage Recovery',
    bullets: [
      { text: 'Proactive outreach for accounts slightly past due — before charge-off or full collection becomes necessary.' },
      { text: 'Brand-protective contact strategies that maintain account relationships while maximizing recovery rates.' },
      { text: 'Strategic payment arrangements and communication plans tailored to each client\'s risk tolerance.' },
    ],
  },
  'post-charge-off': {
    subject: 'Charged-Off Account Recovery',
    bullets: [
      { text: 'Advanced strategic collection techniques designed to recover balances from accounts that have been written off.' },
      { text: 'Multichannel engagement powered by analytics, segmentation, and behavioral tracking for optimized recovery.' },
      { text: 'Full FDCPA, FCRA, and TCPA compliance with internal legal oversight at every stage of the process.' },
    ],
  },
  'secondary-tertiary': {
    subject: 'Advanced-Stage Collections',
    bullets: [
      { text: 'Specialized handling for accounts that have been through multiple collection attempts without resolution.' },
      { text: 'Innovative skip tracing and location strategies to re-engage hard-to-reach consumers.' },
      { text: 'Experienced team with decades of success in recovering complex, multi-attempt accounts.' },
    ],
  },
  'warehousing': {
    subject: 'Portfolio Optimization',
    bullets: [
      { text: 'Comprehensive portfolio analysis, segmentation, and strategic management to maximize recovery potential.' },
      { text: 'Proprietary scoring and analytics re-prioritize accounts based on updated financial behavior and payment capacity.' },
      { text: 'Reduced servicing rates for warehoused accounts — recovery efforts reinitiated only when true potential exists.' },
    ],
  },
  'network-attorneys': {
    subject: 'Nationwide Legal Network',
    bullets: [
      { text: 'Vetted network of licensed, bonded collection attorneys operating across multiple U.S. jurisdictions.' },
      { text: 'Client-directed strategy: no lawsuit initiated and no settlement accepted without your explicit approval.' },
      { text: 'Centralized management of all claims — filing to settlement — with full visibility from one point of contact.' },
    ],
  },
  'credit-bureau': {
    subject: 'Bureau Reporting Services',
    bullets: [
      { text: 'Fully integrated with Experian, Equifax, and TransUnion — reporting only with your authorization.' },
      { text: 'Full adherence to the Fair Credit Reporting Act (FCRA) with accurate, up-to-date account status tracking.' },
      { text: 'No software costs or integration burdens — we manage the full reporting process on your behalf.' },
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
