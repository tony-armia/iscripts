import React from 'react';
import Image from 'next/image';
import styles from './SoftwareMockup.module.css';

interface SoftwareMockupProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  urlPath?: string;
  badge?: string;
  statusText?: string;
  variant?: 'browser' | 'card' | 'embedded';
  aspectRatio?: 'video' | 'wide' | 'auto';
  priority?: boolean;
  className?: string;
}

export default function SoftwareMockup({
  imageSrc,
  imageAlt,
  title = 'iScripts Software Platform',
  urlPath = 'iscripts.com/platform/demo',
  badge,
  statusText,
  variant = 'browser',
  aspectRatio = 'wide',
  priority = false,
  className = '',
}: SoftwareMockupProps) {
  return (
    <div
      title={title}
      aria-label={title}
      className={[
        styles.mockup,
        styles[variant],
        styles[aspectRatio],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {variant === 'browser' && (
        <div className={styles.browserHeader}>
          <div className={styles.controls} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.urlBar}>
            <svg
              className={styles.lockIcon}
              width="10"
              height="10"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5.5 7V4.5C5.5 3.11929 6.61929 2 8 2C9.38071 2 10.5 3.11929 10.5 4.5V7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className={styles.urlText}>{urlPath}</span>
          </div>
          <div className={styles.headerRight}>
            {statusText && <span className={styles.statusIndicator}>{statusText}</span>}
          </div>
        </div>
      )}

      <div className={styles.screenWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={720}
            height={460}
            priority={priority}
            className={styles.image}
            quality={90}
          />
        </div>

        {badge && (
          <div className={styles.badgeOverlay}>
            <span className={styles.badgePulse} />
            <span>{badge}</span>
          </div>
        )}
      </div>
    </div>
  );
}
