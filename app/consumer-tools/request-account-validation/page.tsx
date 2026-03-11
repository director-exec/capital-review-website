'use client'

import { useState } from 'react'
import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'account-details': {
    subject: 'Validation Request Process (CRM-1.1)',
    bullets: [
      { text: 'Request FDCPA-compliant account validation (CRM-1.1) through Maxify CRM — processed by trained specialists with 85% minimum competency scores (CRM-6.4).' },
      { text: 'By submitting, you confirm authorized account holder status — all data protected with AES-256 encryption (CRM-4.1) and role-based access controls (CRM-4.4).' },
      { text: 'A member of our QA-reviewed team will follow up within 24 hours with full documentation per Mini-Miranda disclosure standards (CRM-2.2).' },
    ],
  },
  'email-delivery': {
    subject: 'Email Delivery Notice (CRM-2.1)',
    bullets: [
      { text: 'Validation details delivered via Maxify CRM omnichannel system (CRM-2.1) — all transmissions secured with TLS 1.2+ encryption in transit (CRM-4.1).' },
      { text: 'By submitting, you acknowledge electronic delivery format — consent revocable per TCPA consent framework (CRM-1.5) at any time through reasonable means.' },
      { text: 'Add info@capitalreviewmanagement.com to your safe sender list — all communications maintain 3-year retention records (CRM-2.6).' },
    ],
  },
  'required-information': {
    subject: 'Required Information Checklist (CRM-4.4)',
    bullets: [
      { text: 'Provide your Capital Review Account Number, Creditor Name, Full Legal Name, and Complete Mailing Address for Maxify CRM account verification.' },
      { text: 'Include Valid Phone Number and Email Address — all consumer data protected with PCI DSS tokenization (CRM-3.8) and PHI safeguards (CRM-1.6).' },
      { text: 'Electronic delivery consent per CRM-1.5 — revocable at any time with 24-hour opt-out processing and full audit trail documentation.' },
    ],
  },
}

export default function RequestAccountValidationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

  const validationSections = [
    {
      id: 'account-details',
      title: 'Get Account Details Delivered to Your Inbox',
      description: 'If you would like account validation for your account with Capital Review Management, please complete the form below. By submitting your request, you confirm that you are the authorized account holder and that the information you\'ve provided is complete and accurate. A member of our team will reach out within 24 hours to follow up with your request.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'email-delivery',
      title: 'Important Notice Regarding Email Delivery',
      description: 'Your account validation or account details will be sent via standard (unencrypted) email. While convenient, this method may not offer the same level of security as postal mail. By submitting this form, you acknowledge and accept delivery in this format. To avoid delivery issues, we recommend adding our email address — info@capitalreviewmanagement.com — to your safe sender list.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'required-information',
      title: 'What You\'ll Need to Provide',
      description: 'You\'ll need to provide your Capital Review Account Number, Creditor Name, Your Full Legal Name, Mailing Address, Valid Phone Number, and Valid Email Address. You must also acknowledge that you may receive communications via phone, text, or email, confirm ownership of the contact details you\'ve submitted, request electronic delivery of this document, and understand you may revoke consent at any time through reasonable means.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      background: 'white',
      imageLeft: false
    }
  ]

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
    email: '',
    consent: false,
    electronicDelivery: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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
          formType: 'account-validation',
          formData: formData
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your request. A member of our team will reach out within 24 hours.')
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
          email: '',
          consent: false,
          electronicDelivery: false
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

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Request Account Validation</h1>
          <p>Get Account Details Delivered to Your Inbox</p>
        </div>
      </section>

      {/* Validation Sections */}
      {validationSections.map((section, index) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div className="order-2">
                      <h2>{section.title}</h2>
                      <div>
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2>{section.title}</h2>
                      <div>
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* Account Validation Form Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="text-center mb-8">
            <h2>
              Request Account Validation
            </h2>
            <p>
              Please include Capital Review's eight-digit account number on your statement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="subpage-form">
              <div className="form-row">
                {/* Left Column */}
                <div>
                  <div>
                                          <label >
                        Account Number <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                                                placeholder="Enter account number"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label >
                        First Name <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                                                placeholder="Enter your first name"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label >
                        Address <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                                                placeholder="Enter your mailing address"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label >
                        City <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                                                placeholder="Enter your city"
                        required
                      />
                  </div>
                  
                  <div className="form-row">
                    <div>
                      <label >
                        State <span className="text-blue-900">*</span>
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                                                required
                      >
                        <option value="">Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    
                    <div>
                      <label >
                        ZIP Code <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                                                placeholder="Enter ZIP code"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  <div>
                    <label >
                      Creditor <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="text"
                      name="creditor"
                      value={formData.creditor}
                      onChange={handleInputChange}
                                            placeholder="Enter creditor name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label >
                      Last Name <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                                            placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label >
                      Phone Number <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label >
                      Email Address <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                                            placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Consent Checkboxes */}
              <div>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <label>
                    I acknowledge that I may receive communications via phone, text, or email, and I confirm ownership of the contact details I&apos;ve submitted.
                  </label>
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="electronicDelivery"
                    checked={formData.electronicDelivery}
                    onChange={handleInputChange}
                    required
                  />
                  <label>
                    I request electronic delivery of this document and understand I may revoke consent at any time through reasonable means.
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="form-submit-wrap">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>

                {submitMessage && (
                  <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
        </div>
      </section>

      {/* Legal Disclosure Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>Legal Disclosure</h2>
          <div>
            <p>
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Contact Information</h2>
          <div>
            <div>
              <p>Capital Review Management</p>
              <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
              <p>Phone: 888-681-0360</p>
              <p>
                <strong>Validation Email:</strong> info@capitalreviewmanagement.com
              </p>
            </div>
          </div>
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