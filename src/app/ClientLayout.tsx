'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react';

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
    </ThemeProvider>
  );
};
