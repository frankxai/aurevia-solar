import { NextResponse } from 'next/server';

const responseBody = {
  status: 'retired',
  endpoint: '/api/dossier',
  message:
    'Dieser Endpunkt wurde am 2026-08-19 außer Betrieb genommen. Er hat unvalidierte Eingaben als "verifiziert und reserviert" bestätigt und Preis-, Steuer- und Statikaussagen erzeugt, die nicht freigegeben waren. Es existieren keine Reservierungen aus diesem Endpunkt. / This endpoint was retired on 2026-08-19. It confirmed unvalidated input as "verified and reserved" and produced unapproved price, tax, and structural statements. No reservations from this endpoint exist.',
};

export function GET() {
  return NextResponse.json(responseBody, {
    status: 410,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export function POST() {
  return NextResponse.json(responseBody, {
    status: 410,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export function HEAD() {
  return new Response(null, {
    status: 410,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'GET, POST, HEAD, OPTIONS',
      'Cache-Control': 'no-store',
    },
  });
}
