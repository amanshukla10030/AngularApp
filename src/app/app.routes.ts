import { Routes } from '@angular/router';
import { Home } from './pages/home/home-simple';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Happy Ghumakkads - Discover Incredible India'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
