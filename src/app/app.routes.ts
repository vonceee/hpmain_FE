import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Industrial } from './pages/solutions/industrial/industrial';
import { aboutUs } from './pages/company/about-us/about-us';
import { Educational } from './pages/solutions/educational/educational';
import { News } from './pages/news/news';
import { Sponsorship } from './pages/company/sponsorship/sponsorship';

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
    path: 'solutions/educational',
    component: Educational,
  },
  {
    path: 'about-us',
    component: aboutUs,
  },
  {
    path: 'company/sponsorship',
    component: Sponsorship,
  },
  {
    path: 'news-and-updates',
    component: News,
  },
];
