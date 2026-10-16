import React from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
  actions?: React.ReactNode;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
  actions,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={[
        styles.wrapper,
        isCenter ? styles.center : styles.left,
        isDark ? styles.dark : styles.light,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.content}>
        {label && <div className={styles.label}>{label}</div>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
