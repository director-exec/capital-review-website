import Image from 'next/image';

export default function PreChargeOffCollectionsPage() {
  const serviceSections = [
    {
      id: 'early-intervention',
      title: 'Proactive Engagement Approach',
      description: 'Our pre-collection methodology centers on timely, courteous outreach for accounts that are mildly overdue — well before write-off or aggressive collection measures become necessary. These accounts do not require forceful tactics. They benefit from a gentle reminder — and that is precisely what we deliver through calculated early-phase contact, driven by advanced data analysis and executed with a brand-conscious mindset.',
      image: 'https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'customized-outreach',
      title: 'Tailored Communication Programs',
      description: 'Designed around your specific business framework, risk appetite, and account schedules. Our contact approaches prioritize your organization\'s reputation, emphasizing transparency, professionalism, and understanding. Each communication and technique is fully FDCPA-compliant and aligned with sector-specific mandates.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'analytics-driven',
      title: 'Data-Powered Decision Making',
      description: 'We leverage early-phase scoring algorithms and behavioral insights to rank accounts and identify the optimal contact channels. Our platforms connect directly with your performance indicators, enabling bespoke tracking and live reporting. Whether overseeing large-scale portfolios or specialized accounts, we operate under complete FDCPA/FCRA compliance with rigorous consumer data protections.',
      image: 'https://images.pexels.com/photos/7433837/pexels-photo-7433837.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'business-benefits',
      title: 'Operational Advantages',
      description: 'Stop accounts from reaching full collection status, maintain valuable customer connections, enhance recovery percentages on early-stage delinquencies, sustain a professional and regulation-compliant outreach tone, and slash long-term collection expenses by as much as 80%. Our pre-collection initiatives are structured to reinstate account health rapidly — before expensive write-offs, conflicts, or legal proceedings materialize.',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/8730374/pexels-photo-8730374.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Pre-Collection Services</h1>
          <p className="text-xl">Timely Action Often Makes the Biggest Difference</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Recover Faster. Act Sooner. Work Smarter.</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              At Capital Review Management, we recognize that reaching out to a past-due account at the earliest opportunity
              dramatically improves the likelihood of a positive outcome. Our Pre-Collection Services are built around timely,
              respectful engagement for accounts that are slightly overdue — well before write-off or intensive
              collection action is warranted.
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
            <h2 className="text-3xl font-bold mb-6 text-white">Address It Before It Grows</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
                Acting promptly yields the strongest results. Our pre-collection initiatives are built to restore
                account standing swiftly — before expensive write-offs, disputes, or litigation gain traction.
              </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a team that specializes in proactive account resolution?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
      </div>
      </section>
    </>
  )
}