import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PackagesComponent } from './pages/packages/packages';
import { AdventurePhotographyComponent } from './pages/adventure-photography/adventure-photography';
import { CampingComponent } from './pages/camping/camping';
import { SpiritualToursComponent } from './pages/spiritual-tours/spiritual-tours';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Careers } from './pages/careers/careers';
import { InternationalToursComponent } from './pages/international-tours/international-tours';
import { CorporateEventsComponent } from './pages/corporate-events/corporate-events';
import { StudentGroupsComponent } from './pages/student-groups/student-groups';
import { IndustrialToursComponent } from './pages/industrial-tours/industrial-tours';
import { CulturalHeritageToursComponent } from './pages/cultural-heritage-tours/cultural-heritage-tours';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Happy Ghumakkads - Discover Incredible India'
  },
  {
    path: 'packages',
    component: PackagesComponent,
    title: 'Tour Packages - Happy Ghumakkads'
  },
  {
    path: 'adventure-photography',
    component: AdventurePhotographyComponent,
    title: 'Adventure Photography Tours - Happy Ghumakkads'
  },
  {
    path: 'camping',
    component: CampingComponent,
    title: 'Camping Adventures - Happy Ghumakkads'
  },
  {
    path: 'spiritual-tours',
    component: SpiritualToursComponent,
    title: 'Spiritual Tours - Happy Ghumakkads'
  },
  {
    path: 'about',
    component: About,
    title: 'About Us - Happy Ghumakkads'
  },
  {
    path: 'careers',
    component: Careers,
    title: 'Careers - Happy Ghumakkads'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Us - Happy Ghumakkads'
  },
  {
    path: 'international-tours',
    component: InternationalToursComponent,
    title: 'International Tours - Happy Ghumakkads'
  },
  {
    path: 'corporate-events',
    component: CorporateEventsComponent,
    title: 'Corporate Events - Happy Ghumakkads'
  },
  {
    path: 'student-groups',
    component: StudentGroupsComponent,
    title: 'Student Groups - Happy Ghumakkads'
  },
  {
    path: 'industrial-tours',
    component: IndustrialToursComponent,
    title: 'Industrial Tours - Happy Ghumakkads'
  },
  {
    path: 'cultural-heritage-tours',
    component: CulturalHeritageToursComponent,
    title: 'Cultural & Heritage Tours - Happy Ghumakkads'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
