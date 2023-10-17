import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'ecommerce-recommended-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './recommended-list.component.html',
})
export class RecommendedListComponent {}
