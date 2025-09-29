'use client';

import profile from '@/data/profile.json';
import publications from '@/data/publications.json';
import Section from '@/components/Section';
import PaperCard from '@/components/PaperCard';
import StatPills from '@/components/StatPills';
import AnimatedHero from '@/components/AnimatedHero';
import LottieLoader from '@/components/LottieLoader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const featured = publications[0];

  return (
    <div>
      <AnimatedHero />
      
      <div className="space-y-8 sm:space-y-10 -mt-16 sm:-mt-20 relative z-10">

      {/* Researcher Quote Section */}
      <Section title="💭 Research Philosophy" description="Words that inspire my journey in research.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-4xl sm:text-6xl opacity-10">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-400" />
            </div>
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-3xl sm:text-4xl opacity-10">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400" />
            </div>
            
            <div className="relative z-10">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4" />
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-4 sm:mb-6 leading-relaxed">
                "The best way to find out if you can trust somebody is to trust them. 
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> Research is about asking the right questions</span>, 
                not just finding the right answers. Every discovery opens new doors to understanding."
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">— Ernest Hemingway</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Adapted for Research Context</p>
                </div>
                <div className="text-xl sm:text-2xl">✨</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>


      <Section title="📚 Featured work" description="Recent highlight from my research.">
        <PaperCard p={featured} />
      </Section>

      <Section title="🎯 Focus areas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              className="card p-4 sm:p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Lottie Animation Background */}
              <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                <LottieLoader size="sm" />
              </div>
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="text-xl sm:text-2xl">{c.emoji}</span>
                <h3 className="font-semibold text-sm sm:text-base">{c.title}</h3>
              </div>
              <p className="text-xs sm:text-sm mt-2 opacity-90 leading-relaxed relative z-10">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Personal Touch Section */}
      {/* PhD Exploration Section */}
      <Section title="🎓 Exploring Advanced Research" description="Thoughts on pursuing advanced studies in Speech Science">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="text-4xl sm:text-6xl mb-4">🎓</div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Considering Advanced Research Opportunities
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                Exploring potential PhD opportunities in Speech Science, Computational Linguistics, 
                and Biomedical Engineering to further advance research in real-time MRI and articulatory dynamics.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl mb-2">🔬</div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Research Interests</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">rtMRI, EMA, Co-articulation, Velum Dynamics</p>
              </div>
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Potential Programs</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Speech Science, Computational Linguistics, Biomedical Engineering</p>
              </div>
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Global Perspective</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Open to international PhD programs and collaborations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section title="💝 Made with Love" description="A personal note from Shreya">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">💖</div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4">
              Made with Love by Shreya
            </h3>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6 leading-relaxed">
              Every line of code, every research paper, and every discovery is driven by passion and dedication. 
              This website represents not just my work, but my journey in the fascinating world of speech research.
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 text-xl sm:text-2xl">
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
