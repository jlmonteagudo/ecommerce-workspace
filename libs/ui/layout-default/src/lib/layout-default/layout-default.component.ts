import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerTopComponent } from '../banner-top/banner-top.component';
import { ShopFeaturesComponent } from '../shop-features/shop-features.component';

@Component({
  selector: 'ecommerce-layout-default',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    BannerTopComponent,
    ShopFeaturesComponent,
  ],
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.css'],
})
export class LayoutDefaultComponent {}
