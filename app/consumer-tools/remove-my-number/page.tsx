'use client'

import { useState } from 'react'
import Link from 'next/link'

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
        setSubmitMessage('We appreciate your submission. Your calling preferences will be adjusted within 5 working days.')
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
        setSubmitMessage('An issue occurred while processing your submission. Please retry or reach out to us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('An issue occurred while processing your submission. Please retry or reach out to us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeNumberSections = [
    {
      id: 'urgent-matters',
      title: 'Time-Sensitive Requests',
      description: 'For pressing concerns, we suggest reaching us by phone at 866-766-2692. If you need your number taken off our contact list right away, our representatives are standing by to assist you immediately.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'update-contact-preference',
      title: 'Modify Your Phone Preferences',
      description: 'Kindly supply the details below so we can revise our records correctly: your given and family name, the phone number currently being dialed, whether that number is wrong or you would like us to use an alternate line, along with any extra remarks.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'what-happens-next',
      title: 'Following Steps',
      description: 'Your submission will be evaluated within one business day. Adjustments will take effect within 5 working days. A confirmation notification will be sent once everything is finalized. Should you have provided a substitute number, we will start using it without delay.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'important-notice',
      title: 'Required Disclosure',
      description: 'This correspondence constitutes an effort to recover a debt. All details gathered will serve that objective. This message originates from a debt collection agency. We are committed to safeguarding your privacy and will handle your request without unnecessary delay.',
      image: '/Pages/Stamp_Doc.jpeg',
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
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Remove My Number</h1>
          <p className="text-xl">Want Us to Stop Dialing a Particular Line? Notify Us Here.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Modify Your Calling Preferences</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              If you have been receiving calls from Capital Review Management by mistake — or if you would rather we reach you on a different line —
              kindly fill out the form below. Your submission will be handled within 5 working days.
            </p>
          </div>
        </div>
      </section>

      {/* Remove Number Sections */}
      {removeNumberSections.map((section, index) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center text-[#4a7fb5]">Phone Preference Request Form</h2>
            <form onSubmit={handleSubmit} className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">First Name <span className="text-[#4a7fb5]">*</span></label>
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
                    <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Last Name <span className="text-[#4a7fb5]">*</span></label>
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
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">The Phone Number We Are Currently Dialing <span className="text-[#4a7fb5]">*</span></label>
                  <input
                    type="tel"
                    name="phoneNumberToRemove"
                    value={formData.phoneNumberToRemove}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Choose One: <span className="text-[#4a7fb5]">*</span></label>
                  <div className="space-y-2">
                    <label className="flex items-center text-[#b0b8c8]">
                      <input
                        type="radio"
                        name="preference"
                        value="remove"
                        checked={formData.preference === 'remove'}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      <span>This number is wrong — kindly delete it</span>
                    </label>
                    <label className="flex items-center text-[#b0b8c8]">
                      <input
                        type="radio"
                        name="preference"
                        value="different"
                        checked={formData.preference === 'different'}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      <span>This number is accurate, but I would like to be contacted on a different line</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Alternate Contact Number (if applicable)</label>
                  <input
                    type="tel"
                    name="preferredContactNumber"
                    value={formData.preferredContactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b0b8c8] mb-2">Remarks or Supplementary Details (optional)</label>
                  <textarea
                    rows={4}
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#111827] text-white border border-[#1e293b] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    I verify that all details entered above are truthful and complete. I acknowledge that this submission will be addressed within 5 working days.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4a7fb5] text-white py-3 px-6 rounded-md hover:bg-[#3a6fa5] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
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
                  <strong>Compliance Email:</strong> compliance@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Require prompt help with taking your number off our list?
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
