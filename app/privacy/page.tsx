import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      id: 'information-collection',
      title: 'Data We Gather',
      description: 'We may collect a range of personal data including contact details (name, mailing address, email, telephone number), financial data (payment records, banking information), debt-related data (account identifiers, outstanding amounts), identification documents (government-issued IDs), and communication logs (phone conversations, emails, written correspondence).',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'information-usage',
      title: 'How We Use and Share Data',
      description: 'We never sell personal data to outside parties. That said, we may disclose information for operational needs with affiliated entities and service vendors, in the course of corporate transactions such as acquisitions or divestitures, and for regulatory compliance as mandated by statute, regulation, or judicial proceedings.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'data-security',
      title: 'Information Protection',
      description: 'We implement technical and procedural safeguards to maintain the confidentiality, accuracy, and security of personal data. Nevertheless, no transmission or storage method is completely impervious, and we cannot provide an absolute guarantee of data protection.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'text-messaging',
      title: 'SMS Communication Privacy',
      description: 'We do not distribute, transfer, or commercialize mobile phone numbers, text messaging enrollment data, or authorization details to outside parties. For additional information regarding text-based communications, please consult our Terms and Conditions page.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?_gl=1*kss10t*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5NDQ2NDckbzQkZzEkdDE3NTQ5NDQ2NTYkajUxJGwwJGgw',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'your-rights',
      title: 'Your Entitlements',
      description: 'You have the right to view, correct, or request removal of your personal data. To exercise these entitlements or for any questions about this Privacy Policy, please reach out to us through the contact details provided below.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'california-privacy-rights',
      title: 'California Consumer Privacy Protections (CCPA)',
      description: 'If you reside in California, you are granted supplementary rights under the California Consumer Privacy Act (CCPA). These include the right to: (1) Be informed about what personal data we gather, utilize, share, and sell; (2) Ask for the erasure of your personal data; (3) Decline the sale of your personal data (we do not engage in selling personal data); (4) Be free from retaliation for exercising your privacy entitlements; and (5) Obtain your personal data in a transferable format. To invoke any of these California privacy protections, please reach out using the contact details listed in the Contact Us section below. We will address your inquiry within the deadlines prescribed by California statute.',
      image: '/Pages/Legal_Doc_Med.jpeg',
      background: 'darker',
      imageLeft: true
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Safeguarding Your Personal Data</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">We Take Your Privacy Seriously</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Capital Review Management LLC is dedicated to protecting the privacy and confidentiality of personal data.
              This Privacy Policy describes how we gather, utilize, share, and secure individuals' personal information
              in relation to our account recovery operations.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      {privacySections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'darker' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
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

      {/* Changes to Policy Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Revisions to This Policy</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              We may revise this Privacy Policy at any point. Significant modifications will be communicated via our website
              or through other suitable channels. We recommend reviewing this policy on a regular basis to remain informed about
              how we safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
            <div className="bg-[#111827] rounded-lg shadow-lg p-8">
              <p className="text-lg text-[#b0b8c8] mb-6">
                For any inquiries or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="text-lg text-[#b0b8c8] space-y-4">
                <p className="font-semibold text-white">Capital Review Management LLC</p>
                <p className="text-xl font-semibold text-[#c9a84c]">866-766-2692</p>
                <p className="mt-4">
                  <strong className="text-white">Email:</strong> info@capitalreviewmgt.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="py-8 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#8892a4]">
              Copyright &copy; 2026 Capital Review Management – All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}