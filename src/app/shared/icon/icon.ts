import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS, type IconDef } from '../icon-data';

/**
 * Inline SVG icon, replacing the FontAwesome webfont.
 *
 *   <app-icon name="camera" />
 *   <app-icon [name]="feature.icon" />   <!-- accepts "fa-camera" too -->
 *
 * The glyph inherits the surrounding text colour via fill="currentColor" and
 * scales with font-size, so it drops into the same slots the <i> tags occupied.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (icon(); as ic) {
      <svg
        [attr.viewBox]="ic.v"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        focusable="false">
        @for (d of ic.d; track d) {
          <path [attr.d]="d" />
        }
      </svg>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Matches how an icon font sized itself against the text box. */
      inline-size: 1em;
      block-size: 1em;
      line-height: 1;
      vertical-align: -0.125em;
    }

    svg {
      inline-size: 100%;
      block-size: 100%;
      display: block;
    }
  `,
})
export class Icon {
  /** Icon name, with or without the legacy "fa-" prefix. */
  readonly name = input.required<string>();

  protected readonly icon = computed<IconDef | undefined>(() => {
    const raw = (this.name() || '').trim();
    return ICONS[raw] ?? ICONS[raw.replace(/^fa[bsr]?\s+/, '').replace(/^fa-/, '')];
  });
}
