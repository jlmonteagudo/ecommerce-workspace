import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/ui-breadcrumb';
import { AccountSidebarComponent } from '@ecommerce/ui-account';
import { ProfileComponent } from '../profile/profile.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ecommerce-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BreadcrumbComponent,
    AccountSidebarComponent,
    ProfileComponent,
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {}
