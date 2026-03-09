'use client'

import { useState } from 'react'

export default function SubmitComplimentComplaintPage() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    feedbackType: '',
    representativeName: '',
    feedbackDetails: '',
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
        body: JSON.stringify({ formType: 'compliment-complaint', formData }),
      })
      await response.json()
      if (response.ok) {
        setSubmitMessage('Thank you for your feedback. Our team will review your submission and may follow up if additional information is needed.')
        setFormData({
          accountNumber: '', firstName: '', lastName: '', phoneNumber: '',
          email: '', feedbackType: '', representativeName: '', feedbackDetails: '', consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your feedback. Please try again or contact us directly.')
      }
    } catch {
      setSubmitMessage('There was an error submitting your feedback. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Submit Feedback</h1>
          <p>Share a Compliment or Complaint</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-grid">
            <div className="subpage-text-col">
              <h2>We Value Your Feedback</h2>
              <p>Capital Review Management is committed to providing professional and respectful service in every interaction. Your feedback helps us maintain our standards and improve where needed.</p>
              <p>Whether you had a positive experience you would like to share or a concern you want us to address, please use the form below. Our compliance team reviews every submission.</p>
            </div>
            <div className="subpage-image-col">
              <img src="/Pages/Writing_Signing_Doc_Meeting.jpeg" alt="Submit feedback" className="subpage-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Feedback Form</h2>
            <p>Please provide as much detail as possible so our team can properly review your submission.</p>
          </div>

          {submitMessage && (
            <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="subpage-form">
            <h3>Your Information</h3>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Account Number</label>
                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Enter account number (if applicable)" />
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
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Email Address <span className="form-required">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
              </div>
            </div>

            <h3 style={{ marginTop: '3rem' }}>Feedback Details</h3>
            <div className="form-group">
              <label>Feedback Type <span className="form-required">*</span></label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="feedbackType" value="compliment" checked={formData.feedbackType === 'compliment'} onChange={handleInputChange} />
                  Compliment — I had a positive experience
                </label>
                <label>
                  <input type="radio" name="feedbackType" value="complaint" checked={formData.feedbackType === 'complaint'} onChange={handleInputChange} />
                  Complaint — I have a concern to report
                </label>
                <label>
                  <input type="radio" name="feedbackType" value="general" checked={formData.feedbackType === 'general'} onChange={handleInputChange} />
                  General Feedback
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Representative Name (if known)</label>
              <input type="text" name="representativeName" value={formData.representativeName} onChange={handleInputChange} placeholder="Enter the representative's name" />
            </div>

            <div className="form-group">
              <label>Details <span className="form-required">*</span></label>
              <textarea name="feedbackDetails" value={formData.feedbackDetails} onChange={handleInputChange} rows={6} placeholder="Please describe your experience in detail..." required />
            </div>

            <div className="form-group" style={{ marginTop: '2rem' }}>
              <div className="checkbox-group">
                <label className="consent-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} required />
                  I confirm that the information provided is accurate. I understand that Capital Review Management may contact me for follow-up if needed.
                </label>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need Immediate Assistance?</h3>
          <p>Call us at 866-766-2692 or email compliance@capitalreviewmgt.com</p>
        </div>
      </section>
    </>
  )
}
