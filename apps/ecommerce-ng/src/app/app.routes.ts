import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@ecommerce/feature-home').then((m) => m.HomeComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('@ecommerce/feature-shop').then((m) => m.ShopComponent),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@ecommerce/feature-product').then((m) => m.ProductComponent),
  },
];
