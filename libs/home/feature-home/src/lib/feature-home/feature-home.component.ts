import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerTopComponent } from '../ui/banner-top/banner-top.component';
import { ShopFeaturesComponent } from '../ui/shop-features/shop-features.component';
import { CategoriesListComponent } from '../ui/categories-list/categories-list.component';

@Component({
  selector: 'ecommerce-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerTopComponent,
    ShopFeaturesComponent,
    CategoriesListComponent,
  ],
  template: `
    <ecommerce-banner-top />
    <ecommerce-shop-features />
    <ecommerce-categories-list />
  `,
})
export class FeatureHomeComponent {}
