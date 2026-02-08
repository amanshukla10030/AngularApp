import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-industrial-tours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industrial-tours.html',
  styleUrls: ['./industrial-tours.scss']
})
export class IndustrialToursComponent {
  title = 'Industrial Tours - Happy Ghumakkads';
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize component
  }

  navigateToPackages(): void {
    this.router.navigate(['/packages']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
