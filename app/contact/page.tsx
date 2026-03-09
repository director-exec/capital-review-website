'use client'

import Link from 'next/link'

export default function ContactPage() {
  const contactCards = [
    {
      id: 'account-resolution',
      title: 'Looking to Settle an Account?',
      description: 'If you have been contacted by Capital Review Management and wish to review your account or submit a payment, our dedicated staff is ready to help you.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      email: 'validation@capitalreviewmgt.com'
    },
    {
      id: 'receivables-help',
      title: 'Seeking Receivables Solutions?',
      description: 'Want to enhance your collections or optimize your accounts receivable workflow? Reach out to our solutions group to discover how we assist clients in boosting recovery rates while safeguarding their reputation.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      email: 'info@capitalreviewmgt.com'
    },
    {
      id: 'client-support',
      title: 'Existing Client?',
      description: 'If you are a current client requiring assistance, report access, or a service modification, we are always available for you.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      email: 'info@capitalreviewmgt.com'
    },
    {
      id: 'hr-verification',
      title: 'Employment Verification or HR Inquiries?',
      description: 'Looking to confirm employment status, check office schedules, or ask about employee benefits?',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      email: 'info@capitalreviewmgt.com'
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Reach Out to Us</h1>
          <p>We Will Direct You to the Appropriate Department</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Got a Question or Require Support?</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '2rem', color: '#b0b8c8' }}>
              Choose the option below that most closely matches your needs — our team stands ready to assist.
              We are here to address any inquiries or issues you might have.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a
                href="tel:866-766-2692"
                className="content-block"
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                Call Us: 866-766-2692
              </a>
              <a
                href="mailto:info@capitalreviewmgt.com"
                className="content-block"
                style={{ display: 'inline-block', textDecoration: 'none', backgroundColor: '#5a6b7c' }}
              >
                Email Us: info@capitalreviewmgt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="contact-cards">
              {contactCards.map((card) => {
                const isAccountResolution = card.id === 'account-resolution';
                const isReceivablesHelp = card.id === 'receivables-help';
                const isClickable = isAccountResolution || isReceivablesHelp;
                const CardContent = (
                  <div className="contact-card">
                    <div style={{ position: 'relative', height: '12rem' }}>
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${card.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      ></div>
                      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', textAlign: 'center', padding: '1rem' }}>{card.title}</h3>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ color: '#b0b8c8', lineHeight: '1.6', marginBottom: '1rem' }}>
                        {card.description}
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#c9a84c', margin: '0.5rem 0' }}>Email: {card.email}</p>
                        <p style={{ fontSize: '0.875rem', color: '#8892a4', margin: '0.5rem 0' }}>Phone: 866-766-2692</p>
                      </div>
                    </div>
                  </div>
                );

                return isClickable ? (
                  <Link
                    key={card.id}
                    href={isAccountResolution ? "/consumer-tools/request-account-validation" : "/solutions"}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div key={card.id}>
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
            Prepared to take the next step?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:866-766-2692" className="content-block" style={{ backgroundColor: 'white', color: '#0a0f1c', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              Call Us Now!
            </a>
            <a href="mailto:info@capitalreviewmgt.com" className="content-block" style={{ backgroundColor: 'white', color: '#0a0f1c', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}