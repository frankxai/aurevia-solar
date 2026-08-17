import Image from 'next/image';
import { caption, findMedia } from '@/lib/media';

function MediaFallback({ alt, labelled = false }: { alt: string; labelled?: boolean }) {
  return (
    <div
      className="au-media-fallback absolute inset-0 flex items-end p-5 sm:p-7"
      aria-hidden={labelled ? undefined : true}
      aria-label={labelled ? alt : undefined}
      role={labelled ? 'img' : undefined}
    >
      <div className="max-w-xs border-l border-copper-text bg-paper px-4 py-3">
        <p className="au-label text-copper-text">Aurevia · Bildhinweis</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Die Referenzaufnahme ist derzeit nicht verfügbar. Die Beratung bleibt objektbezogen.
        </p>
      </div>
    </div>
  );
}

/**
 * One image primitive for the editorial site. The fallback is always painted below
 * the optimized image, so a missing manifest entry or failed public asset becomes an
 * intentional information surface instead of an unexplained blank field.
 */
export function Figure({
  slug,
  alt,
  priority = false,
  sizes = '(min-width: 1024px) 60rem, 100vw',
  className = '',
}: {
  slug: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const media = findMedia(slug);
  const aspectRatio = media?.aspect ?? 16 / 9;

  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-paper-2" style={{ aspectRatio }}>
        <MediaFallback alt={alt} labelled={!media} />
        {media ? (
          <Image
            src={media.src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="z-10 object-cover"
          />
        ) : null}
      </div>
      <figcaption className="mt-3 border-t border-rule-soft pt-3 text-sm text-ink-3">
        {caption(slug, alt)}
      </figcaption>
    </figure>
  );
}

/** Full-width section image with an optional evidence caption. */
export function Plate({
  slug,
  alt,
  priority = false,
  ratio = '16 / 9',
  sizes = '(min-width: 1280px) 72rem, 100vw',
  captionText,
  className = '',
}: {
  slug: string;
  alt: string;
  priority?: boolean;
  ratio?: string;
  sizes?: string;
  captionText?: string;
  className?: string;
}) {
  const media = findMedia(slug);

  return (
    <figure className={className}>
      <div className="relative w-full overflow-hidden bg-paper-2" style={{ aspectRatio: ratio }}>
        <MediaFallback alt={alt} labelled={!media} />
        {media ? (
          <Image
            src={media.src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="z-10 object-cover"
          />
        ) : null}
      </div>
      {captionText ? (
        <figcaption className="grid gap-2 border-b border-rule py-4 text-sm leading-relaxed text-ink-3 sm:grid-cols-[10rem_minmax(0,1fr)]">
          <span className="au-label text-copper-text">Referenz</span>
          <span>{captionText}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
