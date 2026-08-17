import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Img } from '../../shared/img/img';
import { Reveal } from '../../shared/reveal';
import { Icon } from '../../shared/icon/icon';

interface Destination {
  name: string;
  tagline: string;
  image: string;
  icon: string;
  slug: string;
}

interface GalleryItem {
  image: string;
  title: string;
  caption: string;
}

interface Feature {
  icon: string;
  title: string;
  body: string;
}

interface Service {
  icon: string;
  title: string;
  body: string;
  points: string[];
}

interface Testimonial {
  quote: string;
  name: string;
  place: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Img, Reveal, Icon],
  template: `
    <!-- ================= Hero =================
         The section height is driven by its content (min-height, not a fixed
         height with overflow: hidden), so nothing below the fold gets clipped. -->
    <section class="hero">
      <div class="hero__media" aria-hidden="true">
        <app-img
          name="133949262247186237"
          alt=""
          sizes="100vw"
          [priority]="true"
          imgClass="hero__img" />
      </div>

      <div class="hero__inner">
        <p class="hero__eyebrow">Since 2016 · 10,000+ travellers</p>
        <h1 class="hero__title">
          Discover the <span class="hero__accent">Incredible</span> India
        </h1>
        <p class="hero__lead">
          Curated journeys across diverse landscapes, ancient heritage and living
          cultures — planned end to end by people who travel them first.
        </p>
        <div class="hero__actions">
          <a class="btn btn-warning btn-lg" routerLink="/packages">Explore Destinations</a>
          <a class="btn btn-outline-light btn-lg" routerLink="/contact">Plan Your Trip</a>
        </div>
      </div>

      <div class="hero__scroll" aria-hidden="true">
        <span class="hero__scroll-line"></span>
      </div>
    </section>

    <!-- ================= Quick links =================
         Lifted out of the hero so the headline has room to breathe and these
         stay tappable on a phone. -->
    <nav class="quicklinks" aria-label="Browse by trip type">
      <div class="container quicklinks__grid">
        @for (link of quickLinks(); track link.slug) {
          <a class="quicklink" [routerLink]="'/' + link.slug">
            <span class="quicklink__icon"><app-icon [name]="link.icon" /></span>
            <span class="quicklink__label">{{ link.name }}</span>
          </a>
        }
      </div>
    </nav>

    <!-- ================= Stats ================= -->
    <section class="stats">
      <div class="container stats__grid">
        @for (stat of stats(); track stat.label; let i = $index) {
          <div class="stat" appReveal [revealDelay]="i * 80">
            <p class="stat__value">{{ stat.value }}</p>
            <p class="stat__label">{{ stat.label }}</p>
          </div>
        }
      </div>
    </section>

    <!-- ================= Destinations ================= -->
    <section class="section destinations">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Where we go</p>
          <h2>Popular Destinations</h2>
          <p class="lead">Our most sought-after routes, refined over hundreds of departures.</p>
        </header>

        <div class="destinations__grid">
          @for (d of destinations(); track d.slug; let i = $index) {
            <button
              type="button"
              class="dcard"
              appReveal
              [revealDelay]="i * 90"
              (click)="navigateToDestination(d.slug)">
              <span class="dcard__media">
                <!-- .destinations__grid is 1 / 2 / 4 columns. -->
                <app-img
                  [name]="d.image"
                  [alt]="d.name"
                  sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 280px" />
                <span class="dcard__badge"><app-icon [name]="d.icon" /></span>
              </span>
              <span class="dcard__body">
                <span class="dcard__title">{{ d.name }}</span>
                <span class="dcard__tagline">{{ d.tagline }}</span>
                <span class="dcard__cta">View packages <app-icon name="arrow-right" /></span>
              </span>
            </button>
          }
        </div>
      </div>
    </section>

    <!-- ================= Why choose us ================= -->
    <section class="section why">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Why choose us</p>
          <h2>Travel planned by people who go</h2>
          <p class="lead">Eight years of routes, fixers and hotels we have personally checked.</p>
        </header>

        <div class="why__grid">
          @for (f of features(); track f.title; let i = $index) {
            <article class="fcard" appReveal [revealDelay]="i * 80">
              <span class="fcard__icon"><app-icon [name]="f.icon" /></span>
              <h3 class="fcard__title">{{ f.title }}</h3>
              <p class="fcard__body">{{ f.body }}</p>
            </article>
          }
        </div>

        <header class="section-head section-head--sub" appReveal>
          <p class="eyebrow">Extra services</p>
          <h3>Everything else, handled</h3>
        </header>

        <div class="services__grid">
          @for (s of services(); track s.title; let i = $index) {
            <article class="scard" appReveal [revealDelay]="i * 90">
              <span class="scard__icon"><app-icon [name]="s.icon" /></span>
              <div>
                <h4 class="scard__title">{{ s.title }}</h4>
                <p class="scard__body">{{ s.body }}</p>
                <ul class="scard__list">
                  @for (p of s.points; track p) {
                    <li><app-icon name="check" />{{ p }}</li>
                  }
                </ul>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- ================= Gallery =================
         28 images, every one lazy-loaded and served at gallery-tile size, so
         they cost nothing until the reader scrolls this far. -->
    <section class="section gallery">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Gallery</p>
          <h2>Scenes from the road</h2>
          <p class="lead">Landscapes and heritage from recent Happy Ghumakkads departures.</p>
        </header>

        <div class="gallery__grid">
          @for (g of visibleGallery(); track g.image; let i = $index) {
            <figure class="gtile" appReveal [revealDelay]="(i % 4) * 70">
              <!-- sizes mirrors .gallery__grid's column count at each
                   breakpoint (1 / 2 / 3 / 4 cols); overstating it makes retina
                   phones fetch a variant twice as large as the tile needs. -->
              <app-img
                [name]="g.image"
                [alt]="g.title"
                sizes="(max-width: 420px) 92vw, (max-width: 720px) 46vw, (max-width: 1024px) 31vw, 290px" />
              <figcaption class="gtile__cap">
                <span class="gtile__title">{{ g.title }}</span>
                <span class="gtile__sub">{{ g.caption }}</span>
              </figcaption>
            </figure>
          }
        </div>

        <div class="gallery__cta">
          @if (!galleryExpanded() && gallery().length > galleryPreview) {
            <button type="button" class="btn btn-outline-secondary btn-lg" (click)="showAllGallery()">
              Show all {{ gallery().length }} photos
            </button>
          }
          <a class="btn btn-primary btn-lg" routerLink="/packages">Explore all destinations</a>
        </div>
      </div>
    </section>

    <!-- ================= Testimonials ================= -->
    <section class="section testimonials">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow">Travellers</p>
          <h2>What our travellers say</h2>
        </header>

        <div class="testimonials__grid">
          @for (t of testimonials(); track t.name; let i = $index) {
            <figure class="tcard" appReveal [revealDelay]="i * 90">
              <div class="tcard__stars" [attr.aria-label]="'Rated 5 out of 5'">
                @for (s of [1, 2, 3, 4, 5]; track s) {
                  <app-icon name="star" />
                }
              </div>
              <blockquote class="tcard__quote">{{ t.quote }}</blockquote>
              <figcaption class="tcard__author">
                <span class="tcard__avatar">
                  <app-img [name]="t.avatar" [alt]="t.name" sizes="52px" />
                </span>
                <span>
                  <span class="tcard__name">{{ t.name }}</span>
                  <span class="tcard__place">{{ t.place }}</span>
                </span>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>

    <!-- ================= CTA ================= -->
    <section class="cta">
      <div class="container cta__inner" appReveal>
        <h2 class="cta__title">Ready for your next adventure?</h2>
        <p class="cta__lead">Tell us roughly when and where — we will come back with a route.</p>
        <div class="cta__actions">
          <a class="btn btn-warning btn-lg" routerLink="/packages">Start planning</a>
          <a class="btn btn-outline-light btn-lg" routerLink="/contact">Talk to us</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .container {
      width: min(100% - 2.5rem, var(--container));
      margin-inline: auto;
    }

    .section-head {
      max-width: 62ch;
      margin-inline: auto;
      margin-bottom: var(--space-7);
      text-align: center;
    }

    .section-head--sub {
      margin-top: var(--space-8);
    }

    /* ---------------- hero ---------------- */

    .hero {
      position: relative;
      display: grid;
      place-items: center;
      /* svh keeps mobile browser chrome from causing a jump on scroll. */
      min-height: clamp(34rem, 82svh, 48rem);
      padding-block: var(--space-9) var(--space-8);
      overflow: hidden;
      isolation: isolate;
    }

    .hero__media {
      position: absolute;
      inset: 0;
      z-index: -2;
    }

    .hero__media ::ng-deep .hero__img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      transform: scale(1.06);
      animation: heroDrift 26s var(--ease-out) infinite alternate;
    }

    @keyframes heroDrift {
      from { transform: scale(1.06) translate3d(0, 0, 0); }
      to   { transform: scale(1.14) translate3d(0, -1.5%, 0); }
    }

    /* Two-stop scrim: darker at the bottom where the text sits, so the headline
       clears WCAG contrast over any photo without flattening the image. */
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        linear-gradient(180deg, rgba(6, 48, 46, 0.55) 0%, rgba(6, 48, 46, 0.25) 38%, rgba(6, 48, 46, 0.85) 100%),
        radial-gradient(90% 60% at 50% 40%, transparent 40%, rgba(6, 48, 46, 0.45) 100%);
    }

    .hero__inner {
      width: min(100% - 2.5rem, 62rem);
      margin-inline: auto;
      text-align: center;
      color: #fff;
    }

    .hero__eyebrow {
      display: inline-block;
      font-size: var(--step--1);
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--accent-200);
      padding: 0.45rem 1.1rem;
      border: 1px solid rgba(255, 255, 255, 0.28);
      border-radius: var(--r-pill);
      backdrop-filter: blur(6px);
      background: rgba(255, 255, 255, 0.08);
      margin-bottom: var(--space-5);
    }

    .hero__title {
      font-size: var(--step-5);
      color: #fff;
      margin-bottom: var(--space-4);
      text-shadow: 0 2px 24px rgba(6, 48, 46, 0.4);
    }

    .hero__accent {
      color: var(--accent-400);
    }

    .hero__lead {
      max-width: 46ch;
      margin: 0 auto var(--space-6);
      font-size: var(--step-1);
      color: rgba(255, 255, 255, 0.92);
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      justify-content: center;
    }

    .hero__scroll {
      position: absolute;
      bottom: 1.6rem;
      left: 50%;
      translate: -50% 0;
    }

    .hero__scroll-line {
      display: block;
      inline-size: 2px;
      block-size: 46px;
      border-radius: 2px;
      background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.85));
      animation: scrollHint 2.2s var(--ease-out) infinite;
    }

    @keyframes scrollHint {
      0%   { opacity: 0; transform: translateY(-10px) scaleY(0.6); }
      45%  { opacity: 1; }
      100% { opacity: 0; transform: translateY(12px) scaleY(1); }
    }

    /* ---------------- quick links ---------------- */

    .quicklinks {
      position: relative;
      z-index: 2;
      margin-top: calc(var(--space-7) * -1);
      padding-inline: 0;
    }

    .quicklinks__grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: var(--space-3);
      background: var(--surface);
      border: 1px solid var(--ink-100);
      border-radius: var(--r-xl);
      box-shadow: var(--shadow-xl);
      padding: var(--space-5) var(--space-4);
    }

    .quicklink {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-1);
      border-radius: var(--r-md);
      color: var(--ink-700);
      text-align: center;
      transition: background-color var(--dur-fast) var(--ease-out),
                  transform var(--dur-fast) var(--ease-out);
    }

    .quicklink:hover {
      background: var(--brand-50);
      transform: translateY(-3px);
      color: var(--brand-800);
    }

    .quicklink__icon {
      display: grid;
      place-items: center;
      inline-size: 52px;
      block-size: 52px;
      border-radius: 50%;
      background: linear-gradient(140deg, var(--accent-400), var(--accent-600));
      color: #fff;
      font-size: 1.25rem;
      box-shadow: 0 6px 18px rgba(232, 133, 15, 0.28);
      transition: transform var(--dur) var(--ease-out);
    }

    .quicklink:hover .quicklink__icon {
      transform: translateY(-2px) scale(1.06);
    }

    .quicklink__label {
      font-size: var(--step--1);
      font-weight: 600;
    }

    /* ---------------- stats ---------------- */

    .stats {
      padding-block: var(--space-8) var(--space-6);
    }

    .stats__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-5);
      text-align: center;
    }

    .stat__value {
      font-size: var(--step-3);
      font-weight: 700;
      line-height: 1;
      color: var(--brand-700);
      letter-spacing: -0.03em;
    }

    .stat__label {
      margin-top: var(--space-2);
      font-size: var(--step--1);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--ink-400);
    }

    /* ---------------- destinations ---------------- */

    .destinations {
      background: var(--surface);
    }

    .destinations__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-5);
    }

    .dcard {
      display: flex;
      flex-direction: column;
      text-align: left;
      background: var(--surface);
      border: 1px solid var(--ink-100);
      border-radius: var(--r-lg);
      overflow: hidden;
      cursor: pointer;
      font: inherit;
      color: inherit;
      padding: 0;
      transition: transform var(--dur) var(--ease-out),
                  box-shadow var(--dur) var(--ease-out),
                  border-color var(--dur) var(--ease-out);
    }

    .dcard:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: var(--brand-200);
    }

    .dcard__media {
      position: relative;
      display: block;
      /* Fixed ratio instead of a fixed pixel height: the tile keeps its shape at
         every breakpoint and reserves space before the image loads. */
      aspect-ratio: 4 / 3;
      overflow: hidden;
    }

    .dcard__media ::ng-deep img {
      transition: transform 600ms var(--ease-out);
    }

    .dcard:hover .dcard__media ::ng-deep img {
      transform: scale(1.07);
    }

    .dcard__badge {
      position: absolute;
      right: 12px;
      bottom: 12px;
      display: grid;
      place-items: center;
      inline-size: 40px;
      block-size: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.92);
      color: var(--brand-700);
      backdrop-filter: blur(6px);
      box-shadow: var(--shadow-md);
    }

    .dcard__body {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      padding: var(--space-5);
    }

    .dcard__title {
      font-size: var(--step-1);
      font-weight: 700;
      color: var(--ink-900);
      line-height: 1.25;
    }

    .dcard__tagline {
      font-size: var(--step--1);
      color: var(--ink-500);
    }

    .dcard__cta {
      margin-top: var(--space-3);
      font-size: var(--step--1);
      font-weight: 700;
      color: var(--brand-600);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .dcard__cta i {
      transition: transform var(--dur) var(--ease-out);
    }

    .dcard:hover .dcard__cta i {
      transform: translateX(4px);
    }

    /* ---------------- why choose us ---------------- */

    .why {
      background: var(--canvas);
    }

    .why__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-5);
    }

    .fcard {
      background: var(--surface);
      border: 1px solid var(--ink-100);
      border-radius: var(--r-lg);
      padding: var(--space-6);
      transition: transform var(--dur) var(--ease-out),
                  box-shadow var(--dur) var(--ease-out);
    }

    .fcard:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
    }

    .fcard__icon {
      display: grid;
      place-items: center;
      inline-size: 56px;
      block-size: 56px;
      border-radius: var(--r-md);
      background: var(--brand-50);
      color: var(--brand-600);
      font-size: 1.4rem;
      margin-bottom: var(--space-4);
    }

    .fcard__title {
      font-size: var(--step-1);
      margin-bottom: var(--space-2);
    }

    .fcard__body {
      font-size: var(--step-0);
      color: var(--ink-500);
    }

    .services__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
    }

    .scard {
      display: flex;
      gap: var(--space-4);
      background: var(--surface);
      border: 1px solid var(--ink-100);
      border-radius: var(--r-lg);
      padding: var(--space-6);
      transition: transform var(--dur) var(--ease-out),
                  box-shadow var(--dur) var(--ease-out);
    }

    .scard:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
    }

    .scard__icon {
      flex: 0 0 auto;
      display: grid;
      place-items: center;
      inline-size: 48px;
      block-size: 48px;
      border-radius: var(--r-md);
      background: var(--accent-100);
      color: var(--accent-600);
      font-size: 1.2rem;
    }

    .scard__title {
      font-size: var(--step-1);
      margin-bottom: var(--space-2);
    }

    .scard__body {
      font-size: var(--step--1);
      color: var(--ink-500);
      margin-bottom: var(--space-3);
    }

    .scard__list {
      list-style: none;
      display: grid;
      gap: var(--space-2);
    }

    .scard__list li {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--step--1);
      color: var(--ink-600);
    }

    .scard__list i {
      color: var(--brand-500);
      font-size: 0.75rem;
    }

    /* ---------------- gallery ---------------- */

    .gallery {
      background: var(--surface);
    }

    .gallery__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* dense back-fills the holes the 2x2 feature tiles would otherwise leave. */
      grid-auto-flow: row dense;
      gap: var(--space-4);
    }

    .gtile {
      position: relative;
      aspect-ratio: 1 / 1;
      border-radius: var(--r-md);
      overflow: hidden;
      background: var(--ink-100);
    }

    /* Every 6th tile spans two columns and two rows, so the grid reads as a
       composed layout rather than a uniform contact sheet. */
    .gtile:nth-child(6n + 1) {
      grid-column: span 2;
      grid-row: span 2;
      aspect-ratio: auto;
    }

    .gtile ::ng-deep img {
      transition: transform 700ms var(--ease-out);
    }

    .gtile:hover ::ng-deep img {
      transform: scale(1.08);
    }

    .gtile__cap {
      position: absolute;
      inset: auto 0 0 0;
      display: grid;
      gap: 2px;
      padding: var(--space-5) var(--space-4) var(--space-4);
      background: linear-gradient(transparent, rgba(6, 48, 46, 0.88));
      color: #fff;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out);
    }

    .gtile:hover .gtile__cap,
    .gtile:focus-within .gtile__cap {
      opacity: 1;
      transform: none;
    }

    .gtile__title {
      font-weight: 700;
      font-size: var(--step-0);
    }

    .gtile__sub {
      font-size: var(--step--1);
      color: rgba(255, 255, 255, 0.82);
    }

    .gallery__cta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      justify-content: center;
      margin-top: var(--space-7);
    }

    /* ---------------- testimonials ---------------- */

    .testimonials {
      background: var(--canvas);
    }

    .testimonials__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
    }

    .tcard {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      background: var(--surface);
      border: 1px solid var(--ink-100);
      border-radius: var(--r-lg);
      padding: var(--space-6);
      box-shadow: var(--shadow-sm);
    }

    .tcard__stars {
      display: flex;
      gap: 3px;
      color: var(--accent-500);
      font-size: 0.85rem;
    }

    .tcard__quote {
      font-size: var(--step-0);
      color: var(--ink-700);
      line-height: 1.7;
      flex: 1;
    }

    .tcard__author {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding-top: var(--space-4);
      border-top: 1px solid var(--ink-100);
    }

    .tcard__avatar {
      flex: 0 0 auto;
      inline-size: 52px;
      block-size: 52px;
      border-radius: 50%;
      overflow: hidden;
    }

    .tcard__name {
      display: block;
      font-weight: 700;
      color: var(--ink-900);
    }

    .tcard__place {
      display: block;
      font-size: var(--step--1);
      color: var(--ink-400);
    }

    /* ---------------- CTA ---------------- */

    .cta {
      padding-block: var(--section-y);
      background:
        radial-gradient(120% 120% at 15% 0%, var(--brand-600) 0%, transparent 55%),
        linear-gradient(135deg, var(--brand-800), var(--brand-900));
      color: #fff;
    }

    .cta__inner {
      text-align: center;
      max-width: 54ch;
    }

    .cta__title {
      color: #fff;
      font-size: var(--step-3);
      margin-bottom: var(--space-3);
    }

    .cta__lead {
      font-size: var(--step-1);
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: var(--space-6);
    }

    .cta__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      justify-content: center;
    }

    /* ---------------- responsive ---------------- */

    @media (max-width: 1024px) {
      .quicklinks__grid { grid-template-columns: repeat(3, 1fr); }
      .destinations__grid,
      .why__grid { grid-template-columns: repeat(2, 1fr); }
      .services__grid,
      .testimonials__grid { grid-template-columns: 1fr; }
      .gallery__grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 720px) {
      .hero {
        min-height: clamp(30rem, 76svh, 40rem);
        padding-block: var(--space-8) var(--space-7);
      }

      .quicklinks {
        margin-top: calc(var(--space-6) * -1);
      }

      .quicklinks__grid {
        grid-template-columns: repeat(3, 1fr);
        padding: var(--space-4) var(--space-2);
        gap: var(--space-2);
        border-radius: var(--r-lg);
      }

      .quicklink__icon { inline-size: 44px; block-size: 44px; font-size: 1.05rem; }

      .stats__grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-6) var(--space-4); }

      .destinations__grid,
      .why__grid { grid-template-columns: 1fr; }

      .gallery__grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }

      /* The feature tile would dominate a 2-column phone grid — flatten it. */
      .gtile:nth-child(6n + 1) {
        grid-column: span 2;
        grid-row: span 1;
        aspect-ratio: 16 / 10;
      }

      .scard { flex-direction: column; gap: var(--space-3); }

      /* Captions have no hover on touch, so show them by default. */
      .gtile__cap { opacity: 1; transform: none; padding: var(--space-4) var(--space-3) var(--space-3); }

      .hero__actions .btn,
      .cta__actions .btn { flex: 1 1 14rem; }
    }

    @media (max-width: 420px) {
      .quicklinks__grid { grid-template-columns: repeat(2, 1fr); }
      /* Deliberately still two columns: a single full-width column would make
         each tile ~326px, forcing an 800w file per image on a 2x phone and
         stretching the page past 18,000px. */
      .gallery__grid { gap: var(--space-2); }
    }
  `,
})
export class Home {
  readonly quickLinks = signal([
    { name: 'Packages', slug: 'packages', icon: 'fa-map-marked-alt' },
    { name: 'Adventure', slug: 'adventure-photography', icon: 'fa-hiking' },
    { name: 'Camping', slug: 'camping', icon: 'fa-campground' },
    { name: 'Food', slug: 'food-tours', icon: 'fa-utensils' },
    { name: 'Spiritual', slug: 'spiritual-tours', icon: 'fa-om' },
    { name: 'International', slug: 'international-tours', icon: 'fa-globe' },
  ]);

