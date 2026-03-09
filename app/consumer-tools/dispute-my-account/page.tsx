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
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Dispute My Account</h1>
          <p>We're Here to Help — Let's Resolve It Together</p>
        </div>
      </section>

      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="mb-6">
              If you believe an account placed with Capital Review Management is inaccurate or invalid, you have the right to dispute it.
              Please complete the form below to initiate a review of your account.
            </p>

            <p className="mb-8">
              You're welcome (but not required) to explain the reason for your dispute or upload supporting documentation
              to help us investigate your claim as efficiently as possible.
            </p>

            <form onSubmit={handleSubmit} className="subpage-form space-y-8">
          <div>
                            <h3 className="text-lg font-semibold mb-4">Account Information</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please provide your details exactly as shown on your Capital Review account statement:
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Capital Review Account Number<span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Creditor Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="creditor"
                  value={formData.creditor}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Street Address <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP Code <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Information (Optional)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Providing this information is optional, but it helps us communicate with you more efficiently during the resolution process.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Type of Phone (Mobile, Home, Work)</label>
                <select 
                  name="phoneType"
                  value={formData.phoneType}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select type</option>
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>

          <div>
                            <h3 className="text-lg font-semibold mb-4">Explain Your Dispute</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please explain the reason for your dispute and provide any relevant details.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Dispute Reason <span className="text-red-500">*</span></label>
                <select 
                  name="disputeReason"
                  value={formData.disputeReason}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
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
                <label className="block text-sm font-medium mb-1">Dispute Details <span className="text-red-500">*</span></label>
                <textarea 
                  name="disputeDetails"
                  value={formData.disputeDetails}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded" 
                  rows={4} 
                  placeholder="Please provide detailed information about your dispute..."
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
              required
            />
            <label className="text-sm text-gray-700">
              I confirm that the information provided above is accurate and complete. I understand that this dispute will be reviewed by our team.
            </label>
          </div>

          <div className="bg-cream border-l-4 border-navy p-6">
            <h3 className="text-lg font-semibold mb-2">Need to Speak with Someone?</h3>
            <p className="mb-2">You can contact us directly to speak with an account representative:</p>
            <p className="font-semibold text-lg">866-766-2692</p>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <p><strong>Capital Review Management</strong></p>
            <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            <p>866-766-2692</p>
            <p className="mt-2">
              <strong>Validation Email:</strong> validation@capitalreviewmgt.com
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy text-white py-3 px-6 hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
          </button>
          
              {submitMessage && (
                <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
                  {submitMessage}
                </div>
              )}
            </form>
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
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-4">IMPORTANT</h3>
              <p className="text-sm text-gray-700 mb-4">
                This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Calls to and from this company may be monitored and/or recorded.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-navy text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200"
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