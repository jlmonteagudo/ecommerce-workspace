import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerTopComponent } from '../ui/banner-top/banner-top.component';
import { ShopFeaturesComponent } from '../ui/shop-features/shop-features.component';
import { CategoriesListComponent } from '../ui/categories-list/categories-list.component';
import { NewArrivalsListComponent } from '../ui/new-arrivals-list/new-arrivals-list.component';
import { AdComponent } from '../ui/ad/ad.component';

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
  ],
  template: `
    <ecommerce-banner-top />
    <ecommerce-shop-features />
    <ecommerce-categories-list />
    <ecommerce-new-arrivals-list />
    <ecommerce-ad />
  `,
})
export class FeatureHomeComponent {}
