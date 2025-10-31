'use client';

import { ReactNode } from 'react';
import ReadingProgressBar from './ReadingProgressBar';
import PageTransition from './PageTransition';
import GlobalSearch from './GlobalSearch';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <ReadingProgressBar />
      <GlobalSearch />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}
