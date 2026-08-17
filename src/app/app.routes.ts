import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

// Home stays eager: it is the landing route, so a lazy chunk would only add a
// round trip. Every other page is code-split and fetched on demand.
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Happy Ghumakkads - Discover Incredible India'
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages/packages').then(m => m.PackagesComponent),
    title: 'Tour Packages - Happy Ghumakkads'
  },
  {
    path: 'adventure-photography',
    loadComponent: () =>
      import('./pages/adventure-photography/adventure-photography').then(m => m.AdventurePhotographyComponent),
    title: 'Adventure Photography Tours - Happy Ghumakkads'
  },
  {
    path: 'camping',
    loadComponent: () => import('./pages/camping/camping').then(m => m.CampingComponent),
    title: 'Camping Adventures - Happy Ghumakkads'
  },
  {
    path: 'food-tours',
    loadComponent: () => import('./pages/food-tours/food-tours').then(m => m.FoodToursComponent),
    title: 'Food Tours - Happy Ghumakkads'
  },
  {
    path: 'spiritual-tours',
    loadComponent: () => import('./pages/spiritual-tours/spiritual-tours').then(m => m.SpiritualToursComponent),
    title: 'Spiritual Tours - Happy Ghumakkads'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    title: 'About Us - Happy Ghumakkads'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.Careers),
    title: 'Careers - Happy Ghumakkads'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us - Happy Ghumakkads'
  },
  {
    path: 'international-tours',
    loadComponent: () =>
      import('./pages/international-tours/international-tours').then(m => m.InternationalToursComponent),
    title: 'International Tours - Happy Ghumakkads'
  },
  {
    path: 'corporate-events',
    loadComponent: () => import('./pages/corporate-events/corporate-events').then(m => m.CorporateEventsComponent),
    title: 'Corporate Events - Happy Ghumakkads'
  },
  {
    path: 'student-groups',
    loadComponent: () => import('./pages/student-groups/student-groups').then(m => m.StudentGroupsComponent),
    title: 'Student Groups - Happy Ghumakkads'
  },
  {
    path: 'industrial-tours',
    loadComponent: () => import('./pages/industrial-tours/industrial-tours').then(m => m.IndustrialToursComponent),
    title: 'Industrial Tours - Happy Ghumakkads'
  },
  {
    path: 'cultural-heritage-tours',
    loadComponent: () =>
      import('./pages/cultural-heritage-tours/cultural-heritage-tours').then(m => m.CulturalHeritageToursComponent),
    title: 'Cultural & Heritage Tours - Happy Ghumakkads'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
