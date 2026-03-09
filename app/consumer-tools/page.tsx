import Link from 'next/link'

export default function ConsumerToolsPage() {
  const consumerTools = [
    {
      id: 'make-payment',
      title: 'Make a Payment',
      description: 'Settle your account with our secure and convenient payment options. We offer multiple payment methods including online solutions, phone-based transactions, and traditional mail-in payments to accommodate your needs.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/make-a-payment',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'account-validation',
      title: 'Request Account Validation',
      description: 'Obtain account validation documentation sent directly to your email inbox. Our detailed account summary helps you verify your balance and review transaction records with complete transparency.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      link: '/consumer-tools/request-account-validation',
      external: false,
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'bankruptcy-notification',
      title: 'Bankruptcy Notification',
      description: 'Inform us of any bankruptcy filing to ensure your account receives proper handling. We maintain complete compliance with bankruptcy statutes and guarantee appropriate account treatment throughout the process.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/consumer-tools/bankruptcy-notification',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'fraud-identity-theft',
      title: 'Fraud & Identity Theft',
      description: 'Report suspected fraud or identity theft and access our dedicated support team. We provide rapid intervention for unauthorized transactions and comprehensive protection of your personal information.',
      image: 'https://images.unsplash.com/photo-1554224154-26032cdc0d14?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/fraud-identity-theft',
      external: false,
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'remove-number',
      title: 'Remove My Number',
      description: 'Modify your contact information or request removal of incorrect phone numbers from our system. We prioritize maintaining accurate contact data and fully respect your communication preferences.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/remove-my-number',
      external: false,
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'feedback',
      title: 'Submit Feedback',
      description: 'Share your compliments or concerns with our team. Your feedback is essential and helps us continuously improve our service quality and maintain our commitment to professional standards.',
      image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=800&auto=format&fit=crop',
      link: '/consumer-tools/submit-compliment-complaint',
      external: false,
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'dispute-account',
      title: 'Dispute My Account',
      description: 'Challenge account information if you believe it contains errors or unauthorized items. We treat all disputes with care and conduct thorough investigations to resolve your concerns.',
      image: '/Pages/Stamp_Doc.jpeg',
      link: '/consumer-tools/dispute-my-account',
      external: false,
      background: 'dark',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Consumer Tools</h1>
          <p>Self-serve resources engineered to help you manage your account with confidence and control.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-header">Take Control of Your Account</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Capital Review Management offers a comprehensive suite of secure, self-service tools.
              Explore the options below to address account matters, update information, and receive
              the support you need whenever you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {consumerTools.map((tool, index) => (
        <section key={tool.id} className={`content-section ${tool.background === 'darker' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {tool.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-80 object-cover shadow-lg"
                      />
                    </div>
                    <div className="order-2 content-block">
                      <h2 className="text-3xl font-bold mb-6 text-white">{tool.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      <Link href={tool.link} className="btn bg-[#1a1f2e] px-8 py-3 font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1 content-block">
                      <h2 className="text-3xl font-bold mb-6 text-white">{tool.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {tool.description}
                      </div>
                      <Link href={tool.link} className="btn bg-[#1a1f2e] px-8 py-3 font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
                        Learn More
                      </Link>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-80 object-cover shadow-lg"
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
      <section className="cta-section" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Require additional support? Our representatives are available to assist.
          </h3>
          <Link href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
