'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

export default function TypingAnimation({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '', 
  cursor = true,
  loop = false,
  onComplete 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
        onComplete?.();
        
        if (loop) {
          setTimeout(() => {
            setDisplayedText('');
            setCurrentIndex(0);
            setIsComplete(false);
          }, 2000);
        }
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, loop, onComplete]);

  useEffect(() => {
    if (isComplete && cursor) {
      controls.start({
        opacity: [1, 0, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    }
  }, [isComplete, cursor, controls]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-5 bg-current ml-1"
          animate={controls}
          initial={{ opacity: 1 }}
        />
      )}
    </span>
  );
}

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursor?: boolean;
}

export function TypewriterText({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '',
  cursor = true 
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentText.length) {
        // Typing
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        // Finished typing, pause then start deleting
        setIsPaused(true);
      } else if (isDeleting && displayedText.length === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-5 bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedText({ text, className = '', delay = 0, stagger = 0.05 }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * stagger,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
