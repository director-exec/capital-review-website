'use client'

import Link from 'next/link'
import { useState } from 'react'

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
      title: 'Receive Prompt Alerts',
      description: 'Get critical updates regarding billing and forthcoming payments sent straight to your mobile device. Keep track of your account standing and avoid missing any payment due dates with our practical text notification service.',
      image: 'https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'real-time-updates',
      title: 'Instant Account Notifications',
      description: 'Receive immediate alerts about changes to your account status, payment confirmations, and essential account developments. Our text notification service guarantees you are always aware of your financial standing.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'avoid-late-payments',
      title: 'Prevent Missed Deadlines',
      description: 'Get useful due-date notifications and payment reminders to help you stay current on your financial commitments. Our proactive alert system supports you in maintaining a positive payment track record and steering clear of penalty charges.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'exclusive-offers',
      title: 'Unlock Special Opportunities',
      description: 'Get notified about special promotions and adaptable payment alternatives to better handle your account. Take advantage of unique programs and payment plans crafted to support your financial success.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Text Message Opt-in</h1>
          <p>Keep Informed with Key Account Updates & Payment Notifications!</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Take Charge of Your Financial Obligations</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
              Sign up now to receive vital updates and payment notifications, making sure you never miss a due date.
              Our straightforward text messaging service delivers effortless updates to help you oversee your account
              effectively and preserve a strong payment history.
            </p>
          </div>
        </div>
      </section>

      {/* Opt-in Sections */}
      {optInSections.map((section, index) => (
        <section key={section.id} className="content-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
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
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h2>
                      <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
                        {section.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h2>
                      <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#b0b8c8' }}>
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
          </div>
        </section>
      ))}

      {/* Opt-in Form Section */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>Prepared to Begin?</h2>
            <div className="form-container">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.125rem', color: '#b0b8c8' }}>
                  Provide your details below to enroll in text message notifications
                </p>
              </div>

              <form onSubmit={handleSubmit} className="form-grid" style={{ maxWidth: '28rem', margin: '0 auto' }}>
                <div className="form-group">
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

                <div className="form-group">
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
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane.smith@example.com"
                  />
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="consent">
                    I authorize Capital Review Management LLC to send me text messages. I acknowledge that standard message and data charges may apply. I may unsubscribe at any point by responding STOP.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit"
                >
                  {isSubmitting ? 'Submitting...' : 'ENROLL NOW'}
                </button>

                {submitMessage && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: submitMessage.includes('error') ? '#1a0f0f' : '#0f1a1a',
                    color: submitMessage.includes('error') ? '#ef9a9a' : '#9aefef',
                    border: `1px solid ${submitMessage.includes('error') ? '#742323' : '#237373'}`
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
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Important Information</h2>
            <div className="info-panel">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Message Details</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#b0b8c8' }}>
                    <li>• Standard message and data rates may apply</li>
                    <li>• You can opt out at any time by replying STOP</li>
                    <li>• For help, reply HELP to any message</li>
                    <li>• Message frequency varies based on account activity</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Legal Information</h3>
                  <p style={{ marginBottom: '1rem', color: '#b0b8c8' }}>
                    By enrolling, you consent to our Terms and Conditions and Privacy Policy.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href="/terms" style={{ color: '#c9a84c', textDecoration: 'underline', display: 'block' }}>Terms and Conditions</Link>
                    <Link href="/privacy" style={{ color: '#c9a84c', textDecoration: 'underline', display: 'block' }}>Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}