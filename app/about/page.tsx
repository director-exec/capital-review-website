import Link from 'next/link'
import SectionCard from '../components/SectionCard'

/* ─── Section card content mapped to each section ─── */
const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'who-we-are': {
    subject: 'Digital Recovery Excellence',
    bullets: [
      { text: 'Maxify CRM platform powers omnichannel communication (CRM-2.1), real-time analytics, and compliance-integrated workflows across all operations.' },
      { text: 'Every engagement is built on transparency, discretion, and professionalism — from first contact to final resolution per CRM-2.2 Mini-Miranda standards.' },
      { text: 'Licensed, bonded, and insured with full regulatory compliance maintained across all jurisdictions per CRM-9.x State Compliance Matrices.' },
    ],
  },
  'what-we-stand-for': {
    subject: 'Brand Stewardship & Reputation',
    bullets: [
      { text: 'Every consumer touchpoint reflects our clients\' brand values — empathetic communication and professional handling per CRM-2.2 Mini-Miranda standards.' },
      { text: 'Complaint resolution protocols per CRM-7.1 with zero-tolerance standards and 15-day CFPB response windows protect your public image.' },
      { text: 'Monthly QA reviews of 5+ calls per specialist (CRM-6.4) ensure tone, timing, and approach consistently uphold your reputation.' },
    ],
  },
  'how-we-operate': {
    subject: 'FDCPA & Reg F Compliance (CRM-1.1)',
    bullets: [
      { text: 'Every consumer interaction follows FDCPA §1692 and CRM-1.1 Regulatory Compliance — no harassment, no misrepresentation, full validation rights disclosed.' },
      { text: 'Agents trained per CRM-6.4 with 85% minimum pass score on tone, timing, and approach: "Resolution over collection."' },
      { text: 'All calls recorded with 3-year retention (CRM-2.6), scored by QA with minimum 5 calls per specialist reviewed monthly (CRM-6.4).' },
    ],
  },
  'our-people': {
    subject: 'Professional Standards & Training',
    bullets: [
      { text: 'Every team member undergoes CRM-6.2 background screening and CRM-6.4 training with 85% minimum competency scores on compliance, tone, and approach.' },
      { text: '4-step corrective action process (CRM-6.6) and 24-hour access revocation upon termination ensure continuous compliance excellence.' },
      { text: 'Role-based access controls (CRM-4.4), MFA protection, and ongoing performance auditing maintain the highest operational integrity.' },
    ],
  },
  'how-we-deliver': {
    subject: 'Results-Driven Recovery (CRM-3.5)',
    bullets: [
      { text: 'Client engagements tailored to unique KPIs with standing settlement parameters (CRM-3.5) and 60-day unverified account return policies (CRM-3.3).' },
      { text: 'PCI DSS-certified payment tokenization (CRM-3.8) with AES-256 encryption (CRM-4.1) secures every transaction across all channels.' },
      { text: 'Real-time analytics, automated reporting, and data-driven strategies maximize recovery while minimizing reputational risk for clients.' },
    ],
  },
  'where-we-work': {
    subject: 'Nationwide Licensing & Compliance',
    bullets: [
      { text: 'Certificates of Authority, statutory bonds, trust accounts, and resident office requirements maintained per CRM-9.x in every required jurisdiction.' },
      { text: 'NMLS Pending — fully registered with state licensing requirements and 60-day renewal lead times to ensure zero lapses.' },
      { text: 'As our footprint grows, our compliance infrastructure scales with it — wherever you operate, Capital Review Management is ready.' },
    ],
  },
}

export default function AboutPage() {
  const aboutSections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      description: 'At Capital Review Management, we resolve financial obligations with professionalism, discretion, and respect.\n\nWe specialize in compliant, results-driven account resolution, delivering real outcomes for our partners while offering consumers a clear, accessible path forward.\n\nCapital Review Management leverages the latest technology and advanced platforms to streamline operations, enhance communication, and provide more effective solutions for both clients and consumers. This modern approach allows us to operate with greater precision, transparency, and agility in today\'s dynamic financial landscape.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-we-stand-for',
      title: 'What We Stand For',
      description: 'We treat your brand as an extension of our own. Every touchpoint reflects our dedication to preserving your reputation, communicating with empathy, and aligning our operations with your values. Whether we\'re recovering past-due balances or handling sensitive account situations, we work as silent stewards of your public image.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-operate',
      title: 'How We Operate',
      description: 'Respect, empathy, and compliance guide everything we do. Every consumer interaction is conducted with professionalism and clarity. Our agents are trained not only in regulation — but in tone, timing, and approach. We uphold a "resolution mindset" in all conversations, helping consumers resolve obligations with dignity.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'our-people',
      title: 'Our People',
      description: 'Our team is our power. We hire experienced professionals who thrive in a culture of integrity, collaboration, and continuous improvement. Every team member undergoes rigorous training and performance auditing — not just to maintain standards, but to raise them. At Capital Review, excellence is a shared expectation.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-deliver',
      title: 'How We Deliver',
      description: 'We succeed by listening. Every client has unique KPIs, operational nuances, and brand sensitivities. We tailor each engagement to align with those needs while delivering clear, measurable recovery results. Whether early-stage outreach or complex portfolio management, our mission is to maximize returns while minimizing risk.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'where-we-work',
      title: 'Where We Work',
      description: 'Capital Review Management is licensed, bonded, and insured. We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements in every jurisdiction where applicable law demands it. As our footprint continues to grow, our compliance infrastructure scales with it — so wherever you operate, we are ready to support you.',
      background: 'grey',
      imageLeft: true
    }
  ]

  const additionalSections = [
    {
      id: 'security',
      title: 'Security',
      description: 'Learn about our comprehensive security protocols and data protection measures.',
      link: '/about/security'
    },
    {
      id: 'compliance',
      title: 'Compliance',
      description: 'Discover how we maintain the highest standards of regulatory compliance under the TCPA, Telephone Consumer Protection Act.',
      link: '/about/compliance'
    },
    {
      id: 'industries',
      title: 'Industries We Serve',
      description: 'Explore the diverse industries we support with specialized solutions.',
      link: '/about/industries-we-serve'
    },
    {
      id: 'community',
      title: 'Community Involvement',
      description: 'See how we give back to the communities we serve.',
      link: '/about/community-involvement'
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/about_hero_bg.png)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Strategy Without Compromise</h1>
          <p>Built on Compliance, Driven by Results</p>
        </div>
      </section>

      {/* About Sections */}
      {aboutSections.map((section) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div>
                      <h2>{section.title}</h2>
                      <div style={{ whiteSpace: 'pre-line' }}>
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{section.title}</h2>
                      <div style={{ whiteSpace: 'pre-line' }}>
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

      {/* Additional Sections Grid */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Learn More About Capital Review</h2>
          <div className="subpage-cards">
            {additionalSections.map((section) => (
              <Link key={section.id} href={section.link} className="block">
                <div className="subpage-card">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>
            Ready to partner with a company that values integrity, compliance, and results?
          </h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
} 