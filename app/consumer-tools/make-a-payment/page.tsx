'use client'

import { useState } from 'react'

export default function MakePaymentPage() {
  const [showModal, setShowModal] = useState(true)

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.6',
      color: '#1e293b'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/LOGO/Borderless.png" alt="Elite Portfolio Management" style={{ height: '56px', width: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
                Need Help? Call us at 833-381-4416
              </div>
              <a href="/consumer-tools/make-a-payment" style={{
                backgroundColor: '#1e3a8a',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Make A Payment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Make a Payment
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            marginBottom: '1rem'
          }}>
            Secure, Flexible Options — On Your Terms
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: '#1e293b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            At Elite Portfolio Management, we make it easy to resolve your account with multiple secure payment methods. Whether online, by phone, or by mail — our goal is to support you with speed, privacy, and convenience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Pay Online
            </h2>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>
              Make a payment anytime using our secure online portal. It's fast, encrypted, and available 24/7 — giving you complete control over your account resolution.
            </p>
            <button style={{
              backgroundColor: '#1e3a8a',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Pay Online Now
            </button>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Pay by Phone
            </h2>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>
              Use our automated, interactive phone system to submit payment over the phone at your convenience.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: '600', color: '#1e293b' }}>Call: 1-877-XXX-XXXX</p>
              <p style={{ color: '#64748b' }}>Available: 24 hours a day / 7 days a week</p>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Just follow the prompts — it's quick, private, and always secure.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1e3a8a',
              marginBottom: '1rem'
            }}>
              Pay by Mail
            </h2>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>
              Please include your account number and send your payment to:
            </p>
            <div style={{
              backgroundColor: '#f8fafc',
              padding: '1rem',
              borderRadius: '0.375rem',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                Elite Portfolio Management
              </p>
              <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>
                PO BOX [Updated PO Box]
              </p>
              <p style={{ color: '#64748b' }}>
                Conroe TX, 77301
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f8fafc',
          padding: '2rem',
          borderRadius: '0.5rem',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Need Assistance?
          </h2>
          <p style={{ color: '#64748b', marginBottom: '1rem' }}>
            Our team is here to help.
          </p>
          <p style={{ color: '#1e293b', marginBottom: '1rem' }}>
            If you'd prefer to speak directly with an account representative, call us at:
          </p>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1e3a8a'
          }}>
            833-381-4416
          </p>
        </div>

        <div style={{
          backgroundColor: '#1e293b',
          color: '#ffffff',
          padding: '2rem',
          borderRadius: '0.5rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Required Notice
          </h3>
          <p style={{ fontSize: '0.875rem' }}>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        color: '#ffffff',
        padding: '3rem 1rem',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Legal Disclosure
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Contact
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                Elite Portfolio Management<br />
                833-381-4416<br />
                info@eliteportfoliomgmt.com
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Quick Links
              </h3>
              <ul style={{ fontSize: '0.875rem', color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/consumer-tools" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Consumer Tools</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/solutions" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Solutions</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: '#cbd5e1', fontSize: '1.25rem' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" style={{ color: '#cbd5e1', fontSize: '1.25rem' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '2rem',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
              &copy; 2024 Elite Portfolio Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 