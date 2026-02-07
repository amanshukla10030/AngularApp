import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-international-tours',
  templateUrl: './international-tours.html',
  styleUrls: ['./international-tours.scss']
})
export class InternationalToursComponent {
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
