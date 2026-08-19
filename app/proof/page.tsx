import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { PROOF_RECEIPTS, CORRECTIONS } from '@/lib/proof-receipts';

export const metadata: Metadata = {
  title: 'Proof',
  description:
    'Published evidence for every Aurevia digital product: which AI assistants were tested, what they produced, and where the boundaries are. Corrections are permanent.',
};

export default function ProofPage() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Aurevia
          </Link>
          <nav className="flex items-center gap-6 text-sm text-ink-2">
            <Link
              href="/shop"
              className="underline-offset-4 transition-colors duration-micro ease-au hover:text-ink hover:underline"
            >
              Products
            </Link>
            <span aria-current="page" className="text-copper-text">
              Proof
            </span>
          </nav>
        </div>
      </header>

      <PageHeader
        label="Evidence"
        title="Every claim gets a receipt."
        lead="This page records what our tools were tested against, what they actually produced, and what they cannot do. Products stay in development until their receipt is published here. Corrections are permanent — including our own."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-block sm:px-8">
        <h2 className="au-label">Corrections</h2>
        <div className="mt-6 space-y-8">
          {CORRECTIONS.map((c) => (
            <article key={c.date} className="border-l-2 border-attention pl-6">
              <p className="text-sm text-ink-3">{c.date}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{c.what}</h3>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-2">{c.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="au-label">Receipts</h2>
          <div className="mt-6 space-y-14">
            {PROOF_RECEIPTS.map((r) => (
              <article key={r.productSlug} className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
                <div>
                  <h3 className="font-display text-title font-semibold">{r.productTitle}</h3>
                  <p className="mt-2 text-sm text-ink-3">
                    Version {r.version} · {r.date} ·{' '}
                    {r.status === 'published' ? (
                      <span className="text-positive">receipt published</span>
                    ) : (
                      <span className="text-attention">transcripts pending</span>
                    )}
                  </p>
                  {r.assistantsTested.length > 0 ? (
                    <p className="mt-3 text-sm text-ink-2">
                      Tested with: {r.assistantsTested.join(', ')}
                    </p>
                  ) : (
                    <p className="mt-3 max-w-[36ch] text-sm text-ink-2">
                      No assistant transcripts published yet. Until they are, treat every
                      capability statement as a plan, not a fact.
                    </p>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-medium text-ink">What the evidence shows</p>
                    <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-2">
                      {r.findings.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-ink">Boundaries — what it does not do</p>
                    <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-2">
                      {r.boundaries.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  {r.workedCheck ? (
                    <div className="border border-rule-soft bg-surface p-6">
                      <p className="text-sm font-medium text-ink">{r.workedCheck.title}</p>
                      <ol className="mt-3 max-w-prose list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-ink-2">
                        {r.workedCheck.steps.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="max-w-prose text-[15px] leading-relaxed text-ink-2">
            Every Aurevia engineering output is a planning aid (Planungsgrundlage) — structural
            design, electrical planning, grid connection, and permits belong to qualified
            professionals at the specific site. Hardware, stock, and pricing live with the
            operating businesses:{' '}
            <a
              href="https://www.pvlager.com/"
              rel="noopener"
              className="text-ink underline underline-offset-4"
            >
              PV Lager
            </a>{' '}
            and{' '}
            <a
              href="https://www.solarcarport.tech/"
              rel="noopener"
              className="text-ink underline underline-offset-4"
            >
              SolarCarport.tech
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
