export default function CommunityInvolvementPage() {
  const communitySections = [
    {
      id: 'mission-beyond',
      title: 'Our Dedication Extends Beyond Recovery',
      description: 'At Capital Review Management, our purpose runs deeper than financial recovery \u2014 it is grounded in generating enduring, meaningful impact in the communities where we operate. We believe genuine leadership encompasses giving back, and we proudly fulfill that obligation through hands-on volunteerism, philanthropic partnerships, and community-centered programs.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'charitable-partnerships',
      title: 'Philanthropic Alliances & Contributions',
      description: 'As part of our continuing commitment, we back local and national nonprofits through regular contributions, employee-driven fundraising campaigns, and direct participation in events that support those in need. From championing children\'s health organizations to tackling pressing community challenges, our aim is to generate tangible change \u2014 not only in business, but in the lives of real people.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'capital-standard',
      title: 'Capital Review Is More Than a Name \u2014 It Is Our Benchmark',
      description: 'Capital Review is not merely a name \u2014 it is a benchmark we maintain in everything we do, including how we serve our communities. We hold that genuine success is gauged not solely by business results, but by the constructive influence we exert on the world around us. Through our community engagement, we aspire to foster lasting transformation and cultivate stronger, more resilient neighborhoods.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Community Involvement</h1>
          <p className="text-xl">Building Stronger Communities Together</p>
        </div>
      </section>

      {/* Community Sections */}
      {communitySections.map((section, index) => (
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

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a firm that invests in the community?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}