  readonly stats = signal([
    { value: '50+', label: 'Tour packages' },
    { value: '10,000+', label: 'Happy travellers' },
    { value: '8+', label: 'Years experience' },
    { value: '4.9/5', label: 'Customer rating' },
  ]);

  // Images chosen for resolution as well as subject: the destination tiles render
  // ~280px wide at 2x, so every source here is at least 1000px on the long edge.
  readonly destinations = signal<Destination[]>([
    {
      name: 'Madhya Pradesh',
      tagline: 'The heart of India',
      image: 'khajuraho1',
      icon: 'fa-monument',
      slug: 'madhya-pradesh',
    },
    {
      name: 'North India',
      tagline: 'Cultural heritage',
      image: 'rajasthan',
      icon: 'fa-gopuram',
      slug: 'north-india',
    },
    {
      name: 'Jammu & Kashmir',
      tagline: 'Paradise on earth',
      image: '133949262268459566',
      icon: 'fa-snowflake',
      slug: 'jammu-kashmir',
    },
    {
      name: 'Leh-Ladakh',
      tagline: 'Land of high passes',
      image: '133949262277622400',
      icon: 'fa-mountain',
      slug: 'leh-ladakh',
    },
  ]);

  readonly features = signal<Feature[]>([
    {
      icon: 'fa-award',
      title: 'Expert guidance',
      body: 'Eight years building routes across India, led by guides who know the ground.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Safe & secure',
      body: 'Verified partners, vetted drivers and 24/7 support for the length of your trip.',
    },
    {
      icon: 'fa-indian-rupee-sign',
      title: 'Honest pricing',
      body: 'What we quote is what you pay. No hidden costs bolted on at the last minute.',
    },
    {
      icon: 'fa-hotel',
      title: 'Stays worth staying in',
      body: 'Hand-picked hotels, homestays and camps we have checked ourselves.',
    },
  ]);

