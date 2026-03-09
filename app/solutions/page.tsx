import Link from 'next/link'

export default function SolutionsPage() {
  const serviceSections = [
    {
      id: 'pre-collection',
      title: 'Pre Charge-Off Collections',
      description: 'Proactive engagement strategies to prevent charge-offs and maximize recovery potential. Our forward-thinking methodology enables clients to preserve account relationships while optimizing collection success through strategic outreach and flexible repayment plans.',
      image: 'https://images.pexels.com/photos/7433837/pexels-photo-7433837.jpeg',
      link: '/solutions/pre-charge-off-collections',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'post-charge-off',
      title: 'Post Charge-Off Collections',
      description: 'Focused recovery programs for accounts that have been written off. We concentrate on reclaiming balances from charged-off accounts using proven analytical methods and disciplined collection strategies.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/solutions/post-charge-off-collections',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'secondary-tertiary',
      title: 'Secondary & Tertiary Collections',
      description: 'Advanced recovery services for challenging accounts requiring specialized tactics. Our experienced professionals manage accounts that have completed multiple collection cycles, deploying innovative techniques to locate and re-engage obligors.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      link: '/solutions/secondary-tertiary-collections',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'warehousing',
      title: 'Warehousing Management',
      description: 'Strategic portfolio management and optimization to drive recovery performance. We deliver comprehensive portfolio analysis, segmentation, and hands-on oversight designed to maximize recovery potential while controlling operational costs.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      link: '/solutions/warehousing-management',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'network-attorneys',
      title: 'Network of Attorneys',
      description: 'Specialized legal collection services backed by experienced legal professionals. Our curated network of licensed attorneys provides legal recovery solutions across every jurisdiction we operate, ensuring compliance with local statutes and maximizing recovery via legal channels.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
      link: '/solutions/network-of-attorneys',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'credit-bureau',
      title: 'Credit Bureau Reporting',
      description: 'Integrated into our comprehensive recovery offering, Capital Review Management provides optional credit bureau reporting to strengthen your collection strategy. All accounts are processed with strict adherence to the Fair Credit Reporting Act (FCRA) and applicable regulations. Reporting initiates only with your express authorization.',
      image: 'https://media.istockphoto.com/id/955988522/photo/business-signing-a-contract-buy-sell-house.jpg?b=1&s=612x612&w=0&k=20&c=EET9rlkAU1PTC_BWtJNfSWZfpvnCYLct0IkE4uZvb5k=',
      link: '/solutions/credit-bureau-reporting',
      background: 'panel',
      imageLeft: true
    },
    {
      id: 'skip-tracing',
      title: 'Skip Tracing Services',
      description: 'Advanced location services powered by next-generation technology and extensive data repositories. Our skip tracing capabilities help you locate and reconnect with consumers who have relocated, updated contact information, or are otherwise difficult to reach.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/solutions/skip-tracing',
      background: 'dark',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Service Solutions</h1>
          <p>Comprehensive recovery services engineered to optimize your returns while preserving your brand reputation.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section info-panel">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Proven Recovery Programs That Deliver Results</h2>
              <p>
                Capital Review Management delivers industry-tested recovery programs across every phase of the collection lifecycle.
                Our integrated service portfolio combines advanced technology, deep regulatory expertise, and professional consumer engagement
                to achieve superior outcomes while maintaining the highest standards of compliance and professionalism.
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
      <section className="cta-section">
        <div className="subpage-container">
          <h3>Partner with Capital Review Management for dependable solutions to your collection needs.</h3>
          <Link href="/contact" className="subpage-btn">
            Get In Touch Now
          </Link>
        </div>
      </section>
    </>
  )
}