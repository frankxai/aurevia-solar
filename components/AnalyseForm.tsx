'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { PRICING } from '@/lib/pricing';

type Errors = Partial<Record<'name' | 'email' | 'postalCode' | 'projectType', string>>;

const projectTypes = [
  { value: 'anwesen', label: 'Wohnhaus oder Anwesen' },
  { value: 'hof', label: 'Hof / landwirtschaftlicher Betrieb' },
  { value: 'gewerbe', label: 'Gewerbeobjekt' },
  { value: 'carport', label: 'Carport oder Überdachung' },
];

const budgets = [
  { value: 'unter-30', label: 'unter 30.000 €' },
  { value: '30-60', label: '30.000 – 60.000 €' },
  { value: '60-120', label: '60.000 – 120.000 €' },
  { value: 'ueber-120', label: 'über 120.000 €' },
  { value: 'offen', label: 'Noch offen' },
];

export function AnalyseForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [mailPrepared, setMailPrepared] = useState(false);

  const fid = (name: string) => `${uid}-${name}`;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const get = (key: string) => String(formData.get(key) ?? '').trim();

    const next: Errors = {};
    if (!get('name')) next.name = 'Bitte geben Sie Ihren Namen an.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get('email'))) {
      next.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    if (!/^\d{5}$/.test(get('postalCode'))) {
      next.postalCode = 'Bitte geben Sie eine fünfstellige Postleitzahl an.';
    }
    if (!get('projectType')) next.projectType = 'Bitte wählen Sie eine Objektart.';

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstError = Object.keys(next)[0] as keyof Errors;
      if (firstError === 'projectType') {
        document.querySelector<HTMLInputElement>('input[name="projectType"]')?.focus();
      } else {
        document.getElementById(fid(firstError))?.focus();
      }
      return;
    }

    const projectLabel =
      projectTypes.find((project) => project.value === get('projectType'))?.label ??
      get('projectType');
    const budgetLabel =
      budgets.find((budget) => budget.value === get('budgetRange'))?.label ?? 'Keine Angabe';
    const subject = `Anfrage Autarkie-Analyse · ${get('postalCode')}`;
    const body = [
      'Guten Tag,',
      '',
      'ich möchte eine objektbezogene Autarkie-Analyse anfragen.',
      '',
      `Name: ${get('name')}`,
      `E-Mail: ${get('email')}`,
      `Telefon: ${get('phone') || 'Keine Angabe'}`,
      `Postleitzahl: ${get('postalCode')}`,
      `Objektart: ${projectLabel}`,
      `Investitionsrahmen: ${budgetLabel}`,
      `Hinweise: ${get('notes') || 'Keine Angabe'}`,
      '',
      'Bitte bestätigen Sie vor einer Beauftragung Umfang, Honorar, Zeitplan und benötigte Unterlagen.',
    ].join('\n');

    setMailPrepared(true);
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    'mt-2 block min-h-[52px] w-full border border-rule bg-surface px-4 text-base text-ink outline-none transition-colors duration-micro ease-au focus:border-ink';
  const label = 'block text-sm font-medium text-ink';
  const errorClass = 'mt-2 text-sm text-copper-text';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={fid('name')} className={label}>
            Name
          </label>
          <input
            id={fid('name')}
            name="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? fid('name-error') : undefined}
            className={field}
          />
          {errors.name ? (
            <p id={fid('name-error')} className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fid('email')} className={label}>
            E-Mail
          </label>
          <input
            id={fid('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? fid('email-error') : undefined}
            className={field}
          />
          {errors.email ? (
            <p id={fid('email-error')} className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fid('phone')} className={label}>
            Telefon <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input
            id={fid('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={field}
          />
        </div>

        <div>
          <label htmlFor={fid('postalCode')} className={label}>
            Postleitzahl
          </label>
          <input
            id={fid('postalCode')}
            name="postalCode"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            aria-invalid={!!errors.postalCode}
            aria-describedby={errors.postalCode ? fid('postalCode-error') : undefined}
            className={field}
          />
          {errors.postalCode ? (
            <p id={fid('postalCode-error')} className={errorClass}>
              {errors.postalCode}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className={label}>Um welches Objekt geht es?</legend>
        <div className="mt-3 grid gap-px bg-rule-soft sm:grid-cols-2">
          {projectTypes.map((project) => (
            <label
              key={project.value}
              className="flex min-h-[52px] cursor-pointer items-center gap-3 bg-surface px-4 text-base text-ink has-[:checked]:bg-copper-soft"
            >
              <input
                id={fid(project.value)}
                type="radio"
                name="projectType"
                value={project.value}
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? fid('projectType-error') : undefined}
                className="h-5 w-5 accent-[color:var(--au-copper)]"
              />
              {project.label}
            </label>
          ))}
        </div>
        {errors.projectType ? (
          <p id={fid('projectType-error')} className={errorClass}>
            {errors.projectType}
          </p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor={fid('budgetRange')} className={label}>
          Investitionsrahmen <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <select id={fid('budgetRange')} name="budgetRange" className={field} defaultValue="">
          <option value="">Keine Angabe</option>
          {budgets.map((budget) => (
            <option key={budget.value} value={budget.value}>
              {budget.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={fid('notes')} className={label}>
          Was sollen wir wissen? <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <textarea
          id={fid('notes')}
          name="notes"
          rows={4}
          maxLength={1200}
          className={`${field} min-h-[7rem] py-3 leading-relaxed`}
        />
      </div>

      <p className="border-l border-rule pl-4 text-sm leading-relaxed text-ink-3">
        Beim Fortfahren öffnet sich Ihr E-Mail-Programm mit einem vorbereiteten Entwurf. Diese
        Website übermittelt oder speichert die Angaben nicht. Sie versenden die Nachricht erst
        selbst. Mehr dazu in der <Link href="/datenschutz" className="text-ink underline underline-offset-4">Datenschutzerklärung</Link>.
      </p>

      {mailPrepared ? (
        <p role="status" className="border border-rule bg-copper-soft p-4 text-sm leading-relaxed text-ink">
          Der E-Mail-Entwurf wurde vorbereitet. Bitte prüfen und senden Sie ihn in Ihrem
          E-Mail-Programm. Falls sich kein Programm öffnet, schreiben Sie an{' '}
          <a href={`mailto:${COMPANY.email}`} className="font-medium underline underline-offset-4">
            {COMPANY.email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-2">
          <span className="au-measure font-medium text-ink">{PRICING.analyse.display}</span>{' '}
          — {PRICING.analyse.note}
        </p>
        <button
          type="submit"
          className="flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
        >
          E-Mail vorbereiten
        </button>
      </div>
    </form>
  );
}
