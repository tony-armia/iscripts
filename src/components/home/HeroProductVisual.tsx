'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSlide } from '@/data/heroSlides';
import styles from './HeroSlider.module.css';

interface HeroProductVisualProps {
  currentSlide: HeroSlide;
  prefersReducedMotion?: boolean;
}

const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroProductVisual({
  currentSlide,
  prefersReducedMotion = false,
}: HeroProductVisualProps) {
  return (
    <div className={styles.productVisualStage}>
      {/* Subtle Studio Horizon & Ambient Foundation */}
      <div className={styles.stageHorizon} aria-hidden="true" />

      {/* Persistent Living Canvas: Layered Visual Transformation */}
      <div className={styles.stageCanvas}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide.id}
            className={styles.visualCanvasLayer}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.988, x: 16 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.988, x: -14 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.05 : 0.72,
              ease: TRANSITION_EASE,
            }}
          >
            <div className={styles.mockupContainer}>
              <Image
                src={currentSlide.image}
                alt={currentSlide.altText}
                width={780}
                height={636}
                priority={currentSlide.number <= 2}
                className={styles.deviceImage}
                sizes="(max-width: 900px) 100vw, (max-width: 1440px) 58vw, 780px"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
