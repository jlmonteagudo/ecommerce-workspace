import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/ui-breadcrumb';
import { CartItemComponent } from '@ecommerce/ui-cart';
import { CartItem } from '@ecommerce/models-cart';

@Component({
  selector: 'ecommerce-feature-cart',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, CartItemComponent],
  templateUrl: './feature-cart.component.html',
  styleUrls: ['./feature-cart.component.css'],
})
export class FeatureCartComponent {
  cartItems: CartItem[] = [
    {
      imageUrl: '/assets/images/products/product5.jpg',
      cost: 200,
      price: 50,
      quantity: 4,
      size: 'L',
      title: 'ITALIA L SHAPE SOFA',
    },
    {
      imageUrl: '/assets/images/products/product6.jpg',
      cost: 300,
      price: 100,
      quantity: 3,
      size: 'M',
      title: 'Guyer Chair',
    },
  ];
}
