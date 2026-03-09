export default function SecurityPage() {
  const securitySections = [
    {
      id: 'data-protection',
      title: 'Data Protection & Encryption',
      description: 'At Capital Review Management, safeguarding data isn\'t just a priority — it\'s embedded in our DNA. We understand the critical importance of protecting both your information and your customers\' data at every level. Our track record is spotless — zero data breaches — and our infrastructure is built to meet and exceed today\'s most stringent security and compliance standards.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'security-protocols',
      title: 'Security Protocols & Infrastructure',
      description: 'We implement continuously updated, transparent security protocols that leverage the latest in encryption, secure storage, and controlled access systems. From responsible document disposal to fully secured digital and physical environments, every detail is accounted for — including a comprehensive disaster recovery plan to ensure continuity under any circumstances.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Regulatory Alignment',
      description: 'No matter your industry, you can trust Capital Review to deliver collections support with the highest level of data protection and regulatory alignment. Because in a digital-first world, security isn\'t an option — it\'s our obligation. We maintain rigorous compliance with all federal and state regulations while implementing industry best practices for data security.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Security</h1>
          <p>Security Is the Foundation of Our Operations</p>
        </div>
      </section>

      {/* Security Sections */}
      {securitySections.map((section, index) => (
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
                    <div>
                      {section.description}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2>{section.title}</h2>
                    <div>
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

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>
            Ready to partner with a company that prioritizes security and compliance?
          </h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 