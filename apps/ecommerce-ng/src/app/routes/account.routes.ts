import { Route } from '@angular/router';

export const accountRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@ecommerce/feature-account').then((m) => m.AccountComponent),
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@ecommerce/feature-account').then((m) => m.ProfileComponent),
      },
      {
        path: 'profile-address',
        loadComponent: () =>
          import('@ecommerce/feature-account').then(
            (m) => m.ProfileAddressComponent
          ),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('@ecommerce/feature-account').then(
            (m) => m.ChangePasswordComponent
          ),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('@ecommerce/feature-wishlist').then(
            (m) => m.FeatureWishlistComponent
          ),
      },
    ],
  },
];
