import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './packages.html',
  styleUrls: ['./packages.scss']
})
export class PackagesComponent implements OnInit {
  title = 'Tour Packages - Happy Ghumakkads';
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Component initialization
  }


  navigateToAdventurePhotography(): void {
    this.router.navigate(['/adventure-photography']);
  }

  navigateToCamping(): void {
    this.router.navigate(['/camping']);
  }

  navigateToSpiritualTours(): void {
    this.router.navigate(['/spiritual-tours']);
  }

  navigateToInternationalTours(): void {
    this.router.navigate(['/international-tours']);
  }

  navigateToCorporateEvents(): void {
    this.router.navigate(['/corporate-events']);
  }

  navigateToStudentGroups(): void {
    this.router.navigate(['/student-groups']);
  }

  navigateToIndustrialTours(): void {
    this.router.navigate(['/industrial-tours']);
  }

  navigateToCulturalHeritageTours(): void {
    this.router.navigate(['/cultural-heritage-tours']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToPackages(): void {
    // Already on packages page, just scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
