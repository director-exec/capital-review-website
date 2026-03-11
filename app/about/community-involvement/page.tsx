import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'mission-beyond': {
    subject: 'Community-First Mission',
    bullets: [
      { text: 'Our mission extends beyond financial recovery — Capital Review Management creates lasting, positive impact in every community we serve.' },
      { text: 'Active volunteerism, charitable partnerships, and community-driven initiatives reflect the same integrity embedded in our CRM compliance framework.' },
      { text: 'The same "resolution over collection" mindset (CRM-6.4) that guides consumer interactions drives our commitment to community leadership.' },
    ],
  },
  'charitable-partnerships': {
    subject: 'Charitable Impact',
    bullets: [
      { text: 'Monthly contributions to local and national nonprofits through employee-led fundraising, team volunteering, and direct organizational involvement.' },
      { text: 'Supporting children\'s health organizations, veteran services, and urgent community issues with the same measurable results we deliver for clients.' },
      { text: 'Our charitable standards match our professional standards — every initiative reflects the same integrity and compliance that defines our business operations.' },
    ],
  },
  'elite-standard': {
    subject: 'The Capital Review Standard',
    bullets: [
      { text: 'Capital Review isn\'t just a name — it\'s a standard upheld in everything we do, from CRM-1.1 regulatory compliance to community service.' },
      { text: 'We hold ourselves to the highest ethical standards in both receivables management and social responsibility — driven by CRM-1.1 regulatory compliance.' },
      { text: 'Through community involvement, we build stronger, more resilient communities — because the trust we earn in business must be earned in life.' },
    ],
  },
}

export default function CommunityInvolvementPage() {
  const communitySections = [
    {
      id: 'mission-beyond',
      title: 'Our Commitment Reaches Beyond Collections',
      description: 'At Capital Review Management, our mission goes deeper than financial recovery — it\'s rooted in creating lasting, positive impact in the communities we serve. We believe true leadership includes giving back, and we proudly uphold that responsibility through active volunteerism, charitable partnerships, and community-driven initiatives.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'charitable-partnerships',
      title: 'Charitable Partnerships & Support',
      description: 'As part of our ongoing commitment, we support local and national nonprofits through monthly contributions, employee-led fundraising efforts, and direct involvement in events that uplift those in need. From supporting children\'s health organizations to addressing urgent community issues, our goal is to drive measurable change — not just in business, but in people\'s lives.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'elite-standard',
      title: 'Capital Review Isn\'t Just a Name — It\'s Our Standard',
      description: 'Capital Review isn\'t just a name — it\'s a standard we uphold in everything we do; including how we serve our communities. We believe that true success is measured not just by business performance, but by the positive impact we have on the world around us. Through our community involvement, we strive to create lasting change and build stronger, more resilient communities.',
      background: 'white',
      imageLeft: false
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/community_hero_bg.png)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Community Involvement</h1>
          <p>Investing in Stronger Communities</p>
        </div>
      </section>

      {/* Community Sections */}
      {communitySections.map((section, index) => {
        const card = sectionCards[section.id]
        return (
          <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
            <div className="subpage-container">
              <div className="subpage-grid">
                {section.imageLeft ? (
                  <>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                    <div>
                      <h2>{section.title}</h2>
                      <div>
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2>{section.title}</h2>
                      <div>
                        {section.description}
                      </div>
                    </div>
                    <div>
                      <SectionCard subject={card.subject} bullets={card.bullets} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>
            Ready to partner with a company that gives back to the community?
          </h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 