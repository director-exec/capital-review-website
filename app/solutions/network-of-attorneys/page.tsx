export default function NetworkOfAttorneysPage() {
  const serviceSections = [
    {
      id: 'trusted-representation',
      title: 'Trusted Legal Representation — Anywhere in the U.S.',
      description: 'Our partners include licensed, bonded, and highly rated collection attorneys operating across all 50 states. You don\'t have to manage multiple firms. We oversee every claim — from filing to settlement — through our centralized system, so you get full visibility and efficiency from one point of contact.',
      image: 'https://images.pexels.com/photos/8730998/pexels-photo-8730998.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'client-directed-strategy',
      title: 'Client-Directed Legal Strategy',
      description: 'No lawsuit is initiated and no settlement is accepted without your explicit approval. The attorney represents you, and we manage the communication, documentation, and execution on your behalf. Before recommending litigation, Elite Portfolio conducts a collectability review including asset investigation, employment verification, and compliance checklists.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-services',
      title: 'Comprehensive Legal Services',
      description: 'Our Elite Portfolio Legal Network Services include lawsuit initiation and monitoring, judgment enforcement, settlement negotiation, court cost tracking, payment forwarding and accounting, multi-jurisdictional coverage, and bonded representation in every state. Whether you\'re pursuing a single claim or managing a national portfolio, we have the legal infrastructure to execute with confidence.',
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Nationwide Legal Network</h1>
          <p className="text-xl">Strategic Legal Escalation When It Matters Most</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Strategic Legal Escalation When It Matters Most</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While over 98% of debts are resolved without the need for litigation, certain situations demand a formal legal response. 
              The Elite Portfolio Management team offers comprehensive nationwide legal support through a vetted network of experienced collection 
              attorneys. So when legal action is required, you have the infrastructure in place to act decisively and compliantly.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, index) => (
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

      {/* Summary Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">When Legal Action Is Warranted</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're pursuing a single claim or managing a national portfolio, Elite Portfolio Management has the legal 
              infrastructure to execute with confidence — without ever losing sight of your brand reputation or compliance obligations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready for strategic legal escalation?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 