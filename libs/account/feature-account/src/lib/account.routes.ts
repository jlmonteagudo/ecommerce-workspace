import { Route } from '@angular/router';
import { AccountComponent } from './account/account.component';

export const accountRoutes: Route[] = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'profile-address',
        loadComponent: () =>
          import('./profile-address/profile-address.component').then(
            (m) => m.ProfileAddressComponent
          ),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./change-password/change-password.component').then(
            (m) => m.ChangePasswordComponent
          ),
      },
    ],
  },
];
