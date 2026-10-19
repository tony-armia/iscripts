'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import styles from './ExecutionRoadmap.module.css';

interface Step {
  number: string;
  phase: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Concept & Validation',
    summary: 'We stress-test your startup model against real market conditions with rapid interactive prototypes and proof-of-concept architectures.',
    deliverables: ['Market model validation', 'Rapid prototype wireframing', 'Technology feasibility matrix'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    number: '02',
    phase: 'Architecture',
    title: 'Technical Analysis',
    summary: 'Our system architects draft detailed Scope of Work (SOW), database relational schemas, API blueprints, and vendor transaction flows.',
    deliverables: ['Comprehensive SOW & spec', 'Database relational mapping', 'API & payment gateway schema'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: '03',
    phase: 'Design',
    title: 'UX/UI Engineering',
    summary: 'Dedicated UX/UI designers craft responsive storefronts, vendor admin consoles, and companion mobile apps aligned with your brand identity.',
    deliverables: ['High-fidelity design tokens', 'Mobile & web customer journeys', 'Merchant & admin dashboards'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: '04',
    phase: 'Engineering',
    title: 'Custom Development',
    summary: 'Our 150+ in-house Chicago and offshore engineers programmatically extend business logic, escrow payouts, and automated algorithms.',
    deliverables: ['100% unencrypted code delivery', 'Custom business workflow logic', 'Third-party webhook integrations'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '05',
    phase: 'Verification',
    title: 'Rigorous QA Auditing',
    summary: 'Every module undergoes unit testing, integration verification, speed optimization, security vulnerability scans, and concurrency load tests.',
    deliverables: ['Automated regression tests', 'Security penetration audits', 'Multi-tenant load benchmarks'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: '06',
    phase: 'Deployment',
    title: 'Cloud Launch & DevOps',
    summary: 'Free complimentary server setup and cloud deployment onto your AWS, Linux, or preferred hosting with ongoing roadmap support.',
    deliverables: ['Zero-cost white-glove setup', 'Cloud infrastructure provisioning', '24/7 technical monitoring'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function ExecutionRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className={styles.section} id="empowering-startups" aria-label="6-Step Startup Execution Journey">
      <Container size="default">
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span className={styles.eyebrowText}>Empowering your startup</span>
          </div>
          <h2 className={styles.title}>From raw concept to scaled production in 60% less time.</h2>
          <p className={styles.description}>
            Transforming vision into market traction requires domain precision and technical stamina. 
            Our structured 6-phase engineering lifecycle eliminates months of trial-and-error.
          </p>
        </div>

        {/* 6-Phase Interactive Grid */}
        <div className={styles.stepsGrid}>
          {STEPS.map((step, idx) => {
            const isHovered = activeStep === idx;
            return (
              <div
                key={step.number}
                className={`${styles.stepCard} ${isHovered ? styles.cardActive : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.numberBadge}>
                    <span className={styles.numberText}>{step.number}</span>
                  </div>
                  <div className={styles.iconCircle} aria-hidden="true">
                    {step.icon}
                  </div>
                </div>

                <div className={styles.phaseTag}>{step.phase}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepSummary}>{step.summary}</p>

                <div className={styles.deliverablesList}>
                  {step.deliverables.map((del) => (
                    <div key={del} className={styles.deliverableItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.bottomBar} aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
