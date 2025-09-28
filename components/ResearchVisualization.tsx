'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Activity, BarChart3, TrendingUp, Eye, Download } from 'lucide-react';

interface VisualizationItem {
  id: string;
  title: string;
  description: string;
  type: 'brain' | 'data' | 'chart' | 'analysis';
  image: string;
  insights: string[];
}

const visualizations: VisualizationItem[] = [
  {
    id: 'rtmri-brain',
    title: 'Real-time MRI Brain Visualization',
    description: 'Advanced 3D rendering of brain structures during speech production, showing neural pathways and articulatory coordination.',
    type: 'brain',
    image: '/images/research/brain-visualization.jpg',
    insights: [
      'Neural pathways activated during speech',
      'Real-time articulatory coordination',
      'Cross-modal brain activity patterns'
    ]
  },
  {
    id: 'velum-dynamics',
    title: 'Velum Dynamics Analysis',
    description: 'Comprehensive analysis of velum movement patterns during VCV production, revealing asymmetric dynamics.',
    type: 'analysis',
    image: '/images/research/velum-analysis.jpg',
    insights: [
      'Asymmetric velum movement patterns',
      'VCV production dynamics',
      'Nasal context variations'
    ]
  },
  {
    id: 'ema-trajectories',
    title: 'EMA Articulatory Trajectories',
    description: 'Electromagnetic articulography data showing precise tongue and jaw movements during speech production.',
    type: 'data',
    image: '/images/research/ema-trajectories.jpg',
    insights: [
      'Precise articulatory measurements',
      'Tongue shape variability',
      'Co-articulatory effects'
    ]
  },
  {
    id: 'statistical-analysis',
    title: 'Statistical Analysis Dashboard',
    description: 'Comprehensive statistical analysis of speech production data with interactive visualizations.',
    type: 'chart',
    image: '/images/research/statistical-dashboard.jpg',
    insights: [
      'Quantitative analysis results',
      'Statistical significance testing',
      'Data distribution patterns'
    ]
  }
];

const typeIcons = {
  brain: Brain,
  data: Activity,
  chart: BarChart3,
  analysis: TrendingUp
};

const typeColors = {
  brain: 'from-purple-500 to-pink-500',
  data: 'from-blue-500 to-cyan-500',
  chart: 'from-green-500 to-emerald-500',
  analysis: 'from-orange-500 to-red-500'
};

export default function ResearchVisualization() {
  const [selectedViz, setSelectedViz] = useState<VisualizationItem | null>(null);

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
          Research Visualizations
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Interactive visualizations and data analysis from cutting-edge speech production research using rtMRI and EMA technologies.
        </p>
      </motion.div>

      {/* Visualization Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visualizations.map((viz, index) => {
          const IconComponent = typeIcons[viz.type];
          const gradientClass = typeColors[viz.type];
          
          return (
            <motion.div
              key={viz.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedViz(viz)}
            >
              <div className="card p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white/80" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${gradientClass} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                      {viz.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {viz.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                    {viz.description}
                  </p>

                  {/* Key Insights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Key Insights:</h4>
                    <ul className="space-y-1">
                      {viz.insights.slice(0, 2).map((insight, i) => (
                        <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Demo Section */}
      <motion.div
        className="card p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Interactive Research Tools
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
          Explore the research tools and frameworks developed for speech production analysis. 
          These interactive demos showcase the technical depth of the research.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View rtMRI Toolkit
          </motion.button>
          <motion.button
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EMA Visualization Suite
          </motion.button>
        </div>
      </motion.div>

      {/* Modal for detailed view */}
      {selectedViz && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedViz(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${typeColors[selectedViz.type]} text-white`}>
                  {React.createElement(typeIcons[selectedViz.type], { className: "w-5 h-5" })}
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedViz.title}
                </h2>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {selectedViz.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Key Insights:</h3>
                <ul className="space-y-2">
                  {selectedViz.insights.map((insight, i) => (
                    <li key={i} className="text-zinc-600 dark:text-zinc-400 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  View Full Analysis
                </button>
                <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  Download Data
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
