import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCPA Compliance | Elite Portfolio Management',
  description: 'Learn about our commitment to TCPA compliance and consumer protection. We operate with structured, auditable, and aggressively compliant communication frameworks.',
}

export default function TCPACompliancePage() {
  const tcpaSections = [
    {
      id: 'consent-protocol',
      title: 'Consent-First Communication Protocol',
      description: 'We only contact consumers whose phone numbers are provided with valid consent. All numbers used are tied to documented consent status and monthly-reviewed internal archives. We aggressively honor consumer requests for removal, including STOP messages via SMS, verbal opt-outs during calls, and wrong-number notifications. Each request is documented, acted upon, and suppressed across future campaigns.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'caller-transparency',
      title: 'Caller ID & Transparency',
      description: 'Every number we use to communicate with is valid, active, callback-capable, and directly linked to our company. We never spoof or falsify caller identity. We register numbers with carrier-level caller ID systems when available and comply with FCC 47 CFR § 64.1601(e). Due to limitations from carriers and mobile data networks, our company name may not always appear — but the number will always trace directly to us.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'internal-documentation',
      title: 'Internal Documentation & Oversight',
      description: 'Each month, our team compiles an internal TCPA Consent Packet that includes number verification, oversight validation, and compliance policies and procedures. These records are securely stored and can be audited or reviewed if necessary. We do not use prerecorded messages on phone numbers without documented consent. Our internal controls and policy enforcement procedures make this non-negotiable.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'why-contacted',
      title: 'Why Was I Contacted?',
      description: 'Consumers can contact us directly to request removal, ask where we received their number, or flag a wrong number or inquiry. We provide multiple contact options including phone, email, and website forms with preset options for "Why was I contacted?", "Where did you get my number?", and "Please remove my number." All inquiries are routed to our compliance team for immediate attention.',
      image: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'zero-tolerance',
      title: 'Zero Tolerance for TCPA Abuse',
      description: 'We do not tolerate violations — internal or external. All calls are regulated, consent is validated, and audit logs are maintained. If you received a call or message from us and believe it was in error, contact us immediately. Our compliance team is available to address any concerns and ensure proper handling of your request.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
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
          <h1 className="text-5xl font-bold mb-4">TCPA Compliance</h1>
          <p className="text-xl">Our Commitment to Consumer Protection and Regulatory Adherence</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to TCPA Compliance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Elite Portfolio Management, we take the Telephone Consumer Protection Act (TCPA) seriously. 
              We operate with a structured, auditable, and aggressively compliant communication framework. 
              Our processes are designed to protect consumers, deter abusive litigation, and demonstrate full regulatory adherence.
            </p>
          </div>
        </div>
      </section>

      {/* TCPA Sections */}
      {tcpaSections.map((section, index) => (
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

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Our Compliance Team</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-lg text-gray-700 space-y-4">
                <p className="font-semibold">If you received a call or message from us and believe it was in error:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-blue-600">Phone</p>
                    <p>833-381-4416</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">Email</p>
                    <p>compliance@eliteportmgmt.com</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  This page serves as public notice of our TCPA compliance program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that prioritizes TCPA compliance?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
}
