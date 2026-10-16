'use client';

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { COMPANY_CONTACT } from '@/data/homepage';
import styles from './FinalCTA.module.css';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className={styles.section} id="closing-cta">
      <Container size="default">
        <div className={styles.card}>
          <div className={styles.contentCol}>
            <div className={styles.label}>Get in touch</div>
            <h2 className={styles.heading}>Have an idea worth building?</h2>
            <p className={styles.subtext}>
              Find a platform to start with, or talk to our team about creating something
              tailored to your business. We validate requirements, prepare architecture estimates,
              and conduct live platform walkthroughs.
            </p>

            <div className={styles.actions}>
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={onOpenContact}
              >
                Talk to an Expert
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#platform-showcase"
              >
                Explore Platforms
              </Button>
            </div>
          </div>

          <div className={styles.contactDesk}>
            <div className={styles.deskHeader}>
              <span className={styles.deskTitle}>Chicago Solutions Desk</span>
              <span className={styles.deskStatus}>Active Inquiries</span>
            </div>

            <div className={styles.deskRow}>
              <span className={styles.deskLabel}>Direct Sales Line</span>
              <a href="tel:13124236728" className={styles.deskPhone}>
                {COMPANY_CONTACT.directPhone}
              </a>
            </div>

            <div className={styles.deskRow}>
              <span className={styles.deskLabel}>Toll Free (US/CA)</span>
              <a href="tel:18005695538" className={styles.deskPhone}>
                {COMPANY_CONTACT.tollFreePhone}
              </a>
            </div>

            <div className={styles.deskRow}>
              <span className={styles.deskLabel}>Direct Engineering Desk</span>
              <a href={`mailto:${COMPANY_CONTACT.salesEmail}`} className={styles.deskMail}>
                {COMPANY_CONTACT.salesEmail}
              </a>
            </div>

            <div className={styles.deskFooter}>
              <span>{COMPANY_CONTACT.hours}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
