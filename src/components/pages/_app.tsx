import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const navigation = [
  { href: '/workspace', label: 'Workspace' },
  { href: '/sound-library', label: 'Libreria Suoni' },
  { href: '/community', label: 'Community' },
  { href: '/pricing', label: 'Pricing' },
];

export default function App({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${bodyFont.variable} ${displayFont.variable} bg-neutral-50 text-neutral-900`}>
      <a href="#main-content" className="skip-link">
        Salta al contenuto
      </a>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                ACE
              </span>
              ACE-Step
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/signup" className="btn-primary">
                Avvia il tour sonoro
              </Link>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Apri il menu</span>
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

          {isMenuOpen && (
            <div id="mobile-menu" className="border-t border-neutral-200 bg-white/95 px-4 pb-6 pt-4 shadow-lg md:hidden">
              <nav className="flex flex-col gap-4 text-base font-medium">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-neutral-700 transition hover:bg-primary-50 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/signup" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
                  Avvia il tour sonoro
                </Link>
              </nav>
            </div>
          )}
        </header>

        <main id="main-content" className="flex-1">
          <Component {...pageProps} />
        </main>

        <footer className="border-t border-neutral-200/80 bg-white/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-neutral-600 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-primary-700">ACE-Step</p>
              <p className="mt-2 max-w-md text-neutral-600">
                Colonne sonore su misura, strumenti collaborativi e una community che dà ritmo alle tue storie.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-600 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-neutral-600 transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              >
                Contatti
              </Link>
            </div>
            <p className="text-neutral-500">© {new Date().getFullYear()} ACE-Step. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
