'use client';

import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 rounded-lg font-medium scale-down-on-hover inline-flex items-center justify-center gap-2';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-coral to-amber text-white hover:shadow-lg'
      : 'border-2 border-coral text-coral dark:text-amber dark:border-amber hover:bg-coral hover:text-white dark:hover:bg-amber dark:hover:text-warm-gray-900';

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
