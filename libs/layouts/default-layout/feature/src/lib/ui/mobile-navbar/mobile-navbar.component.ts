import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css'],
})
export class MobileNavbarComponent {
  @Output() showMobileSidebar: EventEmitter<boolean> =
    new EventEmitter<boolean>();
}
