'use client';

import React, { useState } from 'react';
import { REAL_PRODUCT_CATALOG, ProductItem } from '@/lib/stock-data';
import { CarportConfigurator } from '@/components/CarportConfigurator';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Sliders,
  ArrowRight,
  Phone,
  FileText,
  Zap,
  Building2,
  Car,
  Thermometer,
  Layers,
  Truck,
  Sun,
  Shield,
  Clock,
  BookOpen,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Showcase Active Tab for Interactive Gallery
  const [showcaseTab, setShowcaseTab] = useState<'estate' | 'carport' | 'terrace' | 'klima' | 'digitaltwin' | 'bifacial'>('estate');

  // Autarky Calculator State
  const [kwhConsumption, setKwhConsumption] = useState<number>(7500);
  const [hasBattery, setHasBattery] = useState<boolean>(true);

  // Computed Autarky Metrics
  const estimatedKwp = Math.min(Math.round((kwhConsumption / 900) * 10) / 10, 45);
  const autarkyPercent = hasBattery ? Math.min(Math.round(84 + (kwhConsumption / 20000) * 12), 98) : 54;
  const annualSavingsEUR = Math.round(kwhConsumption * 0.39 * (autarkyPercent / 100));

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plz, setPlz] = useState('');
  const [projectType, setProjectType] = useState('carport');
  const [budget, setBudget] = useState('25k-50k');
  const [submitting, setSubmitting] = useState(false);
  const [submittedDossier, setSubmittedDossier] = useState<any>(null);

  const filteredCatalog = activeCategory === 'all'
    ? REAL_PRODUCT_CATALOG
    : REAL_PRODUCT_CATALOG.filter(p => p.category === activeCategory);

  const handleSubmitDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          postalCode: plz,
          projectType,
          budgetRange: budget,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedDossier(data.dossier);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-24 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. CINEMATIC ULTRA-LUXURY ARCHITECTURAL HERO */}
      <section id="vision" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/40 p-8 sm:p-14 grid lg:grid-cols-12 gap-10 items-center shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="lg:col-span-7 space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-lg backdrop-blur">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" /> High-End Solar Engineering · Estate Integration
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Architektonische Perfektion. <br />
            <span className="text-gold-gradient font-serif italic">100% Energie-Autarkie für Ihr Anwesen.</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
            Spezialist für <strong>Zola Pod Executive Solar-Carports</strong>, smarte Bismuth-Glas PV-Terrassen mit <em>Smart Rain Channeling</em> und Direkt-PV Klimatechnik. Präzisionsfertigung aus Seesen (Harz), schlüsselfertig realisiert durch <strong>VR Gebäudetechnik</strong>.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#configurator"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-2xl transition text-center border border-amber-300/50"
            >
              60s Carport Konfigurator Starten ➔
            </a>
            <a
              href="#showcase"
              className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-white/20 transition text-center backdrop-blur"
            >
              Exklusiv-Portfolio Ansehen
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">Schneelastfestigkeit</span>
              <span className="text-amber-400 font-bold text-sm">Zone 3 (Harz)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Garantie Profilstruktur</span>
              <span className="text-emerald-400 font-bold text-sm">30 Jahre</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Lieferung Zentrallager</span>
              <span className="text-cyan-400 font-bold text-sm">3-5 Werktage</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Luxury Feature Visual */}
        <div className="lg:col-span-5 relative z-10">
          <div className="glass-gold-card p-4 rounded-2xl space-y-4 shadow-2xl relative overflow-hidden border border-amber-500/40">
            <div className="relative h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
              <img
                src="/images/estate-mansion.jpg"
                alt="Harz Mountain Villa with Zola Pod Solar Carport"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/85 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
                Harz Anwesen Integration
              </div>
            </div>
            <div className="flex justify-between items-center text-xs px-2">
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Zola Pod Executive Edition</span>
                <span className="font-serif font-bold text-white text-base">Anwesen-Carport mit Bismuth-Glas</span>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold">
                100% Autarkie
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL VERIFIED BRAND & ECOSYSTEM BAR */}
      <section className="border-y border-white/10 py-8 bg-slate-950/80 backdrop-blur rounded-2xl px-6">
        <p className="text-center text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-6">
          Zertifizierte Technologien & Offizielle Partner
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-90 hover:opacity-100 transition">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 text-slate-950 font-serif font-bold flex items-center justify-center text-base">A</div>
            <span className="font-serif font-bold text-lg text-white tracking-wider">AUREVIA<span className="text-amber-400 font-sans text-xs ml-1">SOLAR</span></span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png" alt="PV Lager Seesen Logo" className="h-7 w-auto" />
            <span className="text-xs font-bold text-slate-200 font-mono">PV LAGER SEESEN</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://le-cdn.website-editor.net/s/40ba10645f184fabbd7e8191cbbeb355/dms3rep/multi/opt/logo_website_w-1920w.png" alt="SolarCarport.tech Logo" className="h-7 w-auto" />
            <span className="text-xs font-bold text-slate-200 font-mono">SolarCarport.tech</span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">TRINA SOLAR</span>
          <span className="text-xs font-mono font-bold text-slate-400">HUAWEI</span>
          <span className="text-xs font-mono font-bold text-slate-400">BYD</span>
          <span className="text-xs font-mono font-bold text-slate-400">PANASONIC</span>
        </div>
      </section>

      {/* 3. INTERACTIVE CARPORT & SYSTEM CONFIGURATOR */}
      <section className="scroll-mt-20">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-6">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">Interaktive Planung</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">60-Sekunden Carport & System Konfigurator</h2>
          <p className="text-xs text-slate-300">Stellen Sie Ihr individuelles Solar-Carport, PV-Terrassendach oder Komplettsystem zusammen.</p>
        </div>
        <CarportConfigurator />
      </section>

      {/* 4. ULTRA-LUXURY INTERACTIVE GALLERY & SHOWCASE TABS */}
      <section id="showcase" className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">Architektur & Ingenieurkunst</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Exklusives Produkt-Portfolio</h2>
          <p className="text-xs text-slate-300">Wählen Sie ein Element, um hochauflösende Aufnahmen und technische Details zu sehen.</p>
        </div>

        {/* Dynamic Gallery Tabs */}
        <div className="flex justify-center gap-2.5 flex-wrap">
          {[
            { id: 'estate', label: 'Harz Anwesen Villa', icon: Building2 },
            { id: 'carport', label: 'Zola Pod Carport', icon: Car },
            { id: 'bifacial', label: 'Bifazial Doppelglas', icon: Sun },
            { id: 'terrace', label: 'Smart PV-Terrasse', icon: Layers },
            { id: 'klima', label: 'Direct-PV Klimaanlage', icon: Thermometer },
            { id: 'digitaltwin', label: 'Digital Twin Portal', icon: Sliders },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setShowcaseTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold transition uppercase tracking-wider ${
                  showcaseTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-xl border border-amber-300/50'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Image & Specs Display Card */}
        <div className="glass-gold-card p-6 sm:p-10 rounded-3xl grid lg:grid-cols-12 gap-8 items-center border border-amber-500/40 shadow-2xl">
          <div className="lg:col-span-7 relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            {showcaseTab === 'estate' && (
              <img src="/images/estate-mansion.jpg" alt="Harz Anwesen Villa" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            {showcaseTab === 'carport' && (
              <img src="/images/luxury-carport.jpg" alt="Zola Pod Executive Carport" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            {showcaseTab === 'bifacial' && (
              <img src="/images/bifacial-module.jpg" alt="Trina Vertex Bifacial Module" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            {showcaseTab === 'terrace' && (
              <img src="/images/luxury-terrace.jpg" alt="Smart PV Terrace" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            {showcaseTab === 'klima' && (
              <img src="/images/direct-pv-klima.jpg" alt="Direct-PV Climate System" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
            {showcaseTab === 'digitaltwin' && (
              <img src="/images/digital-twin-ui.jpg" alt="Digital Twin Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            )}
          </div>

          <div className="lg:col-span-5 space-y-5">
            {showcaseTab === 'estate' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Harz Anwesen Edition</span>
                <h3 className="font-serif text-2xl font-bold text-white">Vollständige Anwesens-Autarkie</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Harmonische Verschmelzung von moderner Architektur und Hochleistungs-Photovoltaik. Zola Pod Carport, Bismuth-Glas Terrassendach und Speicher-Kopplung bieten 100% Netzunabhängigkeit für Ihr Anwesen.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Ausgelegt für Harzer Schneelastzone 3</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Unsichtbare Kabelführung im Profil</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Weclapp & DATEV Export Schnittstelle</li>
                </ul>
              </>
            )}

            {showcaseTab === 'carport' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Model: Zola Pod Executive</span>
                <h3 className="font-serif text-2xl font-bold text-white">Carbon-Aluminium Solar Carport</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Konzipiert für extreme Harzer Wetterbedingungen. Bifaziales Glas-Glas Dach liefert bis zu 12 kWp Ertrag und speist direkt in Ihren Fuhrpark & Haus-Speicher ein.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Integrated Smart Rain Channeling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Dual 22kW Wallbox Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Warm Gold Perimeter LED System</li>
                </ul>
              </>
            )}

            {showcaseTab === 'bifacial' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Modul-Technologie</span>
                <h3 className="font-serif text-2xl font-bold text-white">Trina Vertex S+ 440W Bifazial</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Glas-Glas Module mit N-Type i-TOPCon Technologie. Bis zu 25% Mehrertrag durch Lichtreflektion auf der Rückseite. Äußerst widerstandsfähig gegen Hagel und schwere Schneelasten.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 25 Jahre Produkt- & 30 Jahre Leistungsgarantie</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 5.400 Pa Schneelast-Zertifizierung</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Transparenz für elegantes Lichtspiel</li>
                </ul>
              </>
            )}

            {showcaseTab === 'terrace' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Architectural Series</span>
                <h3 className="font-serif text-2xl font-bold text-white">Smart Bismuth PV-Terrassendach</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Transluzente Doppelglas-PV-Module sorgen für angenehmen Schattenwurf und gleichzeitige Stromerzeugung. Wasserdichte Aluminium-Struktur mit patentierter Entwässerung.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 40% Lichtdurchlässigkeit</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Unsichtbare Kabelführung im Profil</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Hagelschutzklasse 5 nach ISO Standard</li>
                </ul>
              </>
            )}

            {showcaseTab === 'klima' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Direct PV Series</span>
                <h3 className="font-serif text-2xl font-bold text-white">AC/DC Direct Solar Klimaanlage</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Schließen Sie PV-Module direkt an das Innengerät an. Zero-Loss Kühlung und Heizung im Sommer & Übergangszeit ohne jegliche Wechselrichter-Verluste.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Direct DC Range: 80V – 380V</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Matte Obsidian Architectural Finish</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Ultra-quiet 19dB Silent Night Mode</li>
                </ul>
              </>
            )}

            {showcaseTab === 'digitaltwin' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">Executive Software</span>
                <h3 className="font-serif text-2xl font-bold text-white">Real-Time Digital Twin Portal</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Überwachen Sie Stromfluss, Batteriezustand, Autarkiegrad und Ertrag Ihres Anwesens in Echtzeit via iPad, Mac und iPhone. Integriert mit Weclapp ERP.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Live Power Flow Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Weclapp & DATEV Export Compliance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Automated Grid Weather Forecasting</li>
                </ul>
              </>
            )}

            <a
              href="#diagnose"
              className="inline-block px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition mt-2"
            >
              Maßanfertigung Anfragen ➔
            </a>
          </div>
        </div>
      </section>

      {/* 5. JAY ABRAHAM EDUCATIONAL TRANSPARENCY HUB */}
      <section className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-8 border border-white/10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">Ingenieurwissen & Vergleich</span>
          <h2 className="font-serif text-3xl font-bold text-white">Warum Heavy-Duty Aluminium 100x100mm?</h2>
          <p className="text-xs text-slate-300">Der transparente Werkstoff-Vergleich für Ihr Anwesen im Harz.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono">01</div>
            <h3 className="font-serif font-bold text-white text-lg">Heavy-Duty Alu 100x100mm</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Anodisiertes Aluminium verzieht sich nie, benötigt keinerlei Nachanstrich und bleibt auch nach 30 Jahren im Harzer Schnee absolut korrosionsfrei.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono">02</div>
            <h3 className="font-serif font-bold text-slate-300 text-lg">Leimholz & Brettschichtholz</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Holz nimmt Feuchtigkeit auf, erfordert alle 2 Jahre Abschleifen/Lasieren und neigt unter hoher Schneelast im Harz zu Rissbildung.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono">03</div>
            <h3 className="font-serif font-bold text-slate-300 text-lg">Verzinkter Stahl</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sehr schwer, neigt an Bohrlöchern und Verschraubungen zu Rostbildung und ist schwerer an Gebäude-Fassaden anzupassen.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE AUTARKY & SAVINGS CALCULATOR */}
      <section id="rechner" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-8 border border-amber-500/30">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">Präzisions-Rechner</span>
          <h2 className="font-serif text-3xl font-bold text-white">Ihre persönliche Anwesens-Autarkie</h2>
          <p className="text-xs text-slate-300">Ermitteln Sie Autarkiegrad und Stromkostenersparnis für Ihr Objekt.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-300 font-medium">Jährlicher Energiebedarf:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{kwhConsumption.toLocaleString('de-DE')} kWh/Jahr</span>
              </div>
              <input
                type="range"
                min="3500"
                max="25000"
                step="500"
                value={kwhConsumption}
                onChange={(e) => setKwhConsumption(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-white/10">
              <div>
                <span className="text-xs font-bold text-white block">BYD Premium HVS 10.2 kWh Speicher-Kopplung</span>
                <span className="text-[11px] text-slate-400">Garantiert Stromversorgung bei Nacht & Stromausfall</span>
              </div>
              <input
                type="checkbox"
                checked={hasBattery}
                onChange={(e) => setHasBattery(e.target.checked)}
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 text-center space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Erreichte Autarkie</span>
              <div className="font-serif text-4xl font-bold text-amber-400">{autarkyPercent}%</div>
              <span className="text-[10px] text-slate-400">Netzunabhängigkeit</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Jährliche Ersparnis</span>
              <div className="font-serif text-4xl font-bold text-emerald-400">{annualSavingsEUR.toLocaleString('de-DE')} €</div>
              <span className="text-[10px] text-slate-400">bei 0,39 €/kWh Tarif</span>
            </div>

            <div className="col-span-2 p-4 rounded-xl bg-slate-900/80 border border-white/10 text-center text-xs text-slate-300 font-mono">
              Empfohlene Anlagengröße: <strong className="text-amber-400">{estimatedKwp} kWp</strong> · Empfohlener Speicher: <strong className="text-emerald-400">{hasBattery ? '10.2 kWh' : 'Kein Speicher'}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL SEESEN WAREHOUSE CATALOG */}
      <section id="lagerbestand" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white">Live Lagerbestand Seesen</h2>
            <p className="text-xs text-slate-400">Alle Komponenten sofort ab Lager Seesen verfügbar. 0% MwSt. § 12 (3) UStG.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 text-xs font-medium">
            {[
              { id: 'all', label: 'Alle Komponenten' },
              { id: 'bifacial-modules', label: 'PV-Module' },
              { id: 'carports', label: 'Carports & Terrassen' },
              { id: 'climate', label: 'Solar-Klima' },
              { id: 'heat-pumps', label: 'Wärmepumpen' },
              { id: 'batteries', label: 'Speicher & Inverter' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg transition whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map(item => (
            <div key={item.id} className="glass-gold-card rounded-2xl overflow-hidden flex flex-col justify-between transition border border-white/10 hover:border-amber-500/40">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover opacity-85 hover:scale-105 transition duration-500" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
                  {item.stockSeesen} auf Lager
                </div>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">{item.sku}</span>
                  <h3 className="font-serif font-bold text-white text-lg leading-snug">{item.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="text-[11px] font-mono bg-slate-950 p-2.5 rounded-lg space-y-1 text-slate-300 border border-white/5">
                    {Object.entries(item.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-slate-400">{k}:</span>
                        <span className="text-white font-medium">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Ab Lager Seesen</span>
                      <span className="font-serif text-xl font-bold text-amber-400">{item.pricePvlager.toFixed(2)} €</span>
                      <span className="text-[10px] text-slate-400"> / {item.unit}</span>
                    </div>
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition border border-white/10"
                    >
                      Details ➔
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. DIAGNOSTIC BUILD PASSPORT INTAKE FORM */}
      <section id="diagnose" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-6 max-w-3xl mx-auto border border-amber-500/40">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">Erstdiagnose & Build-Passport</span>
          <h2 className="font-serif text-3xl font-bold text-white">System-Readiness Scan Starten</h2>
          <p className="text-xs text-slate-300">Erfassen Sie Ihre Anforderungen für Seesen, Harz und Umgebung.</p>
        </div>

        {!submittedDossier ? (
          <form onSubmit={handleSubmitDiagnostic} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Welche Systemarchitektur ist geplant?</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="carport">Zola Pod Executive Solar-Carport (Carbon/Alu)</option>
                <option value="terrasse">Smart PV-Terrassendach (Bismuth-Glas)</option>
                <option value="rooftop">Anwesen-Gesamtsystem (Dach + Speicher + Klima)</option>
                <option value="klima">AC/DC Direct-PV Klimaanlage</option>
                <option value="diy">Komponenten-Abholung (PV Lager Seesen)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vollständiger Name</label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Maximilian von Berg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">E-Mail Adresse</label>
                <input
                  type="email"
                  required
                  placeholder="m.berg@anwesen-harz.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Telefonnummer</label>
                <input
                  type="tel"
                  placeholder="0171 9876543"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Postleitzahl (PLZ)</label>
                <input
                  type="text"
                  required
                  placeholder="38723 (z.B. Seesen / Bad Harzburg)"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Geplanter Budgetrahmen</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="5k-12k">5.000 € – 12.000 € (Komponenten-Paket)</option>
                <option value="12k-25k">12.000 € – 25.000 € (Standard Carport / Terrasse)</option>
                <option value="25k-50k">25.000 € – 50.000+ € (Executive Anwesen-Gesamtsystem)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-widest uppercase shadow-2xl transition border border-amber-300/50"
            >
              {submitting ? 'Erstelle Build Passport...' : 'Build Passport Erstellen & VIP Beratung Anfragen ➔'}
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Build Passport #{submittedDossier.projectId} Erstellt</h3>
            <p className="text-xs text-slate-300">
              Vielen Dank, {submittedDossier.customer.name}. Ihr Anliegen wurde an <strong>{submittedDossier.project.recommendedBrand}</strong> übermittelt.
            </p>
            <button
              onClick={() => setSubmittedDossier(null)}
              className="text-xs text-amber-400 underline font-semibold"
            >
              Neue Erstdiagnose starten
            </button>
          </div>
        )}
      </section>

      {/* MODAL FOR PRODUCT DETAILS */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 space-y-4 relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-amber-400">{selectedProduct.sku}</span>
                <h3 className="font-serif font-bold text-white text-xl">{selectedProduct.name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-white text-sm font-bold">
                ✕
              </button>
            </div>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-xl border border-white/10" />
            <p className="text-xs text-slate-300 leading-relaxed">{selectedProduct.description}</p>
            <div className="bg-slate-950 p-3 rounded-xl text-xs space-y-1 font-mono text-slate-300 border border-white/5">
              {Object.entries(selectedProduct.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-400">{k}:</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Ab Lager Seesen</span>
                <span className="font-serif text-2xl font-bold text-amber-400">{selectedProduct.pricePvlager.toFixed(2)} €</span>
              </div>
              <a
                href="#diagnose"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg uppercase tracking-wide"
              >
                Anfrage Stellen ➔
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
