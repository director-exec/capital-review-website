import Link from 'next/link'
import SectionCard from '../components/SectionCard'

export default function PrivacyPolicyPage() {
  const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
    'information-collection': {
      subject: 'Personal Data Categories (CRM-4.1)',
      bullets: [
        { text: 'Contact information including name, mailing address, email, and phone number — all protected with AES-256 encryption (CRM-4.1) within Maxify CRM (CRM-2.1).' },
        { text: 'Financial details such as payment history, bank information, and account balances secured with PCI DSS-certified tokenization (CRM-3.8) and role-based access controls (CRM-4.4).' },
        { text: 'Identification data and communications records including government-issued IDs, call recordings with 3-year retention (CRM-2.6), and all correspondence maintained with full audit trails.' },
      ],
    },
    'information-usage': {
      subject: 'Data Sharing Standards (CRM-1.6)',
      bullets: [
        { text: 'We do not sell your personal information — all data handled per PHI/privacy safeguards (CRM-1.6) and used solely for legitimate debt collection operations under FDCPA compliance (CRM-1.1).' },
        { text: 'Information shared only with vetted affiliates and service providers per CRM-5.1 standards — all transfers encrypted with TLS 1.2+ in transit (CRM-4.1).' },
        { text: 'Disclosure occurs only when required by law, regulation, or legal process — all disclosures documented with full audit trails and state-specific compliance matrices (CRM-9.x).' },
      ],
    },
    'data-security': {
      subject: 'Security Safeguards (CRM-4.3)',
      bullets: [
        { text: 'AES-256 encryption at rest and TLS 1.2+ in transit (CRM-4.1) with MFA-protected access, 12-character passwords, and 90-day rotation per CRM-4.4 standards.' },
        { text: 'Disaster recovery per CRM-4.3: 4-hour CRM RTO, 8-hour portal RTO, 24-hour full operations — quarterly backup tests and 5-minute automatic screen lock on all terminals.' },
        { text: 'Role-based access controls (CRM-4.4) with 24-hour access revocation for terminated employees and 15-minute session timeouts across all Maxify CRM systems.' },
      ],
    },
    'text-messaging': {
      subject: 'SMS Privacy Protection (CRM-2.4)',
      bullets: [
        { text: 'Mobile numbers, text messaging opt-in data, and consent information are never shared, transferred, or sold — protected under TCPA consent framework (CRM-1.5) with 4-year retention.' },
        { text: 'Text communications governed by CRM-2.4 protocols with 1-hour opt-out processing and all SMS records maintained in Maxify CRM (CRM-2.1) with full audit trails.' },
        { text: 'AI-assisted text interactions comply with CRM-8.3 disclosure requirements — 10 random AI communications reviewed weekly for quality assurance.' },
      ],
    },
    'your-rights': {
      subject: 'Consumer Data Rights (CRM-1.1)',
      bullets: [
        { text: 'You have the right to access, review, and request copies of personal information per FDCPA compliance (CRM-1.1) — requests processed through Maxify CRM (CRM-2.1) with full documentation.' },
        { text: 'You may request updates or corrections to inaccurate information at any time — all changes tracked with role-based access controls (CRM-4.4) and complete audit trails.' },
        { text: 'Deletion requests processed per applicable law with PHI/privacy safeguards (CRM-1.6) — contact us at info@capitalreviewmanagement.com or 888-681-0360.' },
      ],
    },
    'california-privacy-rights': {
      subject: 'CCPA Consumer Rights (CRM-1.1)',
      bullets: [
        { text: 'California residents have the right to know what personal information is collected, used, and disclosed — Capital Review does not sell consumer data per CRM-1.6 privacy safeguards.' },
        { text: 'Request deletion, opt out of data sales (we do not sell data), and access data in portable format — all requests logged in Maxify CRM (CRM-2.1) with 3-year retention (CRM-2.6).' },
        { text: 'All California privacy rights requests responded to within statutory timeframes per CRM-1.1 regulatory standards with state-specific compliance matrices (CRM-9.x) applied.' },
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
                <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0B1A14' }}>888-681-0360</p>
                <p>
                  <strong>Email:</strong> info@capitalreviewmanagement.com
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
