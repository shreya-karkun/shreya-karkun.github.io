'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: 'presentation' | 'poster' | 'conference' | 'research';
}

const conferenceImages: GalleryImage[] = [
  {
    src: '/images/shreya/poster1.jpg',
    alt: 'Shreya presenting research at INTERSPEECH 2025',
    title: 'INTERSPEECH 2025 Presentation',
    description: 'Presenting "A real-time MRI study on asymmetry in velum dynamics during VCV production with nasal sounds" at INTERSPEECH 2025 in Rotterdam, Netherlands.',
    type: 'presentation'
  },
  {
    src: '/images/shreya/poster2.jpg',
    alt: 'Shreya explaining research to conference attendees',
    title: 'Research Discussion',
    description: 'Engaging with conference attendees and explaining the methodology and findings of the velum dynamics research.',
    type: 'presentation'
  },
  {
    src: '/images/shreya/poster3.jpg',
    alt: 'Shreya at INTERSPEECH 2025 conference',
    title: 'INTERSPEECH 2025 Conference',
    description: 'Active participation at INTERSPEECH 2025, one of the premier conferences in speech and language processing.',
    type: 'conference'
  }
];

export default function ConferenceGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
          Conference Presentations
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Showcasing research at premier conferences and engaging with the global speech science community.
        </p>
      </motion.div>

      {/* Conference Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { icon: Calendar, label: 'INTERSPEECH 2025', value: 'Rotterdam, Netherlands' },
          { icon: MapPin, label: 'Venue', value: 'World Trade Center' },
          { icon: Users, label: 'Attendees', value: '2,000+ Researchers' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="card p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{stat.label}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conferenceImages.map((image, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="card p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs opacity-90 line-clamp-2">{image.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{image.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{image.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                    {image.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
