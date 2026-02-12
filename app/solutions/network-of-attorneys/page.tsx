export default function NetworkOfAttorneysPage() {
  const serviceSections = [
    {
      id: 'trusted-representation',
      title: 'Reliable Legal Representation — Coast to Coast',
      description: 'Our partners consist of licensed, bonded, and top-rated collection attorneys practicing across every state in the nation. You do not need to coordinate with multiple law firms. We supervise each claim — from initial filing through settlement — via our centralized platform, giving you complete transparency and streamlined efficiency from a single point of contact.',
      image: 'https://images.pexels.com/photos/8730998/pexels-photo-8730998.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'client-directed-strategy',
      title: 'Client-Controlled Legal Approach',
      description: 'No legal action is filed and no settlement is finalized without your explicit sign-off. The attorney acts on your behalf, and we coordinate the communication, paperwork, and execution for you. Prior to suggesting litigation, Capital Review performs a collectability assessment encompassing asset research, employment confirmation, and compliance evaluations.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-services',
      title: 'Full-Spectrum Legal Capabilities',
      description: 'Our Capital Review Legal Network Services encompass lawsuit filing and tracking, judgment enforcement, settlement negotiation, court expense monitoring, payment processing and reconciliation, multi-jurisdictional reach, and bonded representation in every state. Whether you are pursuing an individual claim or overseeing a nationwide portfolio, we possess the legal framework to execute with assurance.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/8730998/pexels-photo-8730998.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Nationwide Legal Network</h1>
          <p className="text-xl">Calculated Legal Escalation When the Situation Demands It</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Calculated Legal Escalation When the Situation Demands It</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Although more than 98% of obligations are settled without resorting to litigation, specific circumstances call for a formal legal response.
              The Capital Review Management team provides comprehensive coast-to-coast legal support through a carefully vetted network of seasoned collection
              attorneys. When legal proceedings become necessary, you have the infrastructure ready to act decisively and in full compliance.
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
            <h2 className="text-3xl font-bold mb-6 text-white">When Legal Proceedings Are Justified</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Whether you are pursuing an individual claim or overseeing a nationwide portfolio, Capital Review Management possesses the legal
              framework to execute with assurance — without ever compromising your brand reputation or compliance commitments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared for calculated legal escalation?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}