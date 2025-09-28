'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  ExternalLink, 
  Code, 
  Database,
  BarChart3,
  Settings,
  Info,
  X
} from 'lucide-react';

interface ProjectDemo {
  id: string;
  title: string;
  description: string;
  type: 'toolkit' | 'visualization' | 'analysis' | 'framework';
  status: 'active' | 'completed' | 'beta';
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const projectDemos: ProjectDemo[] = [
  {
    id: 'rtmri-toolkit',
    title: 'rtMRI Processing Toolkit',
    description: 'Comprehensive Python-based toolkit for processing and analyzing real-time MRI data in speech production research.',
    type: 'toolkit',
    status: 'active',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'scikit-image'],
    features: [
      'Automated frame extraction from rtMRI videos',
      'Articulatory structure segmentation',
      'Kinematic parameter extraction',
      'Interactive visualization tools'
    ],
    demoUrl: '/demos/rtmri-toolkit',
    githubUrl: '#',
    documentationUrl: '/docs/rtmri-toolkit',
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ema-visualization',
    title: 'EMA Visualization Suite',
    description: 'MATLAB-based visualization suite for analyzing and presenting EMA data with interactive plotting capabilities.',
    type: 'visualization',
    status: 'active',
    technologies: ['MATLAB', 'Statistics Toolbox', 'Signal Processing Toolbox'],
    features: [
      'Interactive trajectory plotting',
      'Statistical analysis of articulatory movements',
      'Customizable visualization parameters',
      'Export capabilities for publications'
    ],
    demoUrl: '/demos/ema-visualization',
    githubUrl: '#',
    documentationUrl: '/docs/ema-visualization',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'coarticulation-analysis',
    title: 'Co-articulation Analysis Framework',
    description: 'A comprehensive framework combining rtMRI and EMA data to study co-articulatory effects in speech production.',
    type: 'framework',
    status: 'completed',
    technologies: ['MATLAB', 'Python', 'Statistical Analysis'],
    features: [
      'Multi-modal data integration',
      'Co-articulatory effect quantification',
      'Statistical modeling',
      'Publication-ready visualizations'
    ],
    demoUrl: '/demos/coarticulation-analysis',
    githubUrl: '#',
    documentationUrl: '/docs/coarticulation-analysis',
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  }
];

const statusColors = {
  active: 'bg-green-500',
  completed: 'bg-blue-500',
  beta: 'bg-yellow-500',
};

const typeIcons = {
  toolkit: Code,
  visualization: BarChart3,
  analysis: Database,
  framework: Settings,
};

export default function InteractiveProjectDemo() {
  const [selectedDemo, setSelectedDemo] = useState<ProjectDemo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const openDemo = (demo: ProjectDemo) => {
    setSelectedDemo(demo);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const closeDemo = () => {
    setSelectedDemo(null);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const renderDemoContent = (demo: ProjectDemo) => {
    switch (demo.type) {
      case 'toolkit':
        return (
          <div className="space-y-6">
            {/* Code Editor Simulation */}
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-zinc-400 ml-4">rtmri_processor.py</span>
              </div>
              <div className="text-green-400">
                <div>import numpy as np</div>
                <div>import cv2</div>
                <div>from scipy import ndimage</div>
                <div className="mt-4 text-blue-400">class RTMRIProcessor:</div>
                <div className="ml-4 text-yellow-400">def __init__(self, video_path):</div>
                <div className="ml-8 text-white">self.video_path = video_path</div>
                <div className="ml-8 text-white">self.frames = self.extract_frames()</div>
                <div className="ml-4 text-yellow-400">def extract_frames(self):</div>
                <div className="ml-8 text-white"># Extract frames from rtMRI video</div>
                <div className="ml-8 text-white">return processed_frames</div>
              </div>
            </div>

            {/* Processing Steps */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { step: 1, title: 'Frame Extraction', status: currentStep >= 0 },
                { step: 2, title: 'Segmentation', status: currentStep >= 1 },
                { step: 3, title: 'Analysis', status: currentStep >= 2 },
                { step: 4, title: 'Visualization', status: currentStep >= 3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    item.status 
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                  animate={{ scale: item.status ? 1.05 : 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      item.status ? 'bg-green-500' : 'bg-zinc-300'
                    }`} />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'visualization':
        return (
          <div className="space-y-6">
            {/* Chart Simulation */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-6">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Interactive EMA Trajectory Plot
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
                    Click and drag to explore data points
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Tongue Tip', color: 'bg-blue-500' },
                { label: 'Tongue Body', color: 'bg-green-500' },
                { label: 'Jaw', color: 'bg-purple-500' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'framework':
        return (
          <div className="space-y-6">
            {/* Framework Architecture */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
              <h4 className="font-semibold mb-4">Framework Architecture</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Data Input', status: true },
                  { name: 'Preprocessing', status: currentStep >= 1 },
                  { name: 'Analysis', status: currentStep >= 2 },
                  { name: 'Visualization', status: currentStep >= 3 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 rounded-lg text-center ${
                      item.status 
                        ? 'bg-white dark:bg-zinc-800 shadow-md' 
                        : 'bg-zinc-100 dark:bg-zinc-700'
                    }`}
                    animate={{ scale: item.status ? 1.05 : 1 }}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Flow */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-sm font-medium">rtMRI Data</span>
                </div>
                <div className="text-2xl">→</div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <span className="text-sm font-medium">EMA Data</span>
                </div>
                <div className="text-2xl">→</div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <span className="text-sm font-medium">Analysis</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
          Interactive Project Demos
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Explore the research tools and frameworks I've developed. Click on any project to see an interactive demonstration.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDemos.map((demo, index) => {
          const IconComponent = demo.icon;
          
          return (
            <motion.div
              key={demo.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openDemo(demo)}
            >
              <div className="card p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${demo.color} text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className="w-8 h-8" />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[demo.status]}`}>
                      {demo.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                  <p className="text-white/90 text-sm">{demo.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {demo.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {demo.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                          +{demo.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {demo.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo Button */}
                  <motion.button
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDemo}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {selectedDemo.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {selectedDemo.description}
                  </p>
                </div>
                
                {/* Controls */}
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </motion.button>
                  
                  <motion.button
                    onClick={resetDemo}
                    className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </motion.button>
                  
                  <button
                    onClick={closeDemo}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Demo Content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                {renderDemoContent(selectedDemo)}
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedDemo.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {selectedDemo.githubUrl && (
                      <motion.a
                        href={selectedDemo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                    
                    {selectedDemo.documentationUrl && (
                      <motion.a
                        href={selectedDemo.documentationUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Info className="w-4 h-4" />
                        Documentation
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
