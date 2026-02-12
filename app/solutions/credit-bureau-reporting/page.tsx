export default function CreditBureauReportingPage() {
  const serviceSections = [
    {
      id: 'bureau-integration',
      title: 'Direct Access to All Major Bureaus',
      description: 'Capital Review Management\'s network maintains full integration with the country\'s three primary credit bureaus: Experian, Equifax, and TransUnion. Our secure platforms and reporting workflows guarantee that authorized accounts are refreshed accurately, flagged correctly, and monitored in real time.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',

      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-benefits',
      title: 'Maintain Compliance & Conserve Resources',
      description: 'We manage all bureau submissions for you — no supplementary systems or personnel needed. We verify that all reporting is precise, current, and accurately reflects the live account status (including contested items), in accordance with FCRA. Zero software fees, zero integration overhead — we administer the complete reporting cycle.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'recovery-enhancement',
      title: 'Boost Recovery Outcomes',
      description: 'Credit reporting, when deployed thoughtfully, can heighten repayment motivation without infringing on consumer protections. Your team stays focused on core operations while we handle the credit reporting mechanics and compliance requirements. Contested accounts are flagged properly, and all consumer information is transmitted securely and responsibly.',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Credit Bureau Reporting</h1>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Strengthen Your Collection Approach</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              As a component of our comprehensive recovery services, Capital Review Management provides optional credit bureau reporting
              to bolster your collection approach — at no extra charge. We report exclusively with your authorization, and we process
              each file in strict compliance with the Fair Credit Reporting Act (FCRA) and all governing regulations.
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
            <h2 className="text-3xl font-bold mb-6 text-white">Want to learn how credit reporting integrates with your approach?</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Dial 866-766-2692 to connect with our compliance and recovery specialists. We verify that all reporting is precise,
              current, and accurately reflects the live account status (including contested items), in full accordance with FCRA.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared to strengthen your collection approach?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}