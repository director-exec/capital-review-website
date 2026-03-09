'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RequestAccountValidationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  const validationSections = [
    {
      id: 'account-details',
      title: 'Obtain Your Account Summary by Email',
      description: 'Submit a validation request to receive comprehensive account details sent directly to your email address. When you submit this form, you verify that you are the authorized account holder and that all information you provide is truthful and complete. We will review your request and respond within 24 hours.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'email-delivery',
      title: 'Electronic Delivery Explanation',
      description: 'Account details will be delivered to your email using standard email transmission. Email communications lack encryption. When you complete and submit this request form, you expressly consent to receive account information via this delivery method. Please ensure to add support@capitalreviewmgt.com to your safe sender list for guaranteed delivery.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'required-information',
      title: 'What Information to Provide',
      description: 'You will need to supply your account number, the name of your creditor, your full legal name, complete mailing address, current phone number, and valid email address. You must also confirm your consent to receive communications via phone, text message, or email, verify that you own the contact information provided, and authorize electronic delivery of account documents. You may revoke this authorization at any time through written means.',
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
        setSubmitMessage('We value your submission. Our team will review your request and contact you within 24 hours.')
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
        setSubmitMessage('An issue occurred while processing your request. Please try again or reach out to us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('An issue occurred while processing your request. Please try again or reach out to us directly.')
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
          <p>Obtain Your Account Summary by Email</p>
        </div>
      </section>

      {/* Validation Sections */}
      {validationSections.map((section, index) => (
        <section key={section.id} className={`content-section py-16 ${section.background === 'grey' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-80 object-cover shadow-lg"
                      />
                    </div>
                    <div className="order-2 content-block">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1 content-block">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-80 object-cover shadow-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Account Validation Form Section */}
      <section className="content-section py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-header text-white mb-2">
                Account Validation Request Form
              </h2>
              <p className="text-lg text-[#b0b8c8]">
                Supply the account details exactly as they appear on your statement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form-container bg-[#0a0f1c] shadow-lg p-8">
              <div className="form-grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                      Account Number <span className="text-[#4a7fb5]">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter account number"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                        First Name <span className="text-[#4a7fb5]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                        placeholder="Enter your first name"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                        Address <span className="text-[#4a7fb5]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                        placeholder="Enter your mailing address"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                        City <span className="text-[#4a7fb5]">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                        placeholder="Enter your city"
                        required
                      />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                        State <span className="text-[#4a7fb5]">*</span>
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
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
                      <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                        ZIP Code <span className="text-[#4a7fb5]">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                        placeholder="Enter ZIP code"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                      Creditor <span className="text-[#4a7fb5]">*</span>
                    </label>
                    <input
                      type="text"
                      name="creditor"
                      value={formData.creditor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                      placeholder="Enter creditor name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                      Last Name <span className="text-[#4a7fb5]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                      Phone Number <span className="text-[#4a7fb5]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">
                      Email Address <span className="text-[#4a7fb5]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#4a7fb5]"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Consent Checkboxes */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#4a7fb5] focus:ring-[#4a7fb5] border-[#1e293b]"
                    required
                  />
                  <label className="text-sm text-[#b0b8c8]">
                    I acknowledge that I may receive communications via phone, text message, or email, and I confirm that I own the contact details supplied above.
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="electronicDelivery"
                    checked={formData.electronicDelivery}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#4a7fb5] focus:ring-[#4a7fb5] border-[#1e293b]"
                    required
                  />
                  <label className="text-sm text-[#b0b8c8]">
                    I authorize electronic delivery of account documents and understand that I can withdraw this authorization at any time by written request.
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4a7fb5] text-white py-3 px-8 hover:bg-[#3a6fa5] transition-colors duration-200 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-4 p-4 ${
                    submitMessage.includes('issue')
                      ? 'bg-red-900 text-red-200 border border-red-700'
                      : 'bg-[#4a7fb5] text-white border border-[#3a6fa5]'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Legal Disclosure Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Legal Disclosure</h2>
            <div className="bg-[#0a0f1c] shadow-lg p-8">
              <p className="text-lg text-[#b0b8c8] leading-relaxed text-center">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="bg-[#111827] rounded-lg shadow-lg p-8">
              <div className="text-lg text-[#b0b8c8]">
                <p className="font-semibold">Capital Review Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p>Phone: 866-766-2692</p>
                <p className="mt-4">
                  <strong>Validation Email:</strong> validation@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" 
          style={{ zIndex: 9999 }}
          onClick={closeModal}
        >
          <div 
            className="bg-[#1a1f2e] shadow-xl max-w-md w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#4a7fb5] mb-4">NOTICE</h3>
              <p className="text-sm text-[#b0b8c8] mb-4">
                This correspondence constitutes an effort to recover a debt. All details gathered will serve that objective. This message originates from a debt collection agency.
              </p>
              <p className="text-sm text-[#b0b8c8] mb-6">
                Phone conversations with this organization may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-[#4a7fb5] text-white py-2 px-4 hover:bg-[#3a6fa5] transition-colors duration-200"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 