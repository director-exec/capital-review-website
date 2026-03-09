export default function SecurityPage() {
  const securitySections = [
    {
      id: 'data-protection',
      title: 'Data Protection & Encryption',
      description: 'At Capital Review Management, safeguarding data is embedded in our operations. We understand the critical importance of protecting both your information and your consumers\' data at every level. Our track record is impeccable—zero data breaches—and our infrastructure is built to meet and exceed today\'s most stringent security and compliance standards.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'security-protocols',
      title: 'Security Protocols & Infrastructure',
      description: 'We implement continuously updated, transparent security measures that leverage the latest in encryption, secure storage, and controlled access systems. From responsible document disposal to fully secured digital and physical environments, every detail is carefully managed—including a comprehensive business continuity plan to ensure uninterrupted service under any circumstances.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Regulatory Alignment',
      description: 'No matter your industry, you can trust Capital Review to deliver recovery support with the highest level of data protection and regulatory compliance. Because in a digital-first world, security isn\'t optional—it\'s our obligation. We maintain rigorous adherence to all federal and state regulations while implementing industry best practices for data security.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
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
