import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { BUSINESS_MODELS } from '@/data/platforms';
import styles from './PlatformExplorer.module.css';

export default function PlatformExplorer() {
  return (
    <section className={styles.section} id="business-models">
      <Container size="default">
        <SectionHeading
          label="Model directory"
          title="Find the right starting point."
          description="Navigate directly by the business model or transaction flow you intend to build."
        />

        {/* Directory-style text-first list with fine hairline dividers */}
        <div className={styles.directory}>
          {BUSINESS_MODELS.map((model, idx) => (
            <a
              key={model.id}
              href={model.platformLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
            >
              <div className={styles.indexCol}>
                <span className={styles.indexNumber}>0{idx + 1}</span>
              </div>

              <div className={styles.contentCol}>
                <div className={styles.rowTitle}>{model.title}</div>
                <div className={styles.rowDesc}>{model.description}</div>
              </div>

              <div className={styles.platformCol}>
                <span className={styles.recommendedLabel}>Recommended Foundation:</span>
                <span className={styles.platformName}>{model.suggestedPlatform}</span>
              </div>

              <div className={styles.actionCol}>
                <span className={styles.actionText}>View platform</span>
                <svg
                  className={styles.rowArrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
