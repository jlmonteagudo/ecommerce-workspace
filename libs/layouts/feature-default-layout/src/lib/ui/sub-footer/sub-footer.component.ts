import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-sub-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-800 py-4">
      <div class="container flex items-center justify-between">
        <p class="text-white font-semibold">
          &copy; Easy Shop 2023 - All rights reserved
        </p>
        <div>
          <img src="/assets/images/methods.png" class="h-5" />
        </div>
      </div>
    </div>
  `,
})
export class SubFooterComponent {}
