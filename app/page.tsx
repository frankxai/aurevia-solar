'use client';

import React, { useState } from 'react';
import { REAL_PRODUCT_CATALOG, ProductItem } from '@/lib/stock-data';
import { Truck, CheckCircle2, Shield, Package, Wrench, Zap, Sun, Award, Sliders, ArrowRight, Phone, FileText } from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Autarky Calculator State
  const [kwhConsumption, setKwhConsumption] = useState<number>(4500);
  const [hasBattery, setHasBattery] = useState<boolean>(true);

  // Computed Autarky Metrics
  const estimatedKwp = Math.min(Math.round((kwhConsumption / 900) * 10) / 10, 25);
  const autarkyPercent = hasBattery ? Math.min(Math.round(75 + (kwhConsumption / 15000) * 18), 94) : 48;
  const annualSavingsEUR = Math.round(kwhConsumption * 0.38 * (autarkyPercent / 100));

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plz, setPlz] = useState('');
  const [projectType, setProjectType] = useState('carport');
  const [budget, setBudget] = useState('12k-25k');
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
    <div className="space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. CINEMATIC LUXURY HERO */}
      <section id="vision" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/30 p-8 sm:p-14 text-center sm:text-left grid lg:grid-cols-12 gap-8 items-center">
        {/* Background Visual Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="lg:col-span-7 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Award className="w-4 h-4" /> Schlüsselfertige Solar-Architektur & Direkt-Großhandel
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Ästhetische Solar-Architektur. <br />
            <span className="text-gold-gradient font-italic">Ingenieurskunst aus Seesen.</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            Spezialist für <strong>Zola Solar-Carports</strong>, smarte PV-Terrassen mit <em>Smart Rain Channels</em>, bifaziale Trina Glas-Glas Module und Direkt-PV Klimasysteme. Direkt ab Lager Seesen oder schlüsselfertig montiert durch <strong>VR Gebäudetechnik</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <a
              href="#diagnose"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl transition text-center"
            >
              System-Erstdiagnose Starten ➔
            </a>
            <a
              href="#rechner"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-white/10 transition text-center"
            >
              Autarkie-Rechner Öffnen
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative z-10">
          <div className="glass-gold-card p-6 rounded-2xl space-y-4">
            <img
              src="https://images.unsplash.com/photo-1558441719-67450807e909?auto=format&fit=crop&w=1000&q=80"
              alt="Aurevia Solar Carport"
              className="w-full h-56 object-cover rounded-xl border border-white/10 shadow-lg"
            />
            <div className="flex justify-between items-center text-xs">
              <div>
                <span className="text-slate-400 block font-mono">Modell: Zola Pod Executive</span>
                <span className="font-serif font-bold text-white text-sm">2-Fahrzeuge PV-Carport</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-[11px] font-bold">
                94% Autarkie
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL BRAND MATRIX */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="glass-gold-card p-8 rounded-2xl space-y-5">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">AUREVIA SOLAR</span>
            <span className="text-xs text-slate-400 font-mono">Premium Concierge</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Schlüsselfertige Solar-Architektur</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Für Eigenheime und Gewerbeobjekte in der Region Harz (Goslar, Bad Harzburg, Göttingen, Braunschweig). Komplettabwicklung inklusive Statikprüfung, Bauvoranfrage und Netzbetreiber-Anmeldung.
          </p>
          <ul className="text-xs text-slate-300 space-y-2.5 pt-2">
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Architectural Zola Pod Solar-Carports & PV-Terrassen</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Montage & Inbetriebnahme durch VR Gebäudetechnik</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Schneelastzone 2 & 3 Statikgarantie für den Harz</li>
          </ul>
          <a href="#diagnose" className="block text-center py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/40 transition uppercase tracking-wider">
            Concierge-Beratung Anfragen ➔
          </a>
        </div>

        <div className="glass-emerald-card p-8 rounded-2xl space-y-5">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">PV LAGER SEESEN</span>
            <span className="text-xs text-slate-400 font-mono">Großhandel & Selbstabholung</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Direktbezug Zentrallager Seesen</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Für Handwerker, Solarteure und DIY-Bauherren. Sofort verfügbare Komponenten direkt ab Lager Seesen ohne lange Lieferzeiten.
          </p>
          <ul className="text-xs text-slate-300 space-y-2.5 pt-2">
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Trina 440W Bifaziale Doppelglas-Module ab 89,00 €</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Direkt-PV AC/DC Multi-Split Klimaanlagen ab Lager</li>
            <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sofortige Bar-/Kartenzahlung & Skonto (-3% SEPA)</li>
          </ul>
          <a href="#lagerbestand" className="block text-center py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/40 transition uppercase tracking-wider">
            Lagerbestand In Seesen Prüfen ➔
          </a>
        </div>
      </section>

      {/* 3. INTERACTIVE AUTARKY & SAVINGS CALCULATOR */}
      <section id="rechner" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Interaktiver Ertrags-Rechner</span>
          <h2 className="font-serif text-3xl font-bold text-white">Berechnen Sie Ihre persönliche Solar-Autarkie</h2>
          <p className="text-xs text-slate-300">Ermitteln Sie Ertrag, Stromkosten-Ersparnis und Autarkiegrad für Ihr Objekt.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-slate-300 font-medium">Jährlicher Stromverbrauch:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{kwhConsumption.toLocaleString('de-DE')} kWh/Jahr</span>
              </div>
              <input
                type="range"
                min="2500"
                max="15000"
                step="500"
                value={kwhConsumption}
                onChange={(e) => setKwhConsumption(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-white/10">
              <div>
                <span className="text-xs font-bold text-white block">Batteriespeicher-Kopplung (BYD 10.2 kWh)</span>
                <span className="text-[11px] text-slate-400">Erhöht Autarkie auch nachts und bei Schlechtwetter</span>
              </div>
              <input
                type="checkbox"
                checked={hasBattery}
                onChange={(e) => setHasBattery(e.target.checked)}
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 text-center space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Geschätzte Autarkie</span>
              <div className="font-serif text-4xl font-bold text-amber-400">{autarkyPercent}%</div>
              <span className="text-[10px] text-slate-400">Netzunabhängigkeit</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Jährliche Ersparnis</span>
              <div className="font-serif text-4xl font-bold text-emerald-400">{annualSavingsEUR.toLocaleString('de-DE')} €</div>
              <span className="text-[10px] text-slate-400">bei 0,38 €/kWh Tarif</span>
            </div>

            <div className="col-span-2 p-4 rounded-xl bg-slate-900/60 border border-white/10 text-center text-xs text-slate-300">
              Empfohlene Anlagengröße: <strong className="text-amber-400">{estimatedKwp} kWp</strong> · Empfohlener Speicher: <strong className="text-emerald-400">{hasBattery ? '10.2 kWh' : 'Kein Speicher'}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL PRODUCT CATALOG */}
      <section id="lagerbestand" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white">Echtes Zentrallager Seesen</h2>
            <p className="text-xs text-slate-400">Alle Preise inkl. 0% MwSt. (§ 12 (3) UStG) für berechtigte PV-Installationen.</p>
          </div>

          {/* Category Filter */}
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

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map(item => (
            <div key={item.id} className="glass-gold-card rounded-2xl overflow-hidden flex flex-col justify-between transition">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-500" />
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
                  <div className="text-[11px] font-mono bg-slate-950 p-2.5 rounded space-y-1 text-slate-300">
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
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
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

      {/* 5. REGIONAL HARZ PROOF & CASE STUDIES */}
      <section id="referenzen" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Regionale Ausführungen</span>
          <h2 className="font-serif text-3xl font-bold text-white">Erprobte Installationen in der Region Harz</h2>
          <p className="text-xs text-slate-300">Nachgewiesene Schneelast- und Windfestigkeit in Goslar, Bad Harzburg & Seesen.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-400 font-bold">Familie Meyer · Goslar</span>
              <span className="text-slate-500">12 kWp Carport + Speicher</span>
            </div>
            <p className="text-xs text-slate-300 italic">
              "Der Zola Pod Carport hat unseren Harzer Winter mit schweren Schneelasten einwandfrei überstanden. 94% Autarkie im Sommer."
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-emerald-400 font-bold">Gewerbepark · Braunschweig</span>
              <span className="text-slate-500">45 kWp Bifazial + Solar-Klima</span>
            </div>
            <p className="text-xs text-slate-300 italic">
              "Die Direkt-PV Klimaanlage kühlt unsere Büroflächen im Sommer komplett kostenfrei ohne Wechselrichter-Verluste."
            </p>
          </div>
        </div>
      </section>

      {/* 6. READINESS SCAN DIAGNOSTIC FORM */}
      <section id="diagnose" className="glass-gold-card p-8 sm:p-12 rounded-3xl space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Erstdiagnose & Build-Passport</span>
          <h2 className="font-serif text-3xl font-bold text-white">Projekt-Readiness Scan Starten</h2>
          <p className="text-xs text-slate-300">Erfassen Sie Ihre Anforderungen für Seesen, Harz und Umgebung.</p>
        </div>

        {!submittedDossier ? (
          <form onSubmit={handleSubmitDiagnostic} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Welches PV-System ist geplant?</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="carport">Solar-Carport (Zola Pod, 2 Fahrzeuge)</option>
                <option value="terrasse">PV-Terrassenüberdachung (Smart Rain Channel)</option>
                <option value="rooftop">Dach-PV & Speicher-Komplettset</option>
                <option value="klima">AC/DC Solar Multi-Split Klimaanlage</option>
                <option value="diy">Nur Komponenten-Abholung (PV Lager Seesen)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vollständiger Name</label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
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
                  placeholder="max@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Telefonnummer (für Rückfragen)</label>
                <input
                  type="tel"
                  placeholder="0171 1234567"
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
                  placeholder="38723 (z.B. Seesen / Harz)"
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
                <option value="3k-5k">3.000 € – 5.000 € (Selbstinstallation / Komponenten)</option>
                <option value="5k-12k">5.000 € – 12.000 € (Standard Dach-PV Paket)</option>
                <option value="12k-25k">12.000 € – 25.000+ € (Schlüsselfertig / Carport Komplett)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl transition"
            >
              {submitting ? 'Verarbeite Anfrage...' : 'Build Passport Erstellen & Erstdiagnose Absenden ➔'}
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Build Passport #{submittedDossier.projectId} Erstellt</h3>
            <p className="text-xs text-slate-300">
              Vielen Dank, {submittedDossier.customer.name}. Empfohlenes Service-Modell: <strong className="text-amber-400">{submittedDossier.project.recommendedBrand}</strong>.
            </p>
            <p className="text-[11px] text-slate-400 bg-slate-900 p-4 rounded-xl text-left border border-white/10 leading-relaxed">
              {submittedDossier.disclaimer}
            </p>
            <button
              onClick={() => setSubmittedDossier(null)}
              className="text-xs text-amber-400 underline font-semibold"
            >
              Neue Diagnose starten
            </button>
          </div>
        )}
      </section>

      {/* MODAL FOR PRODUCT DETAILS */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-lg w-full p-6 space-y-4 relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-amber-400">{selectedProduct.sku}</span>
                <h3 className="font-serif font-bold text-white text-xl">{selectedProduct.name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-white text-sm font-bold">
                ✕
              </button>
            </div>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-44 object-cover rounded-xl border border-white/10" />
            <p className="text-xs text-slate-300 leading-relaxed">{selectedProduct.description}</p>
            <div className="bg-slate-950 p-3 rounded-xl text-xs space-y-1 font-mono text-slate-300">
              {Object.entries(selectedProduct.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-400">{k}:</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <span className="text-[10px] text-slate-400 block">Ab Lager Seesen</span>
                <span className="font-serif text-2xl font-bold text-amber-400">{selectedProduct.pricePvlager.toFixed(2)} €</span>
              </div>
              <a
                href="#diagnose"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow uppercase tracking-wide"
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
