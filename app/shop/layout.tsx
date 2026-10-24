import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Shop',
  description: 'AI Skills, Prompt-Packs & Engineering-Software für Solaringenieure und Creator.',
  alternates: {
    canonical: '/shop',
  },
  openGraph: { title: 'Digital Shop', description: 'AI Skills, Prompt-Packs & Engineering-Software für Solaringenieure und Creator.', type: 'website', locale: 'de_DE', siteName: 'Aurevia' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
