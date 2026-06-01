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
    'px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-105';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:from-orange-600 hover:to-orange-700'
      : 'border-2 border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 transition-colors';

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
