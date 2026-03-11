import Link from 'next/link'
import SectionCard from '../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'make-payment': {
    subject: 'Secure Payment Processing (CRM-3.8)',
    bullets: [
      { text: 'PCI DSS-certified tokenization (CRM-3.8) secures every transaction — phone, mail, and portal payments processed with AES-256 encryption (CRM-4.1).' },
      { text: 'Standing settlement parameters (CRM-3.5) enable flexible payment arrangements through Maxify CRM with full audit trail documentation.' },
      { text: 'All payment processing follows FDCPA compliance standards (CRM-1.1) with role-based access controls (CRM-4.4) protecting your financial data.' },
    ],
  },
  'account-validation': {
    subject: 'Account Verification Process (CRM-2.1)',
    bullets: [
      { text: 'Request detailed account validation through Maxify CRM (CRM-2.1) — delivered directly to your inbox with AES-256 encrypted transmission (CRM-4.1).' },
      { text: 'Includes full balance breakdown, creditor information, and payment history per FDCPA validation requirements (CRM-1.1).' },
      { text: 'Processed within 24 hours by trained specialists (CRM-6.4) with 85% minimum competency scores and QA-reviewed handling.' },
    ],
  },
  'bankruptcy-notification': {
    subject: 'Bankruptcy Filing Support (CRM-7.3)',
    bullets: [
      { text: 'Submit bankruptcy filing details securely — all uploads protected with AES-256 encryption at rest and TLS 1.2+ in transit (CRM-4.1).' },
      { text: 'Immediate litigation holds per CRM-7.3 with evidence preservation protocols activated upon receipt of filing notification.' },
      { text: 'Compliance team ensures full regulatory alignment (CRM-1.1) with 3-year documentation retention (CRM-2.6) for all bankruptcy communications.' },
    ],
  },
  'fraud-identity-theft': {
    subject: 'Fraud Protection Assistance (CRM-4.1)',
    bullets: [
      { text: 'Report suspected fraud for immediate account review — security measures per CRM-4.1 with role-based access controls (CRM-4.4) and MFA protection.' },
      { text: 'Dedicated fraud team provides guidance on FTC reports, police reports, and credit bureau alerts with PHI/privacy safeguards per CRM-1.6.' },
      { text: 'Full investigation with 3-year record retention (CRM-2.6) and state-specific compliance matrices (CRM-9.x) applied to every fraud case.' },
    ],
  },
  'remove-number': {
    subject: 'Contact Preference Management (CRM-1.5)',
    bullets: [
      { text: 'Request phone number removal or update contact preferences per TCPA consent framework (CRM-1.5) with 24-hour opt-out processing.' },
      { text: 'Changes reviewed within 24 hours and implemented within 5 business days — all updates tracked in Maxify CRM (CRM-2.1) with full audit trails.' },
      { text: '7-in-7 call frequency rules (CRM-1.3) and 1-hour text opt-out processing (CRM-2.4) ensure your preferences are respected immediately.' },
    ],
  },
  'feedback': {
    subject: 'Your Feedback Matters (CRM-7.1)',
    bullets: [
      { text: 'Submit compliments or complaints — every submission reviewed by compliance and quality teams per CRM-7.1 zero-tolerance resolution standards.' },
      { text: 'Monthly QA reviews of 5+ calls per specialist (CRM-6.4) and 4-step corrective action process (CRM-6.6) ensure continuous improvement.' },
      { text: 'Complaints escalated with 15-day CFPB response window (CRM-7.1) — you will receive a response within 10 business days.' },
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
