import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-mobile-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.css'],
})
export class MobileSidebarComponent {
  @Output() showMobileSidebar: EventEmitter<boolean> =
    new EventEmitter<boolean>();
}
