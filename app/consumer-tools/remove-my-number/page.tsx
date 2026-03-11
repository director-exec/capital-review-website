'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'urgent-matters': {
    subject: 'Immediate Assistance',
    bullets: [
      { text: 'If the matter is urgent, we recommend calling us directly at 866-766-2692 for immediate help.' },
      { text: 'Our team is available to assist you right away with removing your number from our calling list.' },
      { text: 'Phone requests are processed faster than online submissions for time-sensitive situations.' },
    ],
  },
  'update-contact-preference': {
    subject: 'Information We Need',
    bullets: [
      { text: 'Provide your first and last name along with the phone number we are currently calling.' },
      { text: 'Indicate whether the number is incorrect or if you prefer a different contact number.' },
      { text: 'Include any additional comments or notes to help us update our records accurately.' },
    ],
  },
  'what-happens-next': {
    subject: 'Processing Timeline',
    bullets: [
      { text: 'Your request will be reviewed within 24 hours of submission by our compliance team.' },
      { text: 'Changes will be fully implemented within 5 business days with confirmation sent to you.' },
      { text: 'If you provided an alternative number, we will begin using it immediately upon processing.' },
    ],
  },
  'important-notice': {
    subject: 'Legal & Privacy Notice',
    bullets: [
      { text: 'This is an attempt to collect a debt. Any information obtained will be used for that purpose.' },
      { text: 'This communication is from a debt collector — we take your privacy seriously.' },
      { text: 'Your contact preference request will be processed promptly in accordance with all applicable regulations.' },
    ],
  },
}

export default function RemoveMyNumberPage() {
  const [showModal, setShowModal] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumberToRemove: '',
    preference: '',
    preferredContactNumber: '',
    comments: '',
    consent: false
  })

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }))
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
          formType: 'remove-number',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your request. Your contact preferences will be updated within 5 business days.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumberToRemove: '',
          preference: '',
          preferredContactNumber: '',
          comments: '',
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

  const removeNumberSections = [
    {
      id: 'urgent-matters',
      title: 'Urgent Matters',
      description: 'If the matter is urgent, we recommend calling us directly at 866-766-2692. For immediate assistance with removing your number from our calling list, our team is available to help you right away.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'update-contact-preference',
      title: 'Update Your Contact Preference',
      description: 'Please provide the following information so we can update our records accurately: your first and last name, the number we are currently calling, whether the number is incorrect or you prefer a different contact number, and any additional comments or notes.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'what-happens-next',
      title: 'What Happens Next?',
      description: 'Your request will be reviewed within 24 hours, changes will be implemented within 5 business days, you\'ll receive a confirmation email once processed, and if you provided an alternative number, we\'ll begin using it immediately.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'important-notice',
      title: 'Important Notice',
      description: 'This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector. We take your privacy seriously and will process your request promptly.',
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
          style={{ backgroundImage: 'url(/Pages/remove_number_hero_bg.png)' }}>
        </div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Remove My Number</h1>
          <p>Need Us to Stop Calling a Number? Let Us Know.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-intro">
        <div className="subpage-intro-inner">
          <h2>Update Your Contact Preferences</h2>
          <p>
            If you've received calls from Capital Review Management in error — or if you would prefer we contact you at a different number —
            please complete the form below. Your request will be processed within 5 business days.
          </p>
        </div>
      </section>

      {/* Remove Number Sections */}
      {removeNumberSections.map((section) => {
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
                    <div>
                      <h2>{section.title}</h2>
                      <p>{section.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
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
          <h2>Contact Preference Form</h2>
          <form onSubmit={handleSubmit} className="subpage-form">
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
              <label>The Number We Are Currently Calling <span>*</span></label>
              <input
                type="tel"
                name="phoneNumberToRemove"
                value={formData.phoneNumberToRemove}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label>Select One: <span>*</span></label>
              <div className="form-radio-group">
                <label>
                  <input
                    type="radio"
                    name="preference"
                    value="remove"
                    checked={formData.preference === 'remove'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>The number is incorrect — please remove it</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="preference"
                    value="different"
                    checked={formData.preference === 'different'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>The number is correct, but I prefer to be reached at a different number</span>
                </label>
              </div>
            </div>

            <div>
              <label>Preferred Contact Number (if different)</label>
              <input
                type="tel"
                name="preferredContactNumber"
                value={formData.preferredContactNumber}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Comments or Additional Notes (optional)</label>
              <textarea
                rows={4}
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
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
                I confirm that the information provided above is accurate and complete. I understand that this request will be processed within 5 business days.
              </label>
            </div>

            <div className="form-submit-wrap">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'SUBMIT REQUEST'}
              </button>
            </div>

            {submitMessage && (
              <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
                {submitMessage}
              </div>
            )}
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
              <strong>Compliance Email:</strong> compliance@capitalreviewmgt.com
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Need immediate assistance with removing your number?</h3>
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
