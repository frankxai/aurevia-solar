'use client';

import React from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { HeroGsapScene } from '@/components/HeroGsapScene';
import { AureliaGuide } from '@/components/AureliaGuide';
import { ScrollAssemblyShowcase } from '@/components/ScrollAssemblyShowcase';
import { PromptPlayground } from '@/components/PromptPlayground';
import { ExplodedCarportView } from '@/components/ExplodedCarportView';
import { ProductCard } from '@/components/ProductCard';
import { Figure } from '@/components/Figure';
import { DIGITAL_PRODUCTS } from '@/lib/digital-products';
import {
  Sparkles,
  Cpu,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Layers,
  ArrowRight,
  CheckCircle2,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      <NavbarV2 />

      <main className="space-y-28 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 01. GSAP-POWERED HERO SCENE */}
        <section>
          <HeroGsapScene />
        </section>

        {/* 02. INTERACTIVE 3D AI ARCHITECT COMPANION: AURELIA */}
        <section id="aurelia-guide" className="scroll-mt-24">
          <AureliaGuide />
        </section>

        {/* 03. THE DUAL ENGINE: PHYSICAL PROVENANCE + DIGITAL FORGE */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              Das Fundament unseres Erfolgs
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Reale Hardware trifft auf generative Software.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Keine abstrakte KI-Fantasie. Unsere AI-Prompts, Berechnungs-Skills und BOM-Engines basieren auf echter, in Deutschland gebauter Solar-Architektur. Statik, Elektroplanung und Freigaben bleiben immer Sache qualifizierter Fachbetriebe am Objekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Physical Provenance with Audited Manifest Media */}
            <div className="bg-[#070A14] border border-white/15 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>01. Physische Hardware Provenienz</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Zola Pod Struktur-Aluminium & Seesen Zentrallager
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Ausgelegt für hohe Schneelasten im Harzer Umland — die konkrete Auslegung ist am Objekt zu prüfen. 100×100 mm massive Pfosten, innenliegende Regenrinnenführung und bifaziale Doppelglas-Module.
                </p>

                {/* Audited Reference Proof Media */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-2 space-y-2">
                  <Figure
                    slug="dji-0081"
                    alt="Referenz · bestehende Ausführung einer realen solaren Überdachungsanlage in Niedersachsen."
                  />
                  <div className="px-3 py-2 bg-slate-900/80 rounded-xl text-[11px] font-mono text-slate-400 flex justify-between items-center">
                    <span>Zu validieren am Zielobjekt:</span>
                    <span className="text-amber-300 font-bold">Bodenstatik & Fundament</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>EN AW-6063 T6 eloxiertes Struktur-Aluminium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Trina Vertex S+ 440W N-Type Bifazial Module</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Hardware-Vertrieb über PV Lager und SolarCarport.tech</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/atelier"
                  className="text-xs font-mono text-amber-300 font-bold hover:text-amber-200 flex items-center gap-1.5"
                >
                  <span>Hardware-Zerlegung im Atelier ansehen</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Digital AI Forge */}
            <div className="bg-[#070A14] border border-emerald-500/30 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>02. Agentic AI Forge & Digital Products</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Multi-Agenten-Schwärme, Prompts & BOM Software
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Digital-Werkzeuge für AI-Assistenten, Handwerksbetriebe und Architekten: Render-Prompts, parametrische Zuschnittlisten und dokumentierte Planungs-Dossiers — jeweils mit veröffentlichtem Beleg, was sie können und was nicht.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Claude Code, ChatGPT Actions & Antigravity Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Visual-Prompt-Pack (3 freie Beispiele; Vollversion in Entwicklung)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>TypeScript & Python BOM-Berechnungs-Engines</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/shop"
                  className="text-xs font-mono text-emerald-300 font-bold hover:text-emerald-200 flex items-center gap-1.5"
                >
                  <span>Digitale Produkte im Shop erkunden</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 04. SCROLL-DRIVEN STRUCTURAL ASSEMBLY SHOWCASE */}
        <section>
          <ScrollAssemblyShowcase />
        </section>

        {/* 05. INTERACTIVE ARCHITECTURAL PROMPT PLAYGROUND */}
        <section>
          <PromptPlayground />
        </section>

        {/* 06. EMBEDDED INTERACTIVE 3D CAD DISSECTION */}
        <section id="exploded-atelier" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold">Interaktive Hardware-Zerlegung</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Zola Pod 100 × 100 mm Carport-Statik
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Scrubben Sie den Explosionsregler, um die interne Rinnenführung und Statikanker freizulegen.
            </p>
          </div>

          <ExplodedCarportView />
        </section>

        {/* 07. FEATURED DIGITAL PRODUCTS & AI SKILLS */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Digitale Produkte & Skills</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Top AI-Werkzeuge für Creators & Ingenieure
              </h2>
            </div>
            <a
              href="/shop"
              className="text-xs font-mono text-amber-300 font-bold hover:text-amber-200 flex items-center gap-1.5"
            >
              <span>Alle Produkte im Shop ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 08. ZERO LEGAL HEADACHE & SOVEREIGN CREATOR TERMS */}
        <section className="rounded-3xl bg-[#070A14] border border-emerald-500/30 p-8 sm:p-14 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">
                Rechtssicherheit & Klare Verantwortungsabgrenzung
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Souveräne Werkzeuge. Null rechtliche Fallstricke.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Aurevia stellt hochpräzise AI-gestützte Berechnungsmodelle, Visualisierungs-Prompts und parametrische Algorithmen bereit. Gemäß unserer transparenten Lizenzbedingungen fungieren alle digitalen Produkte als qualifizierte Planungsgrundlagen. Die formelle baurechtliche Genehmigung, statische Endabnahme und der elektrische Netzanschluss verbleiben stets in der souveränen Verantwortung des bauausführenden Fachunternehmens vor Ort.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
