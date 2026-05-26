'use client';

import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Container } from './Container';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-warm-gray-800 shadow-sm dark:shadow-md border-b border-warm-gray-100 dark:border-warm-gray-700">
      <Container className="flex items-center justify-between h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">
          Portfolio
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-warm-gray-600 dark:text-warm-gray-300 hover:text-coral dark:hover:text-amber transition-colors"
          >
            Contact
          </button>
        </div>

        <ThemeToggle />
      </Container>
    </nav>
  );
};
