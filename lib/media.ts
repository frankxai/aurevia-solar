import manifest from '../public/media/manifest.json';

export type MediaItem = {
  slug: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
  aspect: number;
  kind: string;
  usage: string;
  name: string;
  sourceUrl: string;
};

export const MEDIA = manifest as MediaItem[];

const bySlug = new Map(MEDIA.map((m) => [m.slug, m]));

/** Throws at build time rather than rendering a broken <img> in production. */
export function img(slug: string): MediaItem {
  const m = bySlug.get(slug);
  if (!m) throw new Error(`[media] unknown slug "${slug}" — check public/media/manifest.json`);
  return m;
}

export const byUsage = (usage: string) => MEDIA.filter((m) => m.usage === usage);

/**
 * Every photograph on this site is a real RIAL installation. Captions therefore carry
 * a place name wherever the source filename recorded one — an unnamed photo reads as
 * stock, and stock is exactly what this brand cannot afford to look like.
 */
export const PLACES: Record<string, string> = {
  'carport-u-berdachung-eggerling-8': 'Carport-Überdachung — Projekt Eggerling',
  '5x3-carport-rostak-19': 'Doppelcarport 5 × 3 m — Projekt Rostak',
  '5x3-carport-rostak-22': 'Doppelcarport 5 × 3 m — Projekt Rostak',
  '6x2-aufdach-terrasse-anton1': 'Aufdach-Terrasse 6 × 2 m — Projekt Anton',
  '6x2-aufdach-terrasse-anton5': 'Aufdach-Terrasse 6 × 2 m — Projekt Anton',
  'zaun-muster-vor-haus-2-kopie-2': 'Solarzaun als Grundstücksabgrenzung',
  'front-rechts-tesla-hyndai': 'Doppelcarport mit zwei Ladepunkten',
  'front-bearb-tesla-hyndai': 'Doppelcarport mit zwei Ladepunkten',
  pergola: 'Pergola-Ausführung mit teiltransparenter Modulbelegung',
};

export const caption = (slug: string, fallback: string) => PLACES[slug] ?? fallback;
