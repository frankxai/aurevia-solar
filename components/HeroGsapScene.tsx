'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Sparkles,
  Cpu,
  Layers,
  ShoppingBag,
  ArrowRight,
  Sun,
  ShieldCheck,
  Compass,
  Zap
} from 'lucide-react';

export function HeroGsapScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered luxury entrance
      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.3'
        )
        .from(
          paraRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          metricsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.2'
        )
        .from(
          hudRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        );

      // Continuous subtle ambient glow pulsing
      gsap.to('.hero-ambient-glow', {
        scale: 1.15,
        opacity: 0.25,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden bg-[#070A14] border border-white/15 p-8 sm:p-14 lg:p-18 shadow-2xl"
    >
      {/* Background Ambient GSAP Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />
      <div className="hero-ambient-glow absolute -top-32 -left-32 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="hero-ambient-glow absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Core Narrative */}
        <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Aurevia · Autonomous Solar Engineering & Digital Forge</span>
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Deutsche Ingenieurskunst.{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent italic">
              Autonome AI-Swarm Intelligenz.
            </span>
          </h1>

          <p
            ref={paraRef}
            className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0"
          >
            Reale deutsche Solar-Hardware (100×100 mm Struktur-Aluminium, bifaziales Doppelglas) trifft auf installierbare AI Skills, Multi-Agenten-Schwärme und parametrische Software.
          </p>

          {/* Action Suite */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="/shop"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-2xl shadow-amber-500/25 transition flex items-center justify-center gap-2.5 border border-amber-300/40"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Digital Forge Shop & Skills</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/atelier"
              className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-mono text-sm font-bold border border-white/15 transition flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>3D Hardware Atelier</span>
            </a>
          </div>
        </div>

        {/* Right Column: Live Solar Telemetry HUD */}
        <div
          ref={hudRef}
          className="lg:col-span-4 bg-slate-950/90 border border-amber-500/30 p-6 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
              <Sun className="w-4 h-4 animate-spin [animation-duration:20s]" />
              <span>Live Telemetrie · Seesen / Harz</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
              <span className="text-slate-400">Tragwerk-Schnittstelle:</span>
              <span className="text-amber-300 font-bold">100 × 100 mm Alu</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
              <span className="text-slate-400">Bifazial-Gewinn (Albedo):</span>
              <span className="text-emerald-400 font-bold">+18 bis +25 %</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
              <span className="text-slate-400">Schneelast-Reserve:</span>
              <span className="text-white font-bold">5.400 Pa (Zone 3)</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-900/80 border border-white/10">
              <span className="text-slate-400">AI Skill Protocol:</span>
              <span className="text-emerald-400 font-bold">Aurevia v2.0 (CC0)</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 text-center">
            <a
              href="/proof"
              className="text-[11px] font-mono text-slate-400 hover:text-amber-300 transition underline underline-offset-4"
            >
              Radikale Nachweise & Berechnungs-Belege (/proof) ➔
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div
        ref={metricsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/10 text-xs font-mono relative z-10"
      >
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
          <span className="text-slate-400 block">AI Agenten-Cluster:</span>
          <span className="text-amber-400 font-bold text-base">5-Agent Swarm</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
          <span className="text-slate-400 block">Hardware-Profil:</span>
          <span className="text-white font-bold text-base">100 × 100 mm Alu</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
          <span className="text-slate-400 block">Statik-Klasse:</span>
          <span className="text-emerald-400 font-bold text-base">DIN EN 1991 Harz</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
          <span className="text-slate-400 block">Lizenzmodell:</span>
          <span className="text-amber-400 font-bold text-base">Sovereign / No-Lockin</span>
        </div>
      </div>
    </div>
  );
}
