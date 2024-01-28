import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '@ecommerce/models-cart';

@Component({
  selector: 'ecommerce-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
}
