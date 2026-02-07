import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure-photography',
  imports: [CommonModule],
  templateUrl: './adventure-photography.html',
  styleUrls: ['./adventure-photography.scss']
})
export class AdventurePhotographyComponent {
  title = 'Adventure Photography Tours - Happy Ghumakkads';
  
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
