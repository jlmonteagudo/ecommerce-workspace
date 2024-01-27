import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ecommerce-account-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './account-sidebar.component.html',
  styleUrls: ['./account-sidebar.component.css'],
})
export class AccountSidebarComponent {}
