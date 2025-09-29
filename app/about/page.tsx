'use client';

import profile from '@/data/profile.json';
import experience from '@/data/experience.json';
import education from '@/data/education.json';
import Timeline from '@/components/Timeline';
import Section from '@/components/Section';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import AnimatedSkillTags from '@/components/AnimatedSkillTags';
import LottieLoader from '@/components/LottieLoader';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="space-y-10">
      <section className="card p-6 sm:p-8 relative overflow-hidden">
        {/* Lottie Animation Background */}
        <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
          <LottieLoader size="sm" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About Me</h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6 max-w-3xl leading-relaxed">
              {profile.summary}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Current Role:</strong> {profile.role}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Location:</strong> {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Research Focus:</strong> Speech Production, rtMRI, EMA
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main image container */}
              <div className="relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/shreya/hero.jpg"
                    alt="Shreya Karkun - Research Associate at SPIRE Lab, IISc"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <InteractiveTimeline />
      
      <Section title="Skills & Expertise">
        <AnimatedSkillTags />
      </Section>
      
      <Section title="Experience">
        <Timeline items={experience as any[]} />
      </Section>
      <Section title="Education">
        <ul className="grid sm:grid-cols-2 gap-4">
          {(education as any[]).map((e, i) => (
            <li key={i} className="card p-4 sm:p-6">
              <div className="font-semibold text-sm sm:text-base">{e.degree} – {e.school}</div>
              <div className="text-xs sm:text-sm opacity-80 mt-1">{e.field} • {e.year}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
