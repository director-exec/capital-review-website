import Link from 'next/link'
import SectionCard from '../components/SectionCard'

/* ─── Section card content mapped to each section ─── */
const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'who-we-are': {
    subject: 'Digital Recovery Excellence',
    bullets: [
      { text: 'Advanced technology platforms streamline operations, enhance communication, and deliver measurable outcomes for partners and consumers alike.' },
      { text: 'Every engagement is built on transparency, discretion, and professionalism — from first contact to final resolution.' },
      { text: 'Licensed, bonded, and insured with full regulatory compliance in every jurisdiction we serve.' },
    ],
  },
  'what-we-stand-for': {
    subject: 'BBB Accredited — A-Rated',
    bullets: [
      { text: 'Capital Review Management has been BBB Accredited since September 2025, maintaining an A rating for ethical business practices and consumer satisfaction.' },
      { text: 'Verified 5-star consumer reviews: "Outstanding service and professionalism." — Sarah Allen, January 2026' },
      { text: 'Verified 5-star consumer reviews: "Handled my account with respect and dignity." — Danny Meister, October 2025' },
    ],
  },
  'how-we-operate': {
    subject: 'FDCPA & Reg F Compliance',
    bullets: [
      { text: 'Every consumer interaction follows FDCPA §1692 guidelines — no harassment, no misrepresentation, full validation rights disclosed.' },
      { text: 'Agents are trained on tone, timing, and approach from the Capital Review Training Manual: "Resolution over collection."' },
      { text: 'All calls are recorded, scored, and audited monthly for quality assurance and regulatory alignment.' },
    ],
  },
  'our-people': {
    subject: 'ACA International Member',
    bullets: [
      { text: 'Proud member of ACA International (Member #A-30001629), the world\'s largest association of credit and collection professionals.' },
      { text: 'Every team member completes rigorous onboarding and ongoing performance auditing — exceeding ACA\'s Code of Conduct standards.' },
      { text: 'Our commitment to ACA\'s ethical guidelines ensures professionalism, integrity, and continuous improvement across all operations.' },
    ],
  },
  'how-we-deliver': {
    subject: 'RMAI Certified Member',
    bullets: [
      { text: 'Certified member of the Receivables Management Association International, upholding the highest standards for responsible receivables management.' },
      { text: 'Every client engagement is tailored to unique KPIs, operational nuances, and brand sensitivities — delivering clear, measurable recovery results.' },
      { text: 'RMAI membership ensures adherence to industry best practices for data integrity, consumer protection, and ethical portfolio management.' },
    ],
  },
  'where-we-work': {
    subject: 'Nationwide Licensing & Compliance',
    bullets: [
      { text: 'Certificates of Authority, statutory bonds, trust accounts, and resident office requirements maintained in every jurisdiction where applicable law demands it.' },
      { text: 'NMLS Pending — fully registered and compliant with state licensing requirements including California License #11645-99.' },
      { text: 'As our footprint grows, our compliance infrastructure scales with it — wherever you operate, we are ready to support you.' },
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