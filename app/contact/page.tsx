export default function ContactPage() {
  const contactCards = [
    {
      id: 'account-resolution',
      title: 'Trying to Resolve an Account?',
      description: 'If you\'ve received a communication from Capital Review Management and want to discuss your account or make a payment, our team is here to assist you.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      email: 'validation@capitalreviewmgt.com'
    },
    {
      id: 'receivables-help',
      title: 'Need Help With Receivables?',
      description: 'Looking to improve collections or streamline your accounts receivable process? Contact our solutions team to learn how we help clients maximize recovery while protecting their brand.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      email: 'info@capitalreviewmgt.com'
    },
    {
      id: 'client-support',
      title: 'Already a Client?',
      description: 'If you\'re a current client and need support, reporting access, or a service update, we\'re always here for you.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      email: 'client@capitalreviewmgt.com'
    },
    {
      id: 'hr-verification',
      title: 'Employment Verification or HR Questions?',
      description: 'Need to verify employment, check holiday hours, or inquire about benefits?',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      email: 'hr@capitalreviewmgt.com'
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Contact Us</h1>
          <p>Let's Get You to the Right Place</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2>Have a Question or Need Assistance?</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '2rem' }}>
              Select the option below that best matches your situation — we're ready to help.
              Our team is here to assist you with any questions or concerns you may have.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:866-766-2692"
                className="subpage-btn"
              >
                Call Us: 866-766-2692
              </a>
              <a
                href="mailto:info@capitalreviewmgt.com"
                className="subpage-btn"
                style={{ backgroundColor: '#7a8a9e' }}
              >
                Email Us: info@capitalreviewmgt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {contactCards.map((card) => {
              const isAccountResolution = card.id === 'account-resolution';
              const isReceivablesHelp = card.id === 'receivables-help';
              const isClickable = isAccountResolution || isReceivablesHelp;
              const CardContent = (
                <div className="contact-card">
                  <div className="contact-card-image">
                    <div
                      className="contact-card-image-bg"
                      style={{ backgroundImage: `url(${card.image})` }}
                    ></div>
                    <div className="contact-card-image-overlay">
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                  <div className="contact-card-body">
                    <p>{card.description}</p>
                    <div className="contact-card-info">
                      <p className="email">Email: {card.email}</p>
                      <p className="phone">Phone: 866-766-2692</p>
                    </div>
                  </div>
                </div>
              );

              return isClickable ? (
                <a
                  key={card.id}
                  href={isAccountResolution ? "/consumer-tools/request-account-validation" : "/solutions"}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  {CardContent}
                </a>
              ) : (
                <div key={card.id}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Ready to get started?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href="tel:866-766-2692" className="subpage-btn" style={{ backgroundColor: 'white', color: '#1c2a3f' }}>
              Call Us Today!
            </a>
            <a href="mailto:info@capitalreviewmgt.com" className="subpage-btn" style={{ backgroundColor: 'white', color: '#1c2a3f' }}>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
