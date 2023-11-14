import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-size-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './size-filter.component.html',
  styleUrls: ['./size-filter.component.css'],
})
export class SizeFilterComponent {
  @Input() sizes!: string[];
}
