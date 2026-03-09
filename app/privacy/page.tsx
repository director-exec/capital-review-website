import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      id: 'information-collection',
      title: 'Data We Gather',
      description: 'We may collect a range of personal data including contact details (name, mailing address, email, telephone number), financial data (payment records, banking information), debt-related data (account identifiers, outstanding amounts), identification documents (government-issued IDs), and communication logs (phone conversations, emails, written correspondence).',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'information-usage',
      title: 'How We Use and Share Data',
      description: 'We never sell personal data to outside parties. That said, we may disclose information for operational needs with affiliated entities and service vendors, in the course of corporate transactions such as acquisitions or divestitures, and for regulatory compliance as mandated by statute, regulation, or judicial proceedings.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'data-security',
      title: 'Information Protection',
      description: 'We implement technical and procedural safeguards to maintain the confidentiality, accuracy, and security of personal data. Nevertheless, no transmission or storage method is completely impervious, and we cannot provide an absolute guarantee of data protection.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'text-messaging',
      title: 'SMS Communication Privacy',
      description: 'We do not distribute, transfer, or commercialize mobile phone numbers, text messaging enrollment data, or authorization details to outside parties. For additional information regarding text-based communications, please consult our Terms and Conditions page.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?_gl=1*kss10t*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5NDQ2NDckbzQkZzEkdDE3NTQ5NDQ2NTYkajUxJGwwJGgw',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'your-rights',
      title: 'Your Entitlements',
      description: 'You have the right to view, correct, or request removal of your personal data. To exercise these entitlements or for any questions about this Privacy Policy, please reach out to us through the contact details provided below.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'california-privacy-rights',
      title: 'California Consumer Privacy Protections (CCPA)',
      description: 'If you reside in California, you are granted supplementary rights under the California Consumer Privacy Act (CCPA). These include the right to: (1) Be informed about what personal data we gather, utilize, share, and sell; (2) Ask for the erasure of your personal data; (3) Decline the sale of your personal data (we do not engage in selling personal data); (4) Be free from retaliation for exercising your privacy entitlements; and (5) Obtain your personal data in a transferable format. To invoke any of these California privacy protections, please reach out using the contact details listed in the Contact Us section below. We will address your inquiry within the deadlines prescribed by California statute.',
      image: '/Pages/Legal_Doc_Med.jpeg',
      background: 'darker',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Privacy Policy</h1>
          <p>Safeguarding Your Personal Data</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">We Take Your Privacy Seriously</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
              Capital Review Management LLC is dedicated to protecting the privacy and confidentiality of personal data.
              This Privacy Policy describes how we gather, utilize, share, and secure individuals' personal information
              in relation to our account recovery operations.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <div className="legal-page">
        {privacySections.map((section, index) => (
          <section key={section.id} className="content-section">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  {section.imageLeft ? (
                    <>
                      <div>
                        <img
                          src={section.image}
                          alt={section.title}
                          style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h2>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
                          {section.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h2>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
                          {section.description}
                        </p>
                      </div>
                      <div>
                        <img
                          src={section.image}
                          alt={section.title}
                          style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Changes to Policy Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Revisions to This Policy</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
              We may revise this Privacy Policy at any point. Significant modifications will be communicated via our website
              or through other suitable channels. We recommend reviewing this policy on a regular basis to remain informed about
              how we safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Get in Touch</h2>
            <div className="info-panel">
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#b0b8c8' }}>
                For any inquiries or concerns about this Privacy Policy, please contact us at:
              </p>
              <div style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#b0b8c8' }}>
                <p style={{ fontWeight: '600', color: 'white' }}>Capital Review Management LLC</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#c9a84c' }}>866-766-2692</p>
                <p>
                  <strong style={{ color: 'white' }}>Email:</strong> info@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="legal-effective-date">
              Copyright &copy; 2026 Capital Review Management – All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}