'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessModelItem } from '@/data/businessModels';
import { BenefitIcon } from './BusinessModelIcons';
import styles from './BusinessModelExplorer.module.css';

interface BusinessModelPreviewProps {
  item: BusinessModelItem;
  prefersReducedMotion?: boolean;
}

const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export default function BusinessModelPreview({
  item,
  prefersReducedMotion = false,
}: BusinessModelPreviewProps) {
  return (
    <div
      id={`model-panel-${item.id}`}
      role="tabpanel"
      aria-labelledby={`model-tab-${item.id}`}
      className={styles.previewContainer}
    >
      {/* 1. Upper Product Visual Showcase */}
      <div className={styles.visualStage}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className={styles.visualCanvasLayer}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985, y: 10 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985, y: -8 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.45,
              ease: TRANSITION_EASE,
            }}
          >
            <div className={styles.mockupWrapper}>
              <Image
                src={item.image}
                alt={item.altText}
                width={760}
                height={520}
                priority
                className={styles.deviceImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 760px"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Lower Product Information Details */}
      <div className={styles.infoStage}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.35,
              ease: TRANSITION_EASE,
            }}
          >
            {/* Foundation Eyebrow */}
            <div className={styles.foundationRow}>
              <span className={styles.foundationTag}>Recommended foundation</span>
              <span className={styles.foundationDivider} aria-hidden="true" />
              <div className={styles.platformBadge}>
                {/* iScripts Logo Icon Mark */}
                <svg
                  className={styles.iscriptsMark}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.2" />
                  <path
                    d="M12 7V17M12 7C9.5 7 8 8.5 8 10.5C8 12.5 10 13.5 12 13.5C14 13.5 16 14.5 16 16.5C16 18.5 14.5 17 12 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className={styles.platformNameText}>{item.platformName}</span>
              </div>
            </div>

            {/* Model Title */}
            <h3 className={styles.previewHeading}>{item.platformHeading}</h3>

            {/* Product Description */}
            <p className={styles.previewDesc}>{item.platformDescription}</p>

            {/* 2x2 Benefits Grid */}
            <div className={styles.benefitsGrid}>
              {item.benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefitItem}>
                  <div className={styles.benefitIconBox} aria-hidden="true">
                    <BenefitIcon name={benefit.icon} size={17} />
                  </div>
                  <span className={styles.benefitText}>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className={styles.actionRow}>
              <a
                href={item.primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCta}
              >
                <span>{item.primaryCtaText}</span>
                <svg
                  className={styles.ctaArrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={item.secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                <span>{item.secondaryCtaText}</span>
                <svg
                  className={styles.secondaryArrow}
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
