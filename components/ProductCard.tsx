'use client';

import React, { useState } from 'react';
import { CheckCircle2, Code, Download, Mail } from 'lucide-react';
import { DigitalProduct } from '@/lib/digital-products';
import { PromptPreviewModal } from './PromptPreviewModal';

interface ProductCardProps {
  product: DigitalProduct;
}

const WAITLIST_EMAIL = 'info@solarcarport.tech';

export function ProductCard({ product }: ProductCardProps) {
  const [showPreview, setShowPreview] = useState(false);

  const isFreeDownload =
    product.status === 'available' && product.plannedPriceEur === 0 && product.instantDownloadUrl;

  const waitlistHref = `mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(
    `Warteliste: ${product.title}`,
  )}&body=${encodeURIComponent(
    'Bitte informieren Sie mich, sobald dieses Produkt verfügbar ist.',
  )}`;

  return (
    <>
      <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 relative group overflow-hidden">
        <div className="space-y-4 relative z-10">
          <div className="flex justify-between items-center gap-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400">
              {product.categoryLabel}
            </span>
            <span
              className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold border ${
                product.status === 'available'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-slate-800/80 border-white/15 text-slate-300'
              }`}
            >
              {product.status === 'available' ? 'Verfügbar · Frei' : 'In Entwicklung'}
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {product.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{product.subtitle}</p>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-light">{product.description}</p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300 text-[10px] font-mono"
              >
                {cap}
              </span>
            ))}
          </div>

          <ul className="space-y-2 pt-2 border-t border-white/10 text-xs font-light text-slate-300">
            {product.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
          <div className="flex justify-between items-baseline">
            {product.plannedPriceEur === 0 ? (
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">0&nbsp;€</span>
            ) : (
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  {product.plannedPriceEur}&nbsp;€
                </span>
                <span className="text-[10px] text-slate-400 font-mono ml-2">
                  geplanter Launch-Preis — noch nicht bestellbar
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {product.sampleContent && (
              <button
                onClick={() => setShowPreview(true)}
                className="flex-1 py-3 px-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-mono text-xs font-bold border border-white/10 transition flex items-center justify-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>Vorschau</span>
              </button>
            )}

            {isFreeDownload ? (
              <a
                href={product.instantDownloadUrl}
                target="_blank"
                rel="noopener"
                className="flex-1 py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Kostenloser Download</span>
              </a>
            ) : (
              <a
                href={waitlistHref}
                className="flex-1 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-xs border border-white/15 transition flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Auf die Warteliste</span>
              </a>
            )}
          </div>

          {product.status === 'in-development' && (
            <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
              Dieses Produkt ist noch nicht erhältlich. Es erscheint erst, wenn alle Inhalte real
              existieren und belegt sind.
            </p>
          )}
        </div>
      </div>

      {showPreview && (
        <PromptPreviewModal product={product} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}
