'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Handle hash routing for GitHub Pages
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (hash.startsWith('/')) {
        // Remove the hash and navigate to the actual route
        window.history.replaceState(null, '', hash);
        // Don't reload, just let Next.js handle the routing
      }
    }
  }, []);

  // For static export or GitHub Pages, never show loading spinner
  const isStaticExport = process.env.STATIC_EXPORT === 'true' || process.env.GH_PAGES === 'true';
  
  // Always render content immediately for static exports
  if (isStaticExport || !isClient) {
    return <div className="min-h-screen">{children}</div>;
  }

  // If we're in production or static export, never show loading
  if (process.env.NODE_ENV === 'production' || isStaticExport) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}