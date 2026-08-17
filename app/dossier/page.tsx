'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import {
  FileCode2,
  CheckCircle2,
  AlertCircle,
  Download,
  Zap,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock
} from 'lucide-react';

export default function DossierPortalPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const sampleDossier = {
    dossierVersion: "1.0.0",
    generator: "Aurevia-Estate-Architect-AI",
    timestamp: new Date().toISOString(),
    client: {
      estateType: "Privatanwesen / Villa",
      location: "38723 Seesen, Deutschland",
      snowLoadZone: "Zone 3 (Harz Vorland)",
      windLoadCategory: "Kategorie 2"
    },
    configuration: {
      systemType: "Zola Pod Sovereign Double Carport + Roof Extension",
      totalCapacityKwp: 14.08,
      moduleCount: 32,
      moduleModel: "Trina Vertex S+ 440W Bifazial Glas-Glas",
      structureType: "Heavy-Duty Aluminium 100x100mm Eloxiert",
      storageSystem: "BYD Battery-Box Premium HVS 10.2 kWh",
      wallboxCount: 2,
      wallboxPowerKw: 22
    },
    projectedMetrics: {
      annualYieldKwh: 14250,
      projectedAutarkyPercent: 86,
      annualCo2SavingsKg: 6840,
      vatRate: 0
    },
    verificationHash: "AUR-EST-2026-SEESEN"
  };

  const handleValidate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const parsed = JSON.parse(jsonInput || JSON.stringify(sampleDossier));
      const res = await fetch('/api/dossier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed)
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Validierung fehlgeschlagen.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err?.message || 'Ungültiges JSON-Format. Bitte prüfen Sie Ihre Eingabe.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      <NavbarV2 />

      <main className="space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Aurevia AI Skill Protocol · Ingestion Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            AI Estate Dossier Validierung
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Übermitteln Sie den JSON-Datensatz aus Ihrem <strong className="text-amber-300">ChatGPT</strong>, <strong className="text-cyan-300">Claude</strong> oder <strong className="text-emerald-300">Antigravity</strong> Assistenten zur sofortigen statischen Prüfung und Warenreservierung im Zentrallager Seesen.
          </p>
        </section>

        {/* Ingestion Canvas */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* JSON Input Column */}
          <div className="lg:col-span-6 bg-[#070A14] border border-white/15 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                <FileCode2 className="w-4 h-4" />
                <span>Dossier JSON Payload</span>
              </span>
              <button
                onClick={() => setJsonInput(JSON.stringify(sampleDossier, null, 2))}
                className="text-[11px] font-mono text-slate-400 hover:text-amber-300 underline"
              >
                Muster-Dossier laden
              </button>
            </div>

            <textarea
              rows={14}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={`Fügen Sie hier das generierte Dossier JSON aus Ihrem AI-Assistenten ein...\n\nBeispiel:\n{\n  "dossierVersion": "1.0.0",\n  "client": { "location": "38723 Seesen" },\n  "configuration": { "moduleCount": 32 }\n}`}
              className="w-full bg-slate-950/90 border border-white/10 rounded-2xl p-4 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400/60 leading-relaxed"
            />

            <button
              onClick={handleValidate}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Warenbestand & Statik werden geprüft...</span>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Dossier validieren & Angebot abrufen</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Validation Result Column */}
          <div className="lg:col-span-6 space-y-6">
            {error && (
              <div className="p-6 rounded-3xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertCircle className="w-5 h-5" />
                  <span>Validierungsfehler</span>
                </div>
                <p className="text-xs text-red-200 font-mono">{error}</p>
              </div>
            )}

            {result ? (
              <div className="bg-[#070A14] border border-emerald-500/40 p-8 rounded-3xl space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-emerald-500/20 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                      Status: {result.status}
                    </span>
                    <h3 className="text-xl font-bold text-white">Zuteilung erfolgreich verifiziert</h3>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                    {result.quoteId}
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Versand-Zentrallager:</span>
                    <span className="text-white font-bold">{result.warehouseDispatch}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Lieferzeit Spedition:</span>
                    <span className="text-amber-300 font-bold">{result.estimatedDeliveryDays}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Reservierte Module:</span>
                    <span className="text-white font-bold">{result.allocation.modulesAllocated} Stk. Trina 440W</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Steuersatz (§12 UStG):</span>
                    <span className="text-emerald-400 font-bold">0 % MwSt. (Befreit)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex justify-between text-sm">
                    <span className="text-white font-bold">Verbindlicher Richtpreis:</span>
                    <span className="text-amber-400 font-bold text-base">{result.financialSummary.totalEur.toLocaleString('de-DE')} €</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                    <Clock className="w-4 h-4" />
                    <span>Lagerware für 72 Stunden reserviert</span>
                  </div>
                  <p className="text-[11px]">
                    {result.nextStep.action}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#070A14] border border-white/10 p-8 rounded-3xl space-y-6 shadow-xl text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="text-lg font-bold text-white">Noch kein Dossier generiert?</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Installieren Sie den Aurevia Solar Architect Skill in Ihrem bevorzugten AI-Modell, um Ihr Anwesen vollautomatisch zu berechnen.
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto text-xs font-mono">
                  <a
                    href="/skills/aurevia-estate-architect.skill.md"
                    target="_blank"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-white/15 flex items-center justify-center gap-2 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>Skill herunterladen (.md)</span>
                  </a>
                  <a
                    href="/skills/openapi-aurevia-planner.yaml"
                    target="_blank"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 flex items-center justify-center gap-2 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>OpenAPI Action (.yaml)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
