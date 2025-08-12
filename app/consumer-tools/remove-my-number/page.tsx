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
      description: 'If the matter is urgent, we recommend calling us directly at 833-381-4416. For immediate assistance with removing your number from our calling list, our team is available to help you right away.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'update-contact-preference',
      title: 'Update Your Contact Preference',
      description: 'Please provide the following information so we can update our records accurately: your first and last name, the number we are currently calling, whether the number is incorrect or you prefer a different contact number, and any additional comments or notes.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'what-happens-next',
      title: 'What Happens Next?',
      description: 'Your request will be reviewed within 24 hours, changes will be implemented within 5 business days, you\'ll receive a confirmation email once processed, and if you provided an alternative number, we\'ll begin using it immediately.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'important-notice',
      title: 'Important Notice',
      description: 'This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector. We take your privacy seriously and will process your request promptly.',
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Remove My Number</h1>
          <p className="text-xl">Need Us to Stop Calling a Number? Let Us Know.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Update Your Contact Preferences</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you've received calls from Elite Portfolio Management in error — or if you would prefer we contact you at a different number — 
              please complete the form below. Your request will be processed within 5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Remove Number Sections */}
      {removeNumberSections.map((section, index) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Contact Preference Form</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name <span className="text-blue-900">*</span></label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-blue-900">*</span></label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">The Number We Are Currently Calling <span className="text-blue-900">*</span></label>
                  <input 
                    type="tel" 
                    name="phoneNumberToRemove"
                    value={formData.phoneNumberToRemove}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select One: <span className="text-blue-900">*</span></label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="preference" 
                        value="remove"
                        checked={formData.preference === 'remove'}
                        onChange={handleInputChange}
                        className="mr-2" 
                        required
                      />
                      <span>The number is incorrect — please remove it</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="preference" 
                        value="different"
                        checked={formData.preference === 'different'}
                        onChange={handleInputChange}
                        className="mr-2" 
                        required
                      />
                      <span>The number is correct, but I prefer to be reached at a different number</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Number (if different)</label>
                  <input 
                    type="tel" 
                    name="preferredContactNumber"
                    value={formData.preferredContactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comments or Additional Notes (optional)</label>
                  <textarea 
                    rows={4} 
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    I confirm that the information provided above is accurate and complete. I understand that this request will be processed within 5 business days.
                  </label>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <strong>Compliance Email:</strong> compliance@eliteportfoliomgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Need immediate assistance with removing your number?
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