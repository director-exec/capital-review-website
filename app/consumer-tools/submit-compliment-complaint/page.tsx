'use client'

import { useState } from 'react'
import Link from 'next/link'

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
      image: 'https://images.pexels.com/photos/33332413/pexels-photo-33332413.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'Account Information',
      description: 'Please provide your Elite Account Number (8 digits, found on your statement), creditor name, first and last name, and complete mailing address including street, city, state, and zip code. This helps us locate your account quickly.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'contact-method',
      title: 'Preferred Contact Method',
      description: 'Let us know the best way to reach you if we need to follow up. You can provide a phone number (mobile, home, or work) and/or email address. This ensures we can respond to your feedback promptly.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'experience-details',
      title: 'Tell Us About Your Experience',
      description: 'Please describe your compliment or complaint in detail. You may also upload relevant documents or screenshots if applicable. The more specific you can be, the better we can address your feedback.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'take-feedback-seriously',
      title: 'We Take Feedback Seriously',
      description: 'Every compliment and complaint is reviewed by our internal compliance and service quality teams to ensure we\'re meeting our professional standards and your expectations. Thank you for helping us serve you better.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-happens-next',
      title: 'What Happens Next?',
      description: 'Your feedback will be reviewed within 2 business days. If you provided contact information, we may reach out for additional details. Complaints are escalated to our compliance team for thorough investigation, and you\'ll receive a response within 10 business days.',
      image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Submit a Compliment or Complaint</h1>
          <p className="text-xl">Your Feedback Matters</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help Us Serve You Better</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, every interaction counts. Whether you had a great experience or want to share a concern, 
              we want to hear from you. Your feedback helps us improve our services and maintain the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Sections */}
      {feedbackSections.map((section, index) => (
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

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Feedback Form</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Elite Account Number (8 digits)</label>
                  <input 
                    type="text" 
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Creditor Name</label>
                  <input 
                    type="text" 
                    name="creditor"
                    value={formData.creditor}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mailing Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street Address" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" 
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City" 
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <input 
                      type="text" 
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State" 
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="ZIP Code" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <select 
                      name="phoneType"
                      value={formData.phoneType}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address (optional)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Type <span className="text-red-500">*</span></label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="feedbackType" 
                        value="compliment"
                        checked={formData.feedbackType === 'compliment'}
                        onChange={handleInputChange}
                        className="mr-2" 
                        required
                      />
                      <span>Compliment</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="feedbackType" 
                        value="complaint"
                        checked={formData.feedbackType === 'complaint'}
                        onChange={handleInputChange}
                        className="mr-2" 
                        required
                      />
                      <span>Complaint</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={6} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your compliment or complaint in detail..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
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
                    I confirm that the information provided above is accurate and complete. I understand that this feedback will be reviewed by our team.
                  </label>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
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

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">Elite Portfolio Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p className="text-xl font-semibold text-blue-900">833-381-4416</p>
                <p className="mt-4">
                  <strong>General Email:</strong> info@eliteportfoliomgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Legal Notice</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Have additional questions or need immediate assistance?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
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
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">IMPORTANT</h3>
              <p className="text-sm text-gray-700 mb-4">
                This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Calls to and from this company may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200"
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