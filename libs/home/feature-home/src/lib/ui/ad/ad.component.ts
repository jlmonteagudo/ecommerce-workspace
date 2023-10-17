import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-ad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container pb-16">
      <a href="#">
        <img src="/assets/images/offer.jpg" class="w-full" />
      </a>
    </div>
  `,
})
export class AdComponent {}
