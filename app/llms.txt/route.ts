import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://aurevia-solar.vercel.app';

  const content = `# Aurevia Solar - Public Routes
This site contains information about Aurevia, a solar energy consulting service in the Harz region.

- [Home](${baseUrl}/)
- [Hardware Atelier](${baseUrl}/atelier)
- [Digital Shop](${baseUrl}/shop)
- [Proof & Verifications](${baseUrl}/proof)
- [Autarkie](${baseUrl}/autarkie)
- [Konzept](${baseUrl}/konzept)
- [Realisierung](${baseUrl}/realisierung)
- [Referenzen](${baseUrl}/referenzen)
- [Herkunft](${baseUrl}/herkunft)
- [Analyse](${baseUrl}/analyse)
- [Impressum](${baseUrl}/impressum)
- [Datenschutz](${baseUrl}/datenschutz)
- [AGB](${baseUrl}/agb)
- [Widerruf](${baseUrl}/widerruf)
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
