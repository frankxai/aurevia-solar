import { NextResponse } from 'next/server';

const responseBody = {
  status: 'retired',
  endpoint: '/api/stock',
  message:
    'Der frühere öffentliche Bestandsendpunkt wurde außer Betrieb genommen. Verfügbarkeit und Konditionen werden objektspezifisch und vor Beauftragung bestätigt.',
};

export function GET() {
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
      Allow: 'GET, HEAD, OPTIONS',
      'Cache-Control': 'no-store',
    },
  });
}
