'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Interactive3DVisualization from './Interactive3DVisualization';
import { Brain, Activity, BarChart3, TrendingUp } from 'lucide-react';

interface VisualizationData {
  id: string;
  title: string;
  description: string;
  type: 'brain' | 'trajectory' | 'heatmap' | 'scatter';
  data: Array<{
    x: number;
    y: number;
    z: number;
    value: number;
    label: string;
    color: string;
  }>;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const visualizations: VisualizationData[] = [
  {
    id: 'brain-activity',
    title: 'Brain Activity During Speech',
    description: 'Real-time neural activity patterns during speech production, showing activation in motor and language areas.',
    type: 'brain',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    data: [
      { x: -0.5, y: 0.3, z: 0.2, value: 0.8, label: 'Motor Cortex', color: '#8b5cf6' },
      { x: 0.2, y: -0.4, z: 0.1, value: 0.9, label: 'Broca\'s Area', color: '#ec4899' },
      { x: 0.1, y: 0.1, z: -0.3, value: 0.7, label: 'Wernicke\'s Area', color: '#06b6d4' },
      { x: -0.3, y: -0.2, z: 0.4, value: 0.6, label: 'Cerebellum', color: '#10b981' },
      { x: 0.4, y: 0.2, z: 0.1, value: 0.8, label: 'Prefrontal Cortex', color: '#f59e0b' },
    ]
  },
  {
    id: 'articulatory-trajectory',
    title: 'Articulatory Trajectories',
    description: '3D trajectories of tongue and jaw movements during VCV production, showing co-articulatory effects.',
    type: 'trajectory',
    icon: Activity,
    color: 'from-blue-500 to-cyan-500',
    data: [
      { x: 0, y: 0, z: 0, value: 1.0, label: 'Start Position', color: '#3b82f6' },
      { x: 0.2, y: 0.1, z: 0.1, value: 0.9, label: 'Vowel Onset', color: '#06b6d4' },
      { x: 0.4, y: 0.3, z: 0.2, value: 0.8, label: 'Consonant Transition', color: '#8b5cf6' },
      { x: 0.6, y: 0.2, z: 0.1, value: 0.9, label: 'Vowel Target', color: '#10b981' },
      { x: 0.8, y: 0.1, z: 0, value: 1.0, label: 'End Position', color: '#f59e0b' },
    ]
  },
  {
    id: 'velum-heatmap',
    title: 'Velum Dynamics Heatmap',
    description: 'Heatmap visualization of velum movement patterns during nasal contexts, revealing asymmetric dynamics.',
    type: 'heatmap',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    data: [
      { x: 2, y: 3, z: 0, value: 0.9, label: 'High Activation', color: '#10b981' },
      { x: 4, y: 1, z: 0, value: 0.7, label: 'Medium Activation', color: '#06b6d4' },
      { x: 6, y: 5, z: 0, value: 0.8, label: 'Peak Activity', color: '#8b5cf6' },
      { x: 1, y: 6, z: 0, value: 0.6, label: 'Low Activation', color: '#f59e0b' },
      { x: 5, y: 2, z: 0, value: 0.5, label: 'Baseline', color: '#6b7280' },
    ]
  },
  {
    id: 'ema-scatter',
    title: 'EMA Sensor Data',
    description: 'Scatter plot of electromagnetic articulography data showing tongue and jaw positions during speech.',
    type: 'scatter',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    data: [
      { x: -0.3, y: 0.2, z: 0.1, value: 0.8, label: 'Tongue Tip', color: '#f97316' },
      { x: 0.1, y: 0.4, z: -0.2, value: 0.9, label: 'Tongue Body', color: '#ef4444' },
      { x: 0.3, y: -0.1, z: 0.3, value: 0.7, label: 'Tongue Back', color: '#dc2626' },
      { x: -0.1, y: -0.3, z: 0.2, value: 0.6, label: 'Jaw', color: '#b91c1c' },
      { x: 0.2, y: 0.1, z: -0.1, value: 0.8, label: 'Lips', color: '#991b1b' },
    ]
  }
];

export default function Research3DGallery() {
  const [selectedViz, setSelectedViz] = useState<string | null>(null);

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
          Interactive 3D Research Visualizations
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Explore research data through interactive 3D visualizations. Click and drag to rotate, zoom to explore details, 
          and click on data points for more information.
        </p>
      </motion.div>

      {/* Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visualizations.map((viz, index) => {
          const IconComponent = viz.icon;
          
          return (
            <motion.div
              key={viz.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedViz(selectedViz === viz.id ? null : viz.id)}
            >
              <div className="card p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${viz.color} text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{viz.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{viz.description}</p>
                </div>

                {/* Preview */}
                <div className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-16 h-16 text-zinc-400" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {viz.data.length} data points
                    </span>
                    <motion.button
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedViz === viz.id ? 'Hide' : 'Explore'}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Expanded 3D Visualization */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedViz === viz.id ? 'auto' : 0, 
                  opacity: selectedViz === viz.id ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {selectedViz === viz.id && (
                  <div className="mt-4">
                    <Interactive3DVisualization
                      title={viz.title}
                      description={viz.description}
                      type={viz.type}
                      data={viz.data}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Instructions */}
      <motion.div
        className="card p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          How to Interact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <span>Move mouse to rotate 3D view</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <span>Click data points for details</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <span>Use controls to zoom and play</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
