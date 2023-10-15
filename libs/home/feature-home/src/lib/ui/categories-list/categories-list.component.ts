import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListItemComponent } from '../category-list-item/category-list-item.component';

@Component({
  selector: 'ecommerce-categories-list',
  standalone: true,
  imports: [CommonModule, CategoryListItemComponent],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent {}
