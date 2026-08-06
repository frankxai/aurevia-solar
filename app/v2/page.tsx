'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { CarportConfiguratorV2 } from '@/components/CarportConfiguratorV2';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';
import { SellerCopilotModal } from '@/components/SellerCopilotModal';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { pvlagerImages } from '@/lib/pvlager-media';
import {
  Award,
  ShieldCheck,
  Sparkles,
  Sliders,
  ArrowRight,
  Zap,
  Building2,
  Car,
  Thermometer,
  Layers,
  Truck,
  Sun,
  BookOpen,
  Maximize2,
  FileCheck,
  Shield,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

export default function V2LandingPage() {
  // Modal states
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Showcase Active Tab
  const [showcaseTab, setShowcaseTab] = useState<'estate' | 'carport' | 'terrace' | 'klima' | 'digitaltwin' | 'bifacial'>('estate');

  // Product Showcase Items
  const productShowcase = [
    {
      title: "Solar-Carport Zola Pod (Doppel-Carport 2 PKW)",
      category: "Executive Bausatz",
      price: "3.490 €",
      img: "/images/luxury-carport.jpg",
      desc: "Voll-Aluminium Konstruktion 100x100mm mit Smart Rain Channeling, statisch geprüft für Schneelastzone 3 im Harz."
    },
    {
      title: "Einzel-Carport Zola Pod (1 PKW)",
      category: "Executive Bausatz",
      price: "2.190 €",
      img: "/images/estate-mansion.jpg",
      desc: "Kompakte Anwesens-Lösung für SUV & Elektrofahrzeuge. Korrosionsfreies Aluminium-Tragwerk."
    },
    {
      title: "Trina Vertex S+ Bifazial Glas-Glas 440W",
      category: "PV Module",
      price: "89 €",
      img: "/images/bifacial-module.jpg",
      desc: "Lichtdurchlässiges Doppelglas-Modul mit N-Type i-TOPCon Technologie & 25% Mehrertrag durch Rückseiten-Reflektion."
    },
    {
      title: "Heavy-Duty Aluminium-Profile 100x100mm",
      category: "Unterkonstruktion",
      price: "auf Anfrage",
      img: "/images/aluminum-joint.jpg",
      desc: "Gezogene Aluminium-Tragprofile für Carports, Terrassen & PV-Überdachungen. 30 Jahre Garantie."
    },
    {
      title: "AC/DC Direct-PV Solar Klimaanlage",
      category: "Solar Klima",
      price: "899 €",
      img: "/images/direct-pv-klima.jpg",
      desc: "Direkt-PV betriebenes Klimasystem. Speist Solarstrom ohne Wechselrichter-Verluste für Kühlen & Heizen ein."
    },
    {
      title: "Panasonic Aquarea T-CAP 9kW Wärmepumpe",
      category: "Wärmepumpen",
      price: "4.250 €",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      desc: "Konstante Heizleistung bis -20°C Außentemperatur im Harzer Winter. Perfekt auf PV-Kopplung abgestimmt."
    },
    {
      title: "BYD Battery-Box Premium HVS 10.2 kWh",
      category: "Speichersysteme",
      price: "3.890 €",
      img: "https://images.unsplash.com/photo-1569012871812-a386454f226c?auto=format&fit=crop&w=800&q=80",
      desc: "Modularer Lithium-Eisenphosphat Speicher (LiFePO4) für bis zu 85% Eigenverbrauchs-Quote."
    },
    {
      title: "Huawei SUN2000 10KTL-M1 Hybrid Wechselrichter",
      category: "Wechselrichter",
      price: "1.850 €",
      img: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80",
      desc: "Dreiphasiger Hybrid-Wechselrichter mit integriertem AI Lichtbogenschutz & Batterieschnittstelle."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      {/* Import Royal Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Floating Navbar */}
      <NavbarV2
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenVoice={() => setIsVoiceOpen(true)}
      />

      <main className="space-y-28 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 1. ROYAL HERO SECTION */}
        <section id="hero" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/40 p-6 sm:p-16 grid lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Master Image Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/estate-mansion.jpg"
              alt="Aurevia Sovereign Estate Villa"
              className="w-full h-full object-cover filter brightness-[0.3] contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent" />
          </div>

          {/* Ambient Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-amber-500/20 via-emerald-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

          <div className="lg:col-span-7 space-y-7 relative z-10">
            {/* Top Sovereign Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#070B14]/90 border border-amber-400/40 text-amber-300 text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Aurevia Sovereign V2 · Harz Zentrallager Seesen</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-500/40">
                0% MwSt.
              </span>
            </div>

            {/* Main Royal Headline */}
            <h1 className="font-cinzel text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              DIE ARCHITEKTUR DER{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent font-cormorant italic font-bold">
                SOUVERÄNITÄT.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-montserrat font-light">
              Erleben Sie vollendete Energieautarkie für repräsentative Anwesen im Harz. Heavy-Duty Aluminium 100x100mm, bifaziale Doppelglas-Module & direkt aus unserem Zentrallager Seesen geliefert.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#configurator-v2"
                className="px-8 py-4.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 transform hover:scale-105 border border-amber-300/40"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>3D Konfigurator V2 Starten</span>
              </a>

              <button
                onClick={() => setIsLeadMagnetOpen(true)}
                className="px-7 py-4.5 rounded-xl bg-[#070B14]/90 hover:bg-slate-900 text-slate-200 font-bold text-xs sm:text-sm border border-amber-500/35 hover:border-amber-400 transition flex items-center justify-center gap-2.5 backdrop-blur-md shadow-xl"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Solar Kaufkompass 2026 (PDF Free)</span>
              </button>
            </div>

            {/* Trust Features Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left border-t border-white/15">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">Statik geprüft Schneelast 3</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">3-5 Tage Spedition ab Lager</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">30 Jahre Alu-Profil Garantie</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">0% MwSt. (§12 UStG) Befreit</span>
              </div>
            </div>
          </div>

          {/* Right Spotlight Display */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-[#070B14]/90 border border-amber-500/40 p-4 rounded-2xl space-y-3.5 shadow-2xl backdrop-blur-2xl">
              <div
                className="relative h-72 rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage('/images/luxury-carport.jpg')}
              >
                <img
                  src="/images/luxury-carport.jpg"
                  alt="Zola Pod Sovereign Solar Carport"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/90 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold">
                  Zola Pod Sovereign Edition V2
                </div>
                <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-amber-400 border border-amber-500/30">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs px-1">
                <div>
                  <span className="text-slate-400 block font-mono text-[9px] uppercase">Zentrallager Seesen Bestseller</span>
                  <span className="font-cinzel font-bold text-white text-sm">Alu-Carport 100x100mm mit Bifazial-Dach</span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-[11px] font-bold">
                  Sofort Lieferbar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. VERIFIED BRAND LOGO PARTNERS */}
        <section className="border-y border-white/15 py-6 bg-slate-950/80 backdrop-blur rounded-2xl px-6">
          <p className="text-center text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">
            Zertifizierte Komponenten & Offizielle Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-90 hover:opacity-100 transition">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-500 text-slate-950 font-serif font-bold flex items-center justify-center text-sm">A</div>
              <span className="font-cinzel font-bold text-base text-white tracking-widest">AUREVIA<span className="text-amber-400 font-sans text-[11px] ml-1">SOVEREIGN V2</span></span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png" alt="PV Lager Seesen Logo" className="h-6 w-auto" />
              <span className="text-xs font-bold text-slate-200 font-mono">PV LAGER SEESEN</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://le-cdn.website-editor.net/s/40ba10645f184fabbd7e8191cbbeb355/dms3rep/multi/opt/logo_website_w-1920w.png" alt="SolarCarport.tech Logo" className="h-6 w-auto" />
              <span className="text-xs font-bold text-slate-200 font-mono">SolarCarport.tech</span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">TRINA SOLAR</span>
            <span className="text-xs font-mono font-bold text-slate-400">HUAWEI</span>
            <span className="text-xs font-mono font-bold text-slate-400">BYD</span>
            <span className="text-xs font-mono font-bold text-slate-400">PANASONIC</span>
          </div>
        </section>

        {/* 3. INTERACTIVE 3D CONFIGURATOR V2 */}
        <section id="configurator-v2" className="scroll-mt-24">
          <CarportConfiguratorV2 />
        </section>

        {/* 4. EXCLUSIVE PRODUCT SHOWCASE GALLERY */}
        <section id="showcase-v2" className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Original Lagerware & Komponenten V2
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
              Authentisches PV Lager Sortiment aus Seesen
            </h2>
            <p className="text-xs text-slate-400">
              Alle gezeigten Produkte sind in unserem Zentrallager Seesen vorrätig und sofort abrufbereit. 0% MwSt. § 12 (3) UStG.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productShowcase.map((item, i) => (
              <div
                key={i}
                className="bg-[#070B14]/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div
                  className="relative h-44 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/85 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2.5 border-t border-slate-800">
                    <div>
                      <span className="text-[9px] text-slate-500 block">Ab Lager Seesen</span>
                      <span className="amber-gradient-text font-bold font-mono text-sm">{item.price}</span>
                    </div>
                    <a
                      href="#configurator-v2"
                      className="text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
                    >
                      <span>Auswählen</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. JAY ABRAHAM PREEMINENCE ENGINEERING TRANSPARENCY HUB */}
        <section id="engineering" className="glass-gold-card p-6 sm:p-12 rounded-3xl space-y-8 border border-amber-500/35">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">Ingenieurkunst & Werkstoff-Analyse</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">Warum Heavy-Duty Aluminium 100x100mm?</h2>
            <p className="text-xs text-slate-300">Der transparente Werkstoff-Vergleich für Ihr Anwesen im Harz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono text-sm">01</div>
              <h3 className="font-serif font-bold text-white text-lg">Heavy-Duty Alu 100x100mm</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Anodisiertes Aluminium verzieht sich nie, benötigt keinerlei Nachanstrich und bleibt auch nach 30 Jahren im Harzer Schnee absolut korrosionsfrei.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono text-sm">02</div>
              <h3 className="font-serif font-bold text-slate-300 text-lg">Leimholz & BS-Holz</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Holz nimmt Feuchtigkeit auf, erfordert alle 2 Jahre Abschleifen/Lasieren und neigt unter hoher Schneelast im Harz zu Rissbildung.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono text-sm">03</div>
              <h3 className="font-serif font-bold text-slate-300 text-lg">Verzinkter Stahl</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sehr schwer, neigt an Bohrlöchern und Verschraubungen zu Rostbildung und ist schwerer an Gebäude-Fassaden anzupassen.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE STICKY QUICK ACTION DOCK */}
      <MobileStickyBarV2
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
      />

      {/* LIGHTBOX MODAL FOR HIGH-RES PHOTOS */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg cursor-pointer" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-amber-500/40 shadow-2xl">
            <img src={activeImage} alt="Hochauflösendes PV Lager Produktbild" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

      {/* MODALS SUITE */}
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
      <SellerCopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />
      <VoiceAgentWidget isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}
