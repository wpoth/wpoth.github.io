'use client';

import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
    </>
  );
}