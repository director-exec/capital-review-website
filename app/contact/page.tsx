export default function ContactPage() {
  const contactCards = [
    {
      id: 'account-resolution',
      title: 'Trying to Resolve an Account?',
      description: 'If you\'ve received a communication from Elite Portfolio Management and want to discuss your account or make a payment, our team is here to assist you.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      email: 'validation@eliteportmgmt.com'
    },
    {
      id: 'receivables-help',
      title: 'Need Help With Receivables?',
      description: 'Looking to improve collections or streamline your accounts receivable process? Contact our solutions team to learn how we help clients maximize recovery while protecting their brand.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      email: 'compliance@eliteportmgmt.com'
    },
    {
      id: 'client-support',
      title: 'Already a Client?',
      description: 'If you\'re a current client and need support, reporting access, or a service update, we\'re always here for you.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      email: 'info@eliteportmgmt.com'
    },
    {
      id: 'hr-verification',
      title: 'Employment Verification or HR Questions?',
      description: 'Need to verify employment, check holiday hours, or inquire about benefits?',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      email: 'info@eliteportmgmt.com'
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Let's Get You to the Right Place</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Question or Need Assistance?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Select the option below that best matches your situation — we're ready to help. 
              Our team is here to assist you with any questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:833-381-4416" 
                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block"
              >
                Call Us: 833-381-4416
              </a>
              <a 
                href="mailto:info@eliteportmgmt.com" 
                className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
              >
                Email Us: info@eliteportmgmt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactCards.map((card) => {
                const isAccountResolution = card.id === 'account-resolution';
                const isReceivablesHelp = card.id === 'receivables-help';
                const isClickable = isAccountResolution || isReceivablesHelp;
                const CardContent = (
                  <div className={`bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden ${isClickable ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}>
                    <div className="relative h-48">
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white text-center px-4">{card.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-gray-700 leading-relaxed mb-4">
                        {card.description}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-blue-600">Email: {card.email}</p>
                        <p className="text-sm text-gray-600">Phone: 833-381-4416</p>
                      </div>
                    </div>
                  </div>
                );

                return isClickable ? (
                  <a 
                    key={card.id} 
                    href={isAccountResolution ? "/consumer-tools/request-account-validation" : "/solutions"}
                    className="block no-underline"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={card.id}>
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta text-center py-12" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to get started?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:833-381-4416" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
              Call Us Today!
            </a>
            <a href="mailto:info@eliteportmgmt.com" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 