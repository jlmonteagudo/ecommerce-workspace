import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'ecommerce-feature-shop',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: ` <ecommerce-breadcrumb /> `,
})
export class FeatureShopComponent {}
