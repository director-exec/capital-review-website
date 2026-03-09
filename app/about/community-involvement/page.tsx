export default function CommunityInvolvementPage() {
  const communitySections = [
    {
      id: 'mission-beyond',
      title: 'Our Commitment Reaches Beyond Collections',
      description: 'At Capital Review Management, our mission goes deeper than financial recovery — it\'s rooted in creating lasting, positive impact in the communities we serve. We believe true leadership includes giving back, and we proudly uphold that responsibility through active volunteerism, charitable partnerships, and community-driven initiatives.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'charitable-partnerships',
      title: 'Charitable Partnerships & Support',
      description: 'As part of our ongoing commitment, we support local and national nonprofits through monthly contributions, employee-led fundraising efforts, and direct involvement in events that uplift those in need. From supporting children\'s health organizations to addressing urgent community issues, our goal is to drive measurable change — not just in business, but in people\'s lives.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'elite-standard',
      title: 'Capital Review Isn\'t Just a Name — It\'s Our Standard',
      description: 'Capital Review isn\'t just a name — it\'s a standard we uphold in everything we do; including how we serve our communities. We believe that true success is measured not just by business performance, but by the positive impact we have on the world around us. Through our community involvement, we strive to create lasting change and build stronger, more resilient communities.',
      image: '/Pages/Board_Meeting_Consult_Building.jpeg',
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Community Involvement</h1>
          <p>Investing in Stronger Communities</p>
        </div>
      </section>

      {/* Community Sections */}
      {communitySections.map((section, index) => (
        <section key={section.id} className={`subpage-section ${section.background === 'grey' ? 'subpage-section-cream' : 'subpage-section-white'}`}>
          <div className="subpage-container">
            <div className="subpage-grid">
              {section.imageLeft ? (
                <>
                  <div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="subpage-image"
                    />
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
                    <img
                      src={section.image}
                      alt={section.title}
                      className="subpage-image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

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