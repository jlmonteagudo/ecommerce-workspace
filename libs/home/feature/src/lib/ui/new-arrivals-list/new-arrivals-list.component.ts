import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '@ecommerce/product-ui';
import { ProductListItem } from '@ecommerce/product-models';

@Component({
  selector: 'ecommerce-new-arrivals-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './new-arrivals-list.component.html',
  styleUrls: ['./new-arrivals-list.component.css'],
})
export class NewArrivalsListComponent {
  @Input() productListItems!: ProductListItem[];
}
