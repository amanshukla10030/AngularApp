import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporate-events',
  templateUrl: './corporate-events.html',
  styleUrls: ['./corporate-events.scss']
})
export class CorporateEventsComponent {
  constructor(private router: Router) {}

  navigateToPackages(): void {
    console.log('Navigating to packages');
    this.router.navigate(['/packages']);
  }

  navigateToContact(): void {
    console.log('Navigating to contact');
    this.router.navigate(['/contact']);
  }
}
