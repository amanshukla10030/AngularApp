import { ChangeDetectionStrategy, Component, input } from '@angular/core';


/**
 * Decorative inline SVG.
 *
 *   <app-deco name="mountains" />
 *   <app-deco name="contours" tone="light" />
 *
 * Every variant is purely ornamental — always aria-hidden, never carrying
 * meaning the copy does not already state. They are inline (not <img src>) so
 * they inherit brand colour through currentColor/CSS vars and so their moving
 * parts can be stopped by the global prefers-reduced-motion rule.
 *
 * Gradient and pattern ids are per-instance: two <app-deco> of the same variant
 * on one page would otherwise share an id and the second would paint with the
 * first one's fill.
 */
@Component({
  selector: 'app-deco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (name()) {
      <!-- Layered ridgeline. Sits on a section's bottom edge and reads as the
           horizon the next section starts below. -->
      @case ('mountains') {
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <!-- Three planes, and deliberately three different landforms: sharp
               irregular peaks far off, rounded hills behind them, a soft
               foreground swell. Repeating one sawtooth at three opacities is
               what makes a ridgeline read as a graphic border rather than a
               horizon. -->
          <path
            class="deco__far"
            d="M0,200 L0,138 L74,96 L118,124 L196,54 L248,102 L318,72 L370,116 L452,60 L520,110 L586,86 L668,134 L740,62 L806,108 L884,80 L960,126 L1046,70 L1112,114 L1188,88 L1268,130 L1344,84 L1400,112 L1440,96 L1440,200 Z" />
          <path
            class="deco__mid"
            d="M0,200 L0,166 C58,140 104,152 168,132 C232,112 286,150 356,144 C426,138 470,110 540,120 C610,130 664,164 736,156 C808,148 852,116 922,124 C992,132 1046,166 1118,158 C1190,150 1236,120 1306,128 C1376,136 1414,158 1440,150 L1440,200 Z" />
          <path
            class="deco__near"
            d="M0,200 L0,188 C96,172 180,186 288,180 C396,174 470,158 576,164 C682,170 760,190 864,186 C968,182 1046,164 1152,168 C1258,172 1350,188 1440,180 L1440,200 Z" />
        </svg>
      }

      <!-- Topographic contour lines. Deliberately low-contrast: it is texture
           behind a headline, not a picture in its own right. -->
      @case ('contours') {
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <g class="deco__lines">
            <path d="M-40,470 C160,400 260,470 420,420 C580,370 700,410 860,356 C1000,308 1120,340 1260,300" />
            <path d="M-40,420 C170,352 268,418 428,368 C588,318 706,356 866,304 C1006,258 1126,288 1266,250" />
            <path d="M-40,370 C180,304 276,366 436,316 C596,266 712,302 872,252 C1012,208 1132,236 1272,200" />
            <path d="M-40,320 C190,256 284,314 444,264 C604,214 718,248 878,200 C1018,158 1138,184 1278,150" />
            <path d="M-40,270 C200,208 292,262 452,212 C612,162 724,194 884,148 C1024,108 1144,132 1284,100" />
            <path d="M-40,220 C210,160 300,210 460,160 C620,110 730,140 890,96 C1030,58 1150,80 1290,50" />
            <path d="M-40,170 C220,112 308,158 468,108 C628,58 736,86 896,44 C1036,8 1156,28 1296,0" />
          </g>
        </svg>
      }

      <!-- A travelled route: the dash marches along the curve and the marker
           rides the crest of it. Used to signal "journey" sections. -->
      @case ('route') {
        <svg viewBox="0 0 640 200" aria-hidden="true" focusable="false">
          <path
            class="deco__route"
            d="M24,168 C140,168 150,52 296,60 C438,68 452,168 616,132" />
          <g class="deco__pin deco__pin--a"><circle cx="24" cy="168" r="9" /><circle class="deco__pin-dot" cx="24" cy="168" r="3.5" /></g>
          <g class="deco__pin deco__pin--b"><circle cx="616" cy="132" r="9" /><circle class="deco__pin-dot" cx="616" cy="132" r="3.5" /></g>
          <!-- Two nested groups on purpose: the outer one carries the
               position, the inner one the animation. Collapsed into one, the
               animation's transform overrides the transform attribute and the
               marker snaps back to the SVG origin, adrift of its route. -->
          <g transform="translate(296 54)">
            <g class="deco__plane">
              <path d="M22,0 L-14,11 L-4,1.6 L-14,-8 Z" />
            </g>
          </g>
        </svg>
      }

      <!-- Compass rose. Turns once every 90s — perceptible only if you watch
           for it, which is the point. -->
      @case ('compass') {
        <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
          <circle class="deco__ring" cx="100" cy="100" r="88" />
          <circle class="deco__ring deco__ring--inner" cx="100" cy="100" r="66" />
          <g class="deco__rose">
            <path class="deco__rose-major" d="M100,18 L114,86 L100,100 L86,86 Z" />
            <path class="deco__rose-minor" d="M100,182 L86,114 L100,100 L114,114 Z" />
            <path class="deco__rose-minor" d="M18,100 L86,86 L100,100 L86,114 Z" />
            <path class="deco__rose-minor" d="M182,100 L114,114 L100,100 L114,86 Z" />
          </g>
          <circle class="deco__hub" cx="100" cy="100" r="7" />
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: block;
      pointer-events: none;
      /* Every variant paints from these two, so a consumer re-tints the whole
         ornament with one custom property instead of reaching into paths. */
      --deco-fill: currentColor;
      --deco-stroke: currentColor;
    }

    svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      overflow: visible;
    }

    /* -- ridgeline: three depth planes, same fill, rising opacity -- */

    .deco__far  { fill: var(--deco-fill); opacity: 0.22; }
    .deco__mid  { fill: var(--deco-fill); opacity: 0.5; }
    .deco__near { fill: var(--deco-fill); opacity: 1; }

    /* -- contours -- */

    .deco__lines {
      fill: none;
      stroke: var(--deco-stroke);
      stroke-width: 1.5;
      opacity: 0.5;
      animation: drift 40s linear infinite alternate;
    }

    /* -- route -- */

    .deco__route {
      fill: none;
      stroke: var(--deco-stroke);
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-dasharray: 10 12;
      animation: march 6s linear infinite;
    }

    .deco__pin circle { fill: var(--deco-stroke); opacity: 0.28; }
    .deco__pin .deco__pin-dot { opacity: 1; }

    .deco__plane {
      fill: var(--deco-accent, var(--accent-500));
      animation: float-y 5s ease-in-out infinite;
    }

    /* -- compass -- */

    .deco__ring {
      fill: none;
      stroke: var(--deco-stroke);
      stroke-width: 1.5;
      opacity: 0.35;
    }

    .deco__ring--inner {
      stroke-dasharray: 4 10;
      opacity: 0.5;
    }

    .deco__rose {
      transform-origin: 100px 100px;
      animation: spin-slow 90s linear infinite;
    }

    .deco__rose-major { fill: var(--deco-accent, var(--accent-500)); }
    .deco__rose-minor { fill: var(--deco-fill); opacity: 0.55; }
    .deco__hub { fill: var(--deco-accent, var(--accent-500)); }
  `,
})
export class Deco {
  readonly name = input.required<'mountains' | 'contours' | 'route' | 'compass'>();

}
