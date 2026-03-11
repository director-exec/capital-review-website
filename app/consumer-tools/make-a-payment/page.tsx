import Link from 'next/link'

export default function MakePaymentPage() {
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
          <h1>Make a Payment</h1>
          <p>Secure, convenient payment options to resolve your account.</p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Payment Options</h2>
              <p>
                Capital Review Management offers multiple convenient ways to make a payment on your account.
                Choose the option that works best for you below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div className="subpage-cards">
            <div className="subpage-card">
              <h3>Pay by Phone</h3>
              <p>
                Call our office during business hours to make a secure payment over the phone with one of our representatives.
              </p>
              <a href="tel:888-681-0360" className="subpage-btn">
                Call 888-681-0360
              </a>
            </div>
            <div className="subpage-card">
              <h3>Pay by Mail</h3>
              <p>
                Send your payment by check or money order to our office. Please include your account number on all correspondence.
              </p>
              <p style={{ marginTop: '1rem', fontWeight: '600' }}>
                Capital Review Management<br />
                2200 North Frazier Suite 120 Box 142<br />
                Conroe, TX 77301
              </p>
            </div>
            <div className="subpage-card">
              <h3>Online Portal</h3>
              <p>
                Our secure online payment portal is coming soon. In the meantime, please use one of the other payment methods listed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need help making a payment? Our team is here to assist you.</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
