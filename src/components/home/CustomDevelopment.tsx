'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './CustomDevelopment.module.css';

interface CustomDevelopmentProps {
  onOpenContact: () => void;
}

export default function CustomDevelopment({ onOpenContact }: CustomDevelopmentProps) {
  const capabilities = [
    {
      title: 'UI & Brand Adaptation',
      detail: 'Tailor storefronts, merchant consoles, and mobile apps to match your visual identity.',
    },
    {
      title: 'Custom Business Logic',
      detail: 'Extend commission payout structures, escrow milestones, and automated dispatch algorithms.',
    },
    {
      title: 'API & Gateway Integrations',
      detail: 'Connect localized payment gateways, SMS delivery handlers, accounting systems, and CRM webhooks.',
    },
    {
      title: 'Dedicated Engineering Pods',
      detail: 'Retain senior full-stack developers led by a personal Account Manager for ongoing roadmap delivery.',
    },
  ];

  return (
    <section className={styles.section} id="custom-development">
      <Container size="default">
        <div className={styles.editorialGrid}>
          {/* Left Column: Confident Editorial Positioning */}
          <div className={styles.leftCol}>
            <div className={styles.label}>Customization &amp; Engineering</div>
            <h2 className={styles.heading}>Your platform. Your way.</h2>
            <p className={styles.description}>
              Start with an existing software foundation and work with our in-house Chicago
              development team to shape it around your exact business requirements.
            </p>

            {/* Minimal Typography-Led Capability Rows */}
            <div className={styles.capabilitiesList}>
              {capabilities.map((cap, i) => (
                <div key={cap.title} className={styles.capabilityRow}>
                  <div className={styles.capIndex}>0{i + 1}</div>
                  <div className={styles.capContent}>
                    <div className={styles.capTitle}>{cap.title}</div>
                    <div className={styles.capDetail}>{cap.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Button
                variant="dark"
                size="lg"
                withArrow
                onClick={onOpenContact}
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>

          {/* Right Column: Genuine iScripts Engineering & Interface Visual */}
          <div className={styles.rightCol}>
            <div className={styles.visualFrame}>
              <div className={styles.frameHeader}>
                <div className={styles.dots} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.frameLabel}>
                  engineering.iscripts.com/custom-deployment
                </div>
                <div className={styles.liveIndicator}>
                  <span className={styles.liveDot} />
                  <span>Production Ready</span>
                </div>
              </div>

              <div className={styles.screenWrapper}>
                <Image
                  src="/images/locologic-back.png"
                  alt="iScripts custom engineering and platform adaptation"
                  width={680}
                  height={420}
                  className={styles.screenImage}
                  quality={90}
                />
              </div>

              {/* Development Architecture Ledger */}
              <div className={styles.devMeta}>
                <div className={styles.devMetaItem}>
                  <span className={styles.metaLabel}>Engineering Team</span>
                  <span className={styles.metaValue}>150+ In-House Engineers</span>
                </div>
                <div className={styles.devMetaDivider} />
                <div className={styles.devMetaItem}>
                  <span className={styles.metaLabel}>Project Oversight</span>
                  <span className={styles.metaValue}>Dedicated Account Manager</span>
                </div>
                <div className={styles.devMetaDivider} />
                <div className={styles.devMetaItem}>
                  <span className={styles.metaLabel}>Deployment</span>
                  <span className={styles.metaValue}>Free Complimentary Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
