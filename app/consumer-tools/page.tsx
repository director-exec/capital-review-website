import Link from 'next/link'

export default function ConsumerToolsPage() {
  const consumerTools = [
    {
      id: 'make-payment',
      title: 'Make a Payment',
      description: 'Take advantage of our safe and straightforward payment solutions to settle your balance with ease. We support a range of payment channels including online, telephone, and postal options to suit your needs.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/make-a-payment',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'account-validation',
      title: 'Request Account Validation',
      description: 'Obtain verification documentation for your account sent directly to your email. This comprehensive summary allows you to review your balance and transaction history for improved financial oversight.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      link: '/consumer-tools/request-account-validation',
      external: false,
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'bankruptcy-notification',
      title: 'Bankruptcy Notification',
      description: 'Inform us if you have initiated bankruptcy proceedings so we can manage your account correctly. This enables us to adhere to bankruptcy regulations and guarantees your account receives appropriate treatment throughout the process.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/consumer-tools/bankruptcy-notification',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'fraud-identity-theft',
      title: 'Fraud & Identity Theft',
      description: 'Flag any suspected fraudulent activity or identity compromise for prompt support and safeguarding. Our specialized team will guide you through resolving unauthorized transactions and securing your personal data.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/fraud-identity-theft',
      external: false,
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'remove-number',
      title: 'Remove My Number',
      description: 'Modify your communication settings or correct inaccurate phone numbers in our system. This guarantees we maintain up-to-date contact details and honors your preferred method of communication.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/remove-my-number',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'feedback',
      title: 'Submit Feedback',
      description: 'Provide praise or raise concerns to help us enhance our service and better support you. Your input is important and drives us to uphold the highest quality of customer care.',
      image: 'https://images.unsplash.com/photo-5fNmWej4tAA?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/submit-compliment-complaint',
      external: false,
      background: 'darker',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Consumer Tools</h1>
          <p className="text-xl">Self-serve resources built to help you handle your account with confidence and security.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Manage Your Account on Your Terms</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              At Capital Review Management, we are committed to offering you accessible, protected methods to oversee your account.
              Explore the selection of self-serve tools below, crafted to help you address concerns, modify your information,
              and obtain the support you require promptly and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {consumerTools.map((tool, index) => (
        <section key={tool.id} className={`py-16 ${tool.background === 'darker' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {tool.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-white">{tool.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      <Link href={tool.link} className="btn bg-[#1a1f2e] px-8 py-3 rounded-lg font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-white">{tool.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      <Link href={tool.link} className="btn bg-[#1a1f2e] px-8 py-3 rounded-lg font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
                        Learn More
                      </Link>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={tool.image}
                        alt={tool.title}
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
            Require further support? Our staff is ready to address any inquiries or issues you may have.
          </h3>
          <Link href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
            Reach Out to Us
          </Link>
        </div>
      </section>
    </>
  )
}
