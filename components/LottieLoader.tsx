'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import buildAnimation from '@/images/shreya/build.json';

interface LottieLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
}

export default function LottieLoader({ className = "", size = 'md', delay = 0 }: LottieLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Delay loading to prevent stuttering
    const timer = setTimeout(() => {
      setAnimationData(buildAnimation);
      setIsVisible(true);
      
      // Auto-hide after 5 seconds to prevent infinite loading
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible || !animationData) return null;

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
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
