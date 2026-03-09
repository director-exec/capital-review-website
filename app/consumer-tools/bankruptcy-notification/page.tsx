'use client'

import { useState, useEffect } from 'react'

export default function BankruptcyNotificationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

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
      description: 'If you have filed for bankruptcy and received correspondence from Capital Review Management, please notify us promptly by submitting the form below or uploading your documentation through our secure portal. This ensures your account is managed appropriately and in full compliance with applicable law.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      dark: false,
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'General Account Information',
      description: 'Please provide the following details as shown on your Capital Review statement: Account Number, Creditor Name, First and Last Name, and Full Mailing Address (Street, City, State, Zip). This information allows us to identify your account and ensure proper handling.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      dark: true,
      imageLeft: true
    },
    {
      id: 'case-details',
      title: 'Bankruptcy Case Details',
      description: 'You will need to provide your Bankruptcy Case Number, Chapter (e.g., 7, 11, 13), Filing Court or Jurisdiction, and Date of Filing. These details allow us to verify the specifics of your case and ensure compliance with all bankruptcy regulations.',
      image: '/Pages/Stamp_Doc.jpeg',
      dark: false,
      imageLeft: false
    },
    {
      id: 'documentation',
      title: 'Upload Documentation or Add Comments',
      description: 'Attach any relevant bankruptcy documents (PDF, DOC, or image files accepted) and include any notes or messages related to your filing. This helps us process your notification efficiently and ensures we have all necessary information on file.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      dark: true,
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
        const fileEntry = { file, uploading: true }
        setUploadedFiles(prev => [...prev, fileEntry])
        try {
          const fd = new FormData()
          fd.append('file', file)
          const response = await fetch('/api/upload-file', {
            method: 'POST',
            body: fd
          })
          if (response.ok) {
            const result = await response.json()
            setUploadedFiles(prev => prev.map(f =>
              f.file === file ? { ...f, url: result.url, uploading: false } : f
            ))
          } else {
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
        headers: { 'Content-Type': 'application/json' },
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
      await response.json()
      if (response.ok) {
        setSubmitMessage('Thank you for your bankruptcy notification. A member of our team will review your information and contact you within 24 hours.')
        setFormData({
          accountNumber: '', creditor: '', firstName: '', lastName: '',
          address: '', city: '', state: '', zipCode: '', phoneNumber: '',
          email: '', bankruptcyCaseNumber: '', bankruptcyChapter: '',
          filingCourt: '', filingDate: '', comments: '', consent: false
        })
        setUploadedFiles([])
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

  const stateOptions = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
    'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
    'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
  ]
  const stateNames: Record<string, string> = {
    AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',
    DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',
    KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',
    MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
    NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',
    OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',
    TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',
    WI:'Wisconsin',WY:'Wyoming'
  }

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Bankruptcy Notification</h1>
          <p>Notify Us of Your Filing</p>
        </div>
      </section>

      {/* Info Sections */}
      {bankruptcySections.map((section) => (
        <section key={section.id} className={`subpage-section ${section.dark ? 'subpage-section-dark-alt' : 'subpage-section-dark'}`}>
          <div className="subpage-container">
            <div className="subpage-grid">
              {section.imageLeft ? (
                <>
                  <div className="subpage-image-col">
                    <img src={section.image} alt={section.title} className="subpage-image" />
                  </div>
                  <div className="subpage-text-col">
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="subpage-text-col">
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                  <div className="subpage-image-col">
                    <img src={section.image} alt={section.title} className="subpage-image" />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Bankruptcy Notification Form */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="subpage-intro-inner" style={{ marginBottom: '3rem' }}>
            <h2>Bankruptcy Notification Form</h2>
            <p>Please include Capital Review Management&apos;s eight-digit account number as shown on your statement.</p>
          </div>

          {submitMessage && (
            <div className={submitMessage.includes('error') ? 'form-error' : 'form-success'}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="subpage-form">
            {/* General Account Information */}
            <h3>General Account Information</h3>
            <div className="form-grid-2">
              <div className="form-column">
                <div className="form-group">
                  <label>Account Number <span className="form-required">*</span></label>
                  <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Enter account number" required />
                </div>
                <div className="form-group">
                  <label>First Name <span className="form-required">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                  <label>Address <span className="form-required">*</span></label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your mailing address" required />
                </div>
                <div className="form-group">
                  <label>City <span className="form-required">*</span></label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your city" required />
                </div>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>State <span className="form-required">*</span></label>
                    <select name="state" value={formData.state} onChange={handleInputChange} required>
                      <option value="">Select State</option>
                      {stateOptions.map(s => <option key={s} value={s}>{stateNames[s]}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>ZIP Code <span className="form-required">*</span></label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Enter ZIP code" required />
                  </div>
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label>Creditor <span className="form-required">*</span></label>
                  <input type="text" name="creditor" value={formData.creditor} onChange={handleInputChange} placeholder="Enter creditor name" required />
                </div>
                <div className="form-group">
                  <label>Last Name <span className="form-required">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number <span className="form-required">*</span></label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label>Email Address <span className="form-required">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
                </div>
              </div>
            </div>

            {/* Bankruptcy Case Details */}
            <h3 style={{ marginTop: '3rem' }}>Bankruptcy Case Details</h3>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Bankruptcy Case Number <span className="form-required">*</span></label>
                <input type="text" name="bankruptcyCaseNumber" value={formData.bankruptcyCaseNumber} onChange={handleInputChange} placeholder="Enter bankruptcy case number" required />
              </div>
              <div className="form-group">
                <label>Bankruptcy Chapter <span className="form-required">*</span></label>
                <select name="bankruptcyChapter" value={formData.bankruptcyChapter} onChange={handleInputChange} required>
                  <option value="">Select Chapter</option>
                  <option value="7">Chapter 7</option>
                  <option value="11">Chapter 11</option>
                  <option value="13">Chapter 13</option>
                  <option value="12">Chapter 12</option>
                  <option value="9">Chapter 9</option>
                </select>
              </div>
              <div className="form-group">
                <label>Filing Court / Jurisdiction <span className="form-required">*</span></label>
                <input type="text" name="filingCourt" value={formData.filingCourt} onChange={handleInputChange} placeholder="Enter filing court or jurisdiction" required />
              </div>
              <div className="form-group">
                <label>Date of Filing <span className="form-required">*</span></label>
                <input type="date" name="filingDate" value={formData.filingDate} onChange={handleInputChange} required />
              </div>
            </div>

            {/* Additional Information */}
            <h3 style={{ marginTop: '3rem' }}>Additional Information</h3>

            <div className="form-group">
              <label>Upload Bankruptcy Documents (Optional)</label>
              <input type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
            </div>

            {uploadedFiles.length > 0 && (
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label>Uploaded Files</label>
                {uploadedFiles.map((fileEntry, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--panel-border)', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      {fileEntry.file.name}
                      {fileEntry.uploading && <span style={{ color: 'var(--accent-blue)', marginLeft: '0.75rem', fontSize: '0.8rem' }}>Uploading...</span>}
                      {fileEntry.url && <span style={{ color: '#22c55e', marginLeft: '0.75rem', fontSize: '0.8rem' }}>✓ Uploaded</span>}
                    </span>
                    <button type="button" onClick={() => removeFile(index)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="form-group">
              <label>Comments or Additional Information</label>
              <textarea name="comments" value={formData.comments} onChange={handleInputChange} rows={4} placeholder="Please provide any additional information about your bankruptcy filing..." />
            </div>

            {/* Consent */}
            <div className="form-group" style={{ marginTop: '2rem' }}>
              <div className="checkbox-group">
                <label className="consent-label">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} required />
                  I confirm that I have filed for bankruptcy and that the information provided above is accurate and complete. I understand that this notification will be used to ensure my account is handled appropriately in accordance with applicable law.
                </label>
              </div>
            </div>

            {/* Submit */}
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? 'Submitting...' : 'Submit Bankruptcy Notification'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Need Assistance */}
      <section className="subpage-section subpage-section-dark-alt">
        <div className="subpage-container">
          <div className="subpage-intro-inner">
            <h2>Need Assistance?</h2>
            <p>We are here to help ensure your rights are fully respected. Call us at 866-766-2692 to speak with an account representative, or email compliance@capitalreviewmgt.com for compliance-related inquiries.</p>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="subpage-section subpage-section-dark">
        <div className="subpage-container">
          <div className="info-panel">
            <h3>Legal Notice</h3>
            <p>This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>Contact Information</h3>
          <div className="contact-cards">
            <div className="contact-card">
              <h4>Capital Review Management</h4>
              <p>2200 N Frazier St. STE 120 Box 142<br />Conroe, TX 77301</p>
            </div>
            <div className="contact-card">
              <h4>Reach Us</h4>
              <p>866-766-2692</p>
              <p>compliance@capitalreviewmgt.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Modal */}
      {showModal && (
        <div className="disclosure-overlay" onClick={closeModal}>
          <div className="disclosure-modal" onClick={(e) => e.stopPropagation()}>
            <h3>IMPORTANT</h3>
            <p>This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.</p>
            <p>Calls to and from this company may be monitored and/or recorded.</p>
            <button onClick={closeModal} className="form-submit" style={{ marginTop: '1.5rem' }}>I Accept</button>
          </div>
        </div>
      )}
    </>
  )
}
