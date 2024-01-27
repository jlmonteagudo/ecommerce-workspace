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
  {
    path: 'login',
    loadComponent: () =>
      import('@ecommerce/feature-login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@ecommerce/feature-register').then((m) => m.RegisterComponent),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@ecommerce/feature-account').then((m) => m.accountRoutes),
  },

  // {
  //   path: 'account',
  //   loadComponent: () =>
  //     import('@ecommerce/feature-account').then((m) => m.AccountComponent),
  // },

  // {
  //   path: 'account',
  //   loadComponent: () =>
  //     import('@ecommerce/feature-account').then((m) => m.AccountComponent),
  // },
  // {
  //   path: 'profile/address',
  //   loadComponent: () =>
  //     import('@ecommerce/feature-account').then(
  //       (m) => m.ProfileAddressComponent
  //     ),
  // },
];
