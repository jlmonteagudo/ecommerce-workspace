import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItem } from '@ecommerce/models-product';

@Component({
  selector: 'ecommerce-wishlist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent {
  @Input() product!: ProductListItem;
}
