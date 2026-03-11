'use client'

import { useState } from 'react'

export default function DisputeMyAccountPage() {
  const [showModal, setShowModal] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    accountNumber: '',
    creditor: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    phoneType: '',
    email: '',
    disputeReason: '',
    disputeDetails: '',
    consent: false
  })

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'dispute-account',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your dispute. Our team will review your information and contact you within 24 hours.')
        // Reset form
        setFormData({
          accountNumber: '',
          creditor: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phoneNumber: '',
          phoneType: '',
          email: '',
          disputeReason: '',
          disputeDetails: '',
          consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your dispute. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting your dispute. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/dispute_hero_bg.png)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Dispute My Account</h1>
          <p>We're Here to Help — Let's Resolve It Together</p>
        </div>
      </section>

      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <form onSubmit={handleSubmit} className="subpage-form">
            <div className="space-y-6">
              <div>
                <h3>Account Information</h3>
                <p>
                  If you believe an account placed with Capital Review Management is inaccurate or invalid, you have the right to dispute it.
                  Please complete the form below to initiate a review of your account.
                </p>
                <p>
                  You're welcome (but not required) to explain the reason for your dispute or upload supporting documentation
                  to help us investigate your claim as efficiently as possible.
                </p>
                <p>
                  Please provide your details exactly as shown on your Capital Review account statement:
                </p>
              </div>

              <div className="form-row">
                <div>
                  <label>Capital Review Account Number <span>*</span></label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Creditor Name <span>*</span></label>
                  <input
                    type="text"
                    name="creditor"
                    value={formData.creditor}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>First Name <span>*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Last Name <span>*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Street Address <span>*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row-3">
                <div>
                  <label>City <span>*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>State <span>*</span></label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>ZIP Code <span>*</span></label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <h3>Contact Information (Optional)</h3>
                <p>
                  Providing this information is optional, but it helps us communicate with you more efficiently during the resolution process.
                </p>
              </div>

              <div className="form-row">
                <div>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Type of Phone (Mobile, Home, Work)</label>
                  <select
                    name="phoneType"
                    value={formData.phoneType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select type</option>
                    <option value="mobile">Mobile</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <h3>Explain Your Dispute</h3>
                <p>
                  Please explain the reason for your dispute and provide any relevant details.
                </p>
              </div>

              <div>
                <label>Dispute Reason <span>*</span></label>
                <select
                  name="disputeReason"
                  value={formData.disputeReason}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="not-my-debt">This is not my debt</option>
                  <option value="already-paid">I already paid this debt</option>
                  <option value="wrong-amount">The amount is incorrect</option>
                  <option value="identity-theft">This is identity theft</option>
                  <option value="other">Other reason</option>
                </select>
              </div>

              <div>
                <label>Dispute Details <span>*</span></label>
                <textarea
                  name="disputeDetails"
                  value={formData.disputeDetails}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please provide detailed information about your dispute..."
                  required
                ></textarea>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                <label>
                  I confirm that the information provided above is accurate and complete. I understand that this dispute will be reviewed by our team.
                </label>
              </div>

              <div className="form-submit-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
                </button>
              </div>

              {submitMessage && (
                <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Need to Speak with Someone?</h2>
          <p>You can contact us directly to speak with an account representative:</p>
          <p className="text-xl font-semibold">888-681-0360</p>
        </div>
      </section>

      {/* Legal Disclosure Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Legal Disclosure</h2>
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Capital Review Management</h2>
          <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
          <p>888-681-0360</p>
          <p className="mt-4">
            <strong>Validation Email:</strong> info@capitalreviewmanagement.com
          </p>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="disclosure-overlay" onClick={closeModal}>
          <div className="disclosure-modal" onClick={(e) => e.stopPropagation()}>
            <h2>IMPORTANT</h2>
            <p>
              This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
            </p>
            <p>
              Calls to and from this company may be monitored and/or recorded.
            </p>
            <button className="disclosure-modal-btn" onClick={closeModal}>
              I Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
