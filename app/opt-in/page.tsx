'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function OptInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'opt-in',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! Your information has been submitted successfully.')
        setFormData({ firstName: '', lastName: '', email: '' })
      } else {
        setSubmitMessage('There was an error submitting your request. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Opt In</h1>
          <p>Sign Up for Text Message Notifications</p>
        </div>
      </section>

      {/* SMS Opt-In Content Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left Column: SMS Disclosure */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Want to text?</h2>
              <p style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', lineHeight: '1.1' }}>
                TEXT <span style={{ letterSpacing: '0.05em' }}>JOIN</span> to 79436
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.85', marginBottom: '2rem' }}>
                By signing up via text, you agree to receive Recurring messages from
                Capital Review Management regarding your account, such as payment
                reminders, at the cell number used when signing up. Reply HELP for help
                &amp; STOP to cancel. Msg freq may vary. Msg &amp; Data rates may apply.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.85' }}>
                View{' '}
                <Link href="/terms" style={{ color: '#6b9fd4', textDecoration: 'underline', fontWeight: '600' }}>SMS Terms</Link>
                {' '}&amp;{' '}
                <Link href="/privacy" style={{ color: '#6b9fd4', textDecoration: 'underline', fontWeight: '600' }}>Privacy Policy</Link>
              </p>
            </div>

            {/* Right Column: Form — no card box, matches site theme */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>Contact us.</h3>

              <form onSubmit={handleSubmit} className="subpage-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '1.25rem' }}>Name</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="firstName" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                        First Name <span style={{ opacity: 0.6, fontWeight: '400' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                        Last Name <span style={{ opacity: 0.6, fontWeight: '400' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                    Email <span style={{ opacity: 0.6, fontWeight: '400' }}>(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      opacity: isSubmitting ? 0.5 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>

                {submitMessage && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: submitMessage.includes('error') ? 'rgba(220,38,38,0.15)' : 'rgba(34,197,94,0.15)',
                    color: submitMessage.includes('error') ? '#fca5a5' : '#86efac',
                    border: `1px solid ${submitMessage.includes('error') ? 'rgba(220,38,38,0.3)' : 'rgba(34,197,94,0.3)'}`,
                    fontSize: '0.9rem'
                  }}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '2.25' }}>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@capitalreviewmanagement.com" style={{ color: '#6b9fd4', textDecoration: 'underline' }}>
                  info@capitalreviewmanagement.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:888-681-0360" style={{ color: '#6b9fd4', textDecoration: 'underline' }}>
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
