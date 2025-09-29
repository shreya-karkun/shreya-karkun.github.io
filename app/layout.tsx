import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Inter, Spectral, Dancing_Script } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientWrapper from '@/components/ClientWrapper';
import ProgressIndicator from '@/components/ProgressIndicator';
import FloatingActionButton from '@/components/FloatingActionButton';
import ParticleBackground from '@/components/ParticleBackground';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spectral = Spectral({ 
  subsets: ['latin'],
  variable: '--font-spectral',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Shreya Karkun • Research Portfolio',
  description: 'Researcher in speech production and medical imaging (rtMRI, EMA).'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spectral.variable} ${dancingScript.variable} min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 gradient`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientWrapper>
            <ProgressIndicator />
            <ParticleBackground />
            <Header />
            <main className="container py-6 sm:py-8">{children}</main>
            <Footer />
            <FloatingActionButton />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
