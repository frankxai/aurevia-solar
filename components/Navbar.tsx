'use client';

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PhoneCall, Sparkles, BookOpen, Mic, ShieldCheck, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenLeadMagnet?: () => void;
  onOpenCopilot?: () => void;
  onOpenVoice?: () => void;
}

export function Navbar({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#080C14]/90 backdrop-blur-xl border-b border-amber-500/25 shadow-2xl transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border-b border-white/10 py-1.5 px-4 text-center text-[11px] font-mono text-slate-300 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Zentrallager Seesen (Harz)
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="hidden md:inline text-slate-300">
          Statisch geprüft Schneelastzone 3
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
          0% MwSt. § 12 (3) UStG
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Dual Brand Monogram Logo */}
        <a href="#vision" className="hover:opacity-95 transition">
          <BrandLogo variant="dual" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#vision" className="hover:text-amber-400 transition flex items-center gap-1">
            <span>Vision & Architektur</span>
          </a>
          <a href="#configurator" className="hover:text-amber-400 transition text-amber-300 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>60s Konfigurator</span>
          </a>
          <a href="#showcase" className="hover:text-amber-400 transition">
            Portfolio
          </a>
          <a href="#lagerbestand" className="hover:text-amber-400 transition">
            Lagerbestand Seesen
          </a>
          <a href="#rechner" className="hover:text-amber-400 transition">
            Autarkie-Rechner
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {onOpenVoice && (
            <button
              onClick={onOpenVoice}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="Voice AI Assistant"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="hidden xl:inline">Voice Agent</span>
            </button>
          )}

          {onOpenCopilot && (
            <button
              onClick={onOpenCopilot}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="AI Sales Copilot"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden xl:inline">AI Copilot</span>
            </button>
          )}

          <a
            href="tel:+49538198000"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-white/15 transition shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-[11px]">+49 (0) 5381 98000</span>
          </a>

          <a
            href="#configurator"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition border border-amber-300/40"
          >
            Angebot ➔
          </a>
        </div>
      </div>
    </header>
  );
}
