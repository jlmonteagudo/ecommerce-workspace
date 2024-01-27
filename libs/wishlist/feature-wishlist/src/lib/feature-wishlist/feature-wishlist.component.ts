import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItemComponent } from '@ecommerce/ui-wishlist';
import { ProductListItem } from '@ecommerce/models-product';

@Component({
  selector: 'ecommerce-feature-wishlist',
  standalone: true,
  imports: [CommonModule, WishlistItemComponent],
  templateUrl: './feature-wishlist.component.html',
  styleUrls: ['./feature-wishlist.component.css'],
})
export class FeatureWishlistComponent {
  wishlist: ProductListItem[] = [
    {
      urlImage: '/assets/images/products/product1.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
      stock: 'In Stock',
    },
    {
      urlImage: '/assets/images/products/product2.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 46.0,
      oldPrice: 56.0,
      reviewsAverage: 4,
      reviewsNumber: 126,
      stock: 'In Stock',
    },
    {
      urlImage: '/assets/images/products/product3.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
      stock: 'In Stock',
    },
    {
      urlImage: '/assets/images/products/product4.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
      stock: 'Out of Stock',
    },
  ];
}
