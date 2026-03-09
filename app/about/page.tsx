import Link from 'next/link'

export default function AboutPage() {
  const aboutSections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      description: 'At Capital Review Management, we resolve financial obligations with professionalism, discretion, and respect.\n\nWe specialize in compliant, results-driven account resolution, delivering real outcomes for our partners while offering consumers a clear, accessible path forward.\n\nCapital Review Management leverages the latest technology and advanced platforms to streamline operations, enhance communication, and provide more effective solutions for both clients and consumers. This modern approach allows us to operate with greater precision, transparency, and agility in today\'s dynamic financial landscape.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-we-stand-for',
      title: 'What We Stand For',
      description: 'We treat your brand as an extension of our own. Every touchpoint reflects our dedication to preserving your reputation, communicating with empathy, and aligning our operations with your values. Whether we\'re recovering past-due balances or handling sensitive account situations, we work as silent stewards of your public image.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-operate',
      title: 'How We Operate',
      description: 'Respect, empathy, and compliance guide everything we do. Every consumer interaction is conducted with professionalism and clarity. Our agents are trained not only in regulation — but in tone, timing, and approach. We uphold a "resolution mindset" in all conversations, helping consumers resolve obligations with dignity.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'our-people',
      title: 'Our People',
      description: 'Our team is our power. We hire experienced professionals who thrive in a culture of integrity, collaboration, and continuous improvement. Every team member undergoes rigorous training and performance auditing — not just to maintain standards, but to raise them. At Capital Review, excellence is a shared expectation.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'how-we-deliver',
      title: 'How We Deliver',
      description: 'We succeed by listening. Every client has unique KPIs, operational nuances, and brand sensitivities. We tailor each engagement to align with those needs while delivering clear, measurable recovery results. Whether early-stage outreach or complex portfolio management, our mission is to maximize returns while minimizing risk.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'where-we-work',
      title: 'Where We Work',
      description: 'Capital Review Management is licensed, bonded, and insured. We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements in every jurisdiction where applicable law demands it. As our footprint continues to grow, our compliance infrastructure scales with it — so wherever you operate, we are ready to support you.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Strategy Without Compromise</h1>
          <p>Built on Compliance, Driven by Results</p>
        </div>
      </section>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
        <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
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