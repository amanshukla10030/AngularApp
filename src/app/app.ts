import { Component, signal, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('Happy Ghumakkads');
  protected readonly currentYear = signal(new Date().getFullYear());
  protected isMenuOpen = signal(false);
  protected isScrolled = signal(false);
  protected openDropdowns = signal<Set<string>>(new Set());
  protected isAppLoaded = signal(false);

  constructor(private router: Router) {
    console.log('App component initialized');
  }

  ngOnInit() {
    console.log('App ngOnInit called');
    // Set app as loaded immediately
    this.isAppLoaded.set(true);
  }

  ngAfterViewInit() {
    // Initialize smooth scrolling and other UI interactions only in browser
    if (this.isBrowser()) {
      this.initializeSmoothScrolling();
      this.initializeScrollToTop();
      this.initializeNavbarScroll();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  private initializeSmoothScrolling(): void {
    // Add smooth scrolling behavior
    if (!this.isBrowser()) return;
    
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  private initializeScrollToTop(): void {
    // Show/hide scroll to top button based on scroll position
    if (!this.isBrowser()) return;
    
    window.addEventListener('scroll', () => {
      const scrollToTopBtn = document.querySelector('.scrollToTop');
      if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      }
    });
  }

  private initializeNavbarScroll(): void {
    // Add background to navbar on scroll
    if (!this.isBrowser()) return;
    
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.pageYOffset > 50) {
          this.isScrolled.set(true);
        } else {
          this.isScrolled.set(false);
        }
      }
    });
  }

  // Navigation methods
  navigateToHome(): void {
    console.log('Navigating to home');
    this.router.navigate(['/']);
  }

  navigateToPackages(): void {
    console.log('Navigating to packages');
    this.router.navigate(['/packages']);
  }

  navigateToDestination(destination: string): void {
    console.log('Navigating to:', destination);
    this.router.navigate([destination]);
  }

  navigateToAbout(): void {
    console.log('Navigating to about');
    this.router.navigate(['/about']);
  }

  navigateToCareers(): void {
    console.log('Navigating to careers');
    this.router.navigate(['/careers']);
  }

  navigateToContact(): void {
    console.log('Navigating to contact');
    this.router.navigate(['/contact']);
  }


  navigateToInternationalTours(): void {
    console.log('Navigating to international tours');
    // For now, navigate to contact with a message about international tours
    this.router.navigate(['/contact']);
  }

  navigateToCorporateEvents(): void {
    console.log('Navigating to corporate events');
    // For now, navigate to contact with a message about corporate events
    this.router.navigate(['/contact']);
  }

  navigateToStudentGroups(): void {
    console.log('Navigating to student groups');
    // For now, navigate to contact with a message about student groups
    this.router.navigate(['/contact']);
  }

  toggleMobileMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.isMenuOpen.set(false);
  }

  // Dropdown methods
  toggleDropdown(dropdownName: string): void {
    this.openDropdowns.update(dropdowns => {
      const newDropdowns = new Set(dropdowns);
      if (newDropdowns.has(dropdownName)) {
        newDropdowns.delete(dropdownName);
      } else {
        newDropdowns.clear(); // Close all other dropdowns
        newDropdowns.add(dropdownName);
      }
      return newDropdowns;
    });
  }

  isDropdownOpen(dropdownName: string): boolean {
    return this.openDropdowns().has(dropdownName);
  }

  closeAllDropdowns(): void {
    this.openDropdowns.set(new Set());
  }

  // Global function for scroll to top (called from template)
  scrollToTop(): void {
    if (this.isBrowser()) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Close dropdowns when clicking outside
    this.closeAllDropdowns();
  }

  // Form submission handler
  onContactFormSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Here you would typically send the data to Formspree
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you soon.');
    form.reset();
  }
}
