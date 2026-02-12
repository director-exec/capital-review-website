import Link from 'next/link'

export default function AboutPage() {
  const aboutSections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      description: 'Capital Review Management is dedicated to resolving financial obligations through professionalism, discretion, and mutual respect.\n\nWe focus on compliant, outcome-oriented account resolution, producing tangible results for our partners while providing consumers with a clear and accessible path forward.\n\nCapital Review Management utilizes contemporary technology and sophisticated platforms to optimize operations, strengthen communication, and deliver more effective outcomes for both clients and consumers. This forward-thinking methodology enables us to operate with heightened precision, transparency, and responsiveness in today\'s evolving financial environment.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'what-we-stand-for',
      title: 'What We Stand For',
      description: 'We handle your brand as though it were our own. Every point of contact reflects our commitment to preserving your reputation, communicating with empathy, and aligning our practices with your organizational values. Whether recovering past-due balances or managing sensitive account matters, we serve as trusted guardians of your public image.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'how-we-operate',
      title: 'How We Operate',
      description: 'Respect, empathy, and adherence to regulations inform every action we take. Every consumer interaction is carried out with professionalism and transparency. Our representatives are trained not only in regulatory requirements — but in tone, timing, and methodology. We maintain a "resolution-focused mindset" in all conversations, guiding consumers toward resolving obligations with dignity.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'our-people',
      title: 'Our People',
      description: 'Our workforce is our greatest asset. We recruit seasoned professionals who flourish in a culture of integrity, teamwork, and continuous growth. Every team member completes rigorous training and undergoes regular performance assessments — not merely to uphold standards, but to elevate them. At Capital Review, excellence is a collective commitment.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'how-we-deliver',
      title: 'How We Deliver',
      description: 'We achieve results by listening carefully. Every client brings distinct KPIs, operational nuances, and brand sensitivities. We customize each engagement to align with those requirements while producing clear, quantifiable recovery outcomes. Whether addressing early-stage outreach or managing complex portfolio operations, our objective is to maximize returns while containing risk.',
      image: '/Pages/Signing_Doc_Laptop_Air.png',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'where-we-work',
      title: 'Where We Work',
      description: 'Capital Review Management is licensed, bonded, and fully operational across all 50 U.S. states. We maintain Certificates of Authority, statutory bonds, trust accounts, and resident office requirements in every jurisdiction where applicable law mandates it. Your nationwide footprint is supported by ours.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      background: 'darker',
      imageLeft: true
    }
  ]

  const additionalSections = [
    { id: 'security', title: 'Security', description: 'Explore our comprehensive security protocols and data protection measures.', link: '/about/security' },
    { id: 'compliance', title: 'Compliance', description: 'Learn how we uphold the highest standards of regulatory compliance, including TCPA adherence.', link: '/about/compliance' },
    { id: 'industries', title: 'Industries We Serve', description: 'See the diverse sectors we support with specialized resolution strategies.', link: '/about/industries-we-serve' },
    { id: 'community', title: 'Community Involvement', description: 'Discover how we contribute to the communities we serve.', link: '/about/community-involvement' }
  ]

  return (
    <>
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop)' }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Strategy Meets Resolution</h1>
          <p className="text-xl">A Strategic Approach to Account Resolution</p>
        </div>
      </section>

      {aboutSections.map((section) => (
        <section key={section.id} className={`py-16 ${section.background === 'darker' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {section.imageLeft ? (
                  <>
                    <div className="order-1">
                      <img src={section.image} alt={section.title} className="w-full h-80 object-cover rounded-lg shadow-xl" />
                    </div>
                    <div className="order-2">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed whitespace-pre-line">{section.description}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed whitespace-pre-line">{section.description}</div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img src={section.image} alt={section.title} className="w-full h-80 object-cover rounded-lg shadow-xl" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Learn More About Capital Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSections.map((section) => (
                <Link key={section.id} href={section.link} className="block">
                  <div className="bg-[#1a1f2e] rounded-lg p-6 h-full border border-[#1e293b] hover:border-[#c9a84c] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-white">{section.title}</h3>
                    <p className="text-[#b0b8c8] leading-relaxed">{section.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to partner with a firm that values integrity, compliance, and results?
          </h3>
          <Link href="/contact" className="btn bg-[#c9a84c] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4b85e] transition-colors" style={{ color: '#0a0f1c' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
