'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/talks-posters', label: 'Talks' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-950/50 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-dancing-script text-2xl font-semibold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105">Shreya Karkun</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-sm hover:underline">{n.label}</Link>)}
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
