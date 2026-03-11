'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'immediate-action': {
    subject: 'Immediate Fraud Response (CRM-4.1)',
    bullets: [
      { text: 'Contact Capital Review Management at 888-681-0360 — immediate account security measures per CRM-4.1 with MFA protection and role-based access lockdown (CRM-4.4).' },
      { text: 'Account flagged for priority review in Maxify CRM (CRM-2.1) with AES-256 encryption (CRM-4.1) safeguarding all fraud investigation data.' },
      { text: 'Dedicated fraud team trained per CRM-6.4 standards with 85% minimum competency — privacy safeguards per CRM-1.6 applied to every fraud case.' },
    ],
  },
  'ftc-reporting': {
    subject: 'Federal Trade Commission Report (CRM-7.1)',
    bullets: [
      { text: 'File a formal identity theft report at IdentityTheft.gov — Capital Review coordinates with 15-day CFPB response protocols (CRM-7.1) on all fraud disputes.' },
      { text: 'FTC Identity Theft Report required by creditors and bureaus — our compliance team per CRM-1.1 guides you through every step of the filing process.' },
      { text: 'All fraud documentation maintained with 3-year retention (CRM-2.6) and evidence preservation protocols (CRM-7.3) for full legal defensibility.' },
    ],
  },
  'police-report': {
    subject: 'Law Enforcement Documentation (CRM-7.3)',
    bullets: [
      { text: 'File a police report with local law enforcement — Capital Review maintains immediate litigation holds (CRM-7.3) pending fraud investigation outcomes.' },
      { text: 'Bring FTC report, government-issued ID, proof of address, and evidence — our team assists with documentation per FDCPA compliance (CRM-1.1).' },
      { text: 'Police reports processed through Maxify CRM (CRM-2.1) with full audit trails and state-specific compliance matrices (CRM-9.x) applied.' },
    ],
  },
  'what-to-expect': {
    subject: 'Our Commitment to You (CRM-6.4)',
    bullets: [
      { text: 'Immediate account review with AES-256 encryption (CRM-4.1), TLS 1.2+ in transit, and enhanced security measures per CRM-4.3 disaster recovery protocols.' },
      { text: 'Full assistance from specialists trained per CRM-6.4 with monthly QA reviews of 5+ cases per team member and 4-step corrective action process (CRM-6.6).' },
      { text: 'Regular status updates through Maxify CRM (CRM-2.1) omnichannel communication — all interactions recorded with 3-year retention (CRM-2.6).' },
    ],
  },
  'additional-resources': {
    subject: 'Key Resource Contacts (CRM-1.4)',
    bullets: [
      { text: 'Credit bureaus (Equifax, Experian, TransUnion) — Capital Review\'s three-bureau integration (CRM-1.4) enables coordinated fraud alerts and credit freezes.' },
      { text: 'Federal agencies (FTC, SSA, IRS) handle identity theft reports — our compliance team (CRM-1.1) coordinates with all relevant regulatory bodies.' },
      { text: 'PHI/privacy safeguards (CRM-1.6) protect your data throughout the fraud recovery process with PCI DSS tokenization (CRM-3.8) on all financial records.' },
    ],
  },
}

export default function FraudIdentityTheftPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

  const fraudSections = [
    {
      id: 'immediate-action',
      title: 'Immediate Action Required',
      description: 'If you believe your account has been impacted by fraud or identity theft, please contact Capital Review Management immediately so we can assist you in resolving the matter with urgency and care. Your privacy and security are our priority. Call us at 888-681-0360 for immediate assistance.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'ftc-reporting',
      title: 'Report Identity Theft to the FTC',
      description: 'You can also file a formal identity theft report with the Federal Trade Commission. Visit IdentityTheft.gov to create a comprehensive report that will help you resolve the issue with creditors, banks, and credit bureaus. This official report is often required by financial institutions and can help protect your rights.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'police-report',
      title: 'File a Police Report',
      description: 'In cases of identity theft, it\'s important to file a police report with your local law enforcement agency. This creates an official record of the crime and may be required by creditors, banks, and credit bureaus. Bring your FTC Identity Theft Report, government-issued photo ID, proof of address, and any evidence of the identity theft.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-to-expect',
      title: 'What to Expect',
      description: 'When you report fraud or identity theft to us, you can expect immediate account review and security measures, assistance with documentation and reporting, guidance on protecting your identity going forward, and regular updates on the status of your case. We work quickly to resolve these issues and protect your financial security.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'additional-resources',
      title: 'Additional Resources',
      description: 'We provide access to important resources including credit bureaus (Equifax, Experian, TransUnion) and federal agencies (FTC, Social Security Administration, IRS). These organizations can help you place fraud alerts, freeze your credit, and report identity theft to the appropriate authorities.',
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
          style={{ backgroundImage: 'url(/Pages/fraud_hero_bg.png)' }}>
        </div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Fraud & Identity Theft</h1>
          <p>Suspect Fraud? We're Here to Help.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-intro">
        <div className="subpage-intro-inner">
          <h2>Protecting Your Identity and Financial Security</h2>
          <p>
            If you believe your account has been impacted by fraud or identity theft,
            Capital Review Management is here to help you resolve the matter with urgency and care.
            We take these situations seriously and will work quickly to protect your financial security.
          </p>
        </div>
      </section>

      {/* Fraud Sections */}
      {fraudSections.map((section) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div>
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
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

      {/* Resources Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Important Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="subpage-card">
              <h3>Credit Bureaus</h3>
              <div className="space-y-2">
                <p><strong>Equifax:</strong> 1-800-525-6285</p>
                <p><strong>Experian:</strong> 1-888-397-3742</p>
                <p><strong>TransUnion:</strong> 1-800-680-7289</p>
              </div>
            </div>
            <div className="subpage-card">
              <h3>Federal Agencies</h3>
              <div className="space-y-2">
                <p><strong>FTC:</strong> 1-877-438-4338</p>
                <p><strong>Social Security:</strong> 1-800-772-1213</p>
                <p><strong>IRS:</strong> 1-800-908-4490</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Contact Information</h2>
          <div className="text-center">
            <p className="font-semibold">Capital Review Management</p>
            <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            <p className="text-xl font-semibold">888-681-0360</p>
            <p className="mt-4">
              <strong>Compliance Email:</strong> info@capitalreviewmanagement.com
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclosure Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Legal Disclosure</h2>
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need immediate assistance with fraud or identity theft?</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today!
          </Link>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div
          className="disclosure-overlay"
          onClick={closeModal}
        >
          <div
            className="disclosure-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>IMPORTANT</h3>
            <p>
              This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
            </p>
            <p>
              Calls to and from this company may be monitored and/or recorded.
            </p>
            <button
              onClick={closeModal}
              className="disclosure-modal-btn"
            >
              I Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
