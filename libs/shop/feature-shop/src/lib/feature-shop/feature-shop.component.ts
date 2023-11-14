import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../ui/breadcrumb/breadcrumb.component';
import { SidebarComponent } from '../ui/sidebar/sidebar.component';

@Component({
  selector: 'ecommerce-feature-shop',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, SidebarComponent],
  template: `
    <ecommerce-breadcrumb />
    <div
      class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative"
    >
      <ecommerce-sidebar />
    </div>
  `,
})
export class FeatureShopComponent {}
