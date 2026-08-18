import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Footer } from './shared/footer/footer';
import { Icon } from './shared/icon/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer, Icon],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly showScrollTop = signal(false);

  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly subs = new Subscription();
  private headerObserver?: ResizeObserver;
  private ticking = false;

  constructor() {
    // Close the mobile menu and return to the top on every navigation, so a
    // route change never leaves the drawer open over the new page.
    this.subs.add(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
        this.isMenuOpen.set(false);
        if (this.isBrowser) window.scrollTo({ top: 0, behavior: 'auto' });
      }),
    );
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    // One passive listener, coalesced into an animation frame. The previous
    // implementation attached two separate unthrottled listeners that each ran a
    // querySelector on every scroll event.
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.readScroll();
    this.trackHeaderHeight();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.headerObserver?.disconnect();
    if (this.isBrowser) window.removeEventListener('scroll', this.onScroll);
  }

  /**
   * Publishes the sticky header's real height as --header-h on <html>.
   *
   * Anything else that sticks (the packages filter bar) has to clear the
   * header, and its height is not a constant: the utility bar's font size
   * changes at 991px, the brand block shrinks at 560px, and the whole thing
   * reflows if the nav wraps. Measuring beats three hard-coded magic numbers
   * that fall out of sync the first time the header changes.
   */
  private trackHeaderHeight(): void {
    const header = this.host.nativeElement.querySelector('.modern-header') as HTMLElement | null;
    if (!header) return;

    const publish = () =>
      document.documentElement.style.setProperty('--header-h', `${Math.round(header.offsetHeight)}px`);

    publish();
    if (typeof ResizeObserver === 'undefined') return;
    this.headerObserver = new ResizeObserver(publish);
    this.headerObserver.observe(header);
  }

  private readonly onScroll = (): void => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.readScroll();
      this.ticking = false;
    });
  };

  private readScroll(): void {
    const y = window.scrollY;
    this.isScrolled.set(y > 50);
    this.showScrollTop.set(y > 300);
  }

  toggleMobileMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToTop(): void {
    if (this.isBrowser) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close the mobile drawer when tapping outside the header.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen()) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('.modern-header')) return;
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isMenuOpen.set(false);
  }
}
