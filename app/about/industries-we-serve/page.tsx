export default function IndustriesWeServePage() {
  const industrySections = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'From major banks to emerging fintech lenders, we assist institutions with intelligent, data-driven recovery approaches. Our platforms connect directly with your key performance indicators, enabling tailored performance tracking and real-time visibility. Whether overseeing high-volume portfolios or specialized accounts, we operate with complete FDCPA/FCRA adherence and stringent consumer data protections.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Capital Review brings decades of expertise supporting wireless, broadband, landline, satellite, and cable operators. Our customized solutions maximize recovery while preserving brand integrity. With a digital-first collections approach, real-time reporting, and compliance-centered workflows, we oversee every phase of your consumer or commercial receivables with discretion and accuracy.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Our patient-focused recovery model blends empathy with measurable outcomes. We assist hospitals, physician practices, specialty care facilities, insurers, and pharmacy networks in managing receivables with respect and professionalism. Every interaction is carried out with complete HIPAA compliance and a commitment to protecting patient privacy while accelerating recoveries. HIPAA Compliance is Non-Negotiable \u2014 we place patient rights and data security first at every touchpoint, without exception.',
      image: '/Pages/Legal_Doc_Med.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'utilities',
      title: 'Utilities',
      description: 'We partner with major utility providers \u2014 gas, water, electric, and broadband \u2014 across both regulated and deregulated markets. Whether residential or commercial, our lifecycle-based collections methodology ensures early engagement, regulatory conformity, and minimal reputational exposure. We also handle specialized accounts such as equipment loss and property damage with diligence and precision.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'commercial-b2b',
      title: 'Commercial / B2B',
      description: 'For business-to-business collections, professionalism and confidentiality are paramount. Capital Review delivers commercial receivables management across sectors with an emphasis on preserving long-standing business relationships. Our team grasps the complexities of corporate debt recovery and designs strategies to align with your operations without jeopardizing your standing.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'education',
      title: 'Education',
      description: 'We support higher education institutions in managing student account balances with empathy, care, and full regulatory compliance. Our solutions are FERPA-aware and structured to uphold institutional reputation while empowering students to fulfill their financial obligations. We collaborate with public and private colleges, universities, and vocational schools across the country.',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl">Expertise. Accuracy. Results \u2014 Customized for Your Sector</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Tailored Solutions for Every Sector</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              At Capital Review Management, we focus on delivering outcome-oriented recovery strategies across a broad spectrum of industries. Our deep sector expertise, regulatory proficiency, and dedication to brand stewardship enable us to adapt our technology and workflows to address the distinct requirements of each client \u2014 all while upholding complete compliance and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industrySections.map((section, index) => (
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

      {/* Summary Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Protected. Compliant. Demonstrated.</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Whether you operate in healthcare or higher education, telecom or government \u2014 Capital Review Management is your dependable partner for compliant, high-performance recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a firm that truly knows your industry?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}
