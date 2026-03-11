import Link from 'next/link'
import SectionCard from '../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'acceptance-of-terms': {
    subject: 'User Agreement',
    bullets: [
      { text: 'By accessing and using capitalreviewmgt.com, you agree to comply with and be bound by these Terms and Conditions.' },
      { text: 'You acknowledge that all applicable laws and regulations govern your use of this website and its services.' },
      { text: 'If you do not agree to any of these terms, you are advised to discontinue use of the website immediately.' },
    ],
  },
  'modifications-to-terms': {
    subject: 'Terms Updates',
    bullets: [
      { text: 'Capital Review Management reserves the right to update or modify these Terms and Conditions at any time.' },
      { text: 'Changes are effective immediately upon posting — no prior notice is required for updates to take effect.' },
      { text: 'Your continued use of the website after any changes constitutes your acceptance of the revised terms.' },
    ],
  },
  'privacy-policy': {
    subject: 'Privacy Integration',
    bullets: [
      { text: 'Your use of the website is governed by our Privacy Policy, incorporated into these Terms and Conditions by reference.' },
      { text: 'The Privacy Policy outlines how we collect, use, disclose, and protect your personal information.' },
      { text: 'We encourage you to review our Privacy Policy regularly to stay informed about your data protection rights.' },
    ],
  },
  'intellectual-property': {
    subject: 'Content Protection',
    bullets: [
      { text: 'All website content — text, graphics, logos, and software — is the property of Capital Review Management LLC.' },
      { text: 'Content is protected by applicable copyright, trademark, and intellectual property laws.' },
      { text: 'Reproduction, distribution, or use of any content requires our express written permission.' },
    ],
  },
  'limitation-of-liability': {
    subject: 'Liability Boundaries',
    bullets: [
      { text: 'Capital Review Management is not liable for any damages resulting from your use of or inability to use the website.' },
      { text: 'This includes, without limitation, damages due to errors, service interruptions, or data loss.' },
      { text: 'The website and its services are provided on an "as is" basis without warranties of any kind.' },
    ],
  },
  'text-messaging-terms': {
    subject: 'SMS Service Terms',
    bullets: [
      { text: 'By consenting to text messages, you agree to electronic consent and acknowledge that message and data rates may apply.' },
      { text: 'Message frequency varies based on account activity — reply STOP at any time to opt out of text communications.' },
      { text: 'For help or assistance with text messaging, reply HELP to any message or contact us directly at 866-766-2692.' },
    ],
  },
}

export default function TermsAndConditionsPage() {
  const termsSections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      description: 'By accessing and using the Website, you acknowledge and agree to abide by these Terms and Conditions and all applicable laws and regulations. If you do not agree to any of these terms, please do not use the Website.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'modifications-to-terms',
      title: 'Modifications to Terms',
      description: 'We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Website constitutes acceptance of any changes.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. We encourage you to review our Privacy Policy to understand how we collect, use, and protect your information.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'All content on the Website, including text, graphics, logos, and software, is the property of Capital Review Management LLC and is protected by copyright laws. You may not use, reproduce, or distribute any content without our express written permission.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      description: 'We are not liable for any damages resulting from your use of, or inability to use, the Website or any services provided. This includes, without limitation, damages due to errors, interruptions, or data loss.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'text-messaging-terms',
      title: 'Text Messaging Terms and Conditions',
      description: 'By consenting to receive text messages from Capital Review Management LLC, you agree to electronic consent, message and data rates may apply, variable message frequency, help information availability, opt-out procedures, MMS vs. SMS delivery, and service provider liability limitations.',
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
        {termsSections.map((section, index) => {
          const card = sectionCards[section.id]
          return (
            <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
              <div className="subpage-container">
                <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                  {section.imageLeft ? (
                    <>
                      <div>
                        <SectionCard subject={card.subject} bullets={card.bullets} />
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
                        <SectionCard subject={card.subject} bullets={card.bullets} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          )
        })}
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
