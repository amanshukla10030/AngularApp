import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-spiritual-tours',
  imports: [CommonModule, RouterLink],
  templateUrl: './spiritual-tours.html',
  styleUrls: ['./spiritual-tours.scss']
})
export class SpiritualToursComponent {
  title = 'Spiritual Tours - Happy Ghumakkads';
  
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
