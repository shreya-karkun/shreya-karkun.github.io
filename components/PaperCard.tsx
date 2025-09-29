'use client';

import { ExternalLink, Trophy, Calendar, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

interface PaperCardProps {
  p: {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    location?: string;
    abstract?: string;
    pdf?: string;
    poster?: string;
    links?: {
      doi?: string;
      slides?: string;
      video?: string;
    };
    tags?: string[];
    awards?: string[];
    featured?: boolean;
  };
}

export default function PaperCard({ p }: PaperCardProps) {
  return (
    <motion.article 
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
              {p.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{p.authors.join(', ')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{p.year}</span>
              </div>
            </div>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {p.venue} {p.location && `• ${p.location}`}
            </p>
          </div>
          {p.awards?.length ? (
            <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full self-start">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">{p.awards[0]}</span>
            </div>
          ) : null}
        </div>
      </div>
      
      {p.abstract && (
        <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300 mb-4">
          {p.abstract}
        </p>
      )}
      
      {p.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex flex-wrap gap-3 text-sm">
        {p.pdf && (
          <a 
            href={p.pdf} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {p.poster && (
          <a 
            href={p.poster} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poster <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {p.links?.slides && (
          <a 
            href={p.links.slides} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {p.links?.doi && (
          <a 
            href={p.links.doi} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
