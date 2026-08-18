import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { Deco } from '../../shared/deco/deco';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-industrial-tours',
  standalone: true,
  imports: [CommonModule, RouterLink, Icon, Deco, Reveal],
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
