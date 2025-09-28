'use client';

import PageTransition from './PageTransition';
import FloatingActionButton from './FloatingActionButton';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <PageTransition>
      {children}
      <FloatingActionButton />
    </PageTransition>
  );
}
