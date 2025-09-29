'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay particle loading to prevent stuttering
    const timer = setTimeout(() => {
      const colors = [
        'bg-indigo-400',
        'bg-purple-400', 
        'bg-cyan-400',
        'bg-pink-400',
        'bg-yellow-400'
      ];

      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) { // Reduced particle count
        newParticles.push({
          id: i,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          size: Math.random() * 3 + 1.5, // Smaller particles
          speedX: (Math.random() - 0.5) * 0.3, // Slower movement
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1, // Lower opacity
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(newParticles);
      setIsLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.speedX * 50, 0], // Reduced movement range
            y: [0, particle.speedY * 50, 0],
            opacity: [particle.opacity, particle.opacity * 0.2, particle.opacity],
          }}
          transition={{
            duration: 15 + Math.random() * 10, // Slower animation
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
