import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ecommerce-product-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
  @Input() urlImage!: string;
  @Input() link!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() oldPrice!: number;
  @Input() reviewsAverage!: number;
  @Input() reviewsNumber!: number;
}
