'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Info
} from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'research' | 'conference' | 'data' | 'equipment';
  tags: string[];
  downloadUrl?: string;
  externalUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'rtmri-setup',
    src: '/images/research/rtmri-setup.jpg',
    alt: 'Real-time MRI setup for speech research',
    title: 'Real-time MRI Research Setup',
    description: 'State-of-the-art real-time MRI equipment used for capturing articulatory movements during speech production. This setup allows for high-resolution imaging of the vocal tract in real-time.',
    category: 'equipment',
    tags: ['rtMRI', 'Speech Production', 'Medical Imaging', 'SPIRE Lab'],
    downloadUrl: '/research/rtmri-setup.pdf'
  },
  {
    id: 'velum-analysis',
    src: '/images/research/velum-analysis.jpg',
    alt: 'Velum dynamics analysis visualization',
    title: 'Velum Dynamics Analysis',
    description: 'Comprehensive analysis of velum movement patterns during VCV production, revealing asymmetric dynamics and co-articulatory effects in nasal contexts.',
    category: 'research',
    tags: ['Velum Dynamics', 'VCV', 'Co-articulation', 'Analysis'],
    downloadUrl: '/research/velum-analysis.pdf'
  },
  {
    id: 'ema-sensors',
    src: '/images/research/ema-sensors.jpg',
    alt: 'Electromagnetic articulography sensors',
    title: 'EMA Sensor Placement',
    description: 'Precise placement of electromagnetic articulography sensors for tracking tongue and jaw movements during speech production studies.',
    category: 'equipment',
    tags: ['EMA', 'Sensors', 'Articulatory Tracking', 'Speech Science'],
    downloadUrl: '/research/ema-sensors.pdf'
  },
  {
    id: 'data-visualization',
    src: '/images/research/data-visualization.jpg',
    alt: 'Research data visualization dashboard',
    title: 'Research Data Dashboard',
    description: 'Interactive dashboard showing real-time analysis of speech production data, including articulatory trajectories and statistical measures.',
    category: 'data',
    tags: ['Data Visualization', 'Dashboard', 'Analysis', 'Statistics'],
    downloadUrl: '/research/data-dashboard.pdf'
  },
  {
    id: 'conference-poster',
    src: '/images/research/conference-poster.jpg',
    alt: 'INTERSPEECH 2025 conference poster',
    title: 'INTERSPEECH 2025 Poster',
    description: 'Conference poster presentation showcasing the latest research findings on velum dynamics and articulatory coordination in speech production.',
    category: 'conference',
    tags: ['INTERSPEECH 2025', 'Poster', 'Conference', 'Presentation'],
    downloadUrl: '/posters/interspeech2025_poster.pdf'
  },
  {
    id: 'articulatory-tracking',
    src: '/images/research/articulatory-tracking.jpg',
    alt: 'Articulatory tracking visualization',
    title: 'Articulatory Movement Tracking',
    description: 'Real-time tracking of articulatory movements showing tongue, jaw, and lip coordination during speech production tasks.',
    category: 'research',
    tags: ['Articulatory Tracking', 'Movement', 'Coordination', 'Real-time'],
    downloadUrl: '/research/articulatory-tracking.pdf'
  }
];

const categoryColors = {
  research: 'bg-blue-500',
  conference: 'bg-green-500',
  data: 'bg-purple-500',
  equipment: 'bg-orange-500',
};

export default function ResearchGalleryLightbox() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setZoom(1);
    setRotation(0);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setZoom(1);
    setRotation(0);
  };

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + galleryItems.length) % galleryItems.length
      : (currentIndex + 1) % galleryItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
    setZoom(1);
    setRotation(0);
  };

  const resetView = () => {
    setZoom(1);
    setRotation(0);
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
          Research Gallery
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Explore research equipment, data visualizations, and conference presentations. Click on any image to view in full detail.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openLightbox(item, index)}
          >
            <div className="card p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                
                {/* Hover actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {selectedItem.description}
                  </p>
                </div>
                
                {/* Controls */}
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={() => setZoom(Math.min(zoom + 0.2, 3))}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setZoom(Math.max(zoom - 0.2, 0.5))}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setRotation(rotation + 90)}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCw className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    onClick={resetView}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset
                  </motion.button>
                  
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative p-6">
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  style={{
                    scale: zoom,
                    rotate: rotation,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                {/* Navigation arrows */}
                <motion.button
                  onClick={() => navigate('prev')}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button
                  onClick={() => navigate('next')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {selectedItem.downloadUrl && (
                      <motion.a
                        href={selectedItem.downloadUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </motion.a>
                    )}
                    
                    {selectedItem.externalUrl && (
                      <motion.a
                        href={selectedItem.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View External
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Image counter */}
                <div className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  {currentIndex + 1} of {galleryItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
