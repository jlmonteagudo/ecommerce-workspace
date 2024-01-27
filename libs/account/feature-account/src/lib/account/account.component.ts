import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/ui-breadcrumb';
import { AccountSidebarComponent } from '@ecommerce/ui-account';

@Component({
  selector: 'ecommerce-account',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, AccountSidebarComponent],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {}
