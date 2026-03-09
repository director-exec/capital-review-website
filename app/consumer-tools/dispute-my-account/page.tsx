'use client'

import { useState } from 'react'

export default function DisputeMyAccountPage() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    disputeReason: '',
    disputeDetails: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'dispute-account', formData }),
      })
      await response.json()
      if (response.ok) {
        setSubmitMessage('Your dispute has been received. Our compliance team will review your submission and respond within 30 days as required by law.')
        setFormData({
          accountNumber: '', firstName: '', lastName: '', address: '', city: '',
          state: '', zipCode: '', phoneNumber: '', email: '', disputeReason: '',
          disputeDetails: '', consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your dispute. Please try again or contact us directly.')
      }
    } catch {
      setSubmitMessage('There was an error submitting your dispute. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Dispute My Account</h1>
          <p>Request a Review of Your Account</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-grid">
            <div className="subpage-text-col">
              <h2>Your Right to Dispute</h2>
              <p>Under federal law, you have the right to dispute any account placed with a collection agency. If you believe the balance is inaccurate, the account does not belong to you, or you have already resolved it, you may submit a written dispute using the form below.</p>
              <p>Once we receive your dispute, our compliance team will conduct a thorough investigation and respond within 30 days as required by applicable regulations.</p>
            </div>
            <div className="subpage-image-col">
              <img src="/Pages/Stamp_Doc.jpeg" alt="Dispute process" className="subpage-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Form */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Submit Your Dispute</h2>
            <p>Please complete all required fields. Include your Capital Review Management account number as shown on your statement.</p>
          </div>

          {submitMessage && (
            <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="subpage-form">
            <h3>Account Information</h3>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Account Number <span className="form-required">*</span></label>
                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Enter account number" required />
              </div>
              <div className="form-group">
                <label>First Name <span className="form-required">*</span></label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label>Last Name <span className="form-required">*</span></label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" required />
              </div>
              <div className="form-group">
                <label>Phone Number <span className="form-required">*</span></label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Email Address <span className="form-required">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>Address <span className="form-required">*</span></label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your mailing address" required />
              </div>
              <div className="form-group">
                <label>City <span className="form-required">*</span></label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your city" required />
              </div>
              <div className="form-group">
                <label>State <span className="form-required">*</span></label>
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="Enter your state" required />
              </div>
              <div className="form-group">
                <label>ZIP Code <span className="form-required">*</span></label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Enter ZIP code" required />
              </div>
            </div>

            <h3 style={{ marginTop: '3rem' }}>Dispute Details</h3>
            <div className="form-group">
              <label>Reason for Dispute <span className="form-required">*</span></label>
              <select name="disputeReason" value={formData.disputeReason} onChange={handleInputChange} required>
                <option value="">Select a reason</option>
                <option value="not-my-account">This account does not belong to me</option>
                <option value="incorrect-balance">The balance is inaccurate</option>
                <option value="already-paid">This account has already been resolved</option>
                <option value="identity-theft">This is a result of identity theft</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Additional Details <span className="form-required">*</span></label>
              <textarea name="disputeDetails" value={formData.disputeDetails} onChange={handleInputChange} rows={5} placeholder="Please provide a detailed explanation of your dispute..." required />
            </div>

            <div className="form-group" style={{ marginTop: '2rem' }}>
              <div className="checkbox-group">
                <label className="consent-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} required />
                  I certify that the information provided is accurate and complete. I understand that submitting this form initiates a review of my account as permitted under applicable federal and state regulations.
                </label>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need Help with Your Dispute?</h3>
          <p>Call us at 866-766-2692 or email compliance@capitalreviewmgt.com</p>
        </div>
      </section>
    </>
  )
}
