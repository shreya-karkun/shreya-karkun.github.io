export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} Shreya Karkun 🔬</p>
        <p className="opacity-80 flex items-center gap-2">
          Made with 💖 by Shreya 
          <span className="text-lg">✨</span>
        </p>
      </div>
    </footer>
  );
}
