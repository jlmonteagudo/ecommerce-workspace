import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@ecommerce/home').then((m) => m.HomeComponent),
  },
  {
    path: 'shop',
    loadComponent: () => import('@ecommerce/shop').then((m) => m.ShopComponent),
  },
];
