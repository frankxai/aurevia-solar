'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { ExplodedModuleView } from '@/components/ExplodedModuleView';
import { ExplodedBatteryView } from '@/components/ExplodedBatteryView';
import { ExplodedCarportView } from '@/components/ExplodedCarportView';
import {
  ShieldCheck,
  Award,
  Truck,
  Download,
  FileCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  Layers,
  Cpu,
  BatteryCharging,
  Car,
  Sun
} from 'lucide-react';

export default function AtelierPage() {
  const [activeTab, setActiveTab] = useState<'module' | 'battery' | 'carport'>('module');

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      {/* Floating Header Navigation */}
      <NavbarV2 />

      <main className="space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Atelier Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-[#070A14] border border-white/15 p-8 sm:p-14 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Aurevia Hardware Atelier · Seesen / Harz</span>
            </div>

            {/* Hardware Component Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('module')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                  activeTab === 'module'
                    ? 'bg-amber-400 text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>01. Solar-Modul</span>
              </button>

              <button
                onClick={() => setActiveTab('battery')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                  activeTab === 'battery'
                    ? 'bg-emerald-400 text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BatteryCharging className="w-3.5 h-3.5" />
                <span>02. Speicher</span>
              </button>

              <button
                onClick={() => setActiveTab('carport')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                  activeTab === 'carport'
                    ? 'bg-amber-400 text-slate-950 shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>03. Carport-Tragwerk</span>
              </button>
            </div>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Ingenieurkunst &{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent italic">
                Hardware-Präzision.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Hier analysieren Sie die Referenz-Solarkomponenten im Detail: Schichtaufbau, Geometrie und Konstruktionsprinzipien. Alle Werte sind Planungsannahmen der Referenz-Hardware — die Auslegung erfolgt objektbezogen durch Fachbetriebe.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="text-slate-400 block">Modul-Leistung:</span>
              <span className="text-amber-400 font-bold text-base">440 Wp N-Type</span>
            </div>
            <div>
              <span className="text-slate-400 block">Schneelast:</span>
              <span className="text-amber-400 font-bold text-base">objektbezogen zu prüfen</span>
            </div>
            <div>
              <span className="text-slate-400 block">Profilsystem:</span>
              <span className="text-amber-400 font-bold text-base">100 × 100 mm Alu</span>
            </div>
            <div>
              <span className="text-slate-400 block">Hardware & Bestand:</span>
              <span className="text-emerald-400 font-bold text-base">über PV Lager</span>
            </div>
          </div>
        </section>

        {/* ACTIVE EXPLODED VIEW COMPONENT */}
        <section id="exploded-view" className="scroll-mt-24">
          {activeTab === 'module' && <ExplodedModuleView />}
          {activeTab === 'battery' && <ExplodedBatteryView />}
          {activeTab === 'carport' && <ExplodedCarportView />}
        </section>

        {/* TECHNICAL BLUEPRINT & CAD SPECIFICATIONS */}
        <section className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#070A14] border border-white/15 p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase font-bold">CAD Bauplan & Geometrie</span>
                <h3 className="text-2xl font-bold text-white">
                  {activeTab === 'module' && 'Trina Vertex S+ TSM-NEG9R.28'}
                  {activeTab === 'battery' && 'BYD Battery-Box Premium HVS 10.2'}
                  {activeTab === 'carport' && 'Zola Pod Sovereign 100x100mm Alu-Tragwerk'}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-xl bg-slate-900 text-slate-300 font-mono text-xs border border-white/10">
                {activeTab === 'module' && '1.762 × 1.134 × 30 mm'}
                {activeTab === 'battery' && '1.178 × 585 × 298 mm'}
                {activeTab === 'carport' && '6.000 × 5.800 × 2.600 mm'}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                <span className="text-slate-400">Statik & Schneelast</span>
                <span className="text-white font-bold block text-sm">objektbezogen zu prüfen</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                <span className="text-slate-400">Normen-Rahmen</span>
                <span className="text-white font-bold block text-sm">Auslegung durch Fachplaner</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                <span className="text-slate-400">Garantien</span>
                <span className="text-white font-bold block text-sm">laut Hersteller-Datenblatt</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                <span className="text-slate-400">Steuern</span>
                <span className="text-white font-bold block text-sm">Einzelfall — Steuerberatung</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/skills/aurevia-estate-architect.skill.md"
                target="_blank"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-mono text-xs border border-amber-400/30 flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Aurevia AI Skill herunterladen (.md)</span>
              </a>
              <a
                href="/skills/openapi-aurevia-planner.yaml"
                target="_blank"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-white/10 flex items-center gap-2 transition"
              >
                <FileCheck className="w-4 h-4" />
                <span>OpenAPI Action Schema (.yaml)</span>
              </a>
            </div>
          </div>

          {/* HARDWARE ROUTING — no stock, prices, or reservations on this surface */}
          <div className="lg:col-span-5 bg-[#070A14] border border-white/15 p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                Hardware & Verfügbarkeit
              </span>
              <h3 className="text-2xl font-bold text-white">Vertrieb über die Fachbetriebe</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aurevia zeigt keine Lagerbestände, Preise oder Reservierungen. Hardware, Konditionen
                und Lieferzeiten bestätigen die Fachbetriebe der RIAL-Gruppe objektbezogen und vor
                Beauftragung.
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <a
                href="https://www.pvlager.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-white/10 hover:border-amber-400/40 transition text-slate-200"
              >
                <span className="font-bold">PV Lager — Komponenten & Bestand</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
              <a
                href="https://www.solarcarport.tech/"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-white/10 hover:border-amber-400/40 transition text-slate-200"
              >
                <span className="font-bold">SolarCarport.tech — Carport-Systeme</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
              Steuerliche Fragen (z.&nbsp;B. MwSt.-Sätze für PV) sind Einzelfallfragen — bitte mit
              der eigenen Steuerberatung klären.
            </p>
          </div>
        </section>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
