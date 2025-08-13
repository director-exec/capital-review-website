import Link from 'next/link'

export default function TextMessageOptInPage() {
  const optInSections = [
    {
      id: 'timely-notifications',
      title: 'Get Timely Notifications',
      description: 'Receive important updates about billing and upcoming payments directly to your phone. Stay informed about your account status and never miss a payment deadline with our convenient text message alerts.',
      image: 'https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'real-time-updates',
      title: 'Stay Updated in Real Time',
      description: 'Get instant notifications about your account status changes, payment confirmations, and important account updates. Our text messaging service ensures you\'re always in the know about your financial obligations.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      background: 'grey',
      imageLeft: true
    },
    {
      id: 'avoid-late-payments',
      title: 'Avoid Late Payments',
      description: 'Receive helpful due-date alerts and payment reminders to help you stay on top of your financial obligations. Our proactive messaging system helps you maintain good payment history and avoid late fees.',
      image: 'https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?_gl=1*1votr6i*_ga*ODY5MjgwMTU0LjE3NTQ5MjU3MjE.*_ga_8JE65Q40S6*czE3NTUwODU0NDYkbzUkZzEkdDE3NTUwODU0NDckajU5JGwwJGgw',
      background: 'white',
      imageLeft: false
    },
    {
      id: 'exclusive-offers',
      title: 'Access Exclusive Offers',
      description: 'Receive notifications about exclusive offers and flexible payment options to better manage your account. Take advantage of special programs and payment arrangements designed to help you succeed.',
      image: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=800',
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
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Text Message Opt-in</h1>
          <p className="text-xl">Stay Informed with Important Account Updates & Payment Reminders!</p>
        </div>
      </section>

      {/* Main Content Introduction */}
      <section className="main-intro py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay in Control of Your Finances</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Opt in today to receive essential updates and payment reminders, ensuring you never miss a deadline. 
              Our convenient text messaging service provides hassle-free updates to help you manage your account 
              effectively and maintain good payment history.
            </p>
          </div>
        </div>
      </section>

      {/* Opt-in Sections */}
      {optInSections.map((section, index) => (
        <section key={section.id} className={`py-16 ${section.background === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
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
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                      <div className="text-lg text-gray-700 leading-relaxed">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Ready to Get Started?</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  Enter your information below to opt in to text message notifications
                </p>
              </div>

              <form className="max-w-md mx-auto space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I consent to receive text messages from Elite Portfolio Management LLC. I understand that message and data rates may apply. I can opt out at any time by replying STOP.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  OPT IN NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Important Information</h2>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Message Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standard message and data rates may apply</li>
                    <li>• You can opt out at any time by replying STOP</li>
                    <li>• For help, reply HELP to any message</li>
                    <li>• Message frequency varies based on account activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Information</h3>
                  <p className="text-gray-700 mb-4">
                    By opting in, you agree to our Terms and Conditions and Privacy Policy.
                  </p>
                  <div className="space-y-2">
                    <Link href="/terms" className="block text-blue-600 hover:text-blue-800 underline">Terms and Conditions</Link>
                    <Link href="/privacy" className="block text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>
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
