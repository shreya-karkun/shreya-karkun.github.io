'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    summary: string;
    description?: string;
    year: number;
    status: string;
    tags: string[];
    technologies?: string[];
    link?: string;
    github?: string;
    features?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article 
      className="card p-6 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
            {project.summary}
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Active' 
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {project.description && (
        <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300 mb-4">
          {project.description}
        </p>
      )}
      
      {project.features && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200 dark:border-indigo-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex gap-3 text-sm">
        {project.link && (
          <a 
            href={project.link} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
