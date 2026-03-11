import Link from 'next/link'
import SectionCard from '../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'make-payment': {
    subject: 'Flexible Payment Options',
    bullets: [
      { text: 'Make secure payments by phone or mail — convenient options to fit your schedule.' },
      { text: 'Multiple payment methods accepted including checks, money orders, and phone payments.' },
      { text: 'Our team is available to help you set up a payment arrangement tailored to your budget.' },
    ],
  },
  'account-validation': {
    subject: 'Account Verification Process',
    bullets: [
      { text: 'Request a detailed account validation delivered directly to your inbox for convenient review.' },
      { text: 'Includes full balance breakdown, creditor information, and payment history for your records.' },
      { text: 'Processed within 24 hours — our team will follow up to confirm receipt and answer questions.' },
    ],
  },
  'bankruptcy-notification': {
    subject: 'Bankruptcy Filing Support',
    bullets: [
      { text: 'Submit your bankruptcy filing details securely through our online notification form.' },
      { text: 'Upload case documentation including petition, schedules, and court notices directly through the portal.' },
      { text: 'Our compliance team ensures your account is handled in full accordance with bankruptcy law.' },
    ],
  },
  'fraud-identity-theft': {
    subject: 'Fraud Protection Assistance',
    bullets: [
      { text: 'Report suspected fraud or identity theft for immediate account review and security measures.' },
      { text: 'Our dedicated team provides guidance on filing FTC reports, police reports, and credit bureau alerts.' },
      { text: 'Receive step-by-step support to protect your identity and resolve fraudulent activity on your account.' },
    ],
  },
  'remove-number': {
    subject: 'Contact Preference Management',
    bullets: [
      { text: 'Request removal of incorrect phone numbers or update your preferred contact number on file.' },
      { text: 'Changes are reviewed within 24 hours and fully implemented within 5 business days.' },
      { text: 'Provide an alternative contact number and we will begin using it immediately upon processing.' },
    ],
  },
  'feedback': {
    subject: 'Your Feedback Matters',
    bullets: [
      { text: 'Submit compliments to recognize excellent service or file complaints for prompt resolution.' },
      { text: 'Every submission is reviewed by our internal compliance and service quality teams.' },
      { text: 'Complaints are escalated and investigated — you will receive a response within 10 business days.' },
    ],
  },
}

export default function ConsumerToolsPage() {
  const consumerTools = [
    {
      id: 'make-payment',
      title: 'Make a Payment',
      description: 'Use our secure, convenient payment options to resolve your account quickly and easily. We offer multiple payment methods including phone payments and mail-in options to accommodate your preferences.',
      link: '/consumer-tools/make-a-payment',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-validation',
      title: 'Request Account Validation',
      description: 'Get account validation for your account delivered to your inbox. This detailed breakdown helps you understand your account balance and payment history for better financial planning.',
      link: '/consumer-tools/request-account-validation',
      external: false,
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'bankruptcy-notification',
      title: 'Bankruptcy Notification',
      description: 'Notify us if you\'ve filed for bankruptcy to ensure proper handling of your account. This helps us comply with bankruptcy laws and ensures your account is handled appropriately during the bankruptcy process.',
      link: '/consumer-tools/bankruptcy-notification',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'fraud-identity-theft',
      title: 'Fraud & Identity Theft',
      description: 'Report suspected fraud or identity theft for immediate assistance and protection. Our dedicated team will help you resolve fraudulent activity and protect your personal information.',
      link: '/consumer-tools/fraud-identity-theft',
      external: false,
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'remove-number',
      title: 'Remove My Number',
      description: 'Update your contact preferences or remove incorrect phone numbers from our records. This ensures we have your current contact information and respects your communication preferences.',
      link: '/consumer-tools/remove-my-number',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'feedback',
      title: 'Submit Feedback',
      description: 'Share compliments or complaints to help us improve our service and better assist you. Your feedback is valuable and helps us maintain the highest standards of customer service.',
      link: '/consumer-tools/submit-compliment-complaint',
      external: false,
      background: 'cream',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Consumer Tools</h1>
          <p>Self-service options designed to help you manage your account efficiently and securely.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-intro">
        <div className="subpage-intro-inner">
          <h2>Self-Service Options for Your Account</h2>
          <p>
            At Capital Review Management, we believe in providing you with convenient, secure ways to manage your account.
            Below you'll find a variety of self-service tools designed to help you resolve issues, update information,
            and get the assistance you need quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {consumerTools.map((tool) => {
        const card = sectionCards[tool.id]
        return (
          <section key={tool.id} className={`subpage-section ${tool.background === 'cream' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {tool.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div>
                      <h2>{tool.title}</h2>
                      <p>{tool.description}</p>
                      {tool.external ? (
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="subpage-btn"
                        >
                          Access Tool
                        </a>
                      ) : (
                        <Link href={tool.link} className="subpage-btn">
                          Learn More
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{tool.title}</h2>
                      <p>{tool.description}</p>
                      {tool.external ? (
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="subpage-btn"
                        >
                          Access Tool
                        </a>
                      ) : (
                        <Link href={tool.link} className="subpage-btn">
                          Learn More
                        </Link>
                      )}
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

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need additional help? Our team is here to assist you with any questions or concerns.</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
}
