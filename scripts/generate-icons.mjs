/**
 * Builds src/app/shared/icon-data.ts from the icons actually referenced in the
 * app, using @fortawesome/fontawesome-free's SVG sources.
 *
 *   npm run icons:generate
 *
 * This replaces the FontAwesome webfont, which shipped ~210 kB of woff2
 * (fa-solid-900 + fa-brands-400) plus ~100 kB of CSS to draw a few dozen glyphs.
 *
 * Names are collected from two places:
 *   1. <app-icon name="camera" />                 — static template usage
 *   2. icon: 'fa-camera'  /  icon: 'camera'       — component data feeding
 *                                                   <app-icon [name]="…" />
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FA = path.join(REPO, 'node_modules/@fortawesome/fontawesome-free/svgs');
const OUT = path.join(REPO, 'src/app/shared/icon-data.ts');

const grep = cmd => {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  } catch {
    return [];
  }
};

const names = new Set();

// 1. Static <app-icon name="…">
for (const line of grep(`grep -rhoE '<app-icon[^>]*name="[a-z0-9-]+"' ${REPO}/src/`)) {
  const m = line.match(/name="([a-z0-9-]+)"/);
  if (m) names.add(m[1]);
}

// 2. Icon names held in component data, with or without the legacy fa- prefix.
for (const line of grep(`grep -rhoE "icon: *'(fa-)?[a-z0-9-]+'" ${REPO}/src/`)) {
  const m = line.match(/'(?:fa-)?([a-z0-9-]+)'/);
  if (m) names.add(m[1]);
}

// FontAwesome 6/7 renamed a number of icons; map legacy names onto the file
// that exists in this package version.
const ALIAS = {
  'shield-alt': 'shield-halved',
  'map-marker-alt': 'location-dot',
  'phone-alt': 'phone',
  'map-marked-alt': 'map-location-dot',
  'globe-asia': 'earth-asia',
  'theater-masks': 'masks-theater',
  'temple-hindu': 'gopuram',
  'money-bill': 'money-bill-1',
  'check-circle': 'circle-check',
  'exclamation-circle': 'circle-exclamation',
  hiking: 'person-hiking',
  pray: 'person-praying',
};

const DIRS = ['solid', 'brands', 'regular'];
const icons = {};
const missing = [];

for (const name of [...names].sort()) {
  let found = null;
  for (const cand of [name, ALIAS[name]].filter(Boolean)) {
    for (const dir of DIRS) {
      const p = path.join(FA, dir, `${cand}.svg`);
      if (existsSync(p)) { found = p; break; }
    }
    if (found) break;
  }
  if (!found) { missing.push(name); continue; }

  const svg = readFileSync(found, 'utf8');
  const viewBox = (svg.match(/viewBox="([^"]+)"/) || [])[1];
  const paths = [...svg.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map(m => m[1]);
  if (!viewBox || !paths.length) { missing.push(name); continue; }

  icons[name] = { v: viewBox, d: paths };
}

const entries = Object.entries(icons).map(
  ([k, v]) => `  '${k}': { v: '${v.v}', d: [${v.d.map(d => `'${d}'`).join(', ')}] },`,
);

const ts = `/**
 * GENERATED — do not edit by hand.
 *
 * Inline path data for exactly the icons this site uses, lifted from
 * @fortawesome/fontawesome-free's SVG sources. Replaces the icon webfont.
 *
 * Regenerate with: npm run icons:generate
 */

export interface IconDef {
  /** SVG viewBox for this glyph. */
  v: string;
  /** One or more path "d" values. */
  d: string[];
}

export const ICONS: Record<string, IconDef> = {
${entries.join('\n')}
};
`;

writeFileSync(OUT, ts);

console.log(`referenced  : ${names.size}`);
console.log(`written     : ${entries.length} icons (${(Buffer.byteLength(ts) / 1024).toFixed(1)} kB raw)`);
if (missing.length) console.log(`MISSING     : ${missing.join(', ')}`);
