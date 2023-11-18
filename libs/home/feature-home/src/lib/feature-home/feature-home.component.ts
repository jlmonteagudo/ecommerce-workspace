import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerTopComponent } from '../ui/banner-top/banner-top.component';
import { ShopFeaturesComponent } from '../ui/shop-features/shop-features.component';
import { CategoriesListComponent } from '../ui/categories-list/categories-list.component';
import { NewArrivalsListComponent } from '../ui/new-arrivals-list/new-arrivals-list.component';
import { AdComponent } from '../ui/ad/ad.component';
import { RecommendedListComponent } from '../ui/recommended-list/recommended-list.component';
import { ProductListItem } from '@ecommerce/models-product';

@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerTopComponent,
    ShopFeaturesComponent,
    CategoriesListComponent,
    NewArrivalsListComponent,
    AdComponent,
    RecommendedListComponent,
  ],
  template: `
    <ecommerce-banner-top />
    <ecommerce-shop-features />
    <ecommerce-categories-list />
    <ecommerce-new-arrivals-list [productListItems]="newArrivals" />
    <ecommerce-ad />
    <ecommerce-recommended-list [productListItems]="recommendedProducts" />
  `,
})
export class FeatureHomeComponent {
  readonly newArrivals: ProductListItem[] = [
    {
      urlImage: '/assets/images/products/product1.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product2.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 46.0,
      oldPrice: 56.0,
      reviewsAverage: 4,
      reviewsNumber: 126,
    },
    {
      urlImage: '/assets/images/products/product3.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product4.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
  ];

  readonly recommendedProducts: ProductListItem[] = [
    {
      urlImage: '/assets/images/products/product1.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product2.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 46.0,
      oldPrice: 56.0,
      reviewsAverage: 4,
      reviewsNumber: 126,
    },
    {
      urlImage: '/assets/images/products/product3.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product4.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product5.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product6.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 46.0,
      oldPrice: 56.0,
      reviewsAverage: 4,
      reviewsNumber: 126,
    },
    {
      urlImage: '/assets/images/products/product7.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product8.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
  ];
}
