import Link from 'next/link'
import SectionCard from '../components/SectionCard'

export default function PrivacyPolicyPage() {
  const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
    'information-collection': {
      subject: 'Personal Data Categories',
      bullets: [
        { text: 'Contact information including your name, mailing address, email address, and phone number for account communication.' },
        { text: 'Financial details such as payment history, bank information, account numbers, and outstanding balance records.' },
        { text: 'Identification data and communications records including government-issued IDs, phone calls, emails, and correspondence.' },
      ],
    },
    'information-usage': {
      subject: 'Data Sharing Standards',
      bullets: [
        { text: 'We do not sell your personal information to third parties — your data is used solely for legitimate business operations.' },
        { text: 'Information may be shared with affiliates, service providers, or during business transfers such as mergers or acquisitions.' },
        { text: 'Disclosure may occur when required by law, regulation, legal process, or to protect the rights and safety of all parties.' },
      ],
    },
    'data-security': {
      subject: 'Security Safeguards',
      bullets: [
        { text: 'Technical and organizational security measures protect the confidentiality, integrity, and availability of your data.' },
        { text: 'Industry-standard encryption, access controls, and monitoring systems safeguard personal information at all times.' },
        { text: 'While no system is completely secure, we continuously improve our security practices to protect your information.' },
      ],
    },
    'text-messaging': {
      subject: 'SMS Privacy Protection',
      bullets: [
        { text: 'Mobile numbers, text messaging opt-in data, and consent information are never shared, transferred, or sold to third parties.' },
        { text: 'Text communications are governed by strict privacy controls and applicable telecommunications regulations.' },
        { text: 'For complete details on text message communications, please refer to our Terms and Conditions page.' },
      ],
    },
    'your-rights': {
      subject: 'Consumer Data Rights',
      bullets: [
        { text: 'You have the right to access, review, and request copies of the personal information we hold about you.' },
        { text: 'You may request updates or corrections to inaccurate personal information in our records at any time.' },
        { text: 'You may request deletion of your personal information — contact us using the information provided below.' },
      ],
    },
    'california-privacy-rights': {
      subject: 'CCPA Consumer Rights',
      bullets: [
        { text: 'California residents have the right to know what personal information is collected, used, disclosed, and sold.' },
        { text: 'You may request deletion of your data, opt out of data sales (we do not sell data), and access data in portable format.' },
        { text: 'We respond to all California privacy rights requests within the timeframes required by California law.' },
      ],
    },
  }

  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      description: 'We may collect various types of personal information including contact information (name, address, email, phone), financial information (payment history, bank details), debt information (account numbers, balances), identification information (government IDs), and communications records (phone calls, emails, correspondence).',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'information-usage',
      title: 'Information Usage and Disclosure',
      description: 'We do not sell personal information to third parties. However, we may share information for business operations with affiliates and service providers, during business transfers such as mergers or sales, and for legal compliance as required by law, regulation, or legal process.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'data-security',
      title: 'Data Security',
      description: 'We employ technical and organizational measures to safeguard the confidentiality, integrity, and security of personal information. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute data security.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'text-messaging',
      title: 'Text Messaging Privacy',
      description: 'We do not share, transfer, or sell mobile numbers, text messaging opt-in data, or consent information to third parties. For more details on text communications, please refer to our Terms and Conditions page.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      description: 'Individuals have the right to access, update, or request the deletion of their personal information. To exercise these rights or for any questions regarding this Privacy Policy, please contact us using the information provided.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'california-privacy-rights',
      title: 'California Privacy Rights (CCPA)',
      description: 'If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). You have the right to: (1) Know what personal information we collect, use, disclose, and sell; (2) Request deletion of your personal information; (3) Opt-out of the sale of your personal information (we do not sell personal information); (4) Non-discrimination for exercising your privacy rights; and (5) Access your personal information in a portable format. To exercise any of these California privacy rights, please contact us using the information provided in the Contact Us section. We will respond to your request within the timeframes required by California law.',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Privacy Policy</h1>
          <p>Protecting Your Personal Information</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Your Privacy Matters to Us</h2>
              <p>
                Capital Review Management LLC is committed to safeguarding the privacy and confidentiality of personal information.
                This Privacy Policy outlines how we collect, use, disclose, and protect individuals' personal information
                in connection with our account recovery services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <div className="legal-page">
        {privacySections.map((section, index) => (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={sectionCards[section.id].subject} bullets={sectionCards[section.id].bullets} />
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
                      <SectionCard subject={sectionCards[section.id].subject} bullets={sectionCards[section.id].bullets} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Changes to Policy Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2>Changes to This Policy</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              We may update this Privacy Policy at any time. Any material changes will be communicated through our website
              or other appropriate channels. We encourage you to review this policy periodically to stay informed about
              how we protect your information.
            </p>
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
                For any questions or concerns regarding this Privacy Policy, please contact us at:
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

      {/* Copyright Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#6b7280' }}>
              Copyright © 2026 Capital Review Management – All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
