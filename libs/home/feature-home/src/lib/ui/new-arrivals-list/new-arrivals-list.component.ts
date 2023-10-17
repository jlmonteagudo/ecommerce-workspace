import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'ecommerce-new-arrivals-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './new-arrivals-list.component.html',
  styleUrls: ['./new-arrivals-list.component.css'],
})
export class NewArrivalsListComponent {}
