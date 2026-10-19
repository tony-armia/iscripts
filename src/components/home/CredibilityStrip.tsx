'use client';

import React from 'react';
import styles from './CredibilityStrip.module.css';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
}

const METRICS: MetricItem[] = [
  {
    id: 'years',
    value: '15+ Years',
    label: 'Chicago Tech Agency',
    detail: 'Serving founders since 2008',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'engineers',
    value: '150+',
    label: 'In-House Engineers',
    detail: 'Full-time Chicago & dedicated pods',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'platforms',
    value: '25+',
    label: 'Turnkey Platforms',
    detail: 'Battle-tested software codebases',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'deployments',
    value: '8,000+',
    label: 'Live Deployments',
    detail: 'Operating in 120+ countries',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'funding',
    value: '$30M+',
    label: 'Client Capital Raised',
    detail: 'Seed & Series A funded ventures',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'ownership',
    value: '100%',
    label: 'Source Code Rights',
    detail: 'Full IP & commercial ownership',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'speed',
    value: '48-Hour',
    label: 'Rapid Deployment',
    detail: 'Fast-track launch infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'royalties',
    value: 'Zero',
    label: 'Royalty Fees',
    detail: 'Perpetual commercial licenses',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function CredibilityStrip() {
  return (
    <section className={styles.marqueeSection} aria-label="iScripts Track Record & Key Statistics">
      <div className={styles.fadeMaskLeft} aria-hidden="true" />
      <div className={styles.fadeMaskRight} aria-hidden="true" />

      <div className={styles.marqueeContainer}>
        {/* Track A and Track B for seamless 100% gapless continuous marquee */}
        <div className={styles.marqueeTrack}>
          {METRICS.map((item) => (
            <div key={`track-a-${item.id}`} className={styles.metricCard}>
              <div className={styles.iconOrb} aria-hidden="true">
                {item.icon}
              </div>
              <div className={styles.textContent}>
                <div className={styles.headlineRow}>
                  <span className={styles.valueText}>{item.value}</span>
                  <span className={styles.labelText}>{item.label}</span>
                </div>
                <div className={styles.detailText}>{item.detail}</div>
              </div>
            </div>
          ))}
          {/* Duplicate set for 360-degree seamless loop */}
          {METRICS.map((item) => (
            <div key={`track-b-${item.id}`} className={styles.metricCard} aria-hidden="true">
              <div className={styles.iconOrb}>
                {item.icon}
              </div>
              <div className={styles.textContent}>
                <div className={styles.headlineRow}>
                  <span className={styles.valueText}>{item.value}</span>
                  <span className={styles.labelText}>{item.label}</span>
                </div>
                <div className={styles.detailText}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
