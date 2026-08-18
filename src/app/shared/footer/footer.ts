import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
import { Deco } from '../deco/deco';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Deco],
  template: `
    <footer class="site-footer">
      <app-deco name="contours" class="site-footer__texture" />

      <div class="container">
        <div class="site-footer__grid">
          <!-- Brand -->
          <div class="fcol fcol--brand">
            <a class="fbrand" routerLink="/">
              <img src="/images/cropped-Logo-png-400.webp" alt="" width="400" height="489" />
              <span>
                <strong>Happy Ghumakkads</strong>
                <small>Discover Incredible India</small>
              </span>
            </a>
            <p class="fcol__blurb">
              Your trusted travel partner for unforgettable journeys across India
              and beyond — planned end to end, costed up front.
            </p>
            <div class="fsocial">
              <a href="https://www.instagram.com/happyghumakkads/" target="_blank" rel="noopener" aria-label="Instagram">
                <app-icon name="instagram" />
              </a>
              <a href="https://www.facebook.com/happyghumakkads/" target="_blank" rel="noopener" aria-label="Facebook">
                <app-icon name="facebook-f" />
              </a>
              <a href="https://www.twitter.com/happyghumakkads" target="_blank" rel="noopener" aria-label="Twitter">
                <app-icon name="twitter" />
              </a>
              <a href="https://www.youtube.com/happyghumakkads" target="_blank" rel="noopener" aria-label="YouTube">
                <app-icon name="youtube" />
              </a>
            </div>
          </div>

          <!-- Site navigation. The old footer had none: every route was a dead
               end that pushed people back to the header. -->
          <nav class="fcol" aria-label="Footer">
            <h2 class="fcol__title">Explore</h2>
            <ul class="flist">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/packages">Tour Packages</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/careers">Careers</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </nav>

          <nav class="fcol" aria-label="Tour types">
            <h2 class="fcol__title">Tour types</h2>
            <ul class="flist">
              <li><a routerLink="/spiritual-tours">Pilgrimage</a></li>
              <li><a routerLink="/adventure-photography">Adventure &amp; Photography</a></li>
              <li><a routerLink="/cultural-heritage-tours">Cultural &amp; Heritage</a></li>
              <li><a routerLink="/camping">Camping</a></li>
              <li><a routerLink="/international-tours">International</a></li>
            </ul>
          </nav>

          <div class="fcol">
            <h2 class="fcol__title">Get in touch</h2>
            <ul class="fcontact">
              <li>
                <app-icon name="map-marker-alt" />
                <span>Mishra Complex, Ground Floor, Chauhan Nagar, Pateri, Satna (M.P.) 485001</span>
              </li>
              <li>
                <app-icon name="phone" />
                <a href="tel:+918447133338">+91 84471 33338</a>
              </li>
              <li>
                <app-icon name="envelope" />
                <a href="mailto:info.happyghumakkads&#64;gmail.com">info.happyghumakkads&#64;gmail.com</a>
              </li>
              <li>
                <app-icon name="clock" />
                <span>Mon–Sat 9:00 AM – 7:00 PM · Sunday emergency only</span>
              </li>
              <li>
                <app-icon name="headset" />
                <span>24×7 on-trip support</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="site-footer__bar">
          <p>&copy; {{ year }} Happy Ghumakkads. All rights reserved.</p>
          <p class="site-footer__made">Made for travellers <app-icon name="heart" /></p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host { display: block; }

    .site-footer {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      /* Brand ink, not the previous neutral #1a1a1a→#2d2d2d grey, which read as
         a different site from the one above it. */
      background: linear-gradient(160deg, var(--brand-900) 0%, #04211f 60%, var(--ink-900) 100%);
      color: rgba(255, 255, 255, 0.72);
      padding-block: clamp(2.5rem, 2rem + 4vw, 4.5rem) 0;
    }

    .site-footer__texture {
      position: absolute;
      inset: -30% -10% auto;
      z-index: -1;
      block-size: 140%;
      color: #fff;
      opacity: 0.07;
    }

    .container {
      width: min(100% - 2.5rem, var(--container));
      margin-inline: auto;
    }

    .site-footer__grid {
      display: grid;
      gap: clamp(1.75rem, 1.25rem + 2vw, 3rem);
      grid-template-columns: 1fr;
    }

    @media (min-width: 560px) {
      .site-footer__grid { grid-template-columns: repeat(2, 1fr); }
      .fcol--brand { grid-column: 1 / -1; }
    }

    @media (min-width: 1000px) {
      .site-footer__grid { grid-template-columns: 1.6fr 1fr 1fr 1.4fr; }
      .fcol--brand { grid-column: auto; }
    }

    /* -- brand -- */

    .fbrand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    .fbrand img {
      inline-size: 46px;
      block-size: auto;
      flex: 0 0 auto;
      background: #fff;
      border-radius: 10px;
      padding: 4px;
    }

    .fbrand span { display: flex; flex-direction: column; }
    .fbrand strong { font-size: 1.05rem; line-height: 1.2; }

    .fbrand small {
      font-size: 0.66rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-400);
    }

    .fcol__blurb {
      font-size: var(--step--1);
      max-inline-size: 42ch;
      margin-bottom: 1.25rem;
    }

    .fsocial { display: flex; gap: 0.6rem; }

    .fsocial a {
      display: grid;
      place-items: center;
      inline-size: 40px;
      block-size: 40px;
      color: #fff;
      background: rgba(255, 255, 255, 0.09);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 50%;
      transition: background-color var(--dur-fast) var(--ease-out),
                  color var(--dur-fast) var(--ease-out),
                  transform var(--dur-fast) var(--ease-out);
    }

    .fsocial a:hover {
      color: var(--ink-900);
      background: var(--accent-400);
      border-color: var(--accent-400);
      transform: translateY(-3px);
    }

    /* -- columns -- */

    .fcol__title {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--accent-400);
      margin-bottom: 1rem;
    }

    .flist,
    .fcontact { list-style: none; display: grid; gap: 0.7rem; }

    .flist a {
      font-size: var(--step--1);
      color: rgba(255, 255, 255, 0.72);
      transition: color var(--dur-fast) var(--ease-out),
                  padding-inline-start var(--dur-fast) var(--ease-out);
    }

    .flist a:hover {
      color: #fff;
      padding-inline-start: 6px;
    }

    .fcontact li {
      display: grid;
      grid-template-columns: 1.1em 1fr;
      gap: 0.7em;
      align-items: start;
      font-size: var(--step--1);
      line-height: 1.55;
    }

    .fcontact app-icon {
      margin-top: 0.3em;
      color: var(--accent-400);
    }

    .fcontact a { color: rgba(255, 255, 255, 0.86); }
    .fcontact a:hover { color: var(--accent-400); }

    /* -- bottom bar -- */

    .site-footer__bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-top: clamp(2rem, 1.5rem + 2vw, 3rem);
      padding-block: 1.25rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      font-size: 0.82rem;
    }

    .site-footer__made {
      display: inline-flex;
      align-items: center;
      gap: 0.4em;
    }

    .site-footer__made app-icon { color: var(--accent-500); }

    @media (max-width: 559px) {
      .site-footer__bar { justify-content: center; text-align: center; }
    }
  `,
})
export class Footer {
  /** Stamped at render, so the notice never says 2024 in 2027. */
  readonly year = new Date().getFullYear();
}
