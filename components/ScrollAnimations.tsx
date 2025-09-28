'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 50,
  duration = 0.6 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxScroll({ children, className = '', speed = 0.5 }: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerAnimationProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function StaggerAnimation({ 
  children, 
  className = '', 
  staggerDelay = 0.1, 
  direction = 'up',
  distance = 30 
}: StaggerAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              ...directionMap[direction] 
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: 'easeOut',
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function RevealAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionMap = {
    up: { clipPath: 'inset(100% 0 0 0)' },
    down: { clipPath: 'inset(0 0 100% 0)' },
    left: { clipPath: 'inset(0 100% 0 0)' },
    right: { clipPath: 'inset(0 0 0 100%)' },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={directionMap[direction]}
      animate={isInView ? { clipPath: 'inset(0 0 0 0)' } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
}

interface CounterAnimationProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CounterAnimation({ 
  end, 
  duration = 2, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: CounterAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {end}
          </motion.span>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}
