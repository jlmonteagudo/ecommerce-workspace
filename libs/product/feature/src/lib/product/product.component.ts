import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@ecommerce/shop-ui';
import {
  ColorFilterComponent,
  RatingComponent,
  SizeFilterComponent,
} from '@ecommerce/product-ui';
import { Product, ProductListItem } from '@ecommerce/product-models';
import { ImageViewerComponent } from '../ui/image-viewer/image-viewer.component';
import { RelatedProductsComponent } from '../ui/related-products/related-products.component';

@Component({
  selector: 'ecommerce-product',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ImageViewerComponent,
    RatingComponent,
    SizeFilterComponent,
    ColorFilterComponent,
    RelatedProductsComponent,
  ],
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

  readonly sizes = ['xs', 's', 'm', 'l', 'xl'];

  readonly colors = [
    { name: 'White', code: 'white' },
    { name: 'Black', code: 'black' },
    { name: 'Red', code: 'red' },
  ];

  product: Product = {
    title: 'ITALIAN L SHAPE SOFA',
    reviewsNumber: 150,
    stock: 'In Stock',
    brand: 'Apex',
    category: 'Sofa',
    sku: 'AKA123456PTV',
    price: 450,
    oldPrice: 500,
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar lobortis sapien eget hendrerit. Duis ultricies, risus id volutpat congue, purus orci vulputate ipsum, eu euismod sem neque non libero. Etiam faucibus, est nec hendrerit tempus, magna nulla blandit ligula, non eleifend ligula eros sed elit.',
  };

  readonly relatedProducts: ProductListItem[] = [
    {
      urlImage: '/assets/images/products/product1.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product2.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 46.0,
      oldPrice: 56.0,
      reviewsAverage: 4,
      reviewsNumber: 126,
    },
    {
      urlImage: '/assets/images/products/product3.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product4.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
  ];
}
