import Link from 'next/link'

export default function AboutPage() {
  const aboutSections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      description: 'Capital Review Management is dedicated to resolving financial obligations through professionalism, discretion, and mutual respect.\n\nWe specialize in compliant, results-driven account resolution, delivering tangible outcomes for our clients while providing consumers a transparent, accessible path to resolution.\n\nCapital Review leverages cutting-edge technology and advanced platforms to streamline operations, enhance communication, and deliver superior solutions for both clients and consumers. This forward-thinking approach enables us to operate with precision, transparency, and agility across every jurisdiction we operate.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'what-we-stand-for',
      title: 'What We Stand For',
      description: 'We treat your brand as an extension of our own. Every interaction reflects our dedication to protecting your reputation, communicating with empathy, and aligning our operations with your values. Whether recovering past-due obligations or managing sensitive account situations, we function as trusted stewards of your public image.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'how-we-operate',
      title: 'How We Operate',
      description: 'Respect, empathy, and compliance guide everything we do. Every consumer engagement is conducted with professionalism and transparency. Our representatives are trained not only in regulatory requirements—but in tone, timing, and approach. We uphold a "resolution mindset" in every conversation, helping consumers fulfill obligations with dignity.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'our-people',
      title: 'Our People',
      description: 'Our team is our power. We recruit seasoned professionals who thrive in a culture of integrity, collaboration, and continuous growth. Every team member undergoes rigorous training and ongoing performance evaluation—not just to maintain standards, but to surpass them. At Capital Review, excellence is a shared commitment.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'how-we-deliver',
      title: 'How We Deliver',
      description: 'We succeed by listening first. Every client has unique KPIs, operational nuances, and brand sensitivities. We customize each partnership to align with those needs while delivering clear, measurable recovery results. Whether early-stage outreach or complex portfolio management, our mission is to maximize returns while minimizing risk.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'where-we-work',
      title: 'Where We Work',
      description: 'Capital Review Management is licensed, bonded, and fully operational across every jurisdiction we serve. We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements wherever applicable law mandates it. Your compliance needs are backed by our comprehensive infrastructure and expertise.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      background: 'darker',
      imageLeft: true
    }
  ]

  const additionalSections = [
    { id: 'security', title: 'Security', description: 'Explore our comprehensive security protocols and data protection measures.', link: '/about/security' },
    { id: 'compliance', title: 'Compliance', description: 'Learn how we uphold the highest standards of regulatory compliance, including TCPA adherence.', link: '/about/compliance' },
    { id: 'industries', title: 'Industries We Serve', description: 'See the diverse sectors we support with specialized resolution strategies.', link: '/about/industries-we-serve' },
    { id: 'community', title: 'Community Involvement', description: 'Discover how we contribute to the communities we serve.', link: '/about/community-involvement' }
  ]

  return (
    <>
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Precision Meets Compliance</h1>
          <p>A Strategic Approach to Account Resolution</p>
        </div>
      </section>

      {aboutSections.map((section) => (
        <section key={section.id} className={`subpage-section ${section.background === 'darker' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
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
