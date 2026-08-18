import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { Deco } from '../../shared/deco/deco';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-cultural-heritage-tours',
  standalone: true,
  imports: [CommonModule, RouterLink, Icon, Deco, Reveal],
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
