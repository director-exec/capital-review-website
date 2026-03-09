import Link from 'next/link'

export default function TermsAndConditionsPage() {
  const termsSections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      description: 'By accessing and using the Website, you acknowledge and agree to abide by these Terms and Conditions and all applicable laws and regulations. If you do not agree to any of these terms, please do not use the Website.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'modifications-to-terms',
      title: 'Modifications to Terms',
      description: 'We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Website constitutes acceptance of any changes.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. We encourage you to review our Privacy Policy to understand how we collect, use, and protect your information.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'All content on the Website, including text, graphics, logos, and software, is the property of Capital Review Management LLC and is protected by copyright laws. You may not use, reproduce, or distribute any content without our express written permission.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      description: 'We are not liable for any damages resulting from your use of, or inability to use, the Website or any services provided. This includes, without limitation, damages due to errors, interruptions, or data loss.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'text-messaging-terms',
      title: 'Text Messaging Terms and Conditions',
      description: 'By consenting to receive text messages from Capital Review Management LLC, you agree to electronic consent, message and data rates may apply, variable message frequency, help information availability, opt-out procedures, MMS vs. SMS delivery, and service provider liability limitations.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Terms and Conditions of Use</h1>
          <p>Please read these terms carefully before using our website</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Understanding Our Terms</h2>
              <p>
                Welcome to the website of Capital Review Management LLC. By accessing and using capitalreviewmgt.com,
                you agree to comply with and be bound by these Terms and Conditions. Please read them carefully to understand
                your rights and obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <div className="legal-page">
        {termsSections.map((section, index) => (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
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
                      <h2>{section.title}</h2>
                      <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                        {section.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{section.title}</h2>
                      <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
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
          </section>
        ))}
      </div>

      {/* Additional Terms Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Additional Terms</h2>
            <div style={{ backgroundColor: 'white', borderRadius: '0px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Third-Party Links</h3>
                <p>Our Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party websites.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Governing Law</h3>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the state of Texas, without regard to its conflict of law principles.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Termination of Use</h3>
                <p>We reserve the right to suspend or terminate your access to the Website at any time for violation of these Terms and Conditions or for any other reason.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <div style={{ backgroundColor: '#f8f6f2', borderRadius: '0px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                For any questions regarding these Terms and Conditions, please contact us at:
              </p>
              <div style={{ fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontWeight: '600' }}>Capital Review Management LLC</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1c2a3f' }}>866-766-2692</p>
                <p>
                  <strong>Email:</strong> info@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
