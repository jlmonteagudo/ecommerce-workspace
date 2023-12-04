import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductListItem } from '@ecommerce/product-models';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'ecommerce-product-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RatingComponent],
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
  @Input() productListItem!: ProductListItem;
}
