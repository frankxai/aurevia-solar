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

export function findMedia(slug: string): MediaItem | undefined {
  return bySlug.get(slug);
}

export const byUsage = (usage: string) => MEDIA.filter((m) => m.usage === usage);

/**
 * Captions describe only what the repository image can substantiate. Source filenames
 * are not used as customer identities, locations, approvals or performance evidence.
 */
export const PLACES: Record<string, string> = {
  'carport-u-berdachung-eggerling-8': 'Referenzaufnahme · Solarcarport mit Aluminium-Unterkonstruktion',
  '5x3-carport-rostak-19': 'Referenzaufnahme · Doppelcarport mit Modulüberdachung',
  '5x3-carport-rostak-22': 'Referenzaufnahme · Detail einer Carport-Unterkonstruktion',
  '6x2-aufdach-terrasse-anton1': 'Referenzaufnahme · PV-Terrassenüberdachung',
  '6x2-aufdach-terrasse-anton5': 'Referenzaufnahme · Terrassenüberdachung von der Gartenseite',
  'dji-0081': 'Referenzaufnahme · PV-Terrassenüberdachung im Gebäudebestand',
  'dji-0184': 'Referenzaufnahme · Modulfläche über einer bestehenden Terrasse',
  'dji-0549': 'Referenzaufnahme · Untersicht einer PV-Terrassenüberdachung',
  'zaun-muster-vor-haus-2-kopie-2': 'Referenzaufnahme · Solarzaun als Grundstücksabgrenzung',
  'front-rechts-tesla-hyndai': 'Referenzaufnahme · Doppelcarport mit zwei Stellplätzen',
  'front-bearb-tesla-hyndai': 'Referenzaufnahme · Doppelcarport mit zwei Stellplätzen',
  pergola: 'Referenzaufnahme · Pergola mit teiltransparenter Modulbelegung',
};

export const caption = (slug: string, fallback: string) => PLACES[slug] ?? fallback;
