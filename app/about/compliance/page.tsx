export default function CompliancePage() {
  const complianceSections = [
    {
      id: 'regulatory-compliance',
      title: 'Regulatory Adherence',
      description: 'Capital Review Management rigorously follows all relevant laws and regulations, including the Fair Debt Collection Practices Act (FDCPA), Fair Credit Reporting Act (FCRA), Gramm-Leach-Bliley Act (GLBA), Health Insurance Portability and Accountability Act (HIPAA), Privacy Act of 1974, Protected Health Information (PHI) protocols, TCPA (Telephone Consumer Protection Act), and all other pertinent state or federal legislation. We continuously adapt to shifting compliance landscapes to guarantee that our clients and their consumers remain safeguarded at all times.',
      image: '/Pages/Stamp_Doc.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'regulatory-change',
      title: 'Proactive Regulatory Monitoring',
      description: 'Regulatory adherence is never static. That is precisely why our Chief Compliance Officer provides ongoing supervision of legal and regulatory shifts nationwide. We proactively revise our policies and procedures to reflect emerging legislation and official guidance, guaranteeing that your accounts are consistently managed in a lawful, transparent, and fully documented fashion.',
      image: '/Pages/Calculator_Writing_Pro.jpeg',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'technology-compliance',
      title: 'Technology-Enabled Compliance',
      description: 'Our digitally integrated compliance framework unifies personnel, workflows, and tools to sustain airtight governance at every tier. We deploy TCPA-compliant platforms, hold PCI DSS certification, carry out annual CFPB Readiness Reviews, and practice forward-looking data encryption and protection. Our infrastructure undergoes routine evaluation by some of the nation\'s most exacting institutional partners — and we consistently deliver outstanding outcomes.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'staff-standards',
      title: 'Best-in-Class Personnel Standards',
      description: 'We approach talent acquisition with the same rigor we bring to compliance. Every team member undergoes thorough vetting before joining. Once onboarded, staff complete an intensive training curriculum, followed by continuous compliance education and performance evaluations throughout their employment.',
      image: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'call-monitoring',
      title: 'Call Recording, Oversight & Analytics',
      description: 'Every incoming and outgoing call is captured, archived, and subject to live monitoring by Capital Review\'s quality assurance leadership, with access to active call sessions for client-side review and complete post-call analysis with full audit trails. This ensures our representatives are not only compliant but delivering professional, high-caliber interactions at every point of contact.',
      image: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'complaint-management',
      title: 'Grievance Resolution',
      description: 'We maintain a zero-tolerance policy for consumer mistreatment or procedural failures. All grievances are examined without delay by our Compliance Officer and are tracked, assessed, and resolved through a structured compliance lifecycle that includes documented complaint protocols, proactive monitoring and reporting, root-cause investigation and corrective measures, and transparent resolution with full documentation. At Capital Review Management, we safeguard your reputation as though it were our own — because compliance is not merely protection, it is a competitive advantage.',
      image: '/Pages/Writing_Signing_Doc_Meeting.jpeg',
      background: 'grey',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Stamp_Doc.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Compliance</h1>
          <p className="text-xl">We Go Beyond Meeting Standards — We Define Them</p>
        </div>
      </section>

      {/* Compliance Sections */}
      {complianceSections.map((section, index) => (
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
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                      <div className="text-lg text-[#b0b8c8] leading-relaxed">
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
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Looking to work with a firm that leads in compliance and regulatory distinction?
          </h3>
          <a href="/contact" className="btn bg-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1f2e] transition-colors inline-block" style={{ color: '#1a1f2e' }}>
            Get In Touch Now!
          </a>
        </div>
      </section>
    </>
  )
}
