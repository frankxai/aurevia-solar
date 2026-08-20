'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Layers,
  Cpu,
  Building2,
  ShieldCheck,
  Zap,
  Compass,
  ArrowRight
} from 'lucide-react';

interface GuideChapter {
  id: number;
  badge: string;
  title: string;
  characterDialogue: string;
  actionText: string;
  actionLink: string;
  highlightCategory: string;
  stats: { label: string; value: string }[];
}

export function AureliaGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const chapters: GuideChapter[] = [
    {
      id: 1,
      badge: 'Kapitel 01 · Die Ästhetische Vision',
      title: 'Solare Architektur ohne Kompromisse',
      characterDialogue:
        '„Willkommen bei Aurevia. Ich bin Aurelia, Ihre AI-Architektin. Wir betrachten Solardächer nicht als störende Aufbauten, sondern als skulpturale Pavillons — mit teiltransparenter Bifazial-Verglasung und makellosen Schattenwurf-Mustern auf Ihrem Anwesen.“',
      actionText: 'Zur 3D-Explosionszeichnung',
      actionLink: '#exploded-atelier',
      highlightCategory: 'Architektur & Licht',
      stats: [
        { label: 'Lichttransmission', value: '12 % Diffuslicht' },
        { label: 'Tragwerk', value: '100×100 mm Alu' },
        { label: 'Wirkungsgrad', value: '22.0 % N-Type' }
      ]
    },
    {
      id: 2,
      badge: 'Kapitel 02 · Harzer Ingenieurskunst',
      title: 'Statik für extremste Witterung',
      characterDialogue:
        '„Hinter jeder Render-Linie steht die physische Realität: Unser Zola Pod Carportsystem widersteht im Harzer Umland schwersten Schneelasten (Zone 3 bis 5.4 kN/m²). Das Wasser wird verdeckt durch das Tragwerk in die Pfosten abgeführt.“',
      actionText: 'Statik-Werte im Atelier prüfen',
      actionLink: '/atelier',
      highlightCategory: 'Physik & Statik',
      stats: [
        { label: 'Schneelast-Reserve', value: 'Bis 5.400 Pa' },
        { label: 'Aluminium', value: 'EN AW-6063 T6' },
        { label: 'Konstruktionsnorm', value: 'DIN EN 1090-3' }
      ]
    },
    {
      id: 3,
      badge: 'Kapitel 03 · Die Autonome AI-Schmiede',
      title: 'Engineering-Wissen für Ihren Assistenten',
      characterDialogue:
        '„Wir haben dieses deutsche Fachwissen in installierbare AI Skills, Multi-Agenten-Schwärme und fotorealistische Prompt-Matrizen gegossen. Installieren Sie den Aurevia Skill direkt in Claude Code oder ChatGPT und planen Sie Ihr Anwesen autonom.“',
      actionText: 'Kostenlosen AI Skill laden',
      actionLink: '/shop',
      highlightCategory: 'Agentic Intelligence',
      stats: [
        { label: 'AI Skills', value: 'Claude / GPT Ready' },
        { label: 'Prompt Engine', value: '3 Freie Prompts' },
        { label: 'Lizenz', value: 'Sovereign / No-Lockin' }
      ]
    }
  ];

  const current = chapters[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % chapters.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (
    <div className="relative rounded-3xl bg-[#060913] border border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-2xl">
      {/* Dynamic Background Aura */}
      <div className="absolute -right-24 -top-24 w-80 h-80 bg-amber-500/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: 3D Hologram Avatar Core */}
        <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/80 border border-white/10 relative overflow-hidden">
          {/* Animated Halo Rings */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center my-4">
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 animate-spin [animation-duration:12s]" />
            <div className="absolute inset-2 rounded-full border border-emerald-400/30 animate-spin [animation-duration:8s] [animation-direction:reverse]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-500/30 via-slate-900 to-emerald-500/20 blur-sm animate-pulse" />

            {/* Core Avatar Symbol */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#080D1A] border-2 border-amber-300 flex flex-col items-center justify-center shadow-lg shadow-amber-500/25">
              <Sparkles className="w-8 h-8 text-amber-300 animate-bounce [animation-duration:3s]" />
            </div>

            {/* Live Orbit Dots */}
            <div className="absolute top-1 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping" />
          </div>

          <div className="space-y-1 mt-2">
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Aurelia · Solar AI Architect</span>
            </span>
            <p className="text-[11px] text-slate-400 font-mono">
              Intelligenter Führungs-Assistent
            </p>
          </div>

          {/* Chapter Navigation Stepper */}
          <div className="flex items-center gap-1.5 mt-5">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => setActiveStep(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === idx
                    ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                    : 'w-2.5 bg-slate-800 hover:bg-slate-600'
                }`}
                title={ch.title}
              />
            ))}
          </div>
        </div>

        {/* Right: Interactive Dialogue & Action Space */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                {current.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Schritt 0{current.id} von 0{chapters.length}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {current.title}
            </h3>
          </div>

          {/* Speech Bubble */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-amber-500/25 relative shadow-inner">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light italic">
              {current.characterDialogue}
            </p>
          </div>

          {/* Metrics Grid for this chapter */}
          <div className="grid grid-cols-3 gap-3 text-xs font-mono">
            {current.stats.map((st, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-950 border border-white/10 text-center space-y-0.5"
              >
                <span className="text-slate-400 block text-[10px]">{st.label}</span>
                <span className="text-amber-300 font-bold text-xs sm:text-sm">{st.value}</span>
              </div>
            ))}
          </div>

          {/* Controls & Action Handoff */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition"
                title="Vorheriges Kapitel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition flex items-center gap-1.5 text-xs font-mono font-bold"
              >
                <span>Nächstes Thema</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={current.actionLink}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-2"
            >
              <span>{current.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
