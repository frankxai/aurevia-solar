import { NextResponse } from 'next/server';

const responseBody = {
  status: 'retired',
  endpoint: '/api/quiz',
  message:
    'Der frühere öffentliche Anfrageendpunkt wurde außer Betrieb genommen. Anfragen werden nur über den transparenten, nutzergesteuerten E-Mail-Entwurf vorbereitet.',
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

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'GET, POST, OPTIONS',
      'Cache-Control': 'no-store',
    },
  });
}
