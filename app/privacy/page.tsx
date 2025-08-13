import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      description: 'We may collect various types of personal information including contact information (name, address, email, phone), financial information (payment history, bank details), debt information (account numbers, balances), identification information (government IDs), and communications records (phone calls, emails, correspondence).',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'information-usage',
      title: 'Information Usage and Disclosure',
      description: 'We do not sell personal information to third parties. However, we may share information for business operations with affiliates and service providers, during business transfers such as mergers or sales, and for legal compliance as required by law, regulation, or legal process.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'data-security',
      title: 'Data Security',
      description: 'We employ technical and organizational measures to safeguard the confidentiality, integrity, and security of personal information. However, no method of transmission or storage is entirely secure, and we cannot guarantee absolute data security.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'text-messaging',
      title: 'Text Messaging Privacy',
      description: 'We do not share, transfer, or sell mobile numbers, text messaging opt-in data, or consent information to third parties. For more details on text communications, please refer to our Terms and Conditions page.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?_gl=1*kss10t*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5NDQ2NDckbzQkZzEkdDE3NTQ5NDQ2NTYkajUxJGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      description: 'Individuals have the right to access, update, or request the deletion of their personal information. To exercise these rights or for any questions regarding this Privacy Policy, please contact us using the information provided.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Protecting Your Personal Information</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Your Privacy Matters to Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Elite Portfolio Management LLC is committed to safeguarding the privacy and confidentiality of personal information. 
              This Privacy Policy outlines how we collect, use, disclose, and protect individuals' personal information 
              in connection with our account recovery services.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      {privacySections.map((section, index) => (
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

      {/* Changes to Policy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Changes to This Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this Privacy Policy at any time. Any material changes will be communicated through our website 
              or other appropriate channels. We encourage you to review this policy periodically to stay informed about 
              how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                For any questions or concerns regarding this Privacy Policy, please contact us at:
              </p>
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">Elite Portfolio Management LLC</p>
                <p className="text-xl font-semibold text-blue-600">833-381-4416</p>
                <p className="mt-4">
                  <strong>Email:</strong> info@eliteportmgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Copyright © 2025 Elite Portfolio Management – All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
