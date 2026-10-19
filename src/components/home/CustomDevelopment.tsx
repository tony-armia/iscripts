'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import styles from './CustomDevelopment.module.css';

interface CustomDevelopmentProps {
  onOpenContact: () => void;
}

interface CapabilityItem {
  id: string;
  title: string;
  detail: string;
  icon: React.ReactNode;
}

export default function CustomDevelopment({ onOpenContact }: CustomDevelopmentProps) {
  const capabilities: CapabilityItem[] = [
    {
      id: '01',
      title: 'UI & Brand Adaptation',
      detail: 'Tailor storefronts, merchant consoles, and mobile apps to match your visual identity.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: '02',
      title: 'Custom Business Logic',
      detail: 'Extend commission payout structures, escrow milestones, and automated dispatch algorithms.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <rect x="3" y="17" width="6" height="4" rx="1" />
          <rect x="15" y="17" width="6" height="4" rx="1" />
          <path d="M12 7v5m0 0H6v5m6-5h6v5" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'API & Gateway Integrations',
      detail: 'Connect localized payment gateways, SMS delivery handlers, accounting systems, and CRM webhooks.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'Dedicated Engineering Pods',
      detail: 'Retain senior full-stack developers led by a personal Account Manager for ongoing roadmap delivery.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section} id="custom-development">
      <div className={styles.bgGlow} aria-hidden="true" />
      <Container size="default">
        <div className={styles.editorialGrid}>
          {/* Left Column: Headline, Description & Capabilities List */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <span className={styles.eyebrowText}>Customization &amp; Engineering</span>
            </div>

            <h2 className={styles.heading}>Software that fits the way you work.</h2>
            <p className={styles.description}>
              Start with an existing software foundation and work with our in-house Chicago
              development team to shape it around your exact business requirements.
            </p>

            {/* Capability Rows with Numbers, Custom Icons, and Clean Dividers */}
            <div className={styles.capabilitiesList}>
              {capabilities.map((cap) => (
                <div key={cap.id} className={styles.capabilityRow}>
                  <div className={styles.capLeft}>
                    <span className={styles.capIndex}>{cap.id}</span>
                    <div className={styles.capIconWrapper} aria-hidden="true">
                      {cap.icon}
                    </div>
                  </div>
                  <div className={styles.capContent}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={styles.capDetail}>{cap.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={onOpenContact}
              >
                <span>Discuss Your Requirements</span>
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </button>

              <div className={styles.advisorCallout}>
                <div className={styles.advisorAvatarWrapper}>
                  <Image
                    src="/images/john.webp"
                    alt="Jon S. - Senior Startup Coach"
                    width={40}
                    height={40}
                    className={styles.advisorAvatar}
                  />
                  <span className={styles.advisorOnlineBadge} />
                </div>
                <div className={styles.advisorText}>
                  <span className={styles.advisorName}>Ask Jon S. &bull; Startup Coach</span>
                  <a href="tel:13124236728" className={styles.advisorPhone}>
                    1-(312)-423-6728
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Image with Floating Card and Bottom Metrics */}
          <div className={styles.rightCol}>
            <div className={styles.visualContainer}>
              {/* Main Image Showcase */}
              <div className={styles.imageCard}>
                <Image
                  src="/images/custom-engineering-truck.jpg"
                  alt="Software that fits the way you work - Commercial fleet and logistics operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.heroImage}
                  priority
                />
                <div className={styles.imageVignette} />

                {/* Floating "Built for your business" Card */}
                <div className={styles.floatingCard}>
                  <div className={styles.floatingHeader}>
                    <span className={styles.floatingDash} aria-hidden="true" />
                    <span className={styles.floatingTitle}>Built for your business</span>
                  </div>
                  <div className={styles.floatingSub}>
                    Flexible <span className={styles.dividerDot}>/</span> Scalable <span className={styles.dividerDot}>/</span> Reliable
                  </div>
                </div>
              </div>

              {/* Bottom 3-Metric Bar */}
              <div className={styles.metricsBar}>
                <div className={styles.metricItem}>
                  <div className={styles.metricIcon} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricPrimary}>150+</span>
                    <span className={styles.metricSecondary}>In-house engineers</span>
                  </div>
                </div>

                <div className={styles.metricDivider} aria-hidden="true" />

                <div className={styles.metricItem}>
                  <div className={styles.metricIcon} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricTitle}>Dedicated account manager</span>
                  </div>
                </div>

                <div className={styles.metricDivider} aria-hidden="true" />

                <div className={styles.metricItem}>
                  <div className={styles.metricIcon} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricTitle}>Complimentary setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
