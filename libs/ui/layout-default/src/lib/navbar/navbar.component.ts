import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'ecommerce-navbar',
  standalone: true,
  imports: [CommonModule, DropdownMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
