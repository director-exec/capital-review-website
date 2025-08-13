'use client'

import { useState } from 'react'

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
      description: 'If you would like account validation for your account with Elite Portfolio Management, please complete the form below. By submitting your request, you confirm that you are the authorized account holder and that the information you\'ve provided is complete and accurate. A member of our team will reach out within 24 hours to follow up with your request.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'email-delivery',
      title: 'Important Notice Regarding Email Delivery',
      description: 'Your account validation or account details will be sent via standard (unencrypted) email. While convenient, this method may not offer the same level of security as postal mail. By submitting this form, you acknowledge and accept delivery in this format. To avoid delivery issues, we recommend adding our email address — support@eliteportmgmt.com — to your safe sender list.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'required-information',
      title: 'What You\'ll Need to Provide',
      description: 'You\'ll need to provide your Elite Account Number (8-digit), Creditor Name, Your Full Legal Name, Mailing Address, Valid Phone Number, and Valid Email Address. You must also acknowledge that you may receive communications via phone, text, or email, confirm ownership of the contact details you\'ve submitted, request electronic delivery of this document, and understand you may revoke consent at any time through reasonable means.',
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
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Request Account Validation</h1>
          <p className="text-xl">Get Account Details Delivered to Your Inbox</p>
        </div>
      </section>

      {/* Validation Sections */}
      {validationSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Request Account Validation
              </h2>
              <p className="text-lg text-gray-700">
                Please include Elite's eight-digit account number on your statement.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Number <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter 8-digit account number"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter your first name"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter your mailing address"
                        required
                      />
                  </div>
                  
                  <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter your city"
                        required
                      />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State <span className="text-blue-900">*</span>
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter ZIP code"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Creditor <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="text"
                      name="creditor"
                      value={formData.creditor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter creditor name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-blue-900">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
                    className="mt-1 h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    I acknowledge that I may receive communications via phone, text, or email, and I confirm ownership of the contact details I've submitted.
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="electronicDelivery"
                    checked={formData.electronicDelivery}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    I request electronic delivery of this document and understand I may revoke consent at any time through reasonable means.
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-900 text-white py-3 px-8 rounded-md hover:bg-blue-800 transition-colors duration-200 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-md ${
                    submitMessage.includes('error') 
                      ? 'bg-red-100 text-red-700 border border-red-300' 
                      : 'bg-blue-900 text-white border border-blue-800'
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Legal Disclosure</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="text-lg text-gray-700">
                <p className="font-semibold">Elite Portfolio Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p>Phone: 833-381-4416</p>
                <p className="mt-4">
                  <strong>Validation Email:</strong> validation@eliteportmgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" 
          style={{ zIndex: 9999 }}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">IMPORTANT</h3>
              <p className="text-lg text-gray-700 mb-6">
                This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Calls to and from this company may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-200 text-lg font-semibold"
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