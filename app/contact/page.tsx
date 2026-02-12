export default function ContactPage() {
  const contactCards = [
    {
      id: 'account-resolution',
      title: 'Looking to Settle an Account?',
      description: 'If you have been contacted by Capital Review Management and wish to review your account or submit a payment, our dedicated staff is ready to help you.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      email: 'validation@capitalreviewmgt.com'
    },
    {
      id: 'receivables-help',
      title: 'Seeking Receivables Solutions?',
      description: 'Want to enhance your collections or optimize your accounts receivable workflow? Reach out to our solutions group to discover how we assist clients in boosting recovery rates while safeguarding their reputation.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      email: 'info@capitalreviewmgt.com'
    },
    {
      id: 'client-support',
      title: 'Existing Client?',
      description: 'If you are a current client requiring assistance, report access, or a service modification, we are always available for you.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      email: 'info@capitalreviewmgt.com'
    },
    {
      id: 'hr-verification',
      title: 'Employment Verification or HR Inquiries?',
      description: 'Looking to confirm employment status, check office schedules, or ask about employee benefits?',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      email: 'info@capitalreviewmgt.com'
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
          <h1 className="text-5xl font-bold mb-4">Reach Out to Us</h1>
          <p className="text-xl">We Will Direct You to the Appropriate Department</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Got a Question or Require Support?</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed mb-8">
              Choose the option below that most closely matches your needs — our team stands ready to assist.
              We are here to address any inquiries or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:866-766-2692"
                className="bg-[#4a7fb5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block"
              >
                Call Us: 866-766-2692
              </a>
              <a
                href="mailto:info@capitalreviewmgt.com"
                className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block"
              >
                Email Us: info@capitalreviewmgt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactCards.map((card) => {
                const isAccountResolution = card.id === 'account-resolution';
                const isReceivablesHelp = card.id === 'receivables-help';
                const isClickable = isAccountResolution || isReceivablesHelp;
                const CardContent = (
                  <div className={`bg-[#0a0f1c] rounded-lg shadow-lg border border-[#1e293b] hover:shadow-xl transition-shadow duration-300 overflow-hidden ${isClickable ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}>
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
                      <div className="text-[#b0b8c8] leading-relaxed mb-4">
                        {card.description}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-[#c9a84c]">Email: {card.email}</p>
                        <p className="text-sm text-[#8892a4]">Phone: 866-766-2692</p>
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
      <section className="cta text-center py-12" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared to take the next step?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:866-766-2692" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
              Call Us Now!
            </a>
            <a href="mailto:info@capitalreviewmgt.com" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}