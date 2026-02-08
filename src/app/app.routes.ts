import { Routes } from '@angular/router';
import { TestSimpleComponent } from './test-simple.component';

export const routes: Routes = [
  {
    path: '',
    component: TestSimpleComponent,
    title: 'Test Page'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
