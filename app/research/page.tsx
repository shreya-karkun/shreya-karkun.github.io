'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Globe, BookOpen, Users, Award } from 'lucide-react';

export default function Research() {
  return (
    <div className="space-y-10">
      <Section title="Research themes" description="Current topics and questions I explore.">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Co‑articulation', 'How articulators influence each other across phonetic contexts.'],
            ['Articulatory Symmetry', 'Quantifying left–right differences in tongue/velum motion.'],
            ['Velum Dynamics', 'Timing and asymmetry during nasal consonant production.']
          ].map(([t, d], i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm mt-2 opacity-90">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PhD Application Strategy Section */}
      <Section title="🎓 PhD Application Strategy" description="My comprehensive approach to PhD applications">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-4xl sm:text-6xl mb-4">🎓</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Strategic PhD Application Plan
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                A comprehensive roadmap for pursuing advanced research in Speech Science and Technology
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Target Programs</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• Speech Science & Technology</li>
                  <li>• Computational Linguistics</li>
                  <li>• Biomedical Engineering</li>
                  <li>• Cognitive Science</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Target Universities</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• MIT (Speech & Hearing)</li>
                  <li>• Stanford (Linguistics)</li>
                  <li>• UC Berkeley (EECS)</li>
                  <li>• Carnegie Mellon (LTI)</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Research Focus</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• Real-time MRI analysis</li>
                  <li>• Articulatory modeling</li>
                  <li>• Speech production dynamics</li>
                  <li>• Machine learning applications</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Networking Strategy</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• Conference presentations</li>
                  <li>• Research collaborations</li>
                  <li>• Academic publications</li>
                  <li>• Professional connections</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Application Strengths</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• 2+ years research experience</li>
                  <li>• Published research papers</li>
                  <li>• Technical expertise (MATLAB, Python)</li>
                  <li>• Strong academic background</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-zinc-800/60 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline</h4>
                </div>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <li>• Q1 2024: Application prep</li>
                  <li>• Q2 2024: GRE/TOEFL exams</li>
                  <li>• Q3 2024: Applications</li>
                  <li>• Q4 2024: Interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
