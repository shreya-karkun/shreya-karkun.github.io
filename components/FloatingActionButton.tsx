'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronUp, MessageCircle, Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: MessageCircle, label: 'Contact', href: '/contact', color: 'bg-blue-500' },
    { icon: Mail, label: 'Email', href: 'mailto:shreya.karkun@example.com', color: 'bg-green-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/shreya-karkun', color: 'bg-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shreya-karkun', color: 'bg-blue-600' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 min-w-[140px]`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-red-500' : 'bg-indigo-600'} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}