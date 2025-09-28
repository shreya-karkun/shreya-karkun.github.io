'use client';

import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface TimelineItem {
  org: string;
  role: string;
  start: string;
  end?: string | null;
  current?: boolean;
  location?: string;
  description?: string;
  bullets?: string[];
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-500" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg" />
            
            <motion.article 
              className="card p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{item.org}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {item.start ? formatDate(item.start) : ''} – {item.end ? formatDate(item.end) : 'Present'}
                  </span>
                </div>
              </div>
              
              {item.description && (
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
              )}
              
              {item.bullets && (
                <ul className="space-y-2 mb-4">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
