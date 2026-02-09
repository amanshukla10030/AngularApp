import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student-groups.html',
  styleUrls: ['./student-groups.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class StudentGroupsComponent {
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
