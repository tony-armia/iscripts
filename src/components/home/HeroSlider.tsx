'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Container from '../ui/Container';
import HeroSlideContent from './HeroSlideContent';
import HeroProductVisual from './HeroProductVisual';
import HeroSliderNavigation from './HeroSliderNavigation';
import { HERO_SLIDES } from '@/data/heroSlides';
import styles from './HeroSlider.module.css';

const SLIDE_DURATION = 6500; // 6.5s per slide
const TRANSITION_DURATION = 750; // 750ms transition
const PROGRESS_TICK = 50; // 50ms tick

interface HeroSliderProps {
  onOpenContact: () => void;
}

export default function HeroSlider({ onOpenContact }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pendingIndexRef = useRef<number | null>(null);

  // Preload all product images
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detect tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Detect viewport intersection
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Central Transition Handler
  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) return;

      if (isTransitioning) {
        pendingIndexRef.current = targetIndex;
        return;
      }

      const validIndex = (targetIndex + HERO_SLIDES.length) % HERO_SLIDES.length;

      if (prefersReducedMotion) {
        setCurrentIndex(validIndex);
        setProgress(0);
        return;
      }

      setIsTransitioning(true);
      setCurrentIndex(validIndex);
      setProgress(0);

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        if (pendingIndexRef.current !== null) {
          const nextTarget = pendingIndexRef.current;
          pendingIndexRef.current = null;
          goToSlide(nextTarget);
        }
      }, TRANSITION_DURATION);
    },
    [currentIndex, isTransitioning, prefersReducedMotion]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay progression loop
  const shouldPlay =
    isPlaying &&
    !isHovered &&
    !isFocused &&
    isTabVisible &&
    isInViewport &&
    !prefersReducedMotion;

  useEffect(() => {
    if (!shouldPlay) {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
      return;
    }

    const step = (PROGRESS_TICK / SLIDE_DURATION) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, PROGRESS_TICK);

    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [shouldPlay, nextSlide]);

  // Mobile Touch Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      ref={heroRef}
      className={styles.heroSection}
      aria-label="iScripts Software Platforms Showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Engineering Blueprint Grid */}
      <div className={styles.gridBackground} aria-hidden="true" />

      <Container size="wide">
        {/* Main 2-Column Asymmetric Grid */}
        <div className={styles.heroAsymmetricGrid}>
          {/* Left Column: Counter, Two-Tone Headline, Description, Actions & 3 Features */}
          <div className={styles.editorialColumn}>
            <HeroSlideContent
              currentSlide={currentSlide}
              onOpenContact={onOpenContact}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>

          {/* Right Column: Large Hardware Composition */}
          <div className={styles.stageColumn}>
            <HeroProductVisual
              currentSlide={currentSlide}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>
        </div>

        {/* Bottom Horizontal Product Selector Bar */}
        <div className={styles.bottomNavWrapper}>
          <HeroSliderNavigation
            slides={HERO_SLIDES}
            currentIndex={currentIndex}
            progress={progress}
            isPlaying={isPlaying}
            onSelectSlide={(idx) => {
              goToSlide(idx);
            }}
            onPrev={prevSlide}
            onNext={nextSlide}
            onTogglePlay={() => setIsPlaying((p) => !p)}
          />
        </div>
      </Container>
    </section>
  );
}
