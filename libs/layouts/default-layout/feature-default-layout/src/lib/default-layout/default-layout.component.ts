import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
  MobileNavbarComponent,
  MobileSidebarComponent,
  NavbarComponent,
} from '@ecommerce/ui-default-layout';

@Component({
  selector: 'ecommerce-default-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MobileNavbarComponent,
    MobileSidebarComponent,
  ],
  template: `
    <ecommerce-header />
    <ecommerce-navbar />
    <ecommerce-mobile-navbar
      (showMobileSidebar)="onShowMobileSidebar($event)"
    />
    <ecommerce-mobile-sidebar
      (showMobileSidebar)="onShowMobileSidebar($event)"
      *ngIf="showMobileSidebar"
    />
    <router-outlet />
    <ecommerce-footer />
  `,
})
export class DefaultLayoutComponent {
  showMobileSidebar = false;

  onShowMobileSidebar(value: boolean) {
    this.showMobileSidebar = value;
  }
}
