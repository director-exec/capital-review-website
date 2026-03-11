import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'regulatory-compliance': {
    subject: 'Federal & State Compliance (CRM-1.1)',
    bullets: [
      { text: 'Full adherence to FDCPA, FCRA, GLBA, HIPAA, TCPA, and the Privacy Act of 1974 — with a dedicated 7-in-7 call frequency rule enforced per CRM-1.3.' },
      { text: 'PHI safeguards, 24-hour opt-out processing, and 4-year TCPA record retention embedded into every operational workflow per CRM-1.5.' },
      { text: 'State-specific compliance matrices (CRM-9.x) updated with a 60-day lead time before license renewals to ensure zero regulatory gaps.' },
    ],
  },
  'california-compliance': {
    subject: 'California Regulatory Standards (CRM-9.1)',
    bullets: [
      { text: 'Licensed by the California DFPI as a debt collector with full Rosenthal Fair Debt Collection Practices Act (RFDCPA) compliance.' },
      { text: 'CCPA and CPRA protocols ensure California residents maintain full transparency and control over personal information per CRM-1.6.' },
      { text: 'California-licensed operations undergo regular compliance audits aligned with state-specific time, place, and validation requirements.' },
    ],
  },
  'regulatory-change': {
    subject: 'Proactive Regulatory Monitoring (CRM-1.2)',
    bullets: [
      { text: 'Chief Compliance Officer conducts continuous oversight of federal, state, and local regulatory developments nationwide.' },
      { text: 'Policy and procedure updates are implemented proactively — well ahead of effective dates — per our 60-day renewal lead time standard.' },
      { text: 'Every account is handled in a legally sound, fully transparent manner with 30-day pre-reporting verification windows (CRM-1.4).' },
    ],
  },
  'technology-compliance': {
    subject: 'Digital Compliance Infrastructure (CRM-8.1)',
    bullets: [
      { text: 'TCPA-compliant dialing systems, PCI DSS-certified payment processing with tokenization (CRM-3.8), and annual CFPB Readiness Assessments.' },
      { text: 'AES-256 encryption at rest and TLS 1.2+ in transit protect all data — with 15-minute session timeouts and MFA enforced across all systems (CRM-4.1).' },
      { text: 'AI governance per CRM-8.3 mandates disclosure on AI-assisted calls and 10 random AI call reviews weekly for quality assurance.' },
    ],
  },
  'staff-standards': {
    subject: 'Personnel Excellence (CRM-6.1)',
    bullets: [
      { text: 'Every team member undergoes comprehensive background screening before onboarding — hiring standards match our compliance standards (CRM-6.2).' },
      { text: 'Rigorous training program requires an 85% minimum pass score, followed by ongoing compliance education throughout tenure (CRM-6.4).' },
      { text: 'Minimum 5 calls per specialist reviewed monthly by QA, with a 4-step corrective action process for any compliance deviations (CRM-6.6).' },
    ],
  },
  'call-monitoring': {
    subject: 'Quality Assurance & Monitoring (CRM-6.4)',
    bullets: [
      { text: 'Every inbound and outbound call is recorded and archived with a 3-year retention period per CRM-2.6, subject to real-time QA monitoring.' },
      { text: 'Client-side access to live call sessions via Maxify CRM enables direct oversight of consumer interactions at any time.' },
      { text: 'Full post-call analysis, Mini-Miranda compliance verification (CRM-2.2), and complete audit trails at every consumer touchpoint.' },
    ],
  },
  'complaint-management': {
    subject: 'Zero-Tolerance Complaint Resolution (CRM-7.1)',
    bullets: [
      { text: 'All complaints investigated immediately by our Compliance Officer with a 15-day CFPB response window and formal compliance lifecycle.' },
      { text: 'Written procedures, root-cause analysis, corrective action, and immediate litigation holds with full evidence preservation (CRM-7.3).' },
      { text: 'We protect your brand like it\'s our own — because compliance isn\'t just protection, it\'s power.' },
    ],
  },
}

export default function CompliancePage() {
  const complianceSections = [
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Compliance',
      description: 'Capital Review Management strictly adheres to all applicable statutes and regulations as documented in our CRM-1.x Regulatory Compliance policies. This includes the FDCPA, FCRA, GLBA, HIPAA, Privacy Act of 1974, PHI protocols, and the TCPA. We enforce a 7-in-7 call frequency rule, maintain 4-year TCPA consent records, and process opt-out requests within 24 hours. Our compliance frameworks are continuously updated to protect both our clients and their consumers.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'california-compliance',
      title: 'California-Specific Compliance',
      description: 'Capital Review Management maintains full compliance with all California-specific regulations and licensing requirements as outlined in our CRM-9.x State Compliance Matrices. Our operations strictly adhere to the Rosenthal Fair Debt Collection Practices Act (RFDCPA), providing additional consumer protections beyond the federal FDCPA. We comply with the CCPA and CPRA, ensuring California residents have full transparency and control over their personal information. We also maintain compliance with California\'s time and place restrictions, validation requirements, and consumer notification obligations, with regular audits of all state-licensed operations.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'regulatory-change',
      title: 'Staying Ahead of Regulatory Change',
      description: 'Compliance is not static — and at Capital Review Management, our CRM-1.2 Regulatory Monitoring policy ensures we stay ahead. Our Chief Compliance Officer maintains continuous oversight of legal and regulatory developments across the country. We proactively update policies and procedures with a 60-day lead time before renewal deadlines, and enforce 30-day pre-reporting verification windows to ensure your accounts are always handled in a legally sound, fully transparent manner.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'technology-compliance',
      title: 'Technology-Driven Compliance',
      description: 'Capital Review Management\'s digital-first compliance infrastructure — governed by CRM-8.x Technology Governance policies — integrates people, processes, and tools to maintain airtight controls at every level. We implement TCPA-compliant dialing systems, PCI DSS-certified payment processing with tokenization, AES-256 encryption, and MFA across all platforms. AI-assisted calls require disclosure per CRM-8.3, with 10 random calls reviewed weekly. Our systems are routinely audited by the nation\'s most demanding institutional clients.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'staff-standards',
      title: 'Industry-Leading Staff Standards',
      description: 'At Capital Review Management, we take hiring as seriously as we take compliance. Per CRM-6.1 and CRM-6.2, every team member undergoes comprehensive background screening before onboarding. Once onboarded, employees must pass our rigorous training program with an 85% minimum score (CRM-6.4), followed by ongoing compliance education and monthly QA performance audits — with a minimum of 5 calls reviewed per specialist each month.',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'call-monitoring',
      title: 'Call Recording, Monitoring & Analytics',
      description: 'Per CRM-2.6 and CRM-6.4, every inbound and outbound call at Capital Review Management is recorded, archived with a 3-year retention period, and subject to real-time monitoring by our QA leadership through the Maxify CRM platform. Clients can access live call sessions for direct oversight. Mini-Miranda compliance is verified on every contact (CRM-2.2), and full post-call analysis ensures our agents deliver professional, compliant experiences at every touchpoint.',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'complaint-management',
      title: 'Complaint Management',
      description: 'Capital Review Management operates with zero tolerance for consumer mistreatment or process failure. Per CRM-7.1, all complaints are investigated immediately by our Compliance Officer within a 15-day CFPB response window, tracked through a formal compliance lifecycle including written procedures, root-cause analysis, and corrective action. Litigation holds are activated immediately when required (CRM-7.3), with full evidence preservation. We protect your brand like it\'s our own — because compliance isn\'t just protection, it\'s power.',
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