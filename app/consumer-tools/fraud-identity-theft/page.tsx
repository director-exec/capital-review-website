'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'immediate-action': {
    subject: 'Immediate Fraud Response',
    bullets: [
      { text: 'Contact Capital Review Management immediately at 866-766-2692 for urgent fraud assistance and account protection.' },
      { text: 'Your account will be flagged for immediate security review and protective measures will be implemented.' },
      { text: 'Our dedicated fraud team prioritizes your privacy and works quickly to secure your financial information.' },
    ],
  },
  'ftc-reporting': {
    subject: 'Federal Trade Commission Report',
    bullets: [
      { text: 'File a formal identity theft report at IdentityTheft.gov to create an official FTC Identity Theft Report.' },
      { text: 'This comprehensive report is often required by creditors, banks, and credit bureaus to resolve disputes.' },
      { text: 'The FTC report establishes your legal rights and provides a recovery plan tailored to your situation.' },
    ],
  },
  'police-report': {
    subject: 'Law Enforcement Documentation',
    bullets: [
      { text: 'File a police report with your local law enforcement to create an official record of the identity theft crime.' },
      { text: 'Bring your FTC report, government-issued photo ID, proof of address, and any evidence of the theft.' },
      { text: 'A police report may be required by creditors and credit bureaus to process fraud claims and disputes.' },
    ],
  },
  'what-to-expect': {
    subject: 'Our Commitment to You',
    bullets: [
      { text: 'Immediate account review with enhanced security measures applied to protect your information.' },
      { text: 'Full assistance with documentation, reporting guidance, and coordination with relevant agencies.' },
      { text: 'Regular status updates on your case and ongoing guidance to protect your identity going forward.' },
    ],
  },
  'additional-resources': {
    subject: 'Key Resource Contacts',
    bullets: [
      { text: 'Credit bureaus (Equifax, Experian, TransUnion) can place fraud alerts and freeze your credit reports.' },
      { text: 'Federal agencies (FTC, Social Security Administration, IRS) handle identity theft reports and tax fraud.' },
      { text: 'These organizations work together to help you recover from identity theft and prevent future incidents.' },
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
      description: 'If you believe your account has been impacted by fraud or identity theft, please contact Capital Review Management immediately so we can assist you in resolving the matter with urgency and care. Your privacy and security are our priority. Call us at 866-766-2692 for immediate assistance.',
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
            <p className="text-xl font-semibold">866-766-2692</p>
            <p className="mt-4">
              <strong>Compliance Email:</strong> compliance@capitalreviewmgt.com
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
