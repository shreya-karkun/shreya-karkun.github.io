import Link from 'next/link';
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
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-950/50 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-dancing-script text-2xl font-semibold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105">Shreya Karkun</Link>
        <nav className="hidden md:flex gap-4">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-sm hover:underline">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
