import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'regulatory-compliance': {
    subject: 'Federal & State Compliance',
    bullets: [
      { text: 'Strict adherence to FDCPA, FCRA, GLBA, HIPAA, Privacy Act of 1974, and all applicable state regulations.' },
      { text: 'Protected Health Information (PHI) protocols and TCPA compliance integrated into every operational workflow.' },
      { text: 'Continuous alignment with evolving compliance frameworks to protect both clients and consumers at all times.' },
    ],
  },
  'california-compliance': {
    subject: 'California Regulatory Standards',
    bullets: [
      { text: 'Licensed by the California DFPI as a debt collector (License #11645-99) with full Rosenthal Act compliance.' },
      { text: 'CCPA and CPRA compliance ensures California residents have full transparency and control over personal information.' },
      { text: 'Regular audits of California-licensed operations to ensure ongoing adherence to all state-specific requirements.' },
    ],
  },
  'regulatory-change': {
    subject: 'Proactive Regulatory Monitoring',
    bullets: [
      { text: 'Chief Compliance Officer maintains continuous oversight of legal and regulatory developments nationwide.' },
      { text: 'Proactive policy and procedure updates to reflect new legislation and guidance before deadlines arrive.' },
      { text: 'Accounts are always handled in a legally sound and fully transparent manner with zero compliance gaps.' },
    ],
  },
  'technology-compliance': {
    subject: 'Digital Compliance Infrastructure',
    bullets: [
      { text: 'TCPA-compliant systems, PCI DSS certification, and annual CFPB Readiness Assessments as standard practice.' },
      { text: 'Proactive data protection, encryption, and integrated compliance controls at every operational level.' },
      { text: 'Routinely audited by the nation\'s most demanding institutional clients — delivering exceptional results every time.' },
    ],
  },
  'staff-standards': {
    subject: 'Personnel Excellence',
    bullets: [
      { text: 'Extensive screening of every team member before onboarding — we take hiring as seriously as compliance itself.' },
      { text: 'Rigorous training program followed by ongoing compliance education throughout each employee\'s tenure.' },
      { text: 'Continuous performance audits ensure every team member upholds our industry-leading compliance standards.' },
    ],
  },
  'call-monitoring': {
    subject: 'Quality Assurance & Monitoring',
    bullets: [
      { text: 'Every inbound and outbound call is recorded, archived, and subject to real-time QA leadership monitoring.' },
      { text: 'Client-side access to live call sessions for direct monitoring and oversight of consumer interactions.' },
      { text: 'Full post-call analysis and audit trails ensure professional, compliant experiences at every touchpoint.' },
    ],
  },
  'complaint-management': {
    subject: 'Zero-Tolerance Complaint Resolution',
    bullets: [
      { text: 'All complaints investigated immediately by our Compliance Officer through a formal compliance lifecycle.' },
      { text: 'Written procedures, active monitoring, root-cause analysis, and corrective action for every complaint received.' },
      { text: 'We protect your brand like it\'s our own — because compliance isn\'t just protection, it\'s power.' },
    ],
  },
}

export default function CompliancePage() {
  const complianceSections = [
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      description: 'Capital Review strictly adheres to all applicable statutes and regulations, including Fair Debt Collection Practices Act (FDCPA), Fair Credit Reporting Act (FCRA), Gramm-Leach-Bliley Act (GLBA), Health Insurance Portability and Accountability Act (HIPAA), Privacy Act of 1974, Protected Health Information (PHI) protocols, TCPA (Telephone Consumer Protection Act), and any other relevant state or federal statutes. We continuously align with evolving compliance frameworks to ensure that both our clients and their consumers are protected at all times.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'california-compliance',
      title: 'California-Specific Compliance',
      description: 'Capital Review Management maintains full compliance with all California-specific regulations and licensing requirements. We are licensed by the California Department of Financial Protection and Innovation (DFPI) as a debt collector, License Number: 11645-99. Our operations strictly adhere to the Rosenthal Fair Debt Collection Practices Act (RFDCPA), which provides additional consumer protections beyond the federal FDCPA. We comply with California\'s strict privacy laws including the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), ensuring that California residents have full transparency and control over their personal information. We also maintain compliance with California\'s restrictions on collection practices, including time and place restrictions, validation requirements, and consumer notification obligations. Our California-licensed operations are regularly audited to ensure ongoing compliance with all state-specific requirements.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'regulatory-change',
      title: 'Staying Ahead of Regulatory Change',
      description: 'Compliance is not static. That\'s why our Chief Compliance Officer maintains continuous oversight of legal and regulatory developments across the country. We proactively update policies and procedures to reflect new legislation and guidance, ensuring that your accounts are always handled in a legally sound and fully transparent manner.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'technology-compliance',
      title: 'Technology-Driven Compliance',
      description: 'Our digital-first compliance infrastructure integrates people, processes, and tools to maintain airtight controls at every level. We implement TCPA-compliant systems, maintain PCI DSS certification, conduct annual CFPB Readiness Assessments, and practice proactive data protection and encryption. Our systems are routinely audited by some of the nation\'s most demanding institutional clients — and we deliver exceptional results, every time.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'staff-standards',
      title: 'Industry-Leading Staff Standards',
      description: 'We take hiring as seriously as we take compliance. Every team member undergoes extensive screening before onboarding. Once onboarded, employees complete a rigorous training program, followed by ongoing compliance education and performance audits throughout their tenure.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'call-monitoring',
      title: 'Call Recording, Monitoring & Analytics',
      description: 'Every inbound and outbound call is recorded, archived, and subject to real-time call monitoring by Capital Review\'s QA leadership, access to live call sessions for client-side monitoring, and full post-call analysis and audit trails. This ensures our agents are not only compliant, but delivering high-quality, professional experiences at every touchpoint.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'complaint-management',
      title: 'Complaint Management',
      description: 'We operate with zero tolerance for consumer mistreatment or process failure. All complaints are investigated immediately by our Compliance Officer, and are tracked, analyzed, and resolved through a formal compliance lifecycle including written complaint procedures, active monitoring and reporting, root-cause analysis and corrective action, and transparent resolution and reporting. At Capital Review Management, we protect your brand like it\'s our own — because compliance isn\'t just protection, it\'s power.',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="subpage-hero">
        <div
          className="subpage-hero-bg"
          style={{ backgroundImage: 'url(/Pages/compliance_hero_bg.png)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Compliance</h1>
          <p>We Don't Just Meet Standards — We Set Them</p>
        </div>
      </section>

      {/* Compliance Sections */}
      {complianceSections.map((section, index) => {
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
            Ready to partner with a company that prioritizes compliance and regulatory excellence?
          </h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
} 