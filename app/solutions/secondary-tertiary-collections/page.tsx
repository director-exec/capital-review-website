import Image from 'next/image';

export default function SecondaryTertiaryCollectionsPage() {
  const serviceSections = [
    {
      id: 'specialized-recovery',
      title: 'Expert Recovery for Resistant Accounts',
      description: 'When accounts have cycled through numerous collection efforts without a resolution, they call for a specialized methodology. Capital Review Management\'s Secondary & Tertiary Collections offerings are purpose-built for these demanding situations that require advanced tactics and highly experienced handling. Our professionals bring extensive backgrounds in navigating intricate collection scenarios.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-communication',
      title: 'Targeted Communication Methods',
      description: 'Bespoke approaches informed by account history and consumer behavioral trends. We deliver access to dedicated legal counsel for nuanced regulatory and compliance questions, alongside inventive repayment structures crafted to fit each consumer\'s unique financial situation.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'flexible-solutions',
      title: 'Adaptable Payment Structures',
      description: 'Inventive repayment arrangements custom-fit to each consumer\'s individual circumstances. Our dedicated services enable recovery on accounts previously deemed uncollectible, specialized management of complex cases, sophisticated location and contact capabilities, professional legal and compliance guidance, and individually crafted payment programs.',
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
          <h1 className="text-5xl font-bold mb-4">Secondary & Tertiary Collections</h1>
          <p className="text-xl">Expert Recovery for Resistant Accounts</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Next-Level Strategies for Accounts Demanding Expert Attention</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              When accounts have cycled through numerous collection efforts without a resolution, they call for a
              specialized methodology. Capital Review Management's Secondary & Tertiary Collections offerings are
              purpose-built for these demanding situations that require advanced tactics and seasoned expertise.
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
            <h2 className="text-3xl font-bold mb-6 text-white">When Conventional Collection Falls Short</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Certain accounts call for more than routine collection tactics. Our Secondary & Tertiary Collections
              offerings deliver the specialized know-how and sophisticated strategies necessary to recover accounts that
              have withstood conventional collection efforts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            In need of specialized collection expertise?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}