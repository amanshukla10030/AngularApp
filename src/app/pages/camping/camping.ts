import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-camping',
  imports: [CommonModule, RouterLink],
  templateUrl: './camping.html',
  styleUrls: ['./camping.scss']
})
export class CampingComponent {
  title = 'Camping Adventures - Happy Ghumakkads';
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize component
  }

  navigateToPackages(): void {
    console.log('Navigating to packages');
    this.router.navigate(['/packages']);
  }

  navigateToContact(): void {
    console.log('Navigating to contact');
    this.router.navigate(['/contact']);
  }
}
