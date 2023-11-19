import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '@ecommerce/product-ui';
import { ProductListItem } from '@ecommerce/product-models';

@Component({
  selector: 'ecommerce-recommended-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './recommended-list.component.html',
})
export class RecommendedListComponent {
  @Input() productListItems!: ProductListItem[];
}
