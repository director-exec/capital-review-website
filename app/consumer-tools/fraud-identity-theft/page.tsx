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
      title: 'Urgent Steps to Take',
      description: 'If you suspect your account has been compromised due to fraud or identity theft, please reach out to Capital Review Management right away so we can help you address the situation promptly and with the utmost attention. Protecting your privacy and security is our top concern. Call us at 866-766-2692 for immediate support.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'ftc-reporting',
      title: 'File an FTC Identity Theft Report',
      description: 'You may also submit an official identity theft complaint through the Federal Trade Commission. Go to IdentityTheft.gov to generate a detailed report that will assist you in working with creditors, financial institutions, and credit reporting agencies. This formal documentation is frequently required by banks and can serve to safeguard your consumer rights.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Seal_of_the_United_States_Federal_Trade_Commission.svg/1024px-Seal_of_the_United_States_Federal_Trade_Commission.svg.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'police-report',
      title: 'Submit a Law Enforcement Report',
      description: 'When dealing with identity theft, it is essential to file a report with your local police department. This establishes an official documentation of the incident and may be necessary when working with creditors, financial institutions, and credit reporting agencies. Be sure to bring your FTC Identity Theft Report, a government-issued photo ID, proof of your current address, and any supporting evidence of the theft.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'what-to-expect',
      title: 'Our Response Process',
      description: 'Once you notify us of fraud or identity theft, you can anticipate a prompt account review along with enhanced security protocols, support with gathering necessary documentation and filing reports, advice on safeguarding your identity moving forward, and consistent updates regarding the progress of your case. We act swiftly to address these matters and preserve your financial well-being.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'additional-resources',
      title: 'Helpful External Resources',
      description: 'We offer access to key resources including the major credit bureaus (Equifax, Experian, TransUnion) and relevant federal agencies (FTC, Social Security Administration, IRS). These organizations can assist you with placing fraud alerts, freezing your credit files, and reporting identity theft to the proper authorities.',
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Fraud & Identity Theft Protection</h1>
          <p className="text-xl">Think You've Been Targeted? We Can Assist.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Safeguarding Your Identity and Financial Well-Being</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              If you suspect your account has been compromised by fraud or identity theft,
              Capital Review Management is ready to help you address the situation promptly and with care.
              We treat these matters with the highest priority and will move quickly to safeguard your financial well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Fraud Sections */}
      {fraudSections.map((section, index) => (
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

      {/* Resources Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Essential Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Credit Bureaus</h3>
                <div className="space-y-2 text-[#b0b8c8]">
                  <p><strong>Equifax:</strong> 1-800-525-6285</p>
                  <p><strong>Experian:</strong> 1-888-397-3742</p>
                  <p><strong>TransUnion:</strong> 1-800-680-7289</p>
                </div>
              </div>
              <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Federal Agencies</h3>
                <div className="space-y-2 text-[#b0b8c8]">
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
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="bg-[#111827] rounded-lg shadow-lg p-8">
              <div className="text-lg text-[#b0b8c8] space-y-4">
                <p className="font-semibold">Capital Review Management</p>
                <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
                <p className="text-xl font-semibold text-[#4a7fb5]">866-766-2692</p>
                <p className="mt-4">
                  <strong>Compliance Email:</strong> compliance@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclosure Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Legal Disclosure</h2>
            <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
              <p className="text-lg text-[#b0b8c8] leading-relaxed text-center">
                This communication constitutes an attempt to collect a debt. Any information gathered will be utilized for that purpose. This message originates from a debt collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Require urgent support regarding fraud or identity theft?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#1a1f2e' }}>
            Reach Out Now!
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
                This communication constitutes an attempt to collect a debt. Any information gathered will be utilized for that purpose. This message originates from a debt collector.
              </p>
              <p className="text-sm text-[#b0b8c8] mb-6">
                Telephone calls to and from this company may be monitored and/or recorded.
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
