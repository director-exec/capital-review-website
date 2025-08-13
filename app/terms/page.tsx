import Link from 'next/link'

export default function TermsAndConditionsPage() {
  const termsSections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      description: 'By accessing and using the Website, you acknowledge and agree to abide by these Terms and Conditions and all applicable laws and regulations. If you do not agree to any of these terms, please do not use the Website.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'modifications-to-terms',
      title: 'Modifications to Terms',
      description: 'We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Website constitutes acceptance of any changes.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      description: 'Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. We encourage you to review our Privacy Policy to understand how we collect, use, and protect your information.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'All content on the Website, including text, graphics, logos, and software, is the property of Elite Portfolio Management LLC and is protected by copyright laws. You may not use, reproduce, or distribute any content without our express written permission.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      description: 'We are not liable for any damages resulting from your use of, or inability to use, the Website or any services provided. This includes, without limitation, damages due to errors, interruptions, or data loss.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'text-messaging-terms',
      title: 'Text Messaging Terms and Conditions',
      description: 'By consenting to receive text messages from Elite Portfolio Management LLC, you agree to electronic consent, message and data rates may apply, variable message frequency, help information availability, opt-out procedures, MMS vs. SMS delivery, and service provider liability limitations.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Terms and Conditions of Use</h1>
          <p className="text-xl">Please read these terms carefully before using our website</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Understanding Our Terms</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the website of Elite Portfolio Management LLC. By accessing and using eliteportfoliomanagement.com, 
              you agree to comply with and be bound by these Terms and Conditions. Please read them carefully to understand 
              your rights and obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      {termsSections.map((section, index) => (
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

      {/* Additional Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Additional Terms</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6 text-lg text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Third-Party Links</h3>
                  <p>Our Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party websites.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Governing Law</h3>
                  <p>These Terms and Conditions are governed by and construed in accordance with the laws of the state of Texas, without regard to its conflict of law principles.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Termination of Use</h3>
                  <p>We reserve the right to suspend or terminate your access to the Website at any time for violation of these Terms and Conditions or for any other reason.</p>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                For any questions regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">Elite Portfolio Management LLC</p>
                <p className="text-xl font-semibold text-blue-900">833-381-4416</p>
                <p className="mt-4">
                  <strong>Email:</strong> info@eliteportmgmt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
