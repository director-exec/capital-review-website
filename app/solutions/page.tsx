import Link from 'next/link'

export default function SolutionsPage() {
  const serviceSections = [
    {
      id: 'pre-collection',
      title: 'Pre Charge-Off Collections',
      description: 'Early intervention strategies to prevent charge-offs and maximize recovery potential. Our proactive approach helps clients maintain account relationships while maximizing recovery rates through strategic communication and payment arrangements.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      link: '/solutions/pre-charge-off-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'post-charge-off',
      title: 'Post Charge-Off Collections',
      description: 'Recovery solutions for charged-off accounts with proven results. We specialize in recovering balances from accounts that have been written off using advanced strategic collection techniques.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      link: '/solutions/post-charge-off-collections',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'secondary-tertiary',
      title: 'Secondary & Tertiary Collections',
      description: 'Specialized recovery for difficult accounts requiring advanced strategies. Our experienced team handles accounts that have been through multiple collection attempts, using innovative approaches to locate and engage debtors.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      link: '/solutions/secondary-tertiary-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'warehousing',
      title: 'Warehousing Management',
      description: 'Portfolio management and optimization for maximum recovery efficiency. We provide comprehensive portfolio analysis, segmentation, and strategic management to maximize your recovery potential while minimizing operational costs.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
      link: '/solutions/warehousing-management',
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'network-attorneys',
      title: 'Network of Attorneys',
      description: 'Legal collection services with experienced legal professionals. Our network of licensed attorneys provides legal collection services across multiple jurisdictions, ensuring compliance with state-specific regulations and maximizing recovery through legal channels.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      link: '/solutions/network-of-attorneys',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'credit-bureau',
      title: 'Credit Bureau Reporting',
      description: 'As part of our full-service recovery solutions, Capital Review Management\'s network offers optional credit bureau reporting to enhance your collection strategy. We handle every file with full adherence to the Fair Credit Reporting Act (FCRA) and all applicable regulations. Our network will report only with your authorization.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
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
