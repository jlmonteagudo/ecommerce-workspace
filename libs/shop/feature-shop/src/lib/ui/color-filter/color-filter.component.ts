import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-color-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css'],
})
export class ColorFilterComponent {
  @Input() colors!: { name: string; code: string }[];
}
