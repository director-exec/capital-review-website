'use client'

import { useState } from 'react'

export default function RemoveMyNumberPage() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    requestType: '',
    alternateNumber: '',
    comments: '',
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
        body: JSON.stringify({ formType: 'remove-number', formData }),
      })
      await response.json()
      if (response.ok) {
        setSubmitMessage('Your request has been received. We will update our records within 5 business days.')
        setFormData({
          accountNumber: '', firstName: '', lastName: '', phoneNumber: '',
          email: '', requestType: '', alternateNumber: '', comments: '', consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your request. Please try again or contact us directly.')
      }
    } catch {
      setSubmitMessage('There was an error submitting your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Remove My Number</h1>
          <p>Update or Remove Your Phone Number</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-grid">
            <div className="subpage-text-col">
              <h2>Phone Number Requests</h2>
              <p>If Capital Review Management has contacted a phone number that is no longer associated with you, or if you would like to provide an updated contact number, please submit the form below.</p>
              <p>Our team will update our records within 5 business days of receiving your request. We are committed to maintaining accurate contact information and respecting your communication preferences.</p>
            </div>
            <div className="subpage-image-col">
              <img src="/Pages/Calculator_Writing_Pro.jpeg" alt="Phone number management" className="subpage-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Submit Your Request</h2>
            <p>Complete the form below to update or remove a phone number from our records.</p>
          </div>

          {submitMessage && (
            <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="subpage-form">
            <h3>Contact Information</h3>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Account Number</label>
                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Enter account number (if known)" />
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
                <label>Phone Number to Remove <span className="form-required">*</span></label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter the phone number" required />
              </div>
              <div className="form-group">
                <label>Email Address <span className="form-required">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
              </div>
            </div>

            <h3 style={{ marginTop: '3rem' }}>Request Details</h3>
            <div className="form-group">
              <label>Request Type <span className="form-required">*</span></label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="requestType" value="remove" checked={formData.requestType === 'remove'} onChange={handleInputChange} />
                  Remove this number from your records
                </label>
                <label>
                  <input type="radio" name="requestType" value="update" checked={formData.requestType === 'update'} onChange={handleInputChange} />
                  Replace with a different number
                </label>
                <label>
                  <input type="radio" name="requestType" value="wrong-person" checked={formData.requestType === 'wrong-person'} onChange={handleInputChange} />
                  This number does not belong to the person you are trying to reach
                </label>
              </div>
            </div>

            {formData.requestType === 'update' && (
              <div className="form-group">
                <label>New Phone Number <span className="form-required">*</span></label>
                <input type="tel" name="alternateNumber" value={formData.alternateNumber} onChange={handleInputChange} placeholder="Enter your new phone number" required />
              </div>
            )}

            <div className="form-group">
              <label>Additional Comments</label>
              <textarea name="comments" value={formData.comments} onChange={handleInputChange} rows={4} placeholder="Any additional information..." />
            </div>

            <div className="form-group" style={{ marginTop: '2rem' }}>
              <div className="checkbox-group">
                <label className="consent-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} required />
                  I confirm that the information provided is accurate and I authorize Capital Review Management to update their records accordingly.
                </label>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Questions About Your Phone Number?</h3>
          <p>Call us at 866-766-2692 for immediate assistance.</p>
        </div>
      </section>
    </>
  )
}
