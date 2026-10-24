import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware Atelier',
  description: 'Aurevia Hardware Atelier · Seesen / Harz. Ingenieurkunst & Hardware-Präzision.',
  alternates: {
    canonical: '/atelier',
  },
  openGraph: { title: 'Hardware Atelier', description: 'Aurevia Hardware Atelier · Seesen / Harz. Ingenieurkunst & Hardware-Präzision.', type: 'website', locale: 'de_DE', siteName: 'Aurevia' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
