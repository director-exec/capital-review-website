import Link from 'next/link'
import { Metadata } from 'next'
import SectionCard from '../../components/SectionCard'

export const metadata: Metadata = {
  title: 'TCPA Compliance | Capital Review Management',
  description: 'Learn about our commitment to TCPA compliance and consumer protection. We operate with structured, auditable, and aggressively compliant communication frameworks.',
}

const sectionCards: Record<string, { subject: string; bullets: { text: string }[] }> = {
  'consent-protocol': {
    subject: 'Consent-First Framework (CRM-1.5)',
    bullets: [
      { text: 'Only contact consumers whose phone numbers carry valid, documented consent — with 4-year TCPA consent record retention per CRM-1.5.' },
      { text: 'STOP messages via SMS honored within 1 hour (CRM-2.4), verbal opt-outs processed within 24 hours, and wrong-number notifications acted upon immediately.' },
      { text: 'Monthly-reviewed internal archives and 7-in-7 call frequency rules (CRM-1.3) ensure every consent record is current and suppressed as needed.' },
    ],
  },
  'caller-transparency': {
    subject: 'Full Caller Transparency (CRM-2.2)',
    bullets: [
      { text: 'Every number we use is valid, active, callback-capable, and directly linked to Capital Review Management — never spoofed.' },
      { text: 'Registered with carrier-level caller ID systems and fully compliant with FCC 47 CFR § 64.1601(e) per CRM-1.5 TCPA standards.' },
      { text: 'Mini-Miranda disclosure delivered on every call per CRM-2.2 — our number always traces directly to us.' },
    ],
  },
  'internal-documentation': {
    subject: 'Auditable Documentation (CRM-2.6)',
    bullets: [
      { text: 'Monthly TCPA Consent Packets compiled with number verification, oversight validation, and policy documentation per CRM-1.5.' },
      { text: 'All call recordings retained for 3 years (CRM-2.6) and securely stored — available for audit or review at any time.' },
      { text: 'No prerecorded messages on phone numbers without documented consent — this is non-negotiable under our CRM-1.5 protocols.' },
    ],
  },
  'why-contacted': {
    subject: 'Consumer Inquiry Support (CRM-2.1)',
    bullets: [
      { text: 'Omnichannel consumer communication per CRM-2.1 — phone, email, text, and website forms for removal, source, and wrong-number requests.' },
      { text: 'Preset form options for "Why was I contacted?", "Where did you get my number?", and "Please remove my number." per our consumer tools.' },
      { text: 'All inquiries routed directly to our compliance team with a 15-day CFPB response window (CRM-7.1) for formal complaints.' },
    ],
  },
  'zero-tolerance': {
    subject: 'Zero Tolerance Policy (CRM-7.1)',
    bullets: [
      { text: 'Zero tolerance for TCPA violations — all calls regulated, consent validated, and 4-step corrective action enforced (CRM-6.6).' },
      { text: 'Comprehensive audit logs maintained for every communication through Maxify CRM to ensure full accountability and traceability.' },
      { text: 'Compliance team available immediately — with immediate litigation holds and evidence preservation per CRM-7.3 when required.' },
    ],
  },
}

export default function TCPACompliancePage() {
  const tcpaSections = [
    {
      id: 'consent-protocol',
      title: 'Consent-First Communication Protocol',
      description: 'We only contact consumers whose phone numbers are provided with valid consent. All numbers used are tied to documented consent status and monthly-reviewed internal archives. We aggressively honor consumer requests for removal, including STOP messages via SMS, verbal opt-outs during calls, and wrong-number notifications. Each request is documented, acted upon, and suppressed across future campaigns.',
      image: '/Pages/tcpa_sec_consent.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'caller-transparency',
      title: 'Caller ID & Transparency',
      description: 'Every number we use to communicate with is valid, active, callback-capable, and directly linked to our company. We never spoof or falsify caller identity. We register numbers with carrier-level caller ID systems when available and comply with FCC 47 CFR § 64.1601(e). Due to limitations from carriers and mobile data networks, our company name may not always appear — but the number will always trace directly to us.',
      image: '/Pages/tcpa_sec_caller_id.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'internal-documentation',
      title: 'Internal Documentation & Oversight',
      description: 'Each month, our team compiles an internal TCPA Consent Packet that includes number verification, oversight validation, and compliance policies and procedures. These records are securely stored and can be audited or reviewed if necessary. We do not use prerecorded messages on phone numbers without documented consent. Our internal controls and policy enforcement procedures make this non-negotiable.',
      image: '/Pages/tcpa_sec_documentation.png',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'why-contacted',
      title: 'Why Was I Contacted?',
      description: 'Consumers can contact us directly to request removal, ask where we received their number, or flag a wrong number or inquiry. We provide multiple contact options including phone, email, and website forms with preset options for "Why was I contacted?", "Where did you get my number?", and "Please remove my number." All inquiries are routed to our compliance team for immediate attention.',
      image: '/Pages/tcpa_sec_why_contacted.png',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'zero-tolerance',
      title: 'Zero Tolerance for TCPA Abuse',
      description: 'We do not tolerate violations — internal or external. All calls are regulated, consent is validated, and audit logs are maintained. If you received a call or message from us and believe it was in error, contact us immediately. Our compliance team is available to address any concerns and ensure proper handling of your request.',
      image: '/Pages/tcpa_sec_zero_tolerance.png',
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
          style={{ backgroundImage: 'url(/Pages/tcpa_hero_bg.png)' }}>        </div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>TCPA Compliance</h1>
          <p>Our Commitment to Consumer Protection and Regulatory Adherence</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Our Commitment to TCPA Compliance</h2>
            <p>
              At Capital Review Management, we take the Telephone Consumer Protection Act (TCPA) seriously.
              We operate with a structured, auditable, and aggressively compliant communication framework.
              Our processes are designed to protect consumers, deter abusive litigation, and demonstrate full regulatory adherence.
            </p>
          </div>
        </div>
      </section>

      {/* TCPA Sections */}
      {tcpaSections.map((section, index) => {
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

      {/* Contact Information Section */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Contact Our Compliance Team</h2>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '2rem', marginTop: '1.5rem' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: '600', marginBottom: '1rem' }}>If you received a call or message from us and believe it was in error:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1c2a3f', marginBottom: '0.5rem' }}>Phone</p>
                    <p>888-681-0360</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1c2a3f', marginBottom: '0.5rem' }}>Email</p>
                    <p>info@capitalreviewmanagement.com</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '1.5rem' }}>
                  This page serves as public notice of our TCPA compliance program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <h3>
            Ready to partner with a company that prioritizes TCPA compliance?
          </h3>
          <Link href="/contact" className="subpage-btn">
            Contact Us Today!
          </Link>
        </div>
      </section>
    </>
  )
}
