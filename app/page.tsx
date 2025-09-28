'use client';

import profile from '@/data/profile.json';
import publications from '@/data/publications.json';
import Section from '@/components/Section';
import PaperCard from '@/components/PaperCard';
import StatPills from '@/components/StatPills';
import AnimatedHero from '@/components/AnimatedHero';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const featured = publications[0];

  return (
    <div>
      <AnimatedHero />
      
      <div className="space-y-10 -mt-20 relative z-10">

      {/* Researcher Quote Section */}
      <Section title="💭 Research Philosophy" description="Words that inspire my journey in research.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-6xl opacity-10">
              <Sparkles className="w-16 h-16 text-indigo-400" />
            </div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-10">
              <Heart className="w-12 h-12 text-pink-400" />
            </div>
            
            <div className="relative z-10">
              <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-6 leading-relaxed">
                "The best way to find out if you can trust somebody is to trust them. 
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> Research is about asking the right questions</span>, 
                not just finding the right answers. Every discovery opens new doors to understanding."
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">— Ernest Hemingway</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Adapted for Research Context</p>
                </div>
                <div className="text-2xl">✨</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>


      <Section title="📚 Featured work" description="Recent highlight from my research.">
        <PaperCard p={featured} />
      </Section>

      <Section title="🎯 Focus areas">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { 
              title: '🗣️ Speech Production', 
              text: 'Investigating articulatory coordination and co‑articulation patterns.',
              emoji: '🗣️'
            },
            { 
              title: '🔬 rtMRI & EMA', 
              text: 'Imaging and sensor-based approaches to capture vocal tract dynamics.',
              emoji: '🔬'
            },
            { 
              title: '👃 Velum Dynamics', 
              text: 'Exploring asymmetry and timing in nasal contexts.',
              emoji: '👃'
            }
          ].map((c, i) => (
            <motion.div 
              key={i} 
              className="card p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.emoji}</span>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className="text-sm mt-2 opacity-90">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Personal Touch Section */}
      <Section title="💝 Made with Love" description="A personal note from Shreya">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-8 md:p-12">
            <div className="text-6xl mb-4">💖</div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Made with Love by Shreya
            </h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              Every line of code, every research paper, and every discovery is driven by passion and dedication. 
              This website represents not just my work, but my journey in the fascinating world of speech research.
            </p>
            <div className="flex justify-center gap-4 text-2xl">
              <span>🔬</span>
              <span>💡</span>
              <span>🚀</span>
              <span>✨</span>
              <span>🎯</span>
            </div>
          </div>
        </motion.div>
      </Section>
      </div>
    </div>
  );
}
