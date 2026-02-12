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
        setSubmitMessage('We value your input. Thank you for dedicating time to share your thoughts with our team.')
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
        setSubmitMessage('An issue occurred while sending your response. Please retry or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('An issue occurred while sending your response. Please retry or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const feedbackSections = [
    {
      id: 'important-note',
      title: 'Key Information',
      description: 'Kindly use the form below to let us know what impressed you — or where we could do better. If you wish to challenge an account, please navigate to our Dispute My Account page instead. We genuinely appreciate your input and rely on it to enhance our offerings.',
      image: 'https://images.pexels.com/photos/33332413/pexels-photo-33332413.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'Account Details',
      description: 'Please supply your Account Number, creditor name, given and family name, and full mailing address including street, city, state, and postal code. This enables us to pull up your records swiftly.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'contact-method',
      title: 'How Should We Reach You?',
      description: 'Share your ideal method of communication for any necessary follow-up. You may include a phone number (cell, residential, or office) and/or an email address. This guarantees we can reply to your input in a timely manner.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'experience-details',
      title: 'Describe Your Interaction',
      description: 'Please outline your praise or grievance thoroughly. You are also welcome to attach pertinent documents or screenshots if relevant. The more precise your account, the more effectively we can respond to your observations.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'take-feedback-seriously',
      title: 'Your Voice Drives Our Standards',
      description: 'Each piece of praise and every concern is examined by our internal compliance and service excellence departments to confirm we are upholding our professional benchmarks and fulfilling your expectations. We appreciate your role in helping us deliver superior service.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-happens-next',
      title: 'What Comes After Submission?',
      description: 'Your input will be assessed within 2 working days. If you included contact details, we may follow up for further clarification. Grievances are forwarded to our compliance division for a comprehensive review, and you will hear back within 10 business days.',
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Share a Compliment or Concern</h1>
          <p className="text-xl">Your Perspective Is Valued</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Assist Us in Delivering Better Service</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              At Capital Review Management, each conversation matters. Whether your experience was outstanding or you have a concern to raise,
              we are eager to listen. Your observations guide us in refining our processes and sustaining the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Sections */}
      {feedbackSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'grey' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
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
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
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
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Response Submission Form</h2>
            <form onSubmit={handleSubmit} className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Creditor Name</label>
                  <input
                    type="text"
                    name="creditor"
                    value={formData.creditor}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Mailing Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="ZIP Code"
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Phone Number (optional)</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                      name="phoneType"
                      value={formData.phoneType}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Email Address (optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Nature of Response <span className="text-red-500">*</span></label>
                  <div className="space-y-2">
                    <label className="flex items-center text-[#b0b8c8]">
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
                    <label className="flex items-center text-[#b0b8c8]">
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
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Your Comments <span className="text-red-500">*</span></label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please elaborate on your compliment or concern in detail..."
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#4a7fb5] focus:ring-blue-500 border-[#1e293b] rounded"
                    required
                  />
                  <label className="text-sm text-[#b0b8c8]">
                    I verify that all details entered above are truthful and complete. I acknowledge that this submission will be examined by our staff.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a7fb5] text-white py-3 px-6 rounded-md hover:bg-[#3a6fa5] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Response'}
                </button>

                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-md ${
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

      {/* Contact Information Section */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">How to Reach Us</h2>
            <div className="bg-[#111827] rounded-lg shadow-lg p-8">
              <div className="text-lg text-[#b0b8c8] space-y-4">
                <p className="font-semibold text-white">Capital Review Management</p>
                <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
                <p className="text-xl font-semibold text-[#4a7fb5]">866-766-2692</p>
                <p className="mt-4">
                  <strong>General Email:</strong> info@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Regulatory Disclosure</h2>
            <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
              <p className="text-lg text-[#b0b8c8] leading-relaxed text-center">
                This correspondence constitutes an effort to recover a debt. All details gathered will serve that objective. This message originates from a debt collection agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Have further inquiries or require prompt support?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#1a1f2e' }}>
            Get in Touch Now!
          </Link>
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
            className="bg-[#1a1f2e] rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
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
                className="w-full bg-[#4a7fb5] text-white py-2 px-4 rounded-md hover:bg-[#3a6fa5] transition-colors duration-200"
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
