'use client'

import { useState, useEffect } from 'react'

export default function BankruptcyNotificationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

  // Add keyboard event listener for Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        closeModal()
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [showModal])

  const bankruptcySections = [
    {
      id: 'bankruptcy-notification',
      title: 'Have You Filed for Bankruptcy?',
      description: 'If you\'ve filed for bankruptcy and received a notice from Elite Portfolio Management, please let us know as soon as possible by submitting the form below or uploading your bankruptcy documentation directly through our secure portal. This information helps ensure your account is handled appropriately and in accordance with all applicable laws.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'General Account Information',
      description: 'Please provide the following details as shown on your Elite statement: Elite Account Number (8 digits), Creditor Name, First and Last Name, and Full Mailing Address (Street, City, State, Zip). This information helps us identify your account and ensure proper handling.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'case-details',
      title: 'Bankruptcy Case Details',
      description: 'You\'ll need to provide your Bankruptcy Case Number, Chapter (e.g., 7, 11, 13), Filing Court or Jurisdiction, and Date of Bankruptcy Filing. These details help us understand the specifics of your bankruptcy case and ensure compliance with bankruptcy laws.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'documentation',
      title: 'Upload Documentation or Add Comments',
      description: 'You can attach any relevant bankruptcy documents (PDF, DOC, image files accepted) and include any notes or messages related to your filing. This helps us process your notification more efficiently and ensures we have all the necessary information.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'grey',
      imageLeft: true
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
    bankruptcyCaseNumber: '',
    bankruptcyChapter: '',
    filingCourt: '',
    filingDate: '',
    comments: '',
    consent: false
  })
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ file: File; url?: string; uploading: boolean }>>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      
      for (const file of files) {
        // Add file to state with uploading status
        const fileEntry = { file, uploading: true }
        setUploadedFiles(prev => [...prev, fileEntry])
        
        try {
          // Upload file to Vercel Blob
          const formData = new FormData()
          formData.append('file', file)
          
          const response = await fetch('/api/upload-file', {
            method: 'POST',
            body: formData
          })
          
          if (response.ok) {
            const result = await response.json()
            // Update file entry with URL
            setUploadedFiles(prev => prev.map(f => 
              f.file === file ? { ...f, url: result.url, uploading: false } : f
            ))
          } else {
            // Remove file if upload failed
            setUploadedFiles(prev => prev.filter(f => f.file !== file))
            alert(`Failed to upload ${file.name}`)
          }
        } catch (error) {
          console.error('Error uploading file:', error)
          setUploadedFiles(prev => prev.filter(f => f.file !== file))
          alert(`Failed to upload ${file.name}`)
        }
      }
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
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
          formType: 'bankruptcy-notification',
          formData: {
            ...formData,
            uploadedFiles: uploadedFiles.map(fileEntry => ({
              name: fileEntry.file.name,
              size: fileEntry.file.size,
              type: fileEntry.file.type,
              url: fileEntry.url
            }))
          }
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your bankruptcy notification. A member of our team will review your information and contact you within 24 hours.')
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
          bankruptcyCaseNumber: '',
          bankruptcyChapter: '',
          filingCourt: '',
          filingDate: '',
          comments: '',
          consent: false
        })
      } else {
        setSubmitMessage('There was an error submitting your notification. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting your notification. Please try again or contact us directly.')
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
          style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bankruptcy Notification</h1>
          <p className="text-xl">Have You Filed for Bankruptcy?</p>
        </div>
      </section>

      {/* Bankruptcy Sections */}
      {bankruptcySections.map((section, index) => (
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

      {/* Bankruptcy Notification Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Bankruptcy Notification Form
              </h2>
              <p className="text-lg text-gray-700">
                Please include Elite's eight-digit account number on your statement.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* General Account Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">General Account Information</h3>
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
              </div>

              {/* Bankruptcy Case Details */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Bankruptcy Case Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bankruptcy Case Number <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="bankruptcyCaseNumber"
                        value={formData.bankruptcyCaseNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter bankruptcy case number"
                        required
                      />
                    </div>
                  
                                      <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bankruptcy Chapter <span className="text-blue-900">*</span>
                      </label>
                      <select
                        name="bankruptcyChapter"
                        value={formData.bankruptcyChapter}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        required
                      >
                      <option value="">Select Chapter</option>
                      <option value="7">Chapter 7</option>
                      <option value="11">Chapter 11</option>
                      <option value="13">Chapter 13</option>
                      <option value="12">Chapter 12</option>
                      <option value="9">Chapter 9</option>
                    </select>
                  </div>
                  
                                      <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Filing Court/Jurisdiction <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="text"
                        name="filingCourt"
                        value={formData.filingCourt}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        placeholder="Enter filing court or jurisdiction"
                        required
                      />
                    </div>
                  
                                      <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Bankruptcy Filing <span className="text-blue-900">*</span>
                      </label>
                      <input
                        type="date"
                        name="filingDate"
                        value={formData.filingDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        required
                      />
                    </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Additional Information</h3>
                
                {/* File Upload Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Bankruptcy Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="text-gray-600">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="mt-2 text-sm">
                          Click to upload files or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, DOCX, JPG, JPEG, PNG (Max 10MB each)
                        </p>
                      </div>
                    </label>
                  </div>
                  
                  {/* Display uploaded files */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                      <div className="space-y-2">
                        {uploadedFiles.map((fileEntry, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-700">{fileEntry.file.name}</span>
                              {fileEntry.uploading && (
                                <span className="text-xs text-blue-500">Uploading...</span>
                              )}
                              {fileEntry.url && (
                                <span className="text-xs text-green-500">✓ Uploaded</span>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comments or Additional Information
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Please provide any additional information about your bankruptcy filing..."
                  />
                </div>
              </div>
              
              {/* Consent Checkbox */}
              <div className="mb-8">
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
                    I confirm that I have filed for bankruptcy and that the information provided above is accurate and complete. I understand that this notification will be used to ensure my account is handled appropriately in accordance with bankruptcy laws.
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-900 text-white py-3 px-8 rounded-md hover:bg-blue-800 transition-colors duration-200 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Bankruptcy Notification'}
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

      {/* Need Assistance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Need Assistance?</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We're here to help ensure your legal rights are fully respected.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Call us at 833-381-4416 to speak with an account representative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Legal Notice</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-lg text-gray-700">
                <p className="font-semibold">Elite Portfolio Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p>833-381-4416</p>
                <p className="mt-4">
                  <strong>Compliance Email:</strong> compliance@eliteportmgmt.com
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