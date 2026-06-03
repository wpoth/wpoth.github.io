'use client';

import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'cursor-pointer px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-105';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
      : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed';

  if (href && !disabled) {
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
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
