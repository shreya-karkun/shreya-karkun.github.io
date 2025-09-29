'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  hoverShadow?: boolean;
}

export default function HoverCard({ 
  children, 
  className = "", 
  hoverScale = 1.05, 
  hoverRotate = 0,
  hoverShadow = true 
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: hoverScale, 
        rotate: hoverRotate,
        boxShadow: hoverShadow ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : undefined
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
