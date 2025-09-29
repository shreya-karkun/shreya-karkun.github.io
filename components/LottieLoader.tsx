'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import buildAnimation from '@/images/shreya/build.json';

interface LottieLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function LottieLoader({ className = "", size = 'md' }: LottieLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 3 seconds to prevent infinite loading
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <Lottie
          animationData={buildAnimation}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