  readonly services = signal<Service[]>([
    {
      icon: 'fa-shield-halved',
      title: 'Travel insurance',
      body: 'Comprehensive cover arranged alongside your booking.',
      points: ['Medical coverage', 'Trip cancellation', 'Baggage protection'],
    },
    {
      icon: 'fa-camera',
      title: 'Photography tours',
      body: 'Travel with a photographer who knows the light and the locations.',
      points: ['Professional guide', 'High-resolution photos', 'Edited highlight reel'],
    },
    {
      icon: 'fa-utensils',
      title: 'Culinary experiences',
      body: 'Eat the way the region actually eats, beyond the tourist menu.',
      points: ['Local chefs', 'Street food trails', 'Cooking classes'],
    },
  ]);

  readonly testimonials = signal<Testimonial[]>([
    {
      quote:
        'Amazing experience in Kashmir. The houseboat stay and the shikara ride were unforgettable — Happy Ghumakkads got every detail right.',
      name: 'Rahul Sharma',
      place: 'Mumbai, Maharashtra',
      avatar: 'wps1',
    },
    {
      quote:
        'The Leh-Ladakh trip was a dream come true. Excellent planning, great guides and breathtaking views the whole way.',
      name: 'Priya Patel',
      place: 'Ahmedabad, Gujarat',
      avatar: 'wps',
    },
    {
      quote:
        'Kanha National Park safari was incredible — we saw tigers, and the resort was superb. Thank you Happy Ghumakkads!',
      name: 'Amit Kumar',
      place: 'Delhi, NCR',
      avatar: 'wps2',
    },
  ]);

