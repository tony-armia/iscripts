import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string;
    isExternal?: boolean;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    withArrow ? styles.withArrow : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const arrowIcon = withArrow ? (
    <svg
      className={styles.arrow}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
  ) : null;

  if ('href' in props && props.href) {
    const { href, isExternal, ...anchorProps } = props as ButtonAsLinkProps;
    if (isExternal || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          <span>{children}</span>
          {arrowIcon}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClasses} {...anchorProps}>
        <span>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button className={buttonClasses} {...buttonProps}>
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
}
