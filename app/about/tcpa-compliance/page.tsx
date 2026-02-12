import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCPA Compliance | Capital Review Management',
  description: 'Discover our dedication to TCPA compliance and consumer safeguards. We operate with structured, auditable, and rigorously compliant communication practices.',
}

export default function TCPACompliancePage() {
  const tcpaSections = [
    {
      id: 'consent-protocol',
      title: 'Consent-Driven Communication Framework',
      description: 'We exclusively reach out to consumers whose phone numbers are furnished with verified consent. Every number utilized is linked to documented consent status and reviewed through monthly internal archives. We vigorously honor consumer removal requests, including STOP messages via text, verbal opt-outs during conversations, and wrong-number alerts. Each request is recorded, processed, and suppressed across all future outreach.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'caller-transparency',
      title: 'Caller Identification & Openness',
      description: 'Every number we use for outreach is valid, active, capable of receiving callbacks, and directly associated with our organization. We never falsify or manipulate caller identity. We register our numbers with carrier-level caller ID systems where available and adhere to FCC 47 CFR \u00A7 64.1601(e). Due to constraints from carriers and mobile data networks, our company name may not always display \u2014 but the number will always trace directly back to us.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'internal-documentation',
      title: 'Internal Records & Governance',
      description: 'Each month, our team assembles an internal TCPA Consent Packet comprising number verification, oversight validation, and compliance policies and procedures. These documents are stored securely and are available for audit or review as needed. We never employ prerecorded messages on phone numbers lacking documented consent. Our internal controls and policy enforcement mechanisms make this an absolute requirement.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'why-contacted',
      title: 'Why Did I Receive a Call?',
      description: 'Consumers may reach out to us directly to request removal, inquire about the source of their number, or report a wrong number or inquiry. We offer multiple ways to connect including phone, email, and website forms with preset options for "Why did I receive a call?", "How did you obtain my number?", and "Please delete my number." All inquiries are directed to our compliance team for prompt resolution.',
      image: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'zero-tolerance',
      title: 'Absolute Zero Tolerance for TCPA Violations',
      description: 'We have no tolerance for infractions \u2014 whether internal or external. All calls are governed, consent is validated, and audit logs are preserved. If you received a call or message from us that you believe was made in error, reach out to us without delay. Our compliance team stands ready to address any concerns and ensure your request is handled properly.',
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">TCPA Compliance</h1>
          <p className="text-xl">Our Dedication to Consumer Safeguards and Regulatory Conformity</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Dedication to TCPA Compliance</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              At Capital Review Management, we treat the Telephone Consumer Protection Act (TCPA) with the utmost gravity.
              We maintain a structured, auditable, and rigorously compliant communication framework.
              Our procedures are built to shield consumers, discourage frivolous litigation, and demonstrate thorough regulatory conformity.
            </p>
          </div>
        </div>
      </section>

      {/* TCPA Sections */}
      {tcpaSections.map((section, index) => (
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

      {/* Contact Information Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Reach Our Compliance Team</h2>
            <div className="bg-[#1a1f2e] rounded-lg shadow-lg p-8">
              <div className="text-lg text-[#b0b8c8] space-y-4">
                <p className="font-semibold">If you received a call or message from us that you believe was made in error:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-[#c9a84c]">Phone</p>
                    <p>866-766-2692</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#c9a84c]">Email</p>
                    <p>compliance@capitalreviewmgt.com</p>
                  </div>
                </div>
                <p className="text-sm text-[#8892a4] mt-6">
                  This page functions as public disclosure of our TCPA compliance program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a firm that leads in TCPA compliance?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors" style={{ color: '#1a1f2e' }}>
            Get In Touch Now!
          </Link>
        </div>
      </section>
    </>
  )
}
