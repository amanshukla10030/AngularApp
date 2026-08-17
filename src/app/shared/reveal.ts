import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Scroll-reveal via IntersectionObserver.
 *
 * Deliberately not a scroll listener: the observer fires off the main thread,
 * so a page with 30+ revealing elements costs nothing while scrolling. Each
 * element is unobserved after its first reveal — this animates in, never out.
 *
 *   <div appReveal [revealDelay]="100">…</div>
 *
 * The .reveal / .is-visible pair is defined in styles.scss, which also disables
 * the whole effect under prefers-reduced-motion.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class Reveal implements AfterViewInit, OnDestroy {
  /** Stagger in milliseconds, for sequencing siblings in a grid. */
  readonly revealDelay = input<number>(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement as HTMLElement;

    // Server-render and no-IO browsers get the final state immediately rather
    // than content stuck at opacity: 0.
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    const delay = this.revealDelay();
    if (delay) node.style.transitionDelay = `${delay}ms`;

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.classList.add('is-visible');
          this.observer?.unobserve(node);
        }
      },
      // Start slightly before the element scrolls into view so the transition
      // has finished by the time the user is looking at it.
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
