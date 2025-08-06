import PageLayout from '../../../components/PageLayout';

export default function WarehousingManagementPage() {
  return (
    <PageLayout
      title="Warehousing Management"
      subtitle="Keep Your Cash Flow Coming"
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heroImageAlt="Warehousing Management Services"
    >
      <div className="content-section">
        <h2 className="section-title">Increase Your Revenue Stream</h2>
        <div className="title-underline"></div>
        
        <div className="content-grid">
          <div className="content-text">
            <p className="lead-paragraph">
              Diversified will manage your 'end of life' accounts at a reduced fee. Our proprietary scoring, analytics, 
              and skip tracing processes help you maximize recovery and keep cash flow coming on accounts where the statute 
              of limitations has not expired.
            </p>
            
            <p>
              We monitor multiple databases around the clock for favorable recovery opportunities, ensuring your dormant 
              accounts remain valuable assets rather than write-offs.
            </p>
          </div>
          
          <div className="content-image">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Warehousing Management Process"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="features-section">
          <h3 className="section-subtitle">How It Works</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Secure Data Holding</h4>
              <p>
                We retain and monitor accounts that are past standard collection efforts, while ensuring full compliance 
                with data retention laws.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h4>Real-Time Triggers</h4>
              <p>
                Our system scans multiple national databases continuously to detect credit activity, employment updates, 
                asset shifts, or other signs of renewed collectability.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Proprietary Scoring & Analytics</h4>
              <p>
                We re-score and prioritize accounts based on updated financial behavior, payment capacity, and risk indicators.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h4>Cost-Effective Strategy</h4>
              <p>
                Warehoused accounts are held at lower servicing rates, with full recovery efforts only reinitiated 
                when there's true potential to collect.
              </p>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h3 className="section-subtitle">Why Use Warehousing?</h3>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <span>Extend recovery timelines without legal risk</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <span>Increase total lifetime ROI on each account</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <span>Avoid premature closures or write-offs</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-check-circle"></i>
              <span>Free up internal resources while we monitor and manage</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <h3>Don't Write Off Accounts Too Soon</h3>
            <p>
              Accounts nearing the statute of limitations still have value — if you manage them correctly. Let Diversified 
              help you track and recover them with minimal cost and maximum timing precision.
            </p>
            <div className="cta-contact">
              <strong>Call 833-381-4416 to speak with our recovery strategy team today.</strong>
            </div>
          </div>
        </div>

        <div className="legal-section">
          <div className="legal-disclosure">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>
          
          <div className="company-info">
            <p><strong>Diversified Adjustment Service, Inc.</strong></p>
            <p>2200 N Frazier St. STE 120 Box 142 Conroe TX, 77301</p>
            <p>833-381-4416</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 