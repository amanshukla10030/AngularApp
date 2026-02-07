import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-tours',
  imports: [CommonModule],
  templateUrl: './food-tours.html',
  styleUrls: ['./food-tours.scss']
})
export class FoodToursComponent {
  title = 'Food Tours - Happy Ghumakkads';
  
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
