'use client';

import React from 'react';
import { Layers, PhoneCall, Cpu, Zap } from 'lucide-react';

export function MobileStickyBarV2() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#070B14]/95 backdrop-blur-2xl border-t border-white/10 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold">
        <a
          href="/v2"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200"
        >
          <Zap className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Souverän</span>
        </a>

        <a
          href="/atelier"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-400 text-slate-950 font-bold shadow-lg"
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span>Atelier</span>
        </a>

        <a
          href="/dossier"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300"
        >
          <Cpu className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span>AI Skill</span>
        </a>

        <a
          href="tel:+49538198000"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200"
        >
          <PhoneCall className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Direktruf</span>
        </a>
      </div>
    </div>
  );
}
