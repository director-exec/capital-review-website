import Link from 'next/link'

export default function TextMessageOptInPage() {
  const optInSections = [
    {
      id: 'timely-notifications',
      title: 'Receive Prompt Alerts',
      description: 'Get critical updates regarding billing and forthcoming payments sent straight to your mobile device. Keep track of your account standing and avoid missing any payment due dates with our practical text notification service.',
      image: 'https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'real-time-updates',
      title: 'Instant Account Notifications',
      description: 'Receive immediate alerts about changes to your account status, payment confirmations, and essential account developments. Our text notification service guarantees you are always aware of your financial standing.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    },
    {
      id: 'avoid-late-payments',
      title: 'Prevent Missed Deadlines',
      description: 'Get useful due-date notifications and payment reminders to help you stay current on your financial commitments. Our proactive alert system supports you in maintaining a positive payment track record and steering clear of penalty charges.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'dark',
      imageLeft: false
    },
    {
      id: 'exclusive-offers',
      title: 'Unlock Special Opportunities',
      description: 'Get notified about special promotions and adaptable payment alternatives to better handle your account. Take advantage of unique programs and payment plans crafted to support your financial success.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'darker',
      imageLeft: true
    }
  ]

  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Text Message Opt-in</h1>
          <p className="text-xl">Keep Informed with Key Account Updates & Payment Notifications!</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Take Charge of Your Financial Obligations</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed">
              Sign up now to receive vital updates and payment notifications, making sure you never miss a due date.
              Our straightforward text messaging service delivers effortless updates to help you oversee your account
              effectively and preserve a strong payment history.
            </p>
          </div>
        </div>
      </section>

      {/* Opt-in Sections */}
      {optInSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'darker' ? 'bg-[#111827]' : 'bg-[#0a0f1c]'}`}>
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

      {/* Opt-in Form Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Prepared to Begin?</h2>
            <div className="bg-[#0a0f1c] rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-[#b0b8c8]">
                  Provide your details below to enroll in text message notifications
                </p>
              </div>

              <form className="max-w-md mx-auto space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#b0b8c8] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-[#111827] text-white border border-[#1e293b] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#b0b8c8] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#111827] text-white border border-[#1e293b] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#b0b8c8] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#111827] text-white border border-[#1e293b] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="jane.smith@example.com"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-[#1e293b] rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-[#b0b8c8]">
                    I authorize Capital Review Management LLC to send me text messages. I acknowledge that standard message and data charges may apply. I may unsubscribe at any point by responding STOP.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b8973d] transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  ENROLL NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Key Details</h2>
            <div className="bg-[#111827] rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Messaging Details</h3>
                  <ul className="space-y-2 text-[#b0b8c8]">
                    <li>&#8226; Standard message and data fees may be incurred</li>
                    <li>&#8226; You may unsubscribe at any point by replying STOP</li>
                    <li>&#8226; For assistance, reply HELP to any message</li>
                    <li>&#8226; Message frequency differs depending on account activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Legal Details</h3>
                  <p className="text-[#b0b8c8] mb-4">
                    By enrolling, you consent to our Terms and Conditions and Privacy Policy.
                  </p>
                  <div className="space-y-2">
                    <Link href="/terms" className="block text-[#c9a84c] hover:text-[#b8973d] underline">Terms and Conditions</Link>
                    <Link href="/privacy" className="block text-[#c9a84c] hover:text-[#b8973d] underline">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}