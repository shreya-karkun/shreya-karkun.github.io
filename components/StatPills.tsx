'use client';

import { motion } from 'framer-motion';

interface StatPillItem {
  label: string;
  value?: string | number;
  icon?: React.ReactNode;
}

interface StatPillsProps {
  items: StatPillItem[];
  className?: string;
}

export default function StatPills({ items, className = "" }: StatPillsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 border border-indigo-200/50 dark:border-indigo-800/40 hover:shadow-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          {item.icon && <span className="text-indigo-600 dark:text-indigo-400">{item.icon}</span>}
          <span className="text-indigo-700 dark:text-indigo-300">{item.label}</span>
          {item.value && (
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">{item.value}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
