import { NextResponse } from 'next/server';

/**
 * Intake for the Autarkie-Analyse.
 *
 * `sofortStart` is the customer's express request to begin before the withdrawal
 * period expires (§ 356 Abs. 4 BGB). It is legally operative — whether it was given
 * decides when work may start and whether the right lapses — so it is recorded with
 * a timestamp rather than dropped.
 *
 * NOT YET WIRED: this returns the dossier to the caller but does not persist or
 * notify anyone. Before this leaves *.vercel.app it needs a destination
 * (Resend notification + a store). Until then, submissions are acknowledged and lost.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, postalCode, projectType, budgetRange, sofortStart, notes } = body;

    const missing = ['name', 'email', 'postalCode'].filter((k) => !String(body?.[k] ?? '').trim());
    if (missing.length) {
      return NextResponse.json(
        { error: 'Name, E-Mail und PLZ sind erforderlich.', missing },
        { status: 400 },
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) {
      return NextResponse.json({ error: 'Die E-Mail-Adresse ist ungültig.' }, { status: 400 });
    }

    const now = new Date().toISOString();
    const projectId = `AUR-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    const dossier = {
      projectId,
      createdAt: now,
      customer: { name, email, phone: phone || null, postalCode },
      project: { projectType: projectType || null, budgetRange: budgetRange || null, notes: notes || null },
      widerruf: {
        sofortStartVerlangt: sofortStart === true,
        // Only meaningful when consent was actually given; null keeps the audit trail honest.
        erteiltAm: sofortStart === true ? now : null,
        hinweis:
          sofortStart === true
            ? 'Kunde hat ausdrücklich den Beginn vor Ablauf der Widerrufsfrist verlangt und wurde über das Erlöschen des Widerrufsrechts belehrt.'
            : 'Keine Zustimmung zum vorzeitigen Beginn. Ausführung erst nach Ablauf der Widerrufsfrist.',
      },
      status: 'Eingegangen',
    };

    return NextResponse.json({ success: true, dossier });
  } catch {
    return NextResponse.json({ error: 'Die Anfrage konnte nicht gelesen werden.' }, { status: 400 });
  }
}
