'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FraudIdentityTheftPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    console.log('closeModal called')
    setShowModal(false)
    console.log('showModal set to false')
  }

  const fraudSections = [
    {
      id: 'immediate-action',
      title: 'Immediate Action Required',
      description: 'If you believe your account has been impacted by fraud or identity theft, please contact Elite Portfolio Management immediately so we can assist you in resolving the matter with urgency and care. Your privacy and security are our priority. Call us at 833-381-4416 for immediate assistance.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'ftc-reporting',
      title: 'Report Identity Theft to the FTC',
      description: 'You can also file a formal identity theft report with the Federal Trade Commission. Visit IdentityTheft.gov to create a comprehensive report that will help you resolve the issue with creditors, banks, and credit bureaus. This official report is often required by financial institutions and can help protect your rights.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Seal_of_the_United_States_Federal_Trade_Commission.svg/1024px-Seal_of_the_United_States_Federal_Trade_Commission.svg.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'police-report',
      title: 'File a Police Report',
      description: 'In cases of identity theft, it\'s important to file a police report with your local law enforcement agency. This creates an official record of the crime and may be required by creditors, banks, and credit bureaus. Bring your FTC Identity Theft Report, government-issued photo ID, proof of address, and any evidence of the identity theft.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-to-expect',
      title: 'What to Expect',
      description: 'When you report fraud or identity theft to us, you can expect immediate account review and security measures, assistance with documentation and reporting, guidance on protecting your identity going forward, and regular updates on the status of your case. We work quickly to resolve these issues and protect your financial security.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'additional-resources',
      title: 'Additional Resources',
      description: 'We provide access to important resources including credit bureaus (Equifax, Experian, TransUnion) and federal agencies (FTC, Social Security Administration, IRS). These organizations can help you place fraud alerts, freeze your credit, and report identity theft to the appropriate authorities.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Fraud & Identity Theft</h1>
          <p className="text-xl">Suspect Fraud? We're Here to Help.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protecting Your Identity and Financial Security</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you believe your account has been impacted by fraud or identity theft, 
              Elite Portfolio Management is here to help you resolve the matter with urgency and care. 
              We take these situations seriously and will work quickly to protect your financial security.
            </p>
          </div>
        </div>
      </section>

      {/* Fraud Sections */}
      {fraudSections.map((section, index) => (
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

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Important Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Credit Bureaus</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Equifax:</strong> 1-800-525-6285</p>
                  <p><strong>Experian:</strong> 1-888-397-3742</p>
                  <p><strong>TransUnion:</strong> 1-800-680-7289</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Federal Agencies</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>FTC:</strong> 1-877-438-4338</p>
                  <p><strong>Social Security:</strong> 1-800-772-1213</p>
                  <p><strong>IRS:</strong> 1-800-908-4490</p>
                </div>
              </div>
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
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">Elite Portfolio Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p className="text-xl font-semibold text-blue-900">833-381-4416</p>
                <p className="mt-4">
                  <strong>Compliance Email:</strong> compliance@eliteportmgmt.com
                </p>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Need immediate assistance with fraud or identity theft?
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