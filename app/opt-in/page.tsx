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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Opt In</h1>
          <p>Sign Up for Text Message Notifications</p>
        </div>
      </section>

      {/* SMS Opt-In Disclosure + Form Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Left Column: SMS Disclosure */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Want to text? TEXT JOIN to 79436</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                By signing up via text, you agree to receive Recurring messages from
                Capital Review Management regarding your account, such as payment
                reminders, at the cell number used when signing up. Reply HELP for help
                &amp; STOP to cancel. Msg freq may vary. Msg &amp; Data rates may apply. View{' '}
                <Link href="/terms" style={{ color: '#4a7cad', textDecoration: 'underline', fontWeight: '500' }}>SMS Terms</Link>
                {' '}&amp;{' '}
                <Link href="/privacy" style={{ color: '#4a7cad', textDecoration: 'underline', fontWeight: '500' }}>Privacy Policy</Link>
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '0px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
              <form onSubmit={handleSubmit} className="subpage-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '0.75rem', fontSize: '1rem' }}>Name</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="firstName" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                        First Name <span style={{ color: '#888' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', borderBottom: '1px solid #999', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#999' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                        Last Name <span style={{ color: '#888' }}>(required)</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={{ width: '100%', borderBottom: '1px solid #999', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#999' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    Email <span style={{ color: '#888' }}>(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', borderBottom: '1px solid #999', padding: '0.5rem 0', background: 'transparent', outline: 'none', border: 'none', borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#999' }}
                  />
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '0.75rem 2rem',
                      border: '1px solid #333',
                      backgroundColor: 'transparent',
                      color: '#333',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.5 : 1,
                      fontSize: '1rem',
                      fontWeight: '500',
                      letterSpacing: '0.025em'
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
                    fontSize: '0.875rem'
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
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Contact Us</h2>
            <div style={{ fontSize: '1.125rem', lineHeight: '2' }}>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@capitalreviewmanagement.com" style={{ color: '#4a7cad', textDecoration: 'underline' }}>
                  info@capitalreviewmanagement.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:888-681-0360" style={{ color: '#4a7cad', textDecoration: 'underline' }}>
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
