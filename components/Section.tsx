'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, description, children, className = "", id }: SectionProps) {
  return (
    <motion.section 
      id={id}
      className={`my-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 font-serif">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>
      <div className="grid gap-6">{children}</div>
    </motion.section>
  );
}
