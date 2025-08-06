import React from 'react';
import Image from 'next/image';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  children,
  className = ''
}: PageLayoutProps) {
  return (
    <div className={`page-layout ${className}`}>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-background">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-content">
        <div className="container">
          {children}
        </div>
      </section>
    </div>
  );
} 