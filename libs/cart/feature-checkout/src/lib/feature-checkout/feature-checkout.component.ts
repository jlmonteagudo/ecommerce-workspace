import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/ui-breadcrumb';

@Component({
  selector: 'ecommerce-feature-checkout',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './feature-checkout.component.html',
  styleUrls: ['./feature-checkout.component.css'],
})
export class FeatureCheckoutComponent {}
