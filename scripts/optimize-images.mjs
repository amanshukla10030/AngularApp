/**
 * Generates responsive WebP variants for everything in src/assets/images and
 * writes src/app/shared/image-data.ts, which <app-img> uses to build accurate
 * srcset/width/height.
 *
 *   npm run images:optimize
 *
 * Safe to re-run: it regenerates variants in place and skips its own output.
 * Requires sharp (devDependency).
 */
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'src/assets/images');
const OUT = path.join(ROOT, 'src/app/shared/image-data.ts');

/** Width ladder; only widths at or below the source width are emitted. */
const WIDTHS = [400, 800, 1280, 1920];
const QUALITY = 78;

const SOURCE_RE = /\.(jpe?g|png|webp|avif)$/i;
/** Our own output, e.g. hero-800.webp — never treat it as a source. */
const VARIANT_RE = /-\d+\.webp$/i;

const files = readdirSync(DIR).filter(f => SOURCE_RE.test(f) && !VARIANT_RE.test(f));

let origTotal = 0;
let variantTotal = 0;
const manifest = {};

for (const file of files) {
  const src = path.join(DIR, file);
  const origBytes = statSync(src).size;
  origTotal += origBytes;

  const meta = await sharp(src, { failOn: 'none' }).metadata();
  const base = file.replace(SOURCE_RE, '');

  const targets = WIDTHS.filter(w => w <= meta.width);
  // Images smaller than the first rung still need one variant at native size.
  if (targets.length === 0) targets.push(meta.width);
  else if (meta.width > targets[targets.length - 1]) targets.push(meta.width);

  const variants = [];
  for (const w of targets) {
    const buf = await sharp(src, { failOn: 'none' })
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer();
    writeFileSync(path.join(DIR, `${base}-${w}.webp`), buf);
    variantTotal += buf.length;
    variants.push(w);
  }

  manifest[base] = { w: meta.width, h: meta.height, s: variants };
}

const entries = Object.entries(manifest)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `  '${k}': { w: ${v.w}, h: ${v.h}, s: [${v.s.join(', ')}] },`);

writeFileSync(
  OUT,
  `/**
 * GENERATED — do not edit by hand.
 *
 * Intrinsic size and available responsive widths for every image in
 * src/assets/images. Building srcset from this map guarantees we never point at
 * a variant that was not written (which would 404 and break the image).
 *
 * Regenerate with: npm run images:optimize
 */

export interface ImageMeta {
  /** intrinsic width of the source image */
  w: number;
  /** intrinsic height of the source image */
  h: number;
  /** widths available as <base>-<w>.webp */
  s: number[];
}

export const IMAGE_DATA: Record<string, ImageMeta> = {
${entries.join('\n')}
};
`,
);

console.log(`sources     : ${files.length}`);
console.log(`originals   : ${(origTotal / 1048576).toFixed(2)} MB`);
console.log(`variants    : ${(variantTotal / 1048576).toFixed(2)} MB across all widths`);
console.log(`image-data  : ${entries.length} entries -> ${path.relative(ROOT, OUT)}`);
