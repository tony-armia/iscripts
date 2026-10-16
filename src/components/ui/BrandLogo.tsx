import React from 'react';
import Image from 'next/image';
import logoWhite from '@/assets/iscripts-logo-wyt.webp';
import logoDark from '@/assets/iscripts-logo-dark.webp';
import styles from './BrandLogo.module.css';

interface BrandLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  height?: number;
}

export default function BrandLogo({
  theme = 'light',
  className = '',
}: BrandLogoProps) {
  const isDark = theme === 'dark';
  const logoAsset = isDark ? logoWhite : logoDark;

  return (
    <div className={`${styles.logoContainer} ${isDark ? styles.dark : styles.light} ${className}`}>
      <Image
        src={logoAsset}
        alt="iScripts.com — Business model in a script"
        priority
        className={styles.logoImage}
      />
    </div>
  );
}

