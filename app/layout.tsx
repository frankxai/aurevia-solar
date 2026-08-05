import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurevia Solar & PV Lager Seesen | RIAL Energy Group',
  description: 'Schlüsselfertige PV-Solar-Architektur & lagernde Photovoltaik-Komponenten direkt ab Zentrallager Seesen (Harz). 0% MwSt. gemäß § 12 (3) UStG.',
  keywords: ['Aurevia Solar', 'PV Lager Seesen', 'Solar Carport', 'Bifaziale PV Module', 'Trina Solar', 'AC DC Klimaanlage', 'RIAL Energy', 'VR Gebäudetechnik'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080C14] text-slate-100 min-h-screen flex flex-col font-sans">
        {/* Editorial Navigation Header */}
        <header className="sticky top-0 z-50 bg-[#080C14]/90 backdrop-blur-md border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-serif font-bold flex items-center justify-center text-xl shadow-lg border border-amber-300/40">
                A
              </div>
              <div>
                <span className="font-serif font-bold text-lg tracking-tight text-white block leading-none">
                  AUREVIA<span className="text-amber-400 font-sans font-light text-sm ml-1.5">SOLAR</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block mt-1">
                  RIAL Energy Group · Zentrallager Seesen
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
              <a href="#vision" className="hover:text-amber-400 transition">Architektur & Carport</a>
              <a href="#rechner" className="hover:text-amber-400 transition">Autarkie-Rechner</a>
              <a href="#lagerbestand" className="hover:text-amber-400 transition">Lagerbestand Seesen</a>
              <a href="#referenzen" className="hover:text-amber-400 transition">Region Harz</a>
              <a href="#diagnose" className="hover:text-amber-400 transition">Readiness Scan</a>
            </nav>

            <a
              href="#diagnose"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition tracking-wide uppercase"
            >
              Build Passport ➔
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-amber-500/20 bg-[#05070B] py-12 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
            <div>
              <p className="font-serif text-sm font-bold text-slate-200">AUREVIA SOLAR · RIAL Energy GmbH</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Zentrallager Seesen (Harz) · Montage & Netzprüfung durch VR Gebäudetechnik
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-400">
              <a href="#impressum" className="hover:text-white">Impressum</a>
              <a href="#datenschutz" className="hover:text-white">Datenschutz</a>
              <a href="#gobd" className="hover:text-amber-400">0% MwSt. § 12 (3) UStG</a>
              <a href="#weclapp" className="hover:text-white">Weclapp ERP Integration</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
