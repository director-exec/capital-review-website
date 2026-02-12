import Link from 'next/link'

export default function MakePaymentPage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Make a Payment</h1>
          <p className="text-xl">Secure Online Payment Options</p>
        </div>
      </section>

      {/* Payment Portal Coming Soon */}
      <section className="py-24 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#111827] rounded-lg shadow-lg p-12 border border-[#1e293b]">
              <div className="mb-8">
                <svg className="mx-auto h-20 w-20 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Payment Portal Coming Soon</h2>
              <p className="text-lg text-[#b0b8c8] leading-relaxed mb-6">
                We are currently building a new secure online payment system for your convenience.
                This feature will be available shortly. In the meantime, please contact us directly
                to arrange a payment or discuss your account options.
              </p>
              <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b] mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch With Us</h3>
                <div className="space-y-3 text-[#b0b8c8]">
                  <p className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg font-semibold">866-766-2692</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">info@capitalreviewmgt.com</span>
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-[#4a7fb5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a6f9f] transition-colors"
              >
                Contact Us for Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Alternative Payment Methods</h2>
            <p className="text-lg text-[#b0b8c8] leading-relaxed mb-8">
              While our online portal is being developed, you can still resolve your account by reaching out to our team
              via phone or email. Our representatives are standing by to walk you through the available payment arrangements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b]">
                <h3 className="text-xl font-semibold text-white mb-3">Phone Payments</h3>
                <p className="text-[#8892a4]">
                  Speak with one of our account specialists at 866-766-2692 to process a payment over the phone securely.
                </p>
              </div>
              <div className="bg-[#1a1f2e] rounded-lg p-6 border border-[#1e293b]">
                <h3 className="text-xl font-semibold text-white mb-3">Mail-In Payments</h3>
                <p className="text-[#8892a4]">
                  Send your payment to: 2200 North Frazier Suite 120 Box 142, Conroe, TX 77301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-24" style={{ backgroundColor: '#1a1f2e' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Questions about your balance or payment arrangements? We are here to help.
          </h3>
          <Link href="/contact" className="btn bg-[#0a0f1c] px-8 py-3 rounded-lg font-semibold hover:bg-[#111827] transition-colors text-[#c9a84c] border border-[#1e293b]">
            Reach Out to Us
          </Link>
        </div>
      </section>
    </>
  )
}
