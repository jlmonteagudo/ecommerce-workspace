import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopFeatureItemComponent } from '../shop-feature-item/shop-feature-item.component';

@Component({
  selector: 'ecommerce-shop-features',
  standalone: true,
  imports: [CommonModule, ShopFeatureItemComponent],
  templateUrl: './shop-features.component.html',
  styleUrls: ['./shop-features.component.css'],
})
export class ShopFeaturesComponent {}
