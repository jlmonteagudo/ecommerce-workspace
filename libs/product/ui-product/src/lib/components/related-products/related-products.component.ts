import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItem } from '@ecommerce/models-product';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'ecommerce-related-products',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent {
  @Input() productListItems!: ProductListItem[];
}
