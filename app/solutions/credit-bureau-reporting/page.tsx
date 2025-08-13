export default function CreditBureauReportingPage() {
  const serviceSections = [
    {
      id: 'bureau-integration',
      title: 'Your Gateway to the Bureaus',
      description: 'Elite Portfolio Management\'s network, is fully integrated with the nation\'s three major credit bureaus, Experian, Equifax, and TransUnion. Our secure systems and reporting protocols ensure that authorized accounts are updated accurately, flagged appropriately, and tracked in real time.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-benefits',
      title: 'Stay Compliant & Save Time',
      description: 'We handle all bureau submissions on your behalf — no extra systems or staffing required. We ensure all reporting is accurate, up to date, and reflects the current account status (including disputes), in accordance with FCRA. No software costs, no integration burdens — we manage the full reporting process.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'recovery-enhancement',
      title: 'Improve Recovery Rates',
      description: 'Credit reporting, when used strategically, can increase repayment motivation without compromising consumer rights. Your team focuses on core business while we handle the credit reporting logistics and compliance protocols. Disputed accounts are flagged appropriately, and all consumer data is transmitted securely and responsibly.',
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Credit Bureau Reporting</h1>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Enhance Your Collection Strategy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As part of our full-service recovery solutions, Elite Portfolio Management offers optional credit bureau reporting 
              to enhance your collection strategy — at no additional cost. We report only with your authorization, and we handle 
              every file with full adherence to the Fair Credit Reporting Act (FCRA) and all applicable regulations.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Have questions about how credit reporting fits your strategy?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Call 833-381-4416 to speak with our compliance and recovery team. We ensure all reporting is accurate, 
              up to date, and reflects the current account status (including disputes), in accordance with FCRA.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to enhance your collection strategy?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 