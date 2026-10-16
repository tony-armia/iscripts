'use client';

import React from 'react';
import { HeroSlide } from '@/data/heroSlides';
import styles from './HeroSlider.module.css';

interface HeroSliderNavigationProps {
  slides: HeroSlide[];
  currentIndex: number;
  progress: number;
  isPlaying?: boolean;
  onSelectSlide: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onTogglePlay?: () => void;
}

export default function HeroSliderNavigation({
  slides,
  currentIndex,
  progress,
  onSelectSlide,
}: HeroSliderNavigationProps) {
  return (
    <nav
      className={styles.referenceBottomNav}
      aria-label="Platform showcase selector"
    >
      <div className={styles.navPlatformsGrid}>
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => onSelectSlide(index)}
              className={`${styles.navSlot} ${isActive ? styles.navSlotActive : ''} ${
                index > 0 ? styles.navSlotBorder : ''
              }`}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Switch to ${slide.productName}: ${slide.navSubtitle}`}
            >
              <div className={styles.slotHeader}>
                <span className={styles.slotIndex}>{slide.index}</span>
                <span className={styles.slotName}>{slide.productName}</span>
              </div>
              <div className={styles.slotSubtitle}>{slide.navSubtitle}</div>

              {/* Active Indicator Underline / Progress Line */}
              <div className={styles.slotProgressTrack} aria-hidden="true">
                {isActive && (
                  <span
                    className={styles.slotProgressFill}
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
