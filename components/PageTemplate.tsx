import React from 'react';
import PageLayout from './PageLayout';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  heroImageAlt: string;
  content: {
    mainTitle: string;
    mainText: string;
    features?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    benefits?: string[];
    cta?: {
      title: string;
      text: string;
      contact: string;
    };
  };
}

export default function PageTemplate({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  content
}: PageTemplateProps) {
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      heroImage={heroImage}
      heroImageAlt={heroImageAlt}
    >
      <div className="content-section">
        <h2 className="section-title">{content.mainTitle}</h2>
        <div className="title-underline"></div>

        <div className="content-grid">
          <div className="content-text">
            <p className="lead-paragraph">{content.mainText}</p>
          </div>
          <div className="content-image">
            <img src={heroImage} alt={heroImageAlt} className="rounded-lg shadow-lg" />
          </div>
        </div>

        {content.features && (
          <div className="features-section">
            <h3 className="section-subtitle">How It Works</h3>
            <div className="features-grid">
              {content.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon"><i className={feature.icon}></i></div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {content.benefits && (
          <div className="benefits-section">
            <h3 className="section-subtitle">Key Benefits</h3>
            <div className="benefits-grid">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {content.cta && (
          <div className="cta-section">
            <div className="cta-card">
              <h3>{content.cta.title}</h3>
              <p>{content.cta.text}</p>
              <div className="cta-contact"><strong>{content.cta.contact}</strong></div>
            </div>
          </div>
        )}

        <div className="legal-section">
          <div className="legal-disclosure">
            <p><strong>Legal Disclosure:</strong> This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.</p>
          </div>
          <div className="company-info">
            <p><strong>Capital Review Management</strong></p>
            <p>2200 North Frazier Suite 120 Box 142, Conroe, TX 77301</p>
            <p>866-766-2692</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
