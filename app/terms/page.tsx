import Link from 'next/link'

export default function TermsAndConditionsPage() {
  const termsSections = [
    {
      id: 'acceptance-of-terms',
      title: 'Agreement to These Terms',
      description: 'By visiting and utilizing this Website, you confirm and consent to follow these Terms and Conditions along with all relevant laws and regulations. If you disagree with any portion of these terms, please refrain from using the Website.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'modifications-to-terms',
      title: 'Amendments to These Terms',
      description: 'We retain the authority to revise or alter these Terms and Conditions at any point without advance notification. Your ongoing use of the Website signifies your acceptance of any modifications.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Your activity on the Website is additionally governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. We encourage you to examine our Privacy Policy to understand the ways in which we gather, utilize, and safeguard your data.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'intellectual-property',
      title: 'Proprietary Content',
      description: 'All materials on the Website, including written content, images, brand marks, and software, are owned by Capital Review Management LLC and are protected under intellectual property law. You may not utilize, copy, or redistribute any content without our explicit written authorization.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'limitation-of-liability',
      title: 'Liability Restrictions',
      description: 'We bear no responsibility for any damages arising from your use of, or inability to access, the Website or any services offered. This encompasses, without limitation, damages caused by errors, service interruptions, or loss of data.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'text-messaging-terms',
      title: 'SMS Communication Terms and Conditions',
      description: 'By agreeing to receive text messages from Capital Review Management LLC, you consent to electronic authorization, acknowledge that standard message and data charges may be incurred, accept variable message frequency, can access help information, may follow opt-out procedures, understand MMS versus SMS delivery methods, and accept wireless carrier liability limitations.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'darker',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Terms and Conditions of Use</h1>
          <p>Kindly review these terms thoroughly prior to using our website</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Familiarize Yourself with Our Terms</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
              Welcome to the website of Capital Review Management LLC. By visiting and using capitalreviewmgt.com,
              you consent to adhere to and be governed by these Terms and Conditions. Please review them thoroughly to understand
              your entitlements and responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <div className="legal-page">
        {termsSections.map((section, index) => (
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

      {/* Additional Terms Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Supplementary Terms</h2>
            <div className="info-panel">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>External Links</h3>
                  <p style={{ color: '#b0b8c8' }}>Our Website may include links to external websites operated by third parties. We are not accountable for the content, accuracy, or practices of any third-party websites.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Applicable Law</h3>
                  <p style={{ color: '#b0b8c8' }}>These Terms and Conditions are interpreted and enforced under the laws of the state of Texas, without consideration of its conflict of law provisions.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Suspension of Access</h3>
                  <p style={{ color: '#b0b8c8' }}>We retain the authority to suspend or revoke your access to the Website at any point for breach of these Terms and Conditions or for any other justification.</p>
                </div>
              </div>
            </div>
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
                For any questions about these Terms and Conditions, please reach out to us at:
              </p>
              <div style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#b0b8c8' }}>
                <p style={{ fontWeight: '600', color: 'white' }}>Capital Review Management LLC</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4a7fb5' }}>866-766-2692</p>
                <p>
                  <strong style={{ color: 'white' }}>Email:</strong> info@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}