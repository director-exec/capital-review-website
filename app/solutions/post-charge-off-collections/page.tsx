import Image from 'next/image';

export default function PostChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'advanced-recovery',
      title: 'Sophisticated Recovery Programs',
      description: 'Once accounts go unresolved and age past internal capabilities, Capital Review Management brings the depth of experience, robust systems, and compliance framework required to transform them into recovered revenue — while shielding your brand image throughout the entire process. Our post charge-off collection efforts are fueled by predictive analytics, multi-channel outreach, and fully regulated procedures.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'omnichannel-outreach',
      title: 'Multi-Channel Engagement Tools',
      description: 'Phone, text, electronic mail, and physical correspondence — calibrated to consumer habits and preferred communication methods. Every action is informed by data: segmentation, scoring, and behavioral monitoring steer our workflows to enhance recovery outcomes. We prepare every agent to interact with post-charge-off consumers using empathy, directness, and professionalism.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-first',
      title: 'Regulation-First Framework',
      description: 'FDCPA, FCRA, TCPA, GLBA, HIPAA — our in-house legal team guarantees complete regulatory alignment at every juncture. Whether you are a banking institution, medical provider, utility company, or commercial enterprise, our methodology is crafted to minimize friction and accelerate resolution.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'proven-results',
      title: 'Demonstrated Performance',
      description: 'Our post charge-off recovery programs reliably produce outstanding collection rates while preserving the highest benchmarks of regulatory adherence and consumer service. We recognize that each account signifies a relationship with restoration potential. Drawing on years of success in heavily regulated sectors, we have refined an efficient and effective methodology.',
      image: '/Pages/Calculator_Writing_Stats_Graph.jpeg',
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
          style={{ backgroundImage: 'url(/Pages/Writing_Signing_Doc_Meeting.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Post Charge-Off Collections</h1>
          <p className="text-xl">A Tested Framework for Optimizing Recovery</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Sophisticated Recovery Programs for Written-Off Accounts</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Once accounts remain unresolved and age past internal capabilities, Capital Review Management brings the depth
              of experience, robust systems, and compliance framework required to transform them into recovered revenue — while
              shielding your brand image throughout the entire process.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, index) => (
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
            <h2 className="text-3xl font-bold mb-6 text-white">Maximum-Impact Recovery for Overdue Accounts</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Our post charge-off recovery programs reliably produce outstanding collection rates while preserving
              the highest benchmarks of regulatory adherence and consumer service. We recognize that each account
              signifies a relationship with restoration potential.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared to elevate your collection performance?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}