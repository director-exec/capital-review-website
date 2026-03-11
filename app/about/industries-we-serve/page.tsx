import SectionCard from '../../components/SectionCard'

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'financial-services': {
    subject: 'Financial Services Recovery (CRM-3.1)',
    bullets: [
      { text: 'Analytics-driven recovery via Maxify CRM (CRM-2.1) with omnichannel communication, real-time portfolio dashboards, and custom KPI tracking for banks, credit unions, and fintech lenders.' },
      { text: 'Standing settlement parameters per CRM-3.5 and 30-day pre-reporting verification windows (CRM-1.4) ensure every account is handled with precision before credit bureau action.' },
      { text: 'Full FDCPA/FCRA compliance (CRM-1.1), AES-256 encryption at rest, TLS 1.2+ in transit (CRM-4.1), and PCI DSS-certified payment tokenization (CRM-3.8) for maximum data protection.' },
    ],
  },
  'telecommunications': {
    subject: 'Telecom Collections Excellence (CRM-3.1)',
    bullets: [
      { text: 'Decades of experience supporting wireless, broadband, landline, satellite, and cable providers with Maxify CRM-powered omnichannel workflows (CRM-2.1).' },
      { text: 'TCPA-compliant dialing systems (CRM-1.5) with 7-in-7 call frequency rules (CRM-1.3) and 1-hour SMS STOP processing (CRM-2.4) protect brand equity at scale.' },
      { text: 'Tailored recovery strategies with standing settlement parameters (CRM-3.5) and 60-day unverified account return policies (CRM-3.3) for measurable results.' },
    ],
  },
  'healthcare': {
    subject: 'Patient-Centered Recovery (CRM-1.6)',
    bullets: [
      { text: 'Compassionate recovery for hospitals, physician groups, specialty centers, insurers, and pharmacy networks — built on CRM-6.4 agent training with 85% minimum pass scores.' },
      { text: 'Full HIPAA compliance is non-negotiable — PHI safeguards per CRM-1.6, AES-256 encryption (CRM-4.1), and role-based access controls (CRM-4.4) protect patient data at every touchpoint.' },
      { text: 'All calls recorded with 3-year retention (CRM-2.6) and Mini-Miranda disclosure (CRM-2.2) on every contact — dignity and professionalism in every patient engagement.' },
    ],
  },
  'utilities': {
    subject: 'Utility Sector Specialists (CRM-3.1)',
    bullets: [
      { text: 'Supporting gas, water, electric, and broadband providers with life-cycle-based collections powered by Maxify CRM real-time analytics (CRM-2.1).' },
      { text: 'State-specific compliance matrices (CRM-9.x) maintained with 60-day renewal lead times ensure regulatory alignment across regulated and deregulated markets.' },
      { text: 'Specialized equipment loss and property damage handling with standing settlement parameters (CRM-3.5) and 30-day pre-reporting verification (CRM-1.4).' },
    ],
  },
  'commercial-b2b': {
    subject: 'Business-to-Business Recovery (CRM-3.1)',
    bullets: [
      { text: 'Professionalism and discretion in commercial receivables — every engagement follows CRM-2.2 Mini-Miranda standards with full audit trails through Maxify CRM.' },
      { text: 'Customized strategies with client-specific KPIs, standing settlement parameters (CRM-3.5), and 60-day unverified account return policies (CRM-3.3).' },
      { text: 'Network of attorneys (CRM-5.1) available for complex commercial recovery with litigation holds and evidence preservation per CRM-7.3 when required.' },
    ],
  },
  'education': {
    subject: 'Higher Education Solutions (CRM-3.1)',
    bullets: [
      { text: 'FERPA-aware solutions with PHI/PII safeguards per CRM-1.6, role-based access controls (CRM-4.4), and AES-256 encryption (CRM-4.1) for student data protection.' },
      { text: 'Compassionate agent training per CRM-6.4 with "resolution over collection" mindset — minimum 5 calls per specialist reviewed monthly by QA.' },
      { text: 'Omnichannel communication (CRM-2.1) empowering students to resolve obligations through phone, email, text, and secure payment portal with PCI DSS tokenization (CRM-3.8).' },
    ],
  },
}

export default function IndustriesWeServePage() {
  const industrySections = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'From national banks to fintech lenders, we support institutions with intelligent, analytics-driven recovery strategies. Our systems integrate directly with your KPIs, enabling custom performance tracking and real-time insight. Whether managing high-volume portfolios or niche accounts, we operate with full FDCPA/FCRA compliance and strict consumer data safeguards.',
      image: '/Pages/industries_sec_financial.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      description: 'Capital Review has decades of experience supporting wireless, broadband, landline, satellite, and cable providers. Our tailored solutions optimize recovery without compromising brand equity. With a digital-first collections model, real-time analytics, and compliance-forward workflows, we manage every stage of your consumer or commercial receivables with discretion and precision.',
      image: '/Pages/industries_sec_telecom.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Our patient-centered recovery model combines compassion with results. We help hospitals, physician groups, specialty care centers, insurers, and pharmacy networks manage receivables with dignity and professionalism. Every engagement is conducted with full HIPAA compliance and a focus on protecting patient privacy while accelerating recoveries. HIPAA Compliance is Non-Negotiable - we prioritize patient rights and data security at every touchpoint — no exceptions.',
      image: '/Pages/industries_sec_healthcare.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'utilities',
      title: 'Utilities',
      description: 'We support leading utility providers — gas, water, electric, and broadband — across regulated and deregulated markets. Whether residential or commercial, our life-cycle-based collections approach ensures early intervention, regulatory alignment, and minimal reputational risk. We also handle specialized accounts like equipment loss and property damage with care and accuracy.',
      image: '/Pages/industries_sec_utilities.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'commercial-b2b',
      title: 'Commercial / B2B',
      description: 'For business-to-business collections, professionalism and discretion are everything. Capital Review provides commercial receivables management across industries with an emphasis on protecting long-term business relationships. Our team understands the nuances of corporate debt recovery and customizes strategies to fit your operations without disrupting your reputation.',
      image: '/Pages/industries_sec_commercial.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'education',
      title: 'Education',
      description: 'We help higher education institutions manage student account balances with compassion, care, and compliance. Our solutions are FERPA-aware and structured to maintain institutional image while empowering students to resolve their obligations. We work with public and private colleges, universities, and vocational institutions nationwide.',
      image: '/Pages/industries_sec_education.png',
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
          style={{ backgroundImage: 'url(/Pages/industries_hero_bg.png)' }}
        ></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Industries We Serve</h1>
          <p>Experience. Precision. Performance — Tailored to Your Sector</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Specialized Solutions for Every Industry</h2>
            <p>
              At Capital Review Management, we specialize in delivering results-driven collections strategies across a diverse range of industries. Our deep sector knowledge, regulatory expertise, and commitment to brand protection allow us to adapt our technology and processes to meet the specific needs of each client — all while maintaining full compliance and operational integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industrySections.map((section, index) => {
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

      {/* Summary Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Secure. Compliant. Proven.</h2>
            <p>
              Whether you're in healthcare or higher ed, telecom or government — Capital Review Management is your trusted partner for compliant, high-performance recovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>
            Ready to partner with a company that understands your industry?
          </h3>
          <a href="/contact" className="subpage-btn">
            Contact Us Today!
          </a>
        </div>
      </section>
    </>
  )
}