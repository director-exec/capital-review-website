'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TextMessageOptInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    consent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
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
          formType: 'text-message-opt-in',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! You have successfully opted in to text message notifications.')
        setFormData({
          phone: '',
          name: '',
          email: '',
          consent: false
        })
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

  const optInSections = [
    {
      id: 'timely-notifications',
      title: 'Get Timely Notifications',
      description: 'Receive important updates about billing and upcoming payments directly to your phone. Stay informed about your account status and never miss a payment deadline with our convenient text message alerts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'real-time-updates',
      title: 'Stay Updated in Real Time',
      description: 'Get instant notifications about your account status changes, payment confirmations, and important account updates. Our text messaging service ensures you\'re always in the know about your financial obligations.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'avoid-late-payments',
      title: 'Avoid Late Payments',
      description: 'Receive helpful due-date alerts and payment reminders to help you stay on top of your financial obligations. Our proactive messaging system helps you maintain good payment history and avoid late fees.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'exclusive-offers',
      title: 'Access Exclusive Offers',
      description: 'Receive notifications about exclusive offers and flexible payment options to better manage your account. Take advantage of special programs and payment arrangements designed to help you succeed.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    }
  ]

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
          <h1>Text Message Opt-in</h1>
          <p>Stay Informed with Important Account Updates & Payment Reminders!</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div className="subpage-intro">
            <div className="subpage-intro-inner">
              <h2>Stay in Control of Your Finances</h2>
              <p>
                Opt in today to receive essential updates and payment reminders, ensuring you never miss a deadline.
                Our convenient text messaging service provides hassle-free updates to help you manage your account
                effectively and maintain good payment history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opt-in Sections */}
      {optInSections.map((section, index) => (
        <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
          <div className="subpage-container">
            <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              {section.imageLeft ? (
                <>
                  <div>
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h2>{section.title}</h2>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                      {section.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2>{section.title}</h2>
                    <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                      {section.description}
                    </p>
                  </div>
                  <div>
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Opt-in Form Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Ready to Get Started?</h2>
            <div style={{ backgroundColor: 'white', borderRadius: '0px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.125rem' }}>
                  Enter your information below to opt in to text message notifications
                </p>
              </div>

              <form onSubmit={handleSubmit} className="subpage-form" style={{ maxWidth: '28rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    style={{ marginTop: '0.25rem', height: '1rem', width: '1rem', color: '#1c2a3f' }}
                  />
                  <label htmlFor="consent" style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                    I consent to receive text messages from Capital Review Management LLC. I understand that message and data rates may apply. I can opt out at any time by replying STOP.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? 0.5 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'OPT IN NOW'}
                </button>

                {submitMessage && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: submitMessage.includes('error') ? '#fee2e2' : '#dcfce7',
                    color: submitMessage.includes('error') ? '#7f1d1d' : '#166534',
                    border: `1px solid ${submitMessage.includes('error') ? '#fca5a5' : '#86efac'}`
                  }}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Important Information</h2>
            <div style={{ backgroundColor: '#f8f6f2', borderRadius: '0px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Message Details</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>• Standard message and data rates may apply</li>
                  <li>• You can opt out at any time by replying STOP</li>
                  <li>• For help, reply HELP to any message</li>
                  <li>• Message frequency varies based on account activity</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Legal Information</h3>
                <p style={{ marginBottom: '1rem' }}>
                  By opting in, you agree to our Terms and Conditions and Privacy Policy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/terms" style={{ color: '#1c2a3f', textDecoration: 'underline', display: 'block' }}>Terms and Conditions</Link>
                  <Link href="/privacy" style={{ color: '#1c2a3f', textDecoration: 'underline', display: 'block' }}>Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
