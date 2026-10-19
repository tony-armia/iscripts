'use client';

import React from 'react';
import Container from '../ui/Container';
import styles from './TrustAccreditations.module.css';

interface Accreditation {
  name: string;
  role: string;
  detail: string;
  badge: string;
}

const ACCREDITATIONS: Accreditation[] = [
  {
    name: 'NASSCOM',
    role: 'Premier IT Association Member',
    detail: 'Adhering to top-tier global software engineering and security compliance benchmarks.',
    badge: 'Certified Member',
  },
  {
    name: 'AWS Partner Network',
    role: 'Select Tier Cloud Provider',
    detail: 'Validated architectural patterns for multi-tenant high-availability cloud deployments.',
    badge: 'AWS Certified',
  },
  {
    name: 'Illinois Tech Association (ITA)',
    role: 'Chicago Tech Ecosystem Leader',
    detail: 'Active member of Chicago’s premier tech enterprise network and engineering community.',
    badge: 'Headquartered in IL',
  },
  {
    name: 'Clutch Verified',
    role: 'Top B2B Software Developers',
    detail: 'Independently audited client ratings, verified project deliverables, and founder reviews.',
    badge: '4.8 / 5.0 Rating',
  },
  {
    name: 'Better Business Bureau',
    role: 'A+ Accredited Business',
    detail: 'Over 15 continuous years of ethical commercial transactions and stellar client satisfaction.',
    badge: 'A+ Accredited',
  },
  {
    name: 'Design Drizzle',
    role: 'Top Turnkey Software Solution',
    detail: 'Awarded for exceptional turnkey script usability, unencrypted code quality, and ROI.',
    badge: 'Excellence Award',
  },
];

export default function TrustAccreditations() {
  return (
    <section className={styles.section} aria-label="Awards, Certifications, and Industry Accreditations">
      <Container size="default">
        <div className={styles.topRow}>
          <div className={styles.labelCol}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span className={styles.labelText}>Industry Accreditations &amp; Trust</span>
          </div>
          <p className={styles.subtext}>
            Recognized by premier technology councils, cloud ecosystems, and independent software rating agencies.
          </p>
        </div>

        <div className={styles.grid}>
          {ACCREDITATIONS.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.badge}>{item.badge}</span>
              </div>
              <div className={styles.role}>{item.role}</div>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
