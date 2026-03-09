import Link from 'next/link'

export default function FraudIdentityTheftPage() {
  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Fraud &amp; Identity Theft</h1>
          <p>Report Suspected Fraud or Identity Theft</p>
        </div>
      </section>

      {/* Intro */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-grid">
            <div className="subpage-text-col">
              <h2>If You Suspect Fraud</h2>
              <p>Capital Review Management takes fraud and identity theft seriously. If you believe an account has been placed with us as the result of fraud or identity theft, we encourage you to notify us immediately so we can take appropriate steps to investigate.</p>
              <p>You may also contact the Federal Trade Commission (FTC) and the three major credit bureaus to place fraud alerts on your credit file.</p>
            </div>
            <div className="subpage-image-col">
              <img src="/Pages/Calculator_Writing_Pro.jpeg" alt="Fraud reporting" className="subpage-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Take */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Steps to Take</h2>
            <p>If you believe you are a victim of identity theft, we recommend taking the following steps immediately.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>File a Report with the FTC</h3>
              <p>Visit IdentityTheft.gov or call 1-877-438-4338 to file an identity theft report with the Federal Trade Commission.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>File a Police Report</h3>
              <p>Contact your local law enforcement agency and file an official police report documenting the identity theft. Keep a copy for your records.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Place Fraud Alerts</h3>
              <p>Contact any one of the three major credit bureaus to place a fraud alert on your credit file. That bureau will notify the other two.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Notify Capital Review Management</h3>
              <p>Contact us at 866-766-2692 or email compliance@capitalreviewmgt.com with your account number and documentation of the fraud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Bureau Contacts */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Credit Bureau Contact Information</h2>
            <p>You can contact any of the three major credit bureaus to place a fraud alert or credit freeze on your file.</p>
          </div>
          <div className="subpage-cards">
            <div className="subpage-card">
              <h3>Equifax</h3>
              <p>1-800-525-6285</p>
              <p>equifax.com</p>
            </div>
            <div className="subpage-card">
              <h3>Experian</h3>
              <p>1-888-397-3742</p>
              <p>experian.com</p>
            </div>
            <div className="subpage-card">
              <h3>TransUnion</h3>
              <p>1-800-680-7289</p>
              <p>transunion.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Additional Resources</h2>
          </div>
          <div className="subpage-cards" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="subpage-card">
              <h3>Federal Trade Commission</h3>
              <p>IdentityTheft.gov provides a personalized recovery plan based on your situation.</p>
              <p>1-877-438-4338</p>
            </div>
            <div className="subpage-card">
              <h3>Consumer Financial Protection Bureau</h3>
              <p>The CFPB provides resources and tools to help consumers resolve financial disputes.</p>
              <p>consumerfinance.gov</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to Report Fraud?</h3>
          <p>Call us at 866-766-2692 or email compliance@capitalreviewmgt.com</p>
          <Link href="/consumer-tools/dispute-my-account" className="subpage-btn">Submit a Dispute</Link>
        </div>
      </section>
    </>
  )
}
