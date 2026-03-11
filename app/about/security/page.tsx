import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'data-protection': {
    subject: 'Enterprise-Grade Data Protection (CRM-4.1)',
    bullets: [
      { text: 'Zero data breaches — AES-256 encryption at rest and TLS 1.2+ in transit protect all sensitive data across every system and transmission.' },
      { text: 'MFA enforced on all platforms, 5-minute screen lock timeouts, and 15-minute session timeouts per CRM-4.4 access control standards.' },
      { text: 'PCI DSS-certified payment tokenization (CRM-3.8) ensures consumer financial data is never stored in raw form.' },
    ],
  },
  'security-protocols': {
    subject: 'Advanced Security Protocols (CRM-4.3)',
    bullets: [
      { text: 'Comprehensive disaster recovery: 4-hour RTO for CRM systems, 8-hour for payment portals, 24-hour full operational recovery (CRM-4.3).' },
      { text: 'Quarterly backup tests, controlled access systems, responsible document disposal, and fully secured digital and physical environments.' },
      { text: '12-character minimum passwords with 90-day rotation, role-based access control, and 24-hour access revocation upon termination (CRM-4.4).' },
    ],
  },
  'compliance-standards': {
    subject: 'Regulatory & Industry Alignment (CRM-4.7)',
    bullets: [
      { text: 'Rigorous compliance with FDCPA, FCRA, GLBA, HIPAA, and TCPA alongside industry best practices for data security per CRM-1.1.' },
      { text: 'Annual CFPB Readiness Assessments and routine audits by the nation\'s most demanding institutional clients.' },
      { text: 'In a digital-first world, security isn\'t an option — it\'s our obligation to every client and consumer we serve.' },
    ],
  },
}

export default function SecurityPage() {
  const securitySections = [
    {
      id: 'data-protection',
      title: 'Data Protection & Encryption',
      description: 'At Capital Review Management, safeguarding data isn\'t just a priority — it\'s embedded in our DNA and formalized in CRM-4.1 Data Encryption & Protection. We enforce AES-256 encryption at rest and TLS 1.2+ for all data in transit. MFA is required across every platform, with 5-minute screen locks and 15-minute session timeouts. Our track record is spotless — zero data breaches — and our PCI DSS-certified tokenization ensures consumer payment data is never stored in raw form.',
      image: '/Pages/security_sec_data_protection.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'security-protocols',
      title: 'Security Protocols & Infrastructure',
      description: 'Capital Review Management implements continuously updated security protocols governed by CRM-4.3 Disaster Recovery and CRM-4.4 Access Controls. Our disaster recovery plan delivers a 4-hour RTO for CRM systems, 8-hour for payment portals, and 24-hour full operational recovery — with quarterly backup tests validating readiness. From 12-character passwords with 90-day rotation to role-based access and 24-hour termination revocation, every detail is accounted for.',
      image: '/Pages/security_sec_protocols.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Regulatory Alignment',
      description: 'No matter your industry, you can trust Capital Review Management to deliver collections support with the highest level of data protection and regulatory alignment. Per CRM-4.7, we maintain rigorous compliance with FDCPA, FCRA, GLBA, HIPAA, and TCPA while implementing industry best practices for data security. Annual CFPB Readiness Assessments and routine institutional audits validate our standards — because in a digital-first world, security isn\'t an option, it\'s our obligation.',
      image: '/Pages/security_sec_compliance.png',
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
          style={{ backgroundImage: 'url(/Pages/security_hero_bg.png)' }}>        </div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Security</h1>
          <p>Security Is the Foundation of Our Operations</p>
        </div>
      </section>

      {/* Security Sections */}
      {securitySections.map((section, index) => {
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
            Ready to partner with a company that prioritizes security and compliance?
          </h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 