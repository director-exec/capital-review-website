import Image from 'next/image';
import Link from 'next/link';

export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'advanced-location-services',
      title: 'Next-Generation Location Services',
      description: 'Our skip tracing capabilities harness state-of-the-art technology and extensive data repositories to pinpoint hard-to-locate consumers. We deploy advanced algorithms, public records research, and proprietary databases to track down individuals who have relocated, updated their contact details, or are otherwise challenging to reach.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-database-access',
      title: 'Extensive Data Repository Access',
      description: 'We maintain connections to wide-ranging databases spanning credit bureaus, public records, utility filings, and specialized skip tracing repositories. Our team cross-references multiple data streams to assemble the most precise and current contact information for each individual.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'fcra-compliant-processes',
      title: 'FCRA-Aligned Procedures',
      description: 'Every skip tracing operation we perform adheres fully to the Fair Credit Reporting Act (FCRA) and other governing regulations. We uphold stringent protocols to protect consumer privacy and data security while maximizing our capacity to locate individuals.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-expertise',
      title: 'Deep Domain Knowledge',
      description: 'Our skip tracing unit comprises veteran professionals who grasp the distinct hurdles of finding individuals under varied conditions. Whether confronting name changes, address shifts, or layered family dynamics, we have the proficiency to work through these obstacles effectively.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'proven-success-rates',
      title: 'Verified Success Metrics',
      description: 'Our skip tracing services regularly attain elevated success rates in locating individuals across diverse demographics and situations. We monitor our performance data and continuously hone our processes to sustain and improve our hit rates.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Skip Tracing Services</h1>
          <p className="text-xl">Next-Generation Location Services for Elusive Consumers</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Find the Unfindable</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              When standard outreach methods come up empty, our sophisticated skip tracing services can help you
              pinpoint elusive consumers. We harness cutting-edge technology, extensive data repositories, and
              seasoned professionals to track down individuals who have relocated, changed their contact details,
              or are otherwise challenging to reach.
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
            <h2 className="text-3xl font-bold mb-6 text-white">When Standard Outreach Comes Up Short</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Skip tracing frequently proves to be the decisive factor in successful collections once conventional contact approaches
              have been exhausted. Our sophisticated location services can help you re-establish contact with consumers and potentially
              reclaim accounts that might otherwise be forfeited.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Prepared to track down elusive consumers?
          </h3>
          <Link href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </Link>
        </div>
      </section>
    </>
  )
}