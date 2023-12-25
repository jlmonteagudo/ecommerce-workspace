import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '@ecommerce/ui-product';
import { ProductListItem } from '@ecommerce/models-product';

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
