import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '@ecommerce/ui-product';
import { ProductListItem } from '@ecommerce/models-product';

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
