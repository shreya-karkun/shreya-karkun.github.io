'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  details?: string[];
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 'current',
    title: 'Project Associate',
    organization: 'SPIRE Lab, IISc',
    location: 'Bengaluru, India',
    date: '2023 - Present',
    description: 'Leading research in speech production using real-time MRI and EMA technologies.',
    type: 'experience',
    icon: Briefcase,
    color: 'bg-indigo-500',
    details: [
      'Conducting real-time MRI studies on velum dynamics',
      'Analyzing articulatory coordination patterns',
      'Developing processing tools for speech research',
      'Collaborating with international research teams'
    ],
    skills: ['rtMRI', 'EMA', 'MATLAB', 'Python', 'Speech Analysis']
  },
  {
    id: 'interspeech2025',
    title: 'INTERSPEECH 2025 Nomination',
    organization: 'Best Student Paper Award',
    location: 'Rotterdam, Netherlands',
    date: 'August 2025',
    description: 'Nominated for Best Student Paper Award for research on velum dynamics.',
    type: 'achievement',
    icon: Award,
    color: 'bg-yellow-500',
    details: [
      'Paper: "A real-time MRI study on asymmetry in velum dynamics during VCV production with nasal sounds"',
      'International recognition for research excellence',
      'Presentation at premier speech science conference'
    ],
    skills: ['Research', 'Presentation', 'Academic Writing']
  },
  {
    id: 'education',
    title: 'Bachelor of Technology',
    organization: 'Indian Institute of Science (IISc)',
    location: 'Bengaluru, India',
    date: '2019 - 2023',
    description: 'Specialized in Electrical Engineering with focus on signal processing and speech science.',
    type: 'education',
    icon: GraduationCap,
    color: 'bg-green-500',
    details: [
      'Electrical Engineering specialization',
      'Signal processing and speech science focus',
      'Research-oriented curriculum',
      'Strong foundation in mathematics and physics'
    ],
    skills: ['Signal Processing', 'Mathematics', 'Physics', 'Engineering']
  },
  {
    id: 'research-start',
    title: 'Research Journey Begins',
    organization: 'SPIRE Lab',
    location: 'Bengaluru, India',
    date: '2022',
    description: 'Started research career focusing on speech production and medical imaging.',
    type: 'experience',
    icon: BookOpen,
    color: 'bg-purple-500',
    details: [
      'Joined SPIRE Lab as research intern',
      'Learned rtMRI and EMA technologies',
      'Developed interest in articulatory phonetics',
      'Began working on co-articulation studies'
    ],
    skills: ['Research', 'rtMRI', 'EMA', 'Phonetics']
  }
];

const typeColors = {
  education: 'from-green-500 to-emerald-500',
  experience: 'from-indigo-500 to-purple-500',
  achievement: 'from-yellow-500 to-orange-500',
};

export default function InteractiveTimeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Research Journey
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          A timeline of my academic and research achievements, showcasing the evolution of my work in speech production and medical imaging.
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={ref} className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-green-500"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredItem === item.id;
            const isSelected = selectedItem?.id === item.id;
            
            return (
              <motion.div
                key={item.id}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`relative z-10 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(isSelected ? null : item)}
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                  
                  {/* Pulse effect */}
                  <motion.div
                    className={`absolute inset-0 ${item.color} rounded-full`}
                    animate={isHovered ? { scale: 1.5, opacity: 0 } : {}}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`flex-1 p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800' 
                      : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg'
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedItem(isSelected ? null : item)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {item.organization}
                      </p>
                    </div>
                    <div className="text-right text-sm text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {item.description}
                  </p>

                  {/* Skills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expandable details */}
                  <motion.div
                    initial={false}
                    animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {item.details && (
                      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Timeline Legend */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2">
            <div className={`w-4 h-4 bg-gradient-to-r ${color} rounded-full`} />
            <span className="text-sm text-zinc-600 dark:text-zinc-400 capitalize">
              {type}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
