'use client'

import { useState } from 'react'

export default function BankruptcyNotificationPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }

  const bankruptcySections = [
    {
      id: 'bankruptcy-notification',
      title: 'Have You Filed for Bankruptcy?',
      description: 'If you\'ve filed for bankruptcy and received a notice from Elite Portfolio Management, please let us know as soon as possible by submitting the form below or uploading your bankruptcy documentation directly through our secure portal. This information helps ensure your account is handled appropriately and in accordance with all applicable laws.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'account-information',
      title: 'Step 1: General Account Information',
      description: 'Please provide the following details as shown on your Elite statement: Elite Account Number (8 digits), Creditor Name, First and Last Name, and Full Mailing Address (Street, City, State, Zip). This information helps us identify your account and ensure proper handling.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'case-details',
      title: 'Step 2: Bankruptcy Case Details',
      description: 'You\'ll need to provide your Bankruptcy Case Number, Chapter (e.g., 7, 11, 13), Filing Court or Jurisdiction, and Date of Bankruptcy Filing. These details help us understand the specifics of your bankruptcy case and ensure compliance with bankruptcy laws.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'documentation',
      title: 'Step 3: Upload Documentation or Add Comments',
      description: 'You can attach any relevant bankruptcy documents (PDF, DOC, image files accepted) and include any notes or messages related to your filing. This helps us process your notification more efficiently and ensures we have all the necessary information.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?q=80&w=800&auto=format&fit=crop',
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)' }}
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
                <p>PO Box [Insert]</p>
                <p>Conroe TX, 77301</p>
                <p>833-381-4416</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">IMPORTANT</h3>
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