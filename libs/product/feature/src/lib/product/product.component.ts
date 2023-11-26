import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/shop-ui';
import { ImageViewerComponent } from '../ui/image-viewer/image-viewer.component';

@Component({
  selector: 'ecommerce-product',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ImageViewerComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productImagesUrls = [
    '/assets/images/products/product12.jpg',
    '/assets/images/products/product2.jpg',
    '/assets/images/products/product3.jpg',
    '/assets/images/products/product4.jpg',
    '/assets/images/products/product5.jpg',
  ];

  selectedProductImageUrl = this.productImagesUrls[0];
}
