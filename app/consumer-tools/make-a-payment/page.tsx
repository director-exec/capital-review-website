import Link from 'next/link'

export default function MakePaymentPage() {
  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Make a Payment</h1>
          <p>Secure Online Payment Options</p>
        </div>
      </section>

      {/* Payment Portal Coming Soon */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-intro-inner">
            <div className="info-panel" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <svg style={{ margin: '0 auto', height: '5rem', width: '5rem', color: 'var(--accent-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem' }}>Payment Portal Coming Soon</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We are currently building a new secure online payment system for your convenience. This feature will be available shortly. In the meantime, please contact us directly to arrange a payment or discuss your account options.
              </p>
              <div className="info-panel" style={{ marginBottom: '2rem' }}>
                <h3>Get in Touch With Us</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>866-766-2692</p>
                <p>info@capitalreviewmgt.com</p>
              </div>
              <Link href="/contact" className="subpage-btn">Contact Us for Assistance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Payment Methods */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Alternative Payment Methods</h2>
            <p>While our online portal is being developed, you can still resolve your account by reaching out to our team via phone or email. Our representatives are standing by to walk you through available payment arrangements.</p>
          </div>
          <div className="subpage-cards" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="subpage-card">
              <h3>Phone Payments</h3>
              <p>Speak with one of our account specialists at 866-766-2692 to process a payment over the phone securely.</p>
            </div>
            <div className="subpage-card">
              <h3>Mail-In Payments</h3>
              <p>Send your payment to: 2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Questions about your balance or payment arrangements?</h3>
          <p>We are here to help.</p>
          <Link href="/contact" className="subpage-btn">Reach Out to Us</Link>
        </div>
      </section>
    </>
  )
}
