import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/shop-ui';

@Component({
  selector: 'ecommerce-product',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {}
