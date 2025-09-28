'use client';

import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'award' | 'achievement' | 'nomination';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  icon,
  className = "" 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300";
  
  const variantClasses = {
    default: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
    award: "bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-lg",
    achievement: "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-lg",
    nomination: "bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 shadow-lg"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const defaultIcons = {
    award: <Award className="w-4 h-4" />,
    achievement: <Star className="w-4 h-4" />,
    nomination: <Trophy className="w-4 h-4" />,
    default: null
  };

  const selectedIcon = icon || defaultIcons[variant];

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {selectedIcon && <span className="animate-pulse">{selectedIcon}</span>}
      <span>{children}</span>
    </motion.div>
  );
}
