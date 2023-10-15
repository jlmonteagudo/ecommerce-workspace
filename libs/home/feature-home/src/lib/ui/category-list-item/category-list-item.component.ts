import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ecommerce-category-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative group rounded-sm overflow-hidden">
      <img [src]="urlImage" class="w-full" />
      <a
        [routerLink]="[link]"
        class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition"
        >{{ name }}</a
      >
    </div>
  `,
})
export class CategoryListItemComponent {
  @Input() urlImage!: string;
  @Input() name!: string;
  @Input() link!: string;
}