  readonly gallery = signal<GalleryItem[]>([
    { image: 'HGI-1', title: 'Scenic beauty', caption: 'Breathtaking landscapes' },
    { image: 'HGI-2', title: 'Heritage sites', caption: 'Ancient architectural marvels' },
    { image: 'HGI-3', title: 'Mountain paradise', caption: 'Majestic Himalayan peaks' },
    { image: 'HGI-4', title: 'Desert safari', caption: 'Golden sand dunes' },
    { image: 'HGI-5', title: 'Coastal wonders', caption: 'Pristine beaches and shores' },
    { image: 'HGI-6', title: 'Wildlife safari', caption: 'Exotic flora and fauna' },
    { image: 'HGI-7', title: 'Sacred temples', caption: 'Spiritual architecture' },
    { image: 'HGI-8', title: 'Backwaters', caption: 'Serene waterways' },
    { image: 'HGI-9', title: 'Historic forts', caption: 'Medieval architecture' },
    { image: 'HGI-10', title: 'Lush gardens', caption: 'Botanical paradises' },
    { image: 'HGI-11', title: 'Rural life', caption: 'Traditional villages' },
    { image: 'HGI-12', title: 'Vibrant festivals', caption: 'Cultural celebrations' },
    { image: 'HGI-13', title: 'Local markets', caption: 'Bustling bazaars' },
    { image: 'HGI-14', title: 'Sacred rivers', caption: 'Holy waterways' },
    { image: 'HGI-15', title: 'Hill stations', caption: 'Cool mountain retreats' },
    { image: 'HGI-16', title: 'Ancient caves', caption: 'Rock-cut architecture' },
    { image: 'HGI-17', title: 'Pristine lakes', caption: 'Crystal clear waters' },
    { image: 'HGI-18', title: 'Majestic waterfalls', caption: "Nature's cascades" },
    { image: 'HGI-19', title: 'Spectacular sunsets', caption: 'Golden hour magic' },
    { image: 'HGI-20', title: 'Modern architecture', caption: 'Contemporary designs' },
    { image: 'HGI-21', title: 'Dense forests', caption: 'Green canopies' },
    { image: 'HGI-22', title: 'Tropical islands', caption: 'Paradise destinations' },
    { image: 'HGI-23', title: 'Historic monuments', caption: 'Timeless landmarks' },
    { image: 'HGI-24', title: 'Scenic valleys', caption: 'Lush green landscapes' },
    { image: 'HGI-25', title: 'High plateaus', caption: 'Elevated landscapes' },
    { image: 'HGI-26', title: 'Ancient bridges', caption: 'Engineering marvels' },
    { image: 'HGI-27', title: 'Modern cities', caption: 'Urban landscapes' },
    { image: 'HGI-28', title: 'Dawn views', caption: 'Beautiful sunrises' },
  ]);

  /** Tiles rendered before the reader opts into the rest. */
  readonly galleryPreview = 12;
  readonly galleryExpanded = signal(false);

  /**
   * Only the first slice is in the DOM until asked for. Lazy loading already
   * defers the bytes, but keeping 28 tiles out of the layout also stops the
   * phone page from running to ~18,000px of mostly-unseen thumbnails.
   */
  readonly visibleGallery = computed(() =>
    this.galleryExpanded() ? this.gallery() : this.gallery().slice(0, this.galleryPreview),
  );

  constructor(private router: Router) {}

  showAllGallery(): void {
    this.galleryExpanded.set(true);
  }

  // There are no per-destination routes, so destination cards deep-link into the
  // packages page with the destination as a query param instead of navigating to
  // a path that would fall through to the wildcard route.
  navigateToDestination(destination: string): void {
    this.router.navigate(['/packages'], { queryParams: { destination } });
  }

  navigateToPackages(): void {
    this.router.navigate(['/packages']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
