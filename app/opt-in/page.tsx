import Link from 'next/link'

export default function OptInPage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Opt In</h1>
          <p>Sign Up for Text Message Notifications</p>
        </div>
      </section>

      {/* SMS Opt-In Disclosure Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2>Want to text? TEXT JOIN to 79436</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginTop: '1.5rem' }}>
              By signing up via text, you agree to receive Recurring messages from
              Capital Review Management regarding your account, such as payment
              reminders, at the cell number used when signing up. Reply HELP for help
              &amp; STOP to cancel. Msg freq may vary. Msg &amp; Data rates may apply. View{' '}
              <Link href="/terms" style={{ color: '#1c2a3f', textDecoration: 'underline' }}>SMS Terms</Link>
              {' '}&amp;{' '}
              <Link href="/privacy" style={{ color: '#1c2a3f', textDecoration: 'underline' }}>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Contact Us</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '2' }}>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@capitalreviewmanagement.com" style={{ color: '#1c2a3f', textDecoration: 'underline' }}>
                  info@capitalreviewmanagement.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:888-681-0360" style={{ color: '#1c2a3f', textDecoration: 'underline' }}>
                  888-681-0360
                </a>
              </p>
              <p>
                <strong>Address:</strong>{' '}
                2200 North Frazier Suite 120 Box 142, Conroe, TX 77301
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
