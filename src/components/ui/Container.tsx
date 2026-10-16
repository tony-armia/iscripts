import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  size = 'default',
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  const sizeClass = size === 'narrow' ? styles.narrow : size === 'wide' ? styles.wide : styles.default;
  return (
    <Component className={`${styles.container} ${sizeClass} ${className}`}>
      {children}
    </Component>
  );
}
