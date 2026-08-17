import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-international-tours',
  templateUrl: './international-tours.html',
  styleUrls: ['./international-tours.scss'],
  standalone: true,
  imports: [RouterLink, Icon]
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
