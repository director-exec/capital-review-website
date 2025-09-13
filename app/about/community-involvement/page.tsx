export default function CommunityInvolvementPage() {
  const communitySections = [
    {
      id: 'mission-beyond',
      title: 'Our Commitment Reaches Beyond Collections',
      description: 'At Elite Portfolio Management, our mission goes deeper than financial recovery — it\'s rooted in creating lasting, positive impact in the communities we serve. We believe true leadership includes giving back, and we proudly uphold that responsibility through active volunteerism, charitable partnerships, and community-driven initiatives.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'charitable-partnerships',
      title: 'Charitable Partnerships & Support',
      description: 'As part of our ongoing commitment, we support local and national nonprofits through monthly contributions, employee-led fundraising efforts, and direct involvement in events that uplift those in need. From supporting children\'s health organizations to addressing urgent community issues, our goal is to drive measurable change — not just in business, but in people\'s lives.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'elite-standard',
      title: 'Elite Portfolio Isn\'t Just a Name — It\'s Our Standard',
      description: 'Elite Portfolio isn\'t just a name — it\'s a standard we uphold in everything we do; including how we serve our communities. We believe that true success is measured not just by business performance, but by the positive impact we have on the world around us. Through our community involvement, we strive to create lasting change and build stronger, more resilient communities.',
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Community Involvement</h1>
          <p className="text-xl">Investing in Stronger Communities</p>
        </div>
      </section>

      {/* Community Sections */}
      {communitySections.map((section, index) => (
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

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#414757' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a company that gives back to the community?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block" style={{ color: '#414757' }}>
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 