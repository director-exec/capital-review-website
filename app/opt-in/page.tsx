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
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

            {/* Left Column: SMS Disclosure */}
            <div style={{ paddingRight: '1rem' }}>
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

            {/* Right Column: Form Card */}
            <div style={{ backgroundColor: 'white', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>Contact us.</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', textAlign: 'center' }}>We&apos;ll get you set up with text notifications.</p>

              <form onSubmit={handleSubmit} className="subpage-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '1rem' }}>Name</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="firstName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                        First Name <span style={{ color: '#999', fontWeight: '400' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid #aaa', fontSize: '1rem' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                        Last Name <span style={{ color: '#999', fontWeight: '400' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid #aaa', fontSize: '1rem' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                    Email <span style={{ color: '#999', fontWeight: '400' }}>(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid #aaa', fontSize: '1rem' }}
                  />
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '0.85rem 2.5rem',
                      border: '1px solid #333',
                      backgroundColor: 'transparent',
                      color: '#333',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.5 : 1,
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>

                {submitMessage && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '1rem',
                    backgroundColor: submitMessage.includes('error') ? '#fee2e2' : '#dcfce7',
                    color: submitMessage.includes('error') ? '#7f1d1d' : '#166534',
                    border: `1px solid ${submitMessage.includes('error') ? '#fca5a5' : '#86efac'}`,
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
