import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IMAGE_DATA, type ImageMeta } from '../image-data';

/**
 * Responsive image.
 *
 * Renders a single <img> backed by the pre-generated WebP variants, so the
 * browser downloads the smallest file that covers the slot instead of a
 * full-resolution original. Width/height are emitted from the real intrinsic
 * size so the box is reserved before the bytes arrive (no layout shift).
 *
 *   <app-img name="HGI-1" alt="Kashmir valley" sizes="(max-width: 700px) 100vw, 380px" />
 *
 * Set [priority]="true" for the LCP image only — that swaps lazy loading for an
 * eager, high-priority fetch.
 */
@Component({
  selector: 'app-img',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      [src]="src()"
      [srcset]="srcset()"
      [attr.sizes]="sizes()"
      [alt]="alt()"
      [width]="meta()?.w"
      [height]="meta()?.h"
      [loading]="priority() ? 'eager' : 'lazy'"
      [attr.fetchpriority]="priority() ? 'high' : null"
      decoding="async"
      [class]="imgClass()"
    />
  `,
  styles: `
    :host {
      display: block;
      block-size: 100%;
      inline-size: 100%;
    }

    img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      /* Fills the reserved box while the bytes are still in flight, so cards
         never flash a white hole. */
      background: var(--ink-100, #e7e0d8);
    }
  `,
})
export class Img {
  /** Base filename without extension, e.g. "HGI-1" — a key in IMAGE_DATA. */
  readonly name = input.required<string>();
  readonly alt = input<string>('');
  /** Media-condition list telling the browser the rendered slot width. */
  readonly sizes = input<string>('100vw');
  /** True for the LCP image: eager + high fetchpriority instead of lazy. */
  readonly priority = input<boolean>(false);
  readonly imgClass = input<string>('');

  // Indexing a Record is not statically guaranteed to hit, so the type carries
  // the undefined case that the template's ?. already guards against.
  protected readonly meta = computed<ImageMeta | undefined>(() => IMAGE_DATA[this.name()]);

  /** Largest available variant — the fallback for browsers ignoring srcset. */
  protected readonly src = computed(() => {
    const m = this.meta();
    if (!m) return `/images/${this.name()}.jpg`;
    return `/images/${this.name()}-${m.s[m.s.length - 1]}.webp`;
  });

  protected readonly srcset = computed(() => {
    const m = this.meta();
    if (!m) return '';
    return m.s.map(w => `/images/${this.name()}-${w}.webp ${w}w`).join(', ');
  });
}
