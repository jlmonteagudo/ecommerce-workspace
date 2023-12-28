import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '@ecommerce/ui-product';
import { ProductListItem } from '@ecommerce/models-product';
import {
  BreadcrumbComponent,
  SidebarComponent,
  SortingComponent,
} from '@ecommerce/ui-shop';

@Component({
  selector: 'ecommerce-shop',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    SidebarComponent,
    SortingComponent,
    ProductListItemComponent,
  ],
  template: `
    <ecommerce-breadcrumb />
    <div
      class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative"
    >
      <ecommerce-sidebar />

      <div class="col-span-3">
        <ecommerce-sorting />
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
          <ecommerce-product-list-item
            *ngFor="let productListItem of productListItems"
            [productListItem]="productListItem"
          />
        </div>
      </div>
    </div>
  `,
})
export class ShopComponent {
  readonly productListItems: ProductListItem[] = [
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
    {
      urlImage: '/assets/images/products/product5.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
    {
      urlImage: '/assets/images/products/product6.jpg',
      link: '/product',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    },
  ];
}
