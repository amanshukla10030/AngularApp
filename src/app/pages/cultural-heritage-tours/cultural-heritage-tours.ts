import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultural-heritage-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cultural-heritage-tours.html',
  styleUrls: ['./cultural-heritage-tours.scss']
})
export class CulturalHeritageToursComponent {
  title = 'Cultural & Heritage Tours - Happy Ghumakkads';
  
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
