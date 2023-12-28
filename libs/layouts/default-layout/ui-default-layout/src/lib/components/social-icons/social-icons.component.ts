import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-social-icons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex space-x-5">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  `,
})
export class SocialIconsComponent {}
