import PageLayout from '../../../components/PageLayout';

export default function WarehousingManagementPage() {
  const serviceSections = [
    {
      id: 'keep-cash-flow',
      title: 'Sustain Your Revenue Stream',
      description: 'Capital Review will oversee your aging accounts at a discounted rate. Our proprietary scoring, analytics, and skip tracing capabilities help you optimize recovery and sustain cash flow on accounts where the statute of limitations remains active. We scan numerous databases around the clock for advantageous recovery windows.',
      image: 'https://images.pexels.com/photos/8111877/pexels-photo-8111877.jpeg?_gl=1*21l4jz*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzM2OTIkbzMkZzAkdDE3NTQ5MzM2OTIkajYwJGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'secure-data-holding',
      title: 'Protected Data Retention',
      description: 'We maintain and track accounts that have moved beyond conventional collection timelines, while guaranteeing complete adherence to data retention statutes. Our technology continuously scans national databases to identify credit activity, employment changes, asset movements, or other indicators of renewed collectability.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'proprietary-scoring',
      title: 'Custom Scoring & Data Analysis',
      description: 'We re-evaluate and rank accounts using refreshed financial behavior data, repayment capacity metrics, and risk signals. Warehoused accounts are retained at reduced servicing rates, with comprehensive recovery operations only relaunched when genuine collection potential is identified.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'cost-effective-strategy',
      title: 'Budget-Conscious Methodology',
      description: 'Stretch recovery windows without legal exposure, grow total lifetime ROI per account, prevent premature account closures or write-offs, and redirect internal team capacity while we monitor and administer. Accounts approaching the statute of limitations still hold value — provided they are managed with precision.',
      image: 'https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=800',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Warehousing Management</h1>
          <p className="text-xl">Sustain Your Revenue Stream</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Expand Your Income Pipeline</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Capital Review will oversee your aging accounts at a discounted rate. Our proprietary scoring, analytics,
              and skip tracing capabilities help you optimize recovery and sustain cash flow on accounts where the statute
              of limitations remains active.
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
            <h2 className="text-3xl font-bold mb-6 text-white">Avoid Closing Accounts Prematurely</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Accounts nearing the statute of limitations still hold value — provided they are managed with precision. Let Capital Review
              assist you in tracking and reclaiming them with minimal expense and optimal timing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared to unlock your full recovery potential?
          </h3>
          <a href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}