export default function SecurityPage() {
  const securitySections = [
    {
      id: 'data-protection',
      title: 'Information Safeguarding & Encryption',
      description: 'At Capital Review Management, protecting sensitive data is woven into every aspect of our operations. We recognize the vital necessity of securing both your records and your clients\' personal information at every stage. Our history is impeccable — with zero breach incidents — and our systems are engineered to surpass the most rigorous security and regulatory benchmarks in the industry.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'security-protocols',
      title: 'Protective Measures & System Architecture',
      description: 'We deploy regularly enhanced, fully transparent security measures that harness cutting-edge encryption, fortified storage, and restricted access controls. From secure document destruction to fully protected digital and physical workspaces, every element is carefully managed — including a thorough business continuity strategy to guarantee uninterrupted service under any scenario.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-standards',
      title: 'Regulatory Adherence & Standards Alignment',
      description: 'Regardless of your sector, you can depend on Capital Review to provide recovery support with the strongest level of information protection and regulatory conformity. In today\'s digitally driven landscape, robust security is not a luxury — it is a fundamental responsibility. We uphold strict adherence to all federal and state mandates while adopting industry-leading protocols for data defense.',
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
          <h1 className="text-5xl font-bold mb-4">Security</h1>
          <p className="text-xl">Robust Protection Underpins Everything We Do</p>
        </div>
      </section>

      {/* Security Sections */}
      {securitySections.map((section, index) => (
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

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a firm that places security and regulatory alignment first?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}
