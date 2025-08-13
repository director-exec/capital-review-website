import Image from 'next/image';
import Link from 'next/link';

export default function SkipTracingPage() {
  const serviceSections = [
    {
      id: 'advanced-location-services',
      title: 'Advanced Location Services',
      description: 'Our skip tracing services utilize cutting-edge technology and comprehensive databases to locate hard-to-find consumers. We employ sophisticated algorithms, public records searches, and proprietary databases to track down individuals who have moved, changed contact information, or are otherwise difficult to reach.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'comprehensive-database-access',
      title: 'Comprehensive Database Access',
      description: 'We have access to extensive databases including credit bureaus, public records, utility records, and proprietary skip tracing databases. Our team combines multiple data sources to create the most accurate and up-to-date contact information for each individual.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'fcra-compliant-processes',
      title: 'FCRA-Compliant Processes',
      description: 'All our skip tracing activities are conducted in full compliance with the Fair Credit Reporting Act (FCRA) and other applicable regulations. We maintain strict protocols to ensure consumer privacy and data protection while maximizing our ability to locate individuals.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'specialized-expertise',
      title: 'Specialized Expertise',
      description: 'Our skip tracing team includes experienced professionals who understand the unique challenges of locating individuals in various circumstances. Whether dealing with name changes, address updates, or complex family situations, we have the expertise to navigate these challenges effectively.',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'proven-success-rates',
      title: 'Proven Success Rates',
      description: 'Our skip tracing services consistently achieve high success rates in locating individuals across various demographics and circumstances. We track our performance metrics and continuously refine our processes to maintain and improve our success rates.',
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Skip Tracing Services</h1>
          <p className="text-xl">Advanced Location Services for Hard-to-Find Consumers</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Locate the Unlocatable</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              When traditional contact methods fail, our advanced skip tracing services can help you locate 
              hard-to-find consumers. We utilize cutting-edge technology, comprehensive databases, and 
              experienced professionals to track down individuals who have moved, changed contact information, 
              or are otherwise difficult to reach.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">When Traditional Methods Fail</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skip tracing is often the key to successful collections when standard contact methods have been exhausted. 
              Our advanced location services can help you reconnect with consumers and potentially recover accounts 
              that would otherwise be lost.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to locate hard-to-find consumers?
          </h3>
          <Link href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
}
