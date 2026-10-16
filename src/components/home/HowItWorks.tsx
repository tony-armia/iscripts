import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { HOW_IT_WORKS_STEPS } from '@/data/homepage';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <Container size="default">
        <SectionHeading
          label="Execution path"
          title="From idea to launch."
          description="A practical, milestone-driven pathway to launch your digital platform with architectural clarity."
        />

        {/* Horizontal Editorial Timeline on Desktop */}
        <div className={styles.timeline}>
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.step} className={styles.stepCard}>
              <div className={styles.stepTopBar}>
                <span className={styles.stepNumber}>{step.step}</span>
                <span className={styles.stepIndicator} />
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              <div className={styles.detailsList}>
                {step.details.map((detail) => (
                  <div key={detail} className={styles.detailItem}>
                    <span className={styles.detailBullet} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
