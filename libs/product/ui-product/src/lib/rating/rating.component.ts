import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <div class="flex gap-1 text-sm text-yellow-400">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
      </div>

      <div class="text-xs text-gray-500 ml-3">({{ reviewsNumber }})</div>
    </div>
  `,
})
export class RatingComponent {
  @Input() reviewsNumber!: number;
}
