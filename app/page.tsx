'use client';

import React, { useState } from 'react';
import { REAL_PRODUCT_CATALOG, ProductItem } from '@/lib/stock-data';
import { Award, CheckCircle2, Shield, Sparkles, Sliders, ArrowRight, Phone, FileText, Zap, Building2, Car, Thermometer, Layers } from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Showcase Active Tab
  const [showcaseTab, setShowcaseTab] = useState<'carport' | 'terrace' | 'klima' | 'digitaltwin'>('carport');

  // Autarky Calculator State
  const [kwhConsumption, setKwhConsumption] = useState<number>(6500);
  const [hasBattery, setHasBattery] = useState<boolean>(true);

  // Computed Autarky Metrics
  const estimatedKwp = Math.min(Math.round((kwhConsumption / 900) * 10) / 10, 35);
  const autarkyPercent = hasBattery ? Math.min(Math.round(82 + (kwhConsumption / 15000) * 12), 98) : 52;
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
    <div className="space-y-28 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. ULTRA-LUXURY ARCHITECTURAL HERO */}
      <section id="vision" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/40 p-8 sm:p-16 text-center sm:text-left grid lg:grid-cols-12 gap-10 items-center shadow-2xl">
        {/* Ambient Gold Glow & Glassmorphism Backing */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="lg:col-span-7 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" /> High-End Solar Engineering · Estate Integration
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Architektonische Perfektion. <br />
            <span className="text-gold-gradient font-serif italic">100% Energie-Autarkie für Ihr Anwesen.</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-light">
            Exklusive <strong>Zola Pod Executive Solar-Carports</strong>, smarte Bismuth-Glas PV-Terrassen mit <em>Smart Rain Channeling</em> und Direkt-PV Klimatechnik. Maßanfertigung aus Seesen (Harz), schlüsselfertig realisiert durch <strong>VR Gebäudetechnik</strong>.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#diagnose"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-2xl transition text-center border border-amber-300/50"
            >
              VIP Concierge Erstdiagnose ➔
            </a>
            <a
              href="#showcase"
              className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-white/20 transition text-center backdrop-blur"
            >
              Exklusiv-Portfolio Ansehen
            </a>
          </div>
        </div>

        {/* Hero Interactive Luxury Feature Card */}
        <div className="lg:col-span-5 relative z-10">
          <div className="glass-gold-card p-6 rounded-2xl space-y-4 shadow-2xl relative overflow-hidden">
            <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
              <img
                src="/images/luxury-carport.jpg"
                alt="Zola Pod Executive Solar Carport"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/80 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
                Carbon / Alu Chassis
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Zola Pod Executive Edition</span>
                <span className="font-serif font-bold text-white text-base">2-Fahrzeuge Solar-Carport</span>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold">
                Harz Schneelast Zone 3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL PARTNER LOGO BAR & ECOSYSTEM */}
      <section className="border-y border-white/10 py-8 bg-slate-950/60 backdrop-blur rounded-2xl px-6">
        <p className="text-center text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-6">
          Zertifizierte Komponenten & Technologie-Partner
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-80 hover:opacity-100 transition grayscale hover:grayscale-0">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-lg text-white tracking-wider">AUREVIA</span>
            <span className="text-xs text-amber-400 font-mono">SOLAR</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png" alt="PV Lager Seesen Logo" className="h-6 w-auto" />
            <span className="text-xs font-bold text-slate-300 font-mono">PV LAGER SEESEN</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://le-cdn.website-editor.net/s/40ba10645f184fabbd7e8191cbbeb355/dms3rep/multi/opt/logo_website_w-1920w.png" alt="SolarCarport.tech Logo" className="h-6 w-auto" />
            <span className="text-xs font-bold text-slate-300 font-mono">SolarCarport.tech</span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">TRINA SOLAR</span>
          <span className="text-xs font-mono font-bold text-slate-400">HUAWEI</span>
          <span className="text-xs font-mono font-bold text-slate-400">BYD</span>
          <span className="text-xs font-mono font-bold text-slate-400">PANASONIC</span>
        </div>
      </section>

      {/* 3. ULTRA-LUXURY ARCHITECTURAL SHOWCASE TABS */}
      <section id="showcase" className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest">Exklusive Solarsysteme</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Architektonische Meisterwerke</h2>
          <p className="text-xs text-slate-300">Wählen Sie Ihr gewünschtes Element für maßgeschneiderte Integration auf Ihrem Anwesen.</p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-3 flex-wrap">
          {[
            { id: 'carport', label: 'Zola Solar-Carport', icon: Car },
            { id: 'terrace', label: 'Smart PV-Terrasse', icon: Building2 },
            { id: 'klima', label: 'Direct-PV Klimaanlage', icon: Thermometer },
            { id: 'digitaltwin', label: 'Digital Twin Portal', icon: Layers },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setShowcaseTab(tab.id as any)}
                className={`px-5 py-3 rounded-xl flex items-center gap-2.5 text-xs font-bold transition uppercase tracking-wider ${
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

        {/* Dynamic Display Area */}
        <div className="glass-gold-card p-6 sm:p-10 rounded-3xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {showcaseTab === 'carport' && (
              <img src="/images/luxury-carport.jpg" alt="Zola Pod Carport" className="w-full h-full object-cover" />
            )}
            {showcaseTab === 'terrace' && (
              <img src="/images/luxury-terrace.jpg" alt="Smart PV Terrace" className="w-full h-full object-cover" />
            )}
            {showcaseTab === 'klima' && (
              <img src="/images/direct-pv-klima.jpg" alt="Direct-PV Climate" className="w-full h-full object-cover" />
            )}
            {showcaseTab === 'digitaltwin' && (
              <img src="/images/digital-twin-ui.jpg" alt="Digital Twin Dashboard" className="w-full h-full object-cover" />
            )}
          </div>

          <div className="lg:col-span-5 space-y-5">
            {showcaseTab === 'carport' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">Model: Zola Pod Executive</span>
                <h3 className="font-serif text-2xl font-bold text-white">Carbon-Aluminium Solar Carport</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Konzipiert für extreme Harzer Wetterbedingungen (Schneelastzone 3). Bifaziales Glas-Glas Dach liefert bis zu 12 kWp Ertrag und speist direkt in Ihren Fuhrpark & Haus-Speicher ein.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 pt-1 font-mono">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Integrated Smart Rain Channeling</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Dual 22kW Wallbox Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Warm Gold Perimeter LED System</li>
                </ul>
              </>
            )}

            {showcaseTab === 'terrace' && (
              <>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">Architectural Series</span>
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
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">Direct PV Series</span>
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
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">Executive Software</span>
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

      {/* 4. DUAL BRAND MATRIX */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="glass-gold-card p-8 rounded-2xl space-y-5 border border-amber-500/40">
          <div className="flex justify-between items-center">
            <span className="px-3.5 py-1.5 rounded-md bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40">AUREVIA SOLAR</span>
            <span className="text-xs text-slate-400 font-mono">Schlüsselfertige Exzellenz</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Architektonische Solar-Gesamtlösungen</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Für Villen, Anwesen und Gewerbeobjekte in der Region Harz (Goslar, Bad Harzburg, Göttingen, Braunschweig, Hildesheim). White-Glove Installation durch VR Gebäudetechnik.
          </p>
          <ul className="text-xs text-slate-300 space-y-2.5 pt-2">
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Bauantrag, Statikprüfung & Netzbetreiber-Anmeldung</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Zola Pod Executive Carports & Smart PV-Terrassen</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> 10 Jahre Harzer All-Inclusive Servicegarantie</li>
          </ul>
          <a href="#diagnose" className="block text-center py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs transition uppercase tracking-wider shadow-lg">
            VIP Beratung Vereinbaren ➔
          </a>
        </div>

        <div className="glass-emerald-card p-8 rounded-2xl space-y-5 border border-emerald-500/40">
          <div className="flex justify-between items-center">
            <span className="px-3.5 py-1.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">PV LAGER SEESEN</span>
            <span className="text-xs text-slate-400 font-mono">Direktbezug & Abholung</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Großhandelslager Seesen (Harz)</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direktvertrieb von PV-Modulen, Invertern und Speichern für Fachhandwerker, Solarteure und qualifizierte DIY-Bauherren ohne Zwischenhändler.
          </p>
          <ul className="text-xs text-slate-300 space-y-2.5 pt-2">
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Trina 440W Bifazial Doppelglas ab 89,00 €/Stk</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sofortige Abholung im Zentrallager Seesen</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 0% MwSt. gemäß § 12 (3) UStG Rechnung</li>
          </ul>
          <a href="#lagerbestand" className="block text-center py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-xs transition uppercase tracking-wider">
            Zentrallager Bestand Einsehen ➔
          </a>
        </div>
      </section>

      {/* 5. INTERACTIVE AUTARKY & SAVINGS CALCULATOR */}
      <section id="rechner" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-8 border border-amber-500/30">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Präzisions-Rechner</span>
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

      {/* 6. REAL PRODUCT CATALOG */}
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
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
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

      {/* 7. DIAGNOSTIC INTENDED SYSTEM FORM */}
      <section id="diagnose" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-6 max-w-3xl mx-auto border border-amber-500/40">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Erstdiagnose & Build-Passport</span>
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
