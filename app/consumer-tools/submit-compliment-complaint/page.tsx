'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'important-note': {
    subject: 'Before You Begin',
    bullets: [
      { text: 'Complete the form below to tell us what went well — or where we can improve.' },
      { text: 'If you\'re looking to dispute an account, please use our Dispute My Account form instead.' },
      { text: 'We value your feedback and use it to continuously improve our services and standards.' },
    ],
  },
  'account-information': {
    subject: 'Account Identification',
    bullets: [
      { text: 'Provide your Capital Review Account Number and creditor name as shown on your statement.' },
      { text: 'Include your first and last name along with your complete mailing address.' },
      { text: 'This information helps us locate your account quickly and address your feedback effectively.' },
    ],
  },
  'contact-method': {
    subject: 'How to Reach You',
    bullets: [
      { text: 'Let us know the best way to reach you if we need to follow up on your feedback.' },
      { text: 'Provide a phone number (mobile, home, or work) and/or email address for contact.' },
      { text: 'This ensures we can respond to your feedback promptly and through your preferred channel.' },
    ],
  },
  'experience-details': {
    subject: 'Describe Your Experience',
    bullets: [
      { text: 'Please describe your compliment or complaint in detail so we can fully understand the situation.' },
      { text: 'You may upload relevant documents or screenshots if applicable to support your feedback.' },
      { text: 'The more specific you can be, the better we can address your feedback and take appropriate action.' },
    ],
  },
  'take-feedback-seriously': {
    subject: 'Our Commitment to Quality',
    bullets: [
      { text: 'Every compliment and complaint is reviewed by our internal compliance and service quality teams.' },
      { text: 'We ensure all feedback is evaluated against our professional standards and your expectations.' },
      { text: 'Thank you for helping us serve you better — your input directly shapes our improvement efforts.' },
    ],
  },
  'what-happens-next': {
    subject: 'Next Steps After Submission',
    bullets: [
      { text: 'Your feedback will be reviewed within 2 business days of submission.' },
      { text: 'If you provided contact information, we may reach out for additional details as needed.' },
      { text: 'Complaints are escalated to our compliance team for thorough investigation with a response within 10 business days.' },
    ],
  },
}

export default function SubmitComplimentComplaintPage() {
  const [showModal, setShowModal] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    accountNumber: '',
    creditor: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    phoneType: 'Mobile',
    email: '',
    feedbackType: 'compliment',
    subject: '',
    message: '',
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
          formType: 'compliment-complaint',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your feedback. We appreciate you taking the time to share your experience with us.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          accountNumber: '',
          creditor: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phoneNumber: '',
          phoneType: 'Mobile',
          email: '',
          feedbackType: 'compliment',
          subject: '',
          message: '',
          consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your feedback. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting your feedback. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const feedbackSections = [
    {
      id: 'important-note',
      title: 'Important Note',
      description: 'Please complete the form below to tell us what went well — or where we can improve. If you\'re looking to dispute an account, please use our Dispute My Account form instead. We value your feedback and use it to improve our services.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'Account Information',
      description: 'Please provide your Capital Review Account Number, creditor name, first and last name, and complete mailing address including street, city, state, and zip code. This helps us locate your account quickly.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'contact-method',
      title: 'Preferred Contact Method',
      description: 'Let us know the best way to reach you if we need to follow up. You can provide a phone number (mobile, home, or work) and/or email address. This ensures we can respond to your feedback promptly.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'experience-details',
      title: 'Tell Us About Your Experience',
      description: 'Please describe your compliment or complaint in detail. You may also upload relevant documents or screenshots if applicable. The more specific you can be, the better we can address your feedback.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'take-feedback-seriously',
      title: 'We Take Feedback Seriously',
      description: 'Every compliment and complaint is reviewed by our internal compliance and service quality teams to ensure we\'re meeting our professional standards and your expectations. Thank you for helping us serve you better.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-happens-next',
      title: 'What Happens Next?',
      description: 'Your feedback will be reviewed within 2 business days. If you provided contact information, we may reach out for additional details. Complaints are escalated to our compliance team for thorough investigation, and you\'ll receive a response within 10 business days.',
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
          style={{ backgroundImage: 'url(/Pages/feedback_hero_bg.png)' }}>
        </div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Submit a Compliment or Complaint</h1>
          <p>Your Feedback Matters</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-intro">
        <div className="subpage-intro-inner">
          <h2>Help Us Serve You Better</h2>
          <p>
            At Capital Review Management, every interaction counts. Whether you had a great experience or want to share a concern,
            we want to hear from you. Your feedback helps us improve our services and maintain the highest standards.
          </p>
        </div>
      </section>

      {/* Feedback Sections */}
      {feedbackSections.map((section, index) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div className="subpage-text-col">
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="subpage-text-col">
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* Form Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit} className="subpage-form">
              <div className="space-y-6">
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
                  <label>Capital Review Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Creditor Name</label>
                  <input
                    type="text"
                    name="creditor"
                    value={formData.creditor}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Mailing Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                  />
                  <div className="form-row-3">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label>Phone Number (optional)</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                    <select
                      name="phoneType"
                      value={formData.phoneType}
                      onChange={handleInputChange}
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                    </select>
                  </div>
                  <div>
                    <label>Email Address (optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label>Feedback Type <span>*</span></label>
                  <div className="form-radio-group">
                    <label>
                      <input
                        type="radio"
                        name="feedbackType"
                        value="compliment"
                        checked={formData.feedbackType === 'compliment'}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Compliment</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="feedbackType"
                        value="complaint"
                        checked={formData.feedbackType === 'complaint'}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Complaint</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label>Subject <span>*</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Your Feedback <span>*</span></label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your compliment or complaint in detail..."
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
                    I confirm that the information provided above is accurate and complete. I understand that this feedback will be reviewed by our team.
                  </label>
                </div>
                <div className="form-submit-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
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
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Contact Information</h2>
          <div className="text-center">
            <p className="font-semibold">Capital Review Management</p>
            <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            <p className="text-xl font-semibold">866-766-2692</p>
            <p className="mt-4">
              <strong>General Email:</strong> info@capitalreviewmgt.com
            </p>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Legal Notice</h2>
          <p className="text-center">
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Have additional questions or need immediate assistance?</h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today!
          </Link>
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
