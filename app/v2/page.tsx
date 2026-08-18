'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { ExplodedModuleView } from '@/components/ExplodedModuleView';
import { pvlagerImages } from '@/lib/pvlager-media';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Zap,
  Truck,
  Sun,
  BookOpen,
  Maximize2,
  FileCheck,
  ChevronRight,
  Award,
  Layers,
  Cpu,
  Download,
  PhoneCall
} from 'lucide-react';

export default function V2LandingPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Ultra-Curated SOTA Product Catalog (Cool, Real, Authentic)
  const productShowcase = [
    {
      title: 'Zola Pod Sovereign (Doppelcarport)',
      subtitle: 'Aluminium-Tragwerk 100 × 100 mm',
      price: '3.490 €',
      img: pvlagerImages.carportKitDouble,
      tag: 'Bestseller Seesen',
      desc: 'Extrudiertes Struktur-Aluminium mit unsichtbarer Entwässerung. Ausgelegt für Schneelastzone 3 im Harz.'
    },
    {
      title: 'Zola Pod Sovereign (Einzelcarport)',
      subtitle: 'Kompaktklasse für SUV & E-Automobile',
      price: '2.190 €',
      img: pvlagerImages.carportKitSingle,
      desc: 'Architektonischer Unterstand. Witterungsbeständig, wartungsfrei, ohne Pflegeanstrich.'
    },
    {
      title: 'Zola Pod 5 × 3 m Solar-System',
      subtitle: 'Komplettbausatz inklusive Bifazial-Dach',
      price: '2.990 €',
      img: pvlagerImages.carportRostak5x3,
      desc: 'Optimierte Geometrie für maximale Tageslicht-Ausbeute und direkte Lade-Integration.'
    },
    {
      title: 'Trina Vertex S+ 440W Glas-Glas',
      subtitle: 'N-Type i-TOPCon Bifazial-Technologie',
      price: '89 €',
      img: pvlagerImages.bifacialModules,
      desc: 'Transparente Doppelglas-Module. Erzeugen durch Rückseiten-Reflektion bis zu 25 % Mehrertrag.'
    },
    {
      title: 'Aluminium Struktur-Profile 100 × 100 mm',
      subtitle: 'Präzisions-Profile ab Lager',
      price: 'auf Anfrage',
      img: pvlagerImages.aluminumProfiles,
      desc: '30 Jahre Garantie auf Gefüge und Korrosionsbeständigkeit. Direkt lieferbar ab Seesen.'
    },
    {
      title: 'AC/DC Direct Solar-Klimatisierung',
      subtitle: 'Direkt-Wechselstrom / Gleichstrom System',
      price: '899 €',
      img: pvlagerImages.acdcSolarKlima,
      desc: 'Kühlt und heizt direkt mit PV-Strom. Ohne Wandlungsverluste durch Wechselrichter.'
    },
    {
      title: 'Solar-Pergola & Terrassendach',
      subtitle: 'Transparente Beschattung',
      price: '3.250 €',
      img: pvlagerImages.pergolaModern,
      desc: 'Filigrane Integration in bestehende Anwesen. Lichtdurchlässige Solarelemente.'
    },
    {
      title: 'Referenz-Anlage Harzer Vorland',
      subtitle: '100 % Autarkie-System Seesen',
      price: 'Schlüsselfertig',
      img: pvlagerImages.referenceEstate,
      desc: 'Echtzeit-Kopplung von Carport, BYD-Speicher und dynamischem Energiemanagement.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap');
        .font-serif-editorial { font-family: 'Newsreader', Georgia, serif; }
      `}</style>

      {/* Floating Header Navigation */}
      <NavbarV2 />

      <main className="space-y-32 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 1. SOTA APPLE/PORSCHE-GRADE HERO SECTION */}
        <section id="hero" className="relative rounded-3xl overflow-hidden bg-[#070A14] border border-white/10 p-8 sm:p-16 lg:p-20 grid lg:grid-cols-12 gap-12 items-center shadow-2xl">
          {/* Master Visual Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src={pvlagerImages.dronespott2}
              alt="Aurevia Sovereign Estate"
              className="w-full h-full object-cover filter brightness-[0.3] contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060C] via-[#04060C]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060C] via-[#04060C]/60 to-transparent" />
          </div>

          {/* Quiet Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-500/15 via-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="lg:col-span-7 space-y-8 relative z-10">
            {/* Minimalist Micro Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Aurevia Sovereign V2 · RIAL Energy GmbH</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-300 font-mono text-[11px]">Seesen / Harz</span>
            </div>

            {/* Powerful Clean Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Struktur. Licht.{' '}
              <span className="font-serif-editorial italic font-normal text-amber-300">
                Autarkie.
              </span>
            </h1>

            {/* Clean Architectural Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Voll-Aluminium Solar-Carports 100 × 100 mm und bifaziale Glas-Glas Eindeckung. Entwickelt für hohe Schneelasten. Aus unserem Zentrallager in Seesen.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#configurator-v2"
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl transition flex items-center justify-center gap-2 transform hover:scale-[1.02]"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>3D Konfigurator öffnen</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="/dossier"
                className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-emerald-300 font-medium text-xs sm:text-sm border border-emerald-500/30 transition flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>AI Skill Dossier einreichen</span>
              </a>
            </div>

            {/* Key Facts Row */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 text-xs text-slate-300">
              <div>
                <span className="text-amber-400 font-mono font-bold block text-sm">Zone 3</span>
                <span className="text-slate-400 text-[11px]">Schneelast Harz</span>
              </div>
              <div>
                <span className="text-amber-400 font-mono font-bold block text-sm">30 Jahre</span>
                <span className="text-slate-400 text-[11px]">Alu-Profil Garantie</span>
              </div>
              <div>
                <span className="text-amber-400 font-mono font-bold block text-sm">3–5 Tage</span>
                <span className="text-slate-400 text-[11px]">Direktversand Seesen</span>
              </div>
              <div>
                <span className="text-emerald-400 font-mono font-bold block text-sm">0 % MwSt.</span>
                <span className="text-slate-400 text-[11px]">§ 12 (3) UStG</span>
              </div>
            </div>
          </div>

          {/* Right Tactile Spotlight */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-slate-900/80 border border-white/15 p-4 rounded-3xl space-y-4 shadow-2xl backdrop-blur-md">
              <div
                className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(pvlagerImages.carportKitDouble)}
              >
                <img
                  src={pvlagerImages.carportKitDouble}
                  alt="Zola Pod Doppelcarport"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-950/90 border border-white/15 text-amber-300 font-mono text-[10px] font-bold">
                  Zola Pod Sovereign Edition
                </div>
                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 text-amber-400 border border-white/15">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex justify-between items-center px-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Aluminium 100 × 100 mm Doppelcarport</span>
                  <span className="font-semibold text-white">Zola Pod Executive Edition</span>
                </div>
                <span className="text-amber-300 font-mono font-bold text-sm">3.490 €</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SOTA APPLE BENTO GRID SHOWCASE */}
        <section id="bento-v2" className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">Werkstoff & Ingenieurkunst</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Konstruiert ohne Kompromisse.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Verarbeitungsstandards aus dem modernen Industrie-Leichtbau. Langlebig, ästhetisch und völlig wartungsfrei.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#070A14] border border-white/10 hover:border-amber-400/40 transition duration-500 p-8 rounded-3xl space-y-4 md:col-span-2 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Heavy-Duty Struktur-Aluminium 100 × 100 mm</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Extrudierte Aluminium-Tragprofile verziehen sich auch nach Jahrzehnten im Harzer Schnee nicht. Absolut korrosionsfrei, ohne streichbedürftige Pflege und konzipiert für Schneelastzone 3.
              </p>
            </div>

            <div className="bg-[#070A14] border border-white/10 hover:border-emerald-400/40 transition duration-500 p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Trina Vertex S+ 440W Bifazial</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Doppelglas-Technologie mit Lichtdurchlässigkeit. Die Unterseite nutzt reflektiertes Bodenlicht für bis zu 25 % Mehrertrag.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CURATED PRODUCT CATALOG */}
        <section id="showcase-v2" className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">Zentrallager Seesen</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Vorrätige Lagerware & Systeme
            </h2>
            <p className="text-slate-400 text-xs">
              Direkt ab Lager Seesen verfügbar. Versandfertig innerhalb von 24–48 Stunden.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productShowcase.map((item, i) => (
              <div
                key={i}
                className="bg-[#070A14] border border-white/10 hover:border-amber-400/40 rounded-2xl overflow-hidden flex flex-col justify-between group transition duration-500 shadow-lg"
              >
                <div
                  className="relative h-48 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/90 text-amber-300 text-[10px] font-mono font-bold border border-white/10">
                    {item.subtitle}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[9px] text-slate-500 block">Lager Seesen</span>
                      <span className="text-amber-300 font-bold font-mono text-sm">{item.price}</span>
                    </div>
                    <a
                      href="#configurator-v2"
                      className="text-[11px] font-semibold text-slate-200 hover:text-white flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-xl border border-white/15"
                    >
                      <span>Wählen</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ENGINEERING TRANSPARENCY HUB */}
        <section id="engineering" className="bg-[#070A14] border border-white/10 p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">Werkstoff-Vergleich</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Struktur-Aluminium vs. Holz & Stahl</h2>
            <p className="text-slate-400 text-xs">Transparente Gegenüberstellung für Ihr Anwesen im Harz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-400/30 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-mono text-xs font-bold">01</div>
              <h3 className="font-bold text-white text-base">Aluminium 100 × 100 mm</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Dauerhaft wartungsfrei, korrosionsbeständig, formstabil unter hoher Schneelast im Harz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-mono text-xs font-bold">02</div>
              <h3 className="font-bold text-slate-300 text-base">Leimholz & BSH</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Benötigt regelmäßigen Schutzanstrich, nimmt Feuchtigkeit auf und neigt zu Rissbildung.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-mono text-xs font-bold">03</div>
              <h3 className="font-bold text-slate-300 text-base">Verzinkter Stahl</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Hohes Eigengewicht. Korrosionsrisiko an Bohrpunkten und Schnittkanten.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE STICKY DOCK */}
      <MobileStickyBarV2 />

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <img src={activeImage} alt="Vergrößertes Produktbild" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}
    </div>
  );
}
