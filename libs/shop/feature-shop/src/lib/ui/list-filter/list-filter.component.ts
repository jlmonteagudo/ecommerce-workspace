import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-list-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css'],
})
export class ListFilterComponent {
  @Input() title!: string;
  @Input() items!: { name: string; count: number }[];
}
