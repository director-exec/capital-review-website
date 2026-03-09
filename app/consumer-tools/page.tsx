import Link from 'next/link'

export default function ConsumerToolsPage() {
  const consumerTools = [
    {
      id: 'make-payment',
      title: 'Make a Payment',
      description: 'Use our secure, convenient payment options to resolve your account quickly and easily. We offer multiple payment methods including online payments, phone payments, and mail-in options to accommodate your preferences.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      link: '/consumer-tools/make-a-payment',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-validation',
      title: 'Request Account Validation',
      description: 'Get account validation for your account delivered to your inbox. This detailed breakdown helps you understand your account balance and payment history for better financial planning.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      link: '/consumer-tools/request-account-validation',
      external: false,
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'bankruptcy-notification',
      title: 'Bankruptcy Notification',
      description: 'Notify us if you\'ve filed for bankruptcy to ensure proper handling of your account. This helps us comply with bankruptcy laws and ensures your account is handled appropriately during the bankruptcy process.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/consumer-tools/bankruptcy-notification',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'fraud-identity-theft',
      title: 'Fraud & Identity Theft',
      description: 'Report suspected fraud or identity theft for immediate assistance and protection. Our dedicated team will help you resolve fraudulent activity and protect your personal information.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?w=800',
      link: '/consumer-tools/fraud-identity-theft',
      external: false,
      background: 'cream',
      imageLeft: true
    },
    {
      id: 'remove-number',
      title: 'Remove My Number',
      description: 'Update your contact preferences or remove incorrect phone numbers from our records. This ensures we have your current contact information and respects your communication preferences.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      link: '/consumer-tools/remove-my-number',
      external: false,
      background: 'white',
      imageLeft: false
    },
    {
      id: 'feedback',
      title: 'Submit Feedback',
      description: 'Share compliments or complaints to help us improve our service and better assist you. Your feedback is valuable and helps us maintain the highest standards of customer service.',
      image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=800',
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
      {consumerTools.map((tool, index) => (
        <section key={tool.id} className={`subpage-section ${tool.background === 'cream' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
          <div className="subpage-container">
            <div className="subpage-grid">
              {tool.imageLeft ? (
                <>
                  <div className="subpage-image-col">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="subpage-image"
                    />
                  </div>
                  <div className="subpage-text-col">
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
                  <div className="subpage-text-col">
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
                  <div className="subpage-image-col">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="subpage-image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

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