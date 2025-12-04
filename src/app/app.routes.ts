import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Industrial } from './pages/solutions/industrial/industrial';
import { aboutUs } from './pages/company/about-us/about-us';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'solutions/industrial',
    component: Industrial,
  },
  {
    path: 'about-us',
    component: aboutUs,
  },
];
