'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import styles from './ExecutionRoadmap.module.css';

interface Step {
  number: string;
  phase: string;
  title: string;
  summary: string;
  deliverables: string[];
  imageSrc: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    phase: 'DISCOVERY',
    title: 'Concept & Validation',
    summary: 'We stress-test your startup model against real market conditions with rapid interactive prototypes and proof-of-concept architectures.',
    deliverables: [
      'Market model validation',
      'Rapid prototype wireframing',
      'Technology feasibility matrix',
    ],
    imageSrc: '/images/roadmap/step-01.jpg',
  },
  {
    number: '02',
    phase: 'ARCHITECTURE',
    title: 'Technical Analysis',
    summary: 'Our system architects draft detailed Scope of Work (SOW), database relational schemas, API blueprints, and vendor transaction flows.',
    deliverables: [
      'Comprehensive SOW & spec',
      'Database relational mapping',
      'API & payment gateway schema',
    ],
    imageSrc: '/images/roadmap/step-02.jpg',
  },
  {
    number: '03',
    phase: 'DESIGN',
    title: 'UX/UI Engineering',
    summary: 'Dedicated UX/UI designers craft responsive storefronts, vendor admin consoles, and companion mobile apps aligned with your brand identity.',
    deliverables: [
      'High-fidelity design tokens',
      'Mobile & web customer journeys',
      'Merchant & admin dashboards',
    ],
    imageSrc: '/images/roadmap/step-03.jpg',
  },
  {
    number: '04',
    phase: 'ENGINEERING',
    title: 'Custom Development',
    summary: 'Our 150+ in-house Chicago and offshore engineers programmatically extend business logic, escrow payouts, and automated algorithms.',
    deliverables: [
      '100% unencrypted code delivery',
      'Custom business workflow logic',
      'Third-party webhook integrations',
    ],
    imageSrc: '/images/roadmap/step-04.jpg',
  },
  {
    number: '05',
    phase: 'VERIFICATION',
    title: 'Rigorous QA Auditing',
    summary: 'Every module undergoes unit testing, integration verification, speed optimization, security vulnerability scans, and concurrency load tests.',
    deliverables: [
      'Automated regression tests',
      'Security penetration audits',
      'Multi-tenant load benchmarks',
    ],
    imageSrc: '/images/roadmap/step-05.jpg',
  },
  {
    number: '06',
    phase: 'DEPLOYMENT',
    title: 'Cloud Launch & DevOps',
    summary: 'Free complimentary server setup and cloud deployment onto your AWS, Linux, or preferred hosting with ongoing roadmap support.',
    deliverables: [
      'Zero-cost white-glove setup',
      'Cloud infrastructure provisioning',
      '24/7 technical monitoring',
    ],
    imageSrc: '/images/roadmap/step-06.jpg',
  },
];

export default function ExecutionRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className={styles.section} id="execution-roadmap" aria-label="6-Step Startup Execution Roadmap">
      <Container size="default">
        {/* Section Header */}
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

        {/* Vertical Timeline Interactive Layout */}
        <div className={styles.timelineContainer}>
          {/* Timeline Spine Track */}
          <div className={styles.spineTrack} aria-hidden="true">
            <div 
              className={styles.spineProgress}
              style={{
                height: `${((activeStep + 0.6) / STEPS.length) * 100}%`,
              }}
            />
          </div>

          {/* Steps List */}
          <div className={styles.stepsList} role="list">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.number}
                  role="listitem"
                  className={`${styles.stepRow} ${isActive ? styles.rowActive : ''} ${isPast ? styles.rowPast : ''}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Left Node Indicator */}
                  <div className={styles.nodeWrapper}>
                    <button
                      type="button"
                      className={`${styles.nodeCircle} ${isActive ? styles.nodeActive : ''} ${isPast ? styles.nodePast : ''}`}
                      onClick={() => setActiveStep(idx)}
                      aria-label={`Jump to Step ${step.number}: ${step.title}`}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <span className={styles.nodeNumber}>{step.number}</span>
                    </button>
                    <div className={`${styles.nodeBridge} ${isActive ? styles.bridgeActive : ''}`} aria-hidden="true" />
                  </div>

                  {/* Wide Horizontal Step Card */}
                  <div
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStep(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(idx);
                      }
                    }}
                    className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                  >
                    {/* Active Accent Bar on Left Edge */}
                    <div className={styles.cardAccentBar} aria-hidden="true" />

                    {/* Column 1: Eyebrow + Title + Description */}
                    <div className={styles.infoCol}>
                      <span className={styles.phaseBadge}>{step.phase}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepSummary}>{step.summary}</p>
                    </div>

                    {/* Column 2: Deliverables List */}
                    <div className={styles.deliverablesCol}>
                      <ul className={styles.deliverablesList}>
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className={styles.deliverableItem}>
                            <span
                              className={`${styles.bulletDot} ${isActive ? styles.bulletDotActive : styles.bulletDotDefault}`}
                              aria-hidden="true"
                            />
                            <span className={styles.deliverableText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: High-Res Visual Preview Thumbnail */}
                    <div className={styles.thumbnailCol}>
                      <div className={styles.thumbnailFrame}>
                        <Image
                          src={step.imageSrc}
                          alt={`${step.title} visual preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 240px, 260px"
                          className={styles.thumbnailImage}
                          priority={idx < 2}
                        />
                        <div className={styles.thumbnailGlow} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
