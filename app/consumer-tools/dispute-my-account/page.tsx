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
        setSubmitMessage('We appreciate your submission. Our staff will examine your details and follow up within 24 hours.')
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
        setSubmitMessage('An issue occurred while processing your dispute. Please retry or reach out to us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('An issue occurred while processing your dispute. Please retry or reach out to us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-white">Challenge My Account</h1>
      <h2 className="text-xl font-semibold mb-6 text-[#b0b8c8]">We Are Ready to Assist — Let Us Work Through This Together</h2>

      <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
        <p className="mb-6 text-[#b0b8c8]">
          If you suspect an account assigned to Capital Review Management is incorrect or illegitimate, you are entitled to challenge it.
          Kindly fill out the form below to start a review of your account.
        </p>

        <p className="mb-8 text-[#b0b8c8]">
          You are welcome (though not obligated) to describe the basis for your challenge or attach supporting materials
          so we can look into your claim as promptly as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Account Details</h3>
            <p className="text-sm text-[#8892a4] mb-4">
              Please enter your information exactly as it appears on your account statement:
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Account Number<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Creditor Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="creditor"
                  value={formData.creditor}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Street Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">State <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">ZIP Code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Contact Details (Optional)</h3>
            <p className="text-sm text-[#8892a4] mb-4">
              Sharing this information is voluntary, but it allows us to communicate with you more effectively throughout the resolution process.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Phone Category (Mobile, Home, Work)</label>
                <select
                  name="phoneType"
                  value={formData.phoneType}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                >
                  <option value="">Choose a type</option>
                  <option value="mobile">Mobile</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                />
              </div>
            </div>
          </div>

          <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Outline Your Challenge</h3>
            <p className="text-sm text-[#8892a4] mb-4">
              Please describe the grounds for your challenge and include any pertinent details.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Reason for Challenge <span className="text-red-500">*</span></label>
                <select
                  name="disputeReason"
                  value={formData.disputeReason}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                  required
                >
                  <option value="">Pick a reason</option>
                  <option value="not-my-debt">This obligation does not belong to me</option>
                  <option value="already-paid">I have already settled this balance</option>
                  <option value="wrong-amount">The balance shown is inaccurate</option>
                  <option value="identity-theft">This stems from identity theft</option>
                  <option value="other">Another reason</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#b0b8c8]">Challenge Details <span className="text-red-500">*</span></label>
                <textarea
                  name="disputeDetails"
                  value={formData.disputeDetails}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#111827] text-white border border-[#1e293b] rounded"
                  rows={4}
                  placeholder="Please supply thorough information regarding your challenge..."
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
              className="mt-1 h-4 w-4 text-[#4a7fb5] focus:ring-blue-500 border-[#1e293b] rounded"
              required
            />
            <label className="text-sm text-[#b0b8c8]">
              I verify that all details entered above are truthful and complete. I acknowledge that this challenge will be examined by our staff.
            </label>
          </div>

          <div className="bg-[#1a1f2e] border-l-4 border-[#4a7fb5] p-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Prefer to Speak with a Representative?</h3>
            <p className="mb-2 text-[#b0b8c8]">You may call us directly to connect with an account specialist:</p>
            <p className="font-semibold text-lg text-[#4a7fb5]">866-766-2692</p>
          </div>

          <div className="bg-[#1a1f2e] p-4 rounded text-sm">
            <p className="text-[#b0b8c8]"><strong className="text-white">Regulatory Disclosure:</strong> This correspondence constitutes an effort to recover a debt. All details gathered will serve that objective. This message originates from a debt collection agency.</p>
          </div>

          <div className="bg-[#111827] p-4 rounded text-sm">
            <p className="text-white"><strong>Capital Review Management</strong></p>
            <p className="text-[#b0b8c8]">2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            <p className="text-[#b0b8c8]">866-766-2692</p>
            <p className="mt-2 text-[#b0b8c8]">
              <strong className="text-white">Verification Email:</strong> info@capitalreviewmgt.com
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4a7fb5] text-white py-3 px-6 rounded-lg hover:bg-[#3a6fa5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Challenge'}
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
        </form>
      </div>

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
    </div>
  )
}
