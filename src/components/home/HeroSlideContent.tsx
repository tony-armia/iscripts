'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSlide } from '@/data/heroSlides';
import styles from './HeroSlider.module.css';

interface HeroSlideContentProps {
  currentSlide: HeroSlide;
  onOpenContact: () => void;
  prefersReducedMotion?: boolean;
}

const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSlideContent({
  currentSlide,
  onOpenContact,
  prefersReducedMotion = false,
}: HeroSlideContentProps) {
  return (
    <div className={styles.editorialContent}>
      {/* 04 / 04 ─── Counter Header */}
      <div className={styles.counterRow} aria-hidden="true">
        <span className={styles.counterCurrent}>{currentSlide.index}</span>
        <span className={styles.counterSlash}>/</span>
        <span className={styles.counterTotal}>04</span>
        <span className={styles.counterLine} />
      </div>

      {/* Two-Tone Masked Editorial Headline */}
      <div className={styles.headlineMask}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.h1
            key={currentSlide.id}
            className={styles.headline}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { y: 26, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { y: -20, opacity: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.65,
              ease: TRANSITION_EASE,
            }}
          >
            <span className={styles.headlineDark}>{currentSlide.headlineLine1}</span>{' '}
            <span className={styles.headlineMuted}>{currentSlide.headlineHighlight}</span>{' '}
            <span className={styles.headlineDark}>{currentSlide.headlineLine2}</span>
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Staggered Masked Description */}
      <div className={styles.descriptionMask}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={currentSlide.id}
            className={styles.description}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { y: 16, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { y: -12, opacity: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: TRANSITION_EASE,
            }}
          >
            {currentSlide.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Actions: Primary Red CTA + Secondary Text Action */}
      <div className={styles.actionRow}>
        <a
          href={currentSlide.primaryCtaHref}
          className={styles.primaryCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.ctaLabelStage}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={currentSlide.id}
                className={styles.ctaLabel}
                initial={
                  prefersReducedMotion ? { opacity: 0 } : { y: 12, opacity: 0 }
                }
                animate={{ y: 0, opacity: 1 }}
                exit={
                  prefersReducedMotion ? { opacity: 0 } : { y: -12, opacity: 0 }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.05 : 0.35,
                  ease: TRANSITION_EASE,
                }}
              >
                {currentSlide.primaryCtaText}
              </motion.span>
            </AnimatePresence>
          </span>
          <svg
            className={styles.primaryCtaArrow}
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

        <button
          type="button"
          onClick={onOpenContact}
          className={styles.secondaryAction}
          aria-haspopup="dialog"
        >
          <span>Talk to an Expert</span>
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
        </button>
      </div>

      {/* 3 Grounded Feature Highlights with Vertical Dividers */}
      <div className={styles.featuresRow}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide.id}
            className={styles.featuresTrack}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { y: 12, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { y: -10, opacity: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.12,
              ease: TRANSITION_EASE,
            }}
          >
            {currentSlide.features.map((feat, idx) => (
              <div
                key={feat.title}
                className={`${styles.featureItem} ${
                  idx > 0 ? styles.featureItemBorder : ''
                }`}
              >
                <div className={styles.featureTitle}>{feat.title}</div>
                <div className={styles.featureSubtitle}>{feat.subtitle}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
