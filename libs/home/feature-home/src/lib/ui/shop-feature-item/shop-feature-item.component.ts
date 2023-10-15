import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-shop-feature-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-gray-200 duration-300"
    >
      <img [src]="urlIcon" class="lg:w-12 w-10 h-12 object-contain" />

      <div>
        <h4 class="font-medium capitalize text-lg">{{ title }}</h4>
        <p class="text-gray-500 text-xs lg:text-sm">{{ subtitle }}</p>
      </div>
    </div>
  `,
})
export class ShopFeatureItemComponent {
  @Input() urlIcon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
}
