import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { Deco } from '../../shared/deco/deco';
import { Reveal } from '../../shared/reveal';
import { CATEGORIES, PACKAGES, type TourPackage } from './packages-data';

/** A package as the template consumes it: display strings pre-computed. */
export interface PackageView extends TourPackage {
  name: string;
  priceLabel: string;
  amount: number;
  nights: number;
  themes: string[];
}

interface Theme {
  id: string;
  label: string;
  icon: string;
}

/**
 * Themes are derived from the package title rather than stored, because the
 * titles are the only classification the source content ever carried. Keeping
 * the rules here — visible and editable — beats burying them in the generated
 * data file, which gets overwritten.
 */
const THEME_RULES: (Theme & { match: RegExp })[] = [
  {
    id: 'wildlife',
    label: 'Wildlife & Safari',
    icon: 'binoculars',
    match: /WILDLIFE|SAFARI|KANHA|BANDHAVGARH|PANNA|MADHAI|FOREST/,
  },
  {
    id: 'pilgrimage',
    label: 'Pilgrimage',
    icon: 'om',
    match: /SPIRITUAL|DARSHAN|MAIHAR|CHITRAKOOT|OMKARESHWAR|MAHESHWAR|AYODHYA|JANMABHOOMI|GOLDEN TEMPLE|DWARKA|SOMNATH|UJJAIN/,
  },
  {
    id: 'heritage',
    label: 'Heritage & Culture',
    icon: 'monument',
    match: /HERITAGE|KHAJURAHO|ORCHHA|GWALIOR|MANDU|JAIPUR|RAJASTHAN|DELHI|MAHARASHTRA|BHOPAL|INDORE/,
  },
  {
    id: 'hills',
    label: 'Hills & Valleys',
    icon: 'mountain',
    match: /PANCHMARHI|MANALI|NAINITAL|OOTY|COONOOR|GANGTOK|DARJEELING|SRINAGAR|KASHMIR|SIKKIM/,
  },
  {
    id: 'coast',
    label: 'Coast & Honeymoon',
    icon: 'heart',
    match: /HONEYMOON|ROMANTIC|ODISHA|KUTCH|SENTOSA/,
  },
  {
    id: 'international',
    label: 'International',
    icon: 'globe',
    match: /DUBAI|SINGAPORE/,
  },
];

const DURATION_BANDS = [
  { id: 'short', label: 'Weekend · 2–3 nights', test: (n: number) => n <= 2 },
  { id: 'mid', label: 'Short break · 3–4 nights', test: (n: number) => n === 3 || n === 4 },
  { id: 'long', label: 'Grand tour · 5+ nights', test: (n: number) => n >= 5 },
];

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'duration', label: 'Longest trips' },
] as const;

type SortId = (typeof SORTS)[number]['id'];

/** Words that stay lowercase inside a title-cased headline. */
const MINOR = new Set(['a', 'an', 'and', 'at', 'by', 'for', 'in', 'of', 'on', 'the', 'to', 'with']);

function titleCase(raw: string): string {
  let first = true;
  return raw.toLowerCase().replace(/[\p{L}\p{N}']+/gu, word => {
    const keep = !first && MINOR.has(word);
    first = false;
    return keep ? word : word[0].toUpperCase() + word.slice(1);
  });
}

@Component({
  selector: 'app-packages',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Deco, Reveal],
  templateUrl: './packages.html',
  styleUrls: ['./packages.scss'],
})
export class PackagesComponent {
  readonly categories = CATEGORIES;
  readonly themes = THEME_RULES.map(({ id, label, icon }) => ({ id, label, icon }));
  readonly bands = DURATION_BANDS.map(({ id, label }) => ({ id, label }));
  readonly sorts = SORTS;

  readonly query = signal('');
  readonly theme = signal<string>('');
  readonly band = signal<string>('');
  readonly sort = signal<SortId>('featured');

  /** Source data decorated with everything the template needs to render. */
  private readonly all = computed<PackageView[]>(() =>
    PACKAGES.map(p => ({
      ...p,
      name: titleCase(p.title),
      // "Starting from ₹12,999/-" → "₹12,999" plus a number to sort on.
      priceLabel: (p.price.match(/₹\s?[\d,]+/) ?? [p.price])[0].replace(/\s/g, ''),
      amount: Number((p.price.match(/[\d,]+/) ?? ['0'])[0].replace(/,/g, '')),
      nights: Number((p.duration.match(/(\d+)\s*Night/i) ?? ['', '0'])[1]),
      themes: THEME_RULES.filter(r => r.match.test(p.title)).map(r => r.id),
    })),
  );

  readonly results = computed<PackageView[]>(() => {
    const q = this.query().trim().toLowerCase();
    const theme = this.theme();
    const band = DURATION_BANDS.find(b => b.id === this.band());

    const out = this.all().filter(p => {
      if (theme && !p.themes.includes(theme)) return false;
      if (band && !band.test(p.nights)) return false;
      if (!q) return true;
      // Search the itinerary too — people look for a place name that only
      // appears in the day-by-day copy ("Bhedaghat", "Raneh Falls").
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.days.some(d => d.title.toLowerCase().includes(q))
      );
    });

    switch (this.sort()) {
      case 'price-asc':
        return [...out].sort((a, b) => a.amount - b.amount);
      case 'price-desc':
        return [...out].sort((a, b) => b.amount - a.amount);
      case 'duration':
        return [...out].sort((a, b) => b.nights - a.nights);
      default:
        return out;
    }
  });

  readonly total = PACKAGES.length;

  readonly hasFilters = computed(() => !!(this.query() || this.theme() || this.band()));

  /** Pre-filled WhatsApp enquiry — templates cannot call encodeURIComponent. */
  whatsappLink(p: PackageView): string {
    const text = `Hi, I would like details about the ${p.name} package (${p.duration}).`;
    return `https://wa.me/918447133338?text=${encodeURIComponent(text)}`;
  }

  readonly priceFrom = computed(() =>
    Math.min(...this.all().map(p => p.amount)).toLocaleString('en-IN'),
  );

  /** Clicking the active chip clears it, so the row doubles as its own reset. */
  toggleTheme(id: string): void {
    this.theme.update(cur => (cur === id ? '' : id));
  }

  toggleBand(id: string): void {
    this.band.update(cur => (cur === id ? '' : id));
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onSort(event: Event): void {
    this.sort.set((event.target as HTMLSelectElement).value as SortId);
  }

  clearFilters(): void {
    this.query.set('');
    this.theme.set('');
    this.band.set('');
  }
}
