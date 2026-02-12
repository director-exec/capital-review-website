import Link from 'next/link'

export default function SolutionsPage() {
  const serviceSections = [
    {
      id: 'pre-collection',
      title: 'Pre Charge-Off Collections',
      description: 'Proactive engagement tactics aimed at stopping charge-offs before they happen and optimizing recovery outcomes. Our forward-thinking methodology enables clients to preserve account relationships while boosting collection success through deliberate outreach and structured repayment plans.',
      image: 'https://images.pexels.com/photos/7433837/pexels-photo-7433837.jpeg',
      link: '/solutions/pre-charge-off-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'post-charge-off',
      title: 'Post Charge-Off Collections',
      description: 'Targeted recovery programs for written-off accounts backed by demonstrated performance. We focus on reclaiming balances from accounts already classified as losses, leveraging sophisticated and strategic collection methodologies.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      link: '/solutions/post-charge-off-collections',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'secondary-tertiary',
      title: 'Secondary & Tertiary Collections',
      description: 'Expert recovery services for resistant accounts that demand next-level approaches. Our seasoned professionals manage accounts that have undergone prior collection cycles, deploying creative techniques to track down and re-engage obligors.',
      image: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?_gl=1*269x10*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MjU3MjAkbzEkZzEkdDE3NTQ5MjYwNzckajUxJGwwJGgw',
      link: '/solutions/secondary-tertiary-collections',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'warehousing',
      title: 'Warehousing Management',
      description: 'Strategic portfolio oversight and fine-tuning to drive peak recovery performance. We deliver thorough portfolio evaluation, categorization, and hands-on management designed to unlock your full recovery potential while keeping operational expenses low.',
      image: 'https://images.pexels.com/photos/4792288/pexels-photo-4792288.jpeg?_gl=1*17w92mj*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTQ5MzA3MjckbzIkZzEkdDE3NTQ5MzA3NTQkajMzJGwwJGgw',
      link: '/solutions/warehousing-management',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'network-attorneys',
      title: 'Network of Attorneys',
      description: 'Nationwide legal collection capabilities powered by seasoned legal practitioners. Our curated network of licensed attorneys delivers legal recovery services throughout all 50 states, guaranteeing adherence to jurisdiction-specific statutes and amplifying recovery via legal avenues.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
      link: '/solutions/network-of-attorneys',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'reporting',
      title: 'Reporting Services',
      description: 'In-depth reporting and data analytics to monitor portfolio health and performance. We furnish granular reports covering collection activities, recovery percentages, and portfolio metrics so you can make well-informed business choices.',
      image: 'https://media.istockphoto.com/id/989117546/photo/business-people-meeting-negotiating-a-contract-between-two-colleagues.jpg?b=1&s=612x612&w=0&k=20&c=Ir_c9w7uD2bD76E_6GSGF7N1hpPJexsDGbhgQwDWB3s=',
      link: '/solutions/credit-bureau-reporting',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'credit-bureau',
      title: 'Credit Bureau Reporting',
      description: 'Integrated into our comprehensive recovery offerings, Capital Review Management\'s network provides elective credit bureau reporting to strengthen your collection approach. Every account is processed in strict compliance with the Fair Credit Reporting Act (FCRA) and all relevant regulations. Our network only initiates reporting upon receiving your express consent.',
      image: 'https://media.istockphoto.com/id/955988522/photo/business-signing-a-contract-buy-sell-house.jpg?b=1&s=612x612&w=0&k=20&c=EET9rlkAU1PTC_BWtJNfSWZfpvnCYLct0IkE4uZvb5k=',
      link: '/solutions/credit-bureau-reporting',
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
          <h1 className="text-5xl font-bold mb-4">Our Service Offerings</h1>
          <p className="text-xl">End-to-end recovery services engineered to optimize your returns while safeguarding your brand integrity.</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Proven Recovery Programs That Deliver</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Capital Review Management provides battle-tested recovery programs spanning every phase of the collection lifecycle.
              Our integrated service portfolio merges cutting-edge technology, deep regulatory knowledge, and compassionate consumer engagement
              to produce outstanding outcomes while upholding the strictest compliance and professional standards.
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
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {section.description}
                      </div>
                      <Link href={section.link} className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors" style={{ color: '#c9a84c' }}>
                        Learn More
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                        {section.description}
                      </div>
                      <Link href={section.link} className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors" style={{ color: '#c9a84c' }}>
                        Learn More
                      </Link>
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
            Reach out to Capital Review Management for a dependable answer to your collection requirements.
          </h3>
          <Link href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors" style={{ color: '#c9a84c' }}>
            Get In Touch Now!
          </Link>
        </div>
      </section>
    </>
  )
}