import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aurevia-solar.vercel.app'),
  title: {
    default: 'Aurevia — Energieautarkie für Anwesen im Harz',
    template: '%s · Aurevia',
  },
  description:
    'Objektbezogene Beratung für die Energieautonomie von Wohnhäusern, Höfen und privaten Anwesen in Niedersachsen und im Harz.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Aurevia',
  },
  robots: { index: true, follow: true },
};

const legalNav = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
  { href: '/widerruf', label: 'Widerrufsbelehrung' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:bg-surface focus:px-4 focus:py-3 focus:text-ink"
        >
          Zum Inhalt springen
        </a>

        <SiteHeader />

        <main id="inhalt" className="flex-1">
          {children}
        </main>

        <footer className="au-rule mt-section">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
              <div className="max-w-sm">
                <p className="font-display text-lg font-semibold tracking-tight">Aurevia</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  Objektbezogene Analyse und Konzeptentwicklung für Energieautonomie. Aurevia ist
                  eine Beratungsmarke der RIAL Energy GmbH, Seesen (Harz).
                </p>
              </div>

              <nav aria-label="Rechtliches" className="flex flex-col gap-3">
                <p className="au-label">Rechtliches</p>
                {legalNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink-2 underline-offset-4 transition-colors duration-micro ease-au hover:text-ink hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <p className="au-rule mt-10 pt-6 text-xs text-ink-3">
              © {new Date().getFullYear()} Aurevia. Eine Marke der RIAL Energy GmbH.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
