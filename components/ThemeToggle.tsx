'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
      <Sun className="hidden dark:block w-5 h-5" />
      <Moon className="block dark:hidden w-5 h-5" />
    </button>
  );
}
